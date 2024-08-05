<template>
  <el-card class="box-card">
    <h2>鲜花类别管理</h2>
    <el-table :data="category" style="width: 100%">
      <el-table-column prop="name" label="名字" width="180">
        <template #default="{ row }">
         {{ row.name }}
         
        </template>
      </el-table-column>
     
      <el-table-column label="操作" width="200">
        <template #default="{ row, $index }">
          <el-button  @click="editFlower($index,row)" type="primary">编辑</el-button>
        
          <el-button @click="deleteFlower(row.id, $index)" type="danger">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-button type="primary" @click="add">新增</el-button>
  </el-card>
  <addVue :addVisible="addVisible" :info="info" @CloseAdd="CloseAdd"></addVue>
</template>

<script setup lang="ts">
import { ref, onMounted,reactive} from 'vue';
import { getCategory,deleteCategory} from '../../api/index'
import { SCOPE, type FormInstance, type FormRules } from 'element-plus'
import type { ElTable } from 'element-plus'
import { ElMessage } from 'element-plus'
import addVue from './Add.vue'
import Category from '../class/Category'
const category = ref<Category[]>([]);
const addVisible = ref(false);
const ruleFormRef = ref<FormInstance>()
const multipleTableRef = ref<InstanceType<typeof ElTable>>()
  const rules = reactive<FormRules>({
    name: [{ required: false, message: '请输入名称', trigger: 'blur' }]
})

const fetchCategory = async () => {
  try {
    let res=await getCategory() as any;
    category.value = res
  } catch (error) {
    console.error('获取鲜花类别失败:', error);
  }
};

const deleteFlower = async (id: number, index: number) => {
  // 弹出提示框，确认是否删除
  const confirmed = window.confirm('确定要删除吗？');
  
  if (confirmed) {
    try {
      await deleteCategory(id);
      category.value.splice(index, 1);
      ElMessage({
        message:"删除成功",
        type:'success'
      })
    } catch (error) {
      console.error('删除鲜花失败:', error);
    }
  } else {
    console.log('用户取消了删除操作');
  }
};

const add = () => {
  addVisible.value = true;
  info.value=undefined;
}
const info = ref()
const editFlower = (index: number, row: Category) => {
    info.value = JSON.stringify(row)
    console.log(info)
    addVisible.value = true
}
const CloseAdd = () => {
  addVisible.value = false;
  fetchCategory(); // 重新加载数据
}

// const editFlower = (index: number) => {
//   if (index >= 0 && index < flowers.value.length) {
//     flowers.value[index].editing = true;
//   }
// }


onMounted(fetchCategory);
</script>

<style scoped>
.box-card {
  padding: 20px;
}

.el-button {
  margin-right: 10px;
}

.el-table {
  margin-bottom: 20px;
}
</style>