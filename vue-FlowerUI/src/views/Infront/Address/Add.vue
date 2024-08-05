<template>
  <el-dialog v-model="props.addVisible" :title="props.info == undefined ? '新增' : '修改'" @close="handleClose">
    <el-form-item label="省/市/区">
      <el-cascader size="large" :options="pcaTextArr" v-model="selectedOptions">
      </el-cascader>
    </el-form-item>

    <el-form-item label="详细地址">
      <el-input v-model="form.street" placeholder="请输入名字" />
    </el-form-item>
    <span slot="footer" class="dialog-footer">
      <el-button @click="handleClose">取消</el-button>
      <el-button type="primary" @click="handleSave">保存</el-button>
    </span>
  </el-dialog>
</template>

<script setup lang="ts">
import { ref, defineProps, defineEmits, onMounted, watch } from 'vue';
import type { UploadProps, UploadUserFile } from 'element-plus'
import { defineComponent } from 'vue'
import {
  provinceAndCityData,
  pcTextArr,
  pcaTextArr,
  codeToText,
} from "element-china-area-data";
import address from '../../class/address'
import { addAddress, updateAddress } from '../../../api';
import { ElMessageBox, ElMessage } from 'element-plus';
// 参数取值
import { regionData } from 'element-china-area-data'
import { Address } from 'cluster';
let selectedOptions = ref(<address[]>[])



const props = defineProps({
  addVisible: Boolean,
  info: Object as () => Address
})
console.log(props)
const emit = defineEmits(['CloseAdd']);
const form = ref({
  id: 0,
  province: "",
  city: "",
  county: "",
  street: "",

});
// 获取类别数据
//地区下拉框选择事件




// 监听 props.info 的变化，填充表单
// 监听 props.info 的变化，填充表单
watch(
  () => props.info,
  (newInfo) => {
    if (newInfo != undefined) {
      let currInfo: address = (JSON.parse(newInfo as any)) as address;
      form.value = {
        id: currInfo.id,
        province: currInfo.province,
        city: currInfo.city,
        county: currInfo.county,
        street: currInfo.street,
      };
      console.log(form)
      // 填充联动选择器
      selectedOptions.value = [
        currInfo.province,
        currInfo.city,
        currInfo.county
      ].filter(Boolean) as []; // 过滤掉空值
    } else {
      form.value = {
        id: 0,
        province: "",
        city: "",
        county: "",
        street: "",
      };
      selectedOptions.value = [];
    }
  }
);

const handleClose = () => {
  emit('CloseAdd');
};
let userId = sessionStorage.getItem("id")
console.log(userId)
const handleSave = async () => {
  console.log(selectedOptions)
  try {
    const params = {
      id:form.value.id,
      province: selectedOptions.value[0],
      city: selectedOptions.value[1],
      county: selectedOptions.value[2],
      street: form.value.street,
      userId:Number(userId)
    };
    console.log(params)
    console.log(props.info)
    if (props.info == undefined) {
     let response= await addAddress(params) as any;
     if(response)
     {
      ElMessage({
        message: '添加成功！',
        type: 'success'
      });
      handleClose(); // 保存成功后关闭对话框
     }
    
    }
    else {
      var response = await updateAddress(params)
      if (response) {
        ElMessage({
          message: '修改成功！',
          type: 'success'
        });
      }
      handleClose(); // 保存成功后关闭对话框
    }


  } catch (error) {
    ElMessage({
      message: '保存失败，请重试。',
      type: 'error'
    });
    console.error('添加失败:', error);
  }
};
</script>

<style scoped>
.dialog-footer {
  text-align: right;
}
</style>