<template>
  <el-dialog v-model="props.dialogFormVisible" title="确认订单信息" width="800px" @close="handleClose">
    <el-table :data="UserAddress" style="width: 100%; --row-height: 40px;">
      <el-table-column type="selection" width="55">
      <template #default="{ row }">
        <el-radio :value="row" v-model="selectedRow"></el-radio>
      </template>
    </el-table-column>
       <!-- 省 -->
       <el-table-column prop="province">
          <template #default="{ row }">
            {{ row.province }}
          </template>
        </el-table-column>
  
        <!-- 市 -->
        <el-table-column prop="city" >
          <template #default="{ row }">
            {{ row.city }}
          </template>
        </el-table-column>
  
        <!-- 区 -->
        <el-table-column prop="county">
          <template #default="{ row }">
            {{ row.county }}
          </template>
        </el-table-column>
  
        <!-- 详细地址 -->
        <el-table-column prop="street"  >
          <template #default="{ row }">
            {{ row.street }}
          </template>
        </el-table-column>
    </el-table>
    <el-form :model="props.form">
      <el-form-item label="订单详情" :label-width="formLabelWidth">
        <el-table :data="info" style="width: 100%">
          <el-table-column prop="flower.imgUrl" label="商品图片">
            <template #default="{ row }">
              <el-image style="width: 100px; height: 100px" :src="row.flower.imgUrl"  />
          </template>
          </el-table-column>
          <el-table-column prop="flower.name" label="商品名"></el-table-column>
          <el-table-column prop="quantity" label="数量"></el-table-column>
          <el-table-column prop="flower.price" label="单价"></el-table-column>
          <el-table-column label="商品总价" width="200">
            <template #default="{ row }">
              {{ row.flower.price * row.quantity }}
            </template>
          </el-table-column>
        </el-table>
      </el-form-item>
      
      <el-form-item label="总价" :label-width="formLabelWidth">
        {{ calculateTotalPrice() }}
      </el-form-item>
    </el-form>
    <template #footer>
      <div class="dialog-footer">
        <el-button @click="handleClose">取消</el-button>
        <el-button type="primary" @click="Confirm">
          确定
        </el-button>
      </div>
    </template>
  </el-dialog>
</template>

<script lang="ts" setup>
import { ref, watch, defineEmits, defineProps, onMounted } from 'vue';
import { ElDialog, ElForm, ElFormItem, ElTable, ElTableColumn, ElButton, ElMessage } from 'element-plus';
import { addOrderItem,getAddress } from '../../../api';
import address from '../../class/address'
const props = defineProps<{
  dialogFormVisible: boolean;
   form: Array<{ flower: { name: string, price: number }, quantity: number, productId: number }>;

}>();
console.log(props)
let selectedRow=ref()

const emit = defineEmits(['CloseAdd']);
const formLabelWidth = '140px';
const info = ref(props.form || []);
//获取用户地址
const UserAddress = ref<address[]>([]);
let userId=Number(sessionStorage.getItem("id"))
const GetUserAddress=async()=>{
 UserAddress.value= await getAddress(userId) as any
}
const calculateTotalPrice = () => {
  return  info.value.reduce((total, item) => total + (item.flower.price * item.quantity), 0);
};
onMounted(GetUserAddress)
const handleClose = () => {
  emit('CloseAdd');
};
//确认订单
const Confirm = async () => {
  try {
    const userId = sessionStorage.getItem("id");
    if (!userId) {
      ElMessage.error("用户未登录");
      return;
    }  
    console.log(selectedRow)
    if(selectedRow.value==undefined)
    {
      ElMessage({
        message:"请选择地址",
        type:"error"
      })
    }
    
    const parms = info.value.map(item => ({
      productId: item.productId,
      quantity: item.quantity,
      userId:Number(userId),
      addressId:selectedRow.value.id
    }));
console.log(parms)
    const response = await addOrderItem(parms);

    if (response) {
      ElMessage({
        message: "提交成功",
        type: 'success'
      });
      
    } else {
      ElMessage.error("提交失败");
    }
  } catch (error) {
    ElMessage.error("提交时发生错误");
  }
};

// 监听 props.form 的变化，更新 info
watch(
  () => props.form,
  (newInfo) => {
    if (newInfo !== undefined) {
      info.value = newInfo;
    }
  }
);

</script>

<style scoped>
.el-table .el-table__row {
  height: var(--row-height, 48px); /* 自定义行高 */
}
</style>