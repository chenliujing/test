<template>
  <div class="login-container">
    <el-card class="login-card">
      <h2 class="title">登录</h2>
      <el-form :model="loginForm" ref="loginFormRef" status-icon>
        <el-form-item label="用户名" prop="username" :rules="rules.username">
          <el-input v-model="loginForm.username" placeholder="请输入用户名"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password" :rules="rules.password">
          <el-input
            v-model="loginForm.password"
            type="password"
            placeholder="请输入密码"
          ></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="handleLogin">登录</el-button>
          <el-button type="primary" @click="handleRegister">注册</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import jwtDecode from 'jwt-decode';
import { ElForm, ElFormItem, ElInput, ElButton, ElCard } from 'element-plus';
import { getToken } from '../api/index';
import { useStore } from 'vuex';
import UserToken from './class/Response';
import router from '../routes/index';

const store = useStore();
const loginForm = ref({
  username: '',
  password: '',
});

const loginFormRef = ref<InstanceType<typeof ElForm> | null>(null);

const rules = {
  username: [
    { required: true, message: '请输入用户名', trigger: 'blur' },
  ],
  password: [
    { required: true, message: '请输入密码', trigger: 'blur' },
  ],
};

const handleLogin = async () => {
  loginFormRef.value?.validate(async (valid) => {
    if (valid) {
      try {
        const response: any = await getToken(loginForm.value.username, loginForm.value.password);
        console.log(response);

        sessionStorage.setItem("token", response.token);
        sessionStorage.setItem("name", response.user.name);
        sessionStorage.setItem("id", response.user.id);
        console.log(sessionStorage.getItem("id"));

        store.commit("SettingToken", response.token);

        alert("登录成功");

        // 根据角色名跳转到不同的页面
        const roleNames = response.user.roleNames;
        if (roleNames.includes('管理员')) {
          router.push("/"); // 管理员界面
        } else if (roleNames.includes('用户')) {
          router.push("/InfrontPage"); // 普通用户界面
        }

      } catch (error) {
        console.error('登录请求失败:', error);
      }
    } else {
      console.log('表单验证失败');
    }
  });
};

const handleRegister = async () => {
  router.push("/register");
};
</script>

<style scoped>
.login-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh; /* 使容器的最小高度为视口高度 */
  background-color: #f5f5f5;
}

.login-card {
  width: 100%;
  max-width: 400px; /* 设置最大宽度 */
  padding: 20px;
}

.title {
  text-align: center;
  margin-bottom: 20px;
}
</style>