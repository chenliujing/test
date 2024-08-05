<template>
  <el-dialog v-model="props.addVisible" :title="info == undefined ? '新增' : '修改'" @close="handleClose">
    <el-form :model="form" label-width="80px">
      <el-form-item label="类别">
        <el-input v-model="form.name" placeholder="请输入类别" />
      </el-form-item>
     
     
    </el-form>
    <span slot="footer" class="dialog-footer">
      <el-button @click="handleClose">取消</el-button>
      <el-button type="primary"   @click="handleSave" >保存</el-button>
    </span>
  </el-dialog>
</template>

<script setup lang="ts">
import { ref, defineProps, defineEmits, onMounted, watch } from 'vue';
import { getCategory, addCategory, UpdateCategory } from '../../api';
import { ElMessage } from 'element-plus';
import  Category  from '../class/Category';
import Flower from '../class/Flower';
import { json } from 'stream/consumers';

const props = defineProps({
  addVisible: Boolean,
  info: Object as () => Category
});
console.log(props)
const emit = defineEmits(['CloseAdd']);

const category = ref(<Category[]>[]);
const form = ref({
  id: 0,
  name: '',

});
console.log(form)
// 监听 props.info 的变化，填充表单
watch(
    () => props.info,
   
    (newInfo, oldInfo) => {
        if (newInfo != undefined) {
            let currInfo: Category = (JSON.parse(newInfo as any)) as Category
            console.log(currInfo)
            form.value = {
                id: currInfo.id,
                name: currInfo.name,
            
                
            }
            console.log(form);
        }else{
          form.value = {
                id:0,
                name: "",
            
                
            }
        }
    }
);
const handleClose = () => {
  // form.value = {
  //   id: 0,
  //   name: '',
  // };
  emit('CloseAdd');
};

const handleSave = async () => {
  try {
    const params = {
      id: form.value.id,
      name: form.value.name,
    
    };
    console.log(params)
if(props.info==undefined)
{
 var res= await addCategory(params) as any as boolean;
 
  ElMessage({
      message: '添加成功！',
      type: 'success'
    });
  
    handleClose(); // 保存成功后关闭对话框
  
}
else
{
  await UpdateCategory(params)
  ElMessage({
      message: '修改成功！',
      type: 'success'
    });
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