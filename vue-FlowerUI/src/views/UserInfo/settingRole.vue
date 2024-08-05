<template>
    <el-dialog
      v-model:visible="props.setingRoleVisible"
      title="分配角色"
      width="50%"
      :before-close="handleClose"
    >
      <div class="content">
        <el-form :model="form" ref="multipleTableRef" label-width="100px">
          <el-form-item label="角色">
            <el-checkbox-group v-model="form.roleId">
              <el-checkbox
                v-for="role in tableData"
                :key="role.id"
                :label="role.id"
              >
                {{ role.roleName }}
              </el-checkbox>
            </el-checkbox-group>
          </el-form-item>
        </el-form>
        <div class="btn">
          <el-button type="primary" @click="submit">确定</el-button>
          <el-button @click="handleClose">取消</el-button>
        </div>
      </div>
    </el-dialog>
  </template>
  
  <script setup lang="ts">
  import { ref, defineProps, defineEmits, onMounted, watch } from 'vue';
  import { Role } from '../class/Role';
  import { getRoles, getRoleByUserId, settingRole } from '../../api/index';
  import { ElMessage } from 'element-plus';
  
  const props = defineProps<{
    setingRoleVisible: boolean;
    personId: number;
  }>();
  
  const emit = defineEmits<{
    (e: 'CloseSetingRole'): void;
  }>();
  
  const form = ref<{ roleId: number[] }>({
    roleId: [],
  });
  
  const tableData = ref<Role[]>([]);
  
  // 获取用户已经有的角色
  const getUserRole = async (userId: number) => {
    try {
      const roles:Role[] = await getRoleByUserId(userId) as any;
      console.log(roles);
  
      // 提取角色 ID，并设置 form.roleId
      const roleIds = roles.map(role => role.id);
      form.value.roleId = roleIds;
  
      console.log(form);
    } catch (error) {
      console.error('获取用户角色失败:', error);
    }
  };
  
  // 监听 props.personId 的变化
  watch(
    () => props.personId,
    (newPersonId) => {
      if (newPersonId !== undefined) {
        getUserRole(newPersonId);
      }
    },
    { immediate: true }
  );
  
  onMounted(async () => {
    try {
      const roles = await getRoles() as any;
      tableData.value = roles;
      console.log(tableData);
    } catch (error) {
      console.error('获取角色列表失败:', error);
    }
  });
  
  const submit = async () => {
    try {
      console.log(form);
      const userRole = form.value.roleId.map(id => ({
        roleId: id,
        userId: props.personId,
      }));
  
      console.log(userRole);
  
      const response = await settingRole(userRole);
      if (response) {
        ElMessage({
          message: '添加成功！',
          type: 'success',
        });
  
        const roles = await getRoles() as any;
        tableData.value = roles;
        handleClose(); // 保存成功后关闭对话框
      }
    } catch (error) {
      ElMessage({
        message: '保存失败，请重试。',
        type: 'error',
      });
      console.error('添加失败:', error);
    }
  };
  
  const handleClose = () => {
    emit('CloseSetingRole');
  };
  </script>
  
  <style lang="scss" scoped>
  .content {
    min-height: 500px;
  
    .btn {
      position: absolute;
      bottom: 10px;
      left: 45%;
    }
  }
  </style>