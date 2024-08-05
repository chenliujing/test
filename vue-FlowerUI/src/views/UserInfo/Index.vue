<template>
    <el-card class="box-card">
      <h2>用户管理</h2>
      <el-input
      v-model="searchText"
      placeholder="请输入用户名"
      prefix-icon="el-icon-search"
   
    />
      <el-table :data="filteredUsers" style="width: 100%">
        <el-table-column prop="name" label="名字" width="180">
          <template #default="{ row }">
           <div>{{ row.name }}</div>
          </template>
        </el-table-column>
        <el-table-column prop="password" label="密码" width="180">
          <template #default="{ row }">
            <div>{{ row.password }}</div>
          </template>
        </el-table-column>
        <el-table-column prop="email" label="邮箱" width="100">
          <template #default="{ row }">
            <div>{{ row.email }}</div>
          
          </template>
        </el-table-column>
        <el-table-column prop="roleNames" label="角色" width="100">
  <template #default="{ row }">
    <div>
     
                 {{ row.roleNames.join(',') }}
    </div>
  </template>
</el-table-column>
        <el-table-column label="操作" width="400">
          <template #default="{ row, $index }">
            <el-button  @click="editUser($index,row)" type="primary">编辑</el-button>
            <el-button  @click="assign($index,row)" type="primary">编辑权限</el-button>
          
            <el-button @click="DeleteUser(row.id, $index)" type="danger">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
      <el-button type="primary" @click="add">新增</el-button>
    </el-card>
    <addVue :addVisible="addVisible" :info="info" @CloseAdd="CloseAdd"></addVue>
    <setingRole :setingRoleVisible="setingRoleVisible" :personId="personId" @CloseSetingRole="CloseSetingRole">
    </setingRole>
  </template>
  
  <script setup lang="ts">
  import { ref, onMounted,reactive,computed} from 'vue';
  import { getUsers, UpdateUser, deleteUser, addUser } from '../../api/index'
  import { SCOPE, type FormInstance, type FormRules } from 'element-plus'
  import type { ElTable } from 'element-plus'
  import { ElMessage } from 'element-plus'
  import addVue from './Add.vue'
  import setingRole from  './settingRole.vue'
  import User from '../class/UserInfo'
  const flowers = ref<User[]>([]);
  const addVisible = ref(false);
  const setingRoleVisible=ref(false)
  const ruleFormRef = ref<FormInstance>()
  const multipleTableRef = ref<InstanceType<typeof ElTable>>()
    const rules = reactive<FormRules>({
      name: [{ required: false, message: '请输入名称', trigger: 'blur' }]
  })
  let searchText=ref('')
  const fetchUsers = async () => {
    try {
      let res=await getUsers() as any;
      console.log(res);
      flowers.value = res
    } catch (error) {
      console.error('获取用户失败:', error);
    }
  };
  const filteredUsers = computed(() => {
  let data = flowers.value;

  if (!searchText.value.trim()) {
    return data;
  }

  const searchTerm = searchText.value.toLowerCase();
  return data.filter(item => {
    const name = item.name ? item.name.toLowerCase() : '';
  

    return (
      name.includes(searchTerm)
   
    );
  });
});
  const DeleteUser = async (id: number, index: number) => {
    // 弹出提示框，确认是否删除
    const confirmed = window.confirm('确定要删除吗？');
    
    if (confirmed) {
      try {
        await deleteUser(id);
        flowers.value.splice(index, 1);
        ElMessage({
          message:"删除成功",
          type:'success'
        })
      } catch (error) {
        console.error('删除用户失败:', error);
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
  const editUser = (index: number, row: User) => {
      info.value = JSON.stringify(row)
      console.log(info)
      addVisible.value = true
  }
  const personId = ref()
  const assign=(index:number,row:User)=>{
    setingRoleVisible.value = true;
    personId.value=row.id
  }
  const CloseAdd = () => {
    addVisible.value = false;
    fetchUsers(); // 重新加载数据
  }
  const CloseSetingRole = () => {
    setingRoleVisible.value = false;
    fetchUsers(); // 重新加载数据
  }
  // const editFlower = (index: number) => {
  //   if (index >= 0 && index < flowers.value.length) {
  //     flowers.value[index].editing = true;
  //   }
  // }
  
  
  onMounted(fetchUsers);
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