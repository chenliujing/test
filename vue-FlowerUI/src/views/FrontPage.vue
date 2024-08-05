<template>
  <div class="common-layout">
    <el-container>
      <el-header class="header">
        <el-menu
          mode="horizontal"
          default-active="/Flower"
          class="el-menu-demo"
          @open="handleOpen"
          @close="handleClose"
          router
        >
          <el-menu-item index="/Flower">
            <template #title>
              <el-icon><Goods /></el-icon>
              <span>首页</span>
            </template>
          </el-menu-item>
          <el-menu-item index="/Cart">
            <el-icon><ShoppingCart /></el-icon>
            <span>我的购物车</span>
          </el-menu-item>
          <el-menu-item index="/Order">
            <el-icon><Handbag /></el-icon>
            <span>订单</span>
          </el-menu-item>
          <el-menu-item index="/PersonCenter">
            <el-icon><User /></el-icon>
            <span>个人中心</span>
          </el-menu-item>
         
            <el-menu-item index="/Address">
              <el-icon><Place /></el-icon>
            <span>我的地址</span>
          </el-menu-item>
        <el-menu-item>
            <el-icon><Setting /></el-icon>
            <span @click="logout">退出登录</span>
          </el-menu-item>
        </el-menu>
      </el-header>
     
      <el-container>
        <el-main>
         
          <router-view></router-view>
        
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script setup lang="ts">
import router from '../routes';
import banner from './Infront/banner.vue'
import {
  Setting,
  Handbag,
  Goods,
  ShoppingCart,
  Place,
  User
} from '@element-plus/icons-vue'

const logout = async () => {
  sessionStorage.removeItem("id")
  router.push("/login")
}
router.push('/Flower')
const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}

const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
</script>

<style scoped>
.el-header {
  --el-header-padding: 0 20px;
  --el-header-height: 60px;
  box-sizing: border-box;
  flex-shrink: 0;
  background-color: #529b2e;
  padding: var(--el-header-padding);
  width: 100%;
}
.common-layout .el-header, .el-container .el-header
{
  height: 70px;
}
.el-menu {
  height: 100%;
  width: 100%;
  background-color: #529b2e;
}

.el-menu .el-menu-item {
  font-size: 16px; /* 增大字体 */
  font-weight: 500; /* 适当加粗 */
  border-radius: 4px; /* 圆润边角 */
}

.el-menu .el-menu-item span {
  color: white; /* 白色字体 */
}

.el-menu .el-menu-item:hover {
  background-color: #2e3d8a; /* 鼠标悬停时的背景颜色 */
}

.el-menu .el-menu-item.is-active {
  background-color: #5d94db; /* 激活菜单项的背景颜色 */
}
</style>