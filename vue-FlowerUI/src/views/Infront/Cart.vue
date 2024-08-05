<template>
  <el-table ref="tableRef" :data="info" style="width: 100%" color="blue">
    <el-table-column type="selection" width="55" />
    <el-table-column prop="imgUrl" label="图片" width="100">
      <template #default="{ row }">
        <div class="demo-image__preview">
          <el-image
            style="width: 100px; height: 100px"
            :src="row.flower.imgUrl"
            :zoom-rate="1.2"
            :max-scale="7"
            :min-scale="0.2"
            :initial-index="4"
            fit="cover"
          />
        </div>
      </template>
    </el-table-column>
    <el-table-column label="商品名称" width="120">
      <template #default="scope">{{ scope.row.flower.name }}</template>
    </el-table-column>
    <el-table-column label="商品数量" width="200">
      <template #default="scope">
        <el-button type="primary" @click="updateQuantity(scope.row, 1)">加</el-button>
        {{ scope.row.quantity}} <!-- 从 Vuex 中获取数量 -->
        <el-button type="primary" @click="updateQuantity(scope.row, -1)">减</el-button>
      </template>
    </el-table-column>
    <el-table-column label="价格" width="200">
      <template #default="scope">
        {{scope.row.flower.price }}
      </template>
    </el-table-column>
    <el-table-column label="总价" width="200">
      <template #default="scope">
        {{ scope.row.flower.price*scope.row.quantity}}
      </template>
    </el-table-column>
  </el-table>
  <p>总价：{{ calculateTotalPrice() }}</p>
  <el-button type="primary" @click="buy" >购买</el-button>
  <el-button type="danger" :icon="Delete" circle @click="deleteItem"/>
  <ConfirmOrder :dialogFormVisible="dialogFormVisible" :form="form" @CloseAdd="CloseAdd"></ConfirmOrder>
</template>

<script lang="ts" setup>
import { ref, onMounted, computed } from 'vue';
import { ElTable, ElButton, ElImage,ElMessageBox,ElMessage } from 'element-plus';
import { getCartItems, removeCartItems,updateCartItem } from '../../api';
import { useStore } from 'vuex';
import Cart from '../class/Cart';
const store = useStore();

import ConfirmOrder from './Order/ConfirmOrder.vue';
import {
  Check,
  Delete,
  Edit,
  Message,
  Search,
  Star,
} from '@element-plus/icons-vue'

//确认订单
let dialogFormVisible=ref(false)
let form=ref()
// 声明变量
const info = ref<any[]>([]);
const tableRef = ref<InstanceType<typeof ElTable> | null>(null);
// 获取 Vuex getters
// 获取 Vuex getters
const getQuantity = (productId: number) => {
  return store.getters.getItemById(productId);
  
};
console.log(getQuantity)

// // 函数：更新商品数量
// const updateQuantity = async (row: any, change: number) => {
//   const newQuantity = getQuantity(row.flower.id) + change;

//   if (newQuantity > 0) {
//     // 更新 Vuex store 中的数量
//     //await store.dispatch('updateItemQuantity', { productId: row.flower.id, quantity: newQuantity });
//   await  updateCartItem(row.id,newQuantity)
//     //row.quantity = newQuantity; // 更新本地数据
//   } else {
//     alert("该件商品的数量不能再减少了");
//   }
// };
// 函数：更新商品数量
const updateQuantity =async (row: any, change: number) => {
  if (row.quantity + change >0) {
    row.quantity += change;
    row.sumPrice=row.flower.price*row.quantity
    await  updateCartItem(row.id,row.quantity)
  }
  if(row.quantity + change <=0)
  {
    alert("该件商品的数量不能再减少了")
  }
};
//移除购物车中的商品
const deleteItem = async () => {
  if (tableRef.value) {
    const selectedRows:Cart[] = tableRef.value.getSelectionRows();
    if (selectedRows.length === 0) {
      // 没有选择任何商品，弹出提示框
      await ElMessageBox.alert('请选择至少一个商品进行移除。', '提示', {
        confirmButtonText: '确定',
        type: 'warning'
      });
    } else {
      let itemIds = [] as number[]; // 定义一个数组存储所有要删除的商品ID
      const userId = sessionStorage.getItem("id");
      console.log(selectedRows)
      // 遍历所有选中的购物车项
      selectedRows.forEach(item=>{
        itemIds.push(item.Id)
      }
        
      )
      // 调用删除接口
     var response= await removeCartItems(Number(userId), itemIds);
     if(response)
     {
      ElMessage({
        message:"删除成功",
        type:"success"

      })
      info.value = await getCartItems(Number(userId)) as any;
     }
     
    }
  }
};
// 计算总价
const calculateTotalPrice = () => {
  return info.value.reduce((total, item) => total + (item.flower.price * item.quantity), 0);
};

// 处理购买逻辑
const buy = async () => {
  console.log(tableRef.value)
  
  if (tableRef.value) {
    const selectedRows = tableRef.value.getSelectionRows();
    if (selectedRows.length === 0) {
      // 没有选择任何商品，弹出提示框
      await ElMessageBox.alert('请选择至少一个商品进行购买。', '提示', {
        confirmButtonText: '确定',
        type: 'warning'
      })}
      else{
        dialogFormVisible.value=true
        form.value=selectedRows
      }
  
      
    console.log(selectedRows);
    // 处理购买逻辑
  } else {
    console.error('Table reference is not available.');
  }

};
const CloseAdd = () => {
  dialogFormVisible.value = false;
  GetCartItems(); // 重新加载数据
}
// 获取用户ID并从API获取购物车项
const userId = sessionStorage.getItem("id");
const GetCartItems = async () => {
  info.value = await getCartItems(Number(userId)) as any;
console.log(info)
};

// 在组件挂载时获取购物车项
onMounted(GetCartItems);
</script>