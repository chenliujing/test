<template>
    <el-card>
      <el-table ref="tableRef" :data="form"  style="width: 100%">
        <!-- 单选框列 -->
        <el-table-column type="selection" width="55">
        </el-table-column>
  
        <!-- 省 -->
        <el-table-column prop="province" label="省" width="180">
          <template #default="{ row }">
            {{ row.province }}
          </template>
        </el-table-column>
  
        <!-- 市 -->
        <el-table-column prop="city" label="市" width="180">
          <template #default="{ row }">
            {{ row.city }}
          </template>
        </el-table-column>
  
        <!-- 区 -->
        <el-table-column prop="county" label="区" width="180">
          <template #default="{ row }">
            {{ row.county }}
          </template>
        </el-table-column>
  
        <!-- 详细地址 -->
        <el-table-column prop="street" label="详细地址" width="180">
          <template #default="{ row }">
            {{ row.street }}
          </template>
        </el-table-column>
        <el-table-column label="操作">
            <template #default="{ row }">
          <el-button :icon="Edit"  @click="editAddress(row)" type="primary">编辑</el-button>
        </template>
        </el-table-column>
      </el-table>
  
      <!-- 添加新地址按钮 -->
      <Add :addVisible="addVisible" :info="info" @CloseAdd="CloseAdd"></Add>
      <el-button type="primary" :icon="CirclePlus" @click="addAddress"  >添加地址</el-button>
     
      <el-button type="danger" @click="DeleteAddress">删除</el-button>
      <!-- 编辑和删除按钮 -->
     
    </el-card>
  </template>
<script setup lang="ts">
import { getAddress,deleteAddress } from '../../../api';
import {ref,onMounted} from 'vue'
import Add from './Add.vue';
import { ElTable } from 'element-plus';
import { ElMessageBox,ElMessage } from 'element-plus';
import { Delete, Edit, Search, Share, Upload,CirclePlus } from '@element-plus/icons-vue'
import { Address } from 'cluster';
const tableRef = ref(null) as any;
let form=ref([])
let userId=sessionStorage.getItem("id")
onMounted(async()=>{

 let response=await getAddress(Number(userId)) as any
 form.value=response
 console.log(form)
})
const addAddress=()=>{
    addVisible.value=true;
    info.value=undefined
}
const info = ref()
const editAddress = ( row: Address) => {
    info.value = JSON.stringify(row)
    console.log(info)
    addVisible.value = true
}
const DeleteAddress = async() => {
  if (!tableRef.value) return;
  const selectedRows = await tableRef.value.getSelectionRows();
  if (selectedRows.length === 0) {
    ElMessage.warning('请先选择一个地址进行删除');
    return;
  }
  ElMessageBox.confirm('确定要删除所选地址吗？', '提示', {
    confirmButtonText: '确定',
    cancelButtonText: '取消',
    type: 'warning'
  }).then(async() => {
    try {
      await deleteAddress(selectedRows); // 确保这里的删除操作成功
      ElMessage({
        message: "删除成功",
        type: "success"
      });
      form.value = await getAddress(Number(userId)) as any; // 刷新数据
    } catch (error) {
      ElMessage.error("删除失败");
    }
  }).catch(() => {
    // 取消删除
  });
};
let addVisible=ref(false)
const CloseAdd =async () => {
  addVisible.value = false;
  let response=await getAddress(Number(userId)) as any
  form.value=response
}
</script>
<style></style>