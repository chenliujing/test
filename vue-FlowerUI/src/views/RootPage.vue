<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { ElDropdown, ElDropdownItem, ElAvatar } from 'element-plus'
import { List } from '@element-plus/icons-vue'
import { ArrowDown } from '@element-plus/icons-vue'
import type { TagProps } from 'element-plus'

interface TagItem {
  name: string
  type: TagProps['type']
  route: string // 添加 route 字段用于存储路由地址
}

const tags = ref<TagItem[]>([
  { name: 'Tag 1', type: 'primary', route: '/page1' },
  { name: 'Tag 2', type: 'success', route: '/page2' },
  { name: 'Tag 3', type: 'info', route: '/page3' },
  { name: 'Tag 4', type: 'warning', route: '/page4' },
  { name: 'Tag 5', type: 'danger', route: '/page5' },
])

// 获取路由实例
const router = useRouter()
router.push('/FlowerIndex')
// 处理下拉菜单的选择
const handleCommand = (command: string) => {
  switch (command) {
    case 'profile':
      router.push('/profile')
      break
    case 'settings':
      router.push('/settings')
      break
    case 'logout':
      // 执行退出操作，例如清除用户信息、重定向到登录页等
      sessionStorage.removeItem("token")  
      sessionStorage.removeItem("name")
      sessionStorage.removeItem("id")

      router.push('/login')
      break
    case 'infront':
      // 执行退出操作，例如清除用户信息、重定向到登录页等
      router.push('/InfrontPage')
      break
  }
}

const selectedTags = ref<TagItem[]>([]) // 使用 ref 来处理选中的标签数组

// 处理菜单点击事件，更新选中的标签
const handleMenuClick = (name: string, route: string) => {
  selectedTags.value = selectedTags.value.filter(tag => tag.route !== route) // 避免重复
  selectedTags.value.push({ name, type: 'info', route }) // 添加新的标签
  router.push(route)
}

// 处理标签点击事件
const handleTagClick = (route: string) => {
  router.push(route)
}
</script>

<template>
  <div class="common-layout">
    <el-container>
      <el-header>
        <div class="header-content">
          <div class="logo">
            <h1>鲜花管理后台</h1>
          </div>
          <div class="header-right">
            <el-dropdown @command="handleCommand">
              <span class="el-dropdown-link">
                选项
                <el-icon class="el-icon--right">
                  <arrow-down />
                </el-icon>
              </span>
              <template #dropdown>
                <el-dropdown-menu>
                  <el-dropdown-item command="profile">个人中心</el-dropdown-item>
                  <el-dropdown-item command="logout">退出</el-dropdown-item>
                  <el-dropdown-item command="infront">前往前台</el-dropdown-item>
                </el-dropdown-menu>
              </template>
            </el-dropdown>
          </div>
        </div>
      </el-header>

      <el-container>
        <el-aside width="200px">
         
              <el-menu
             
                active-text-color="#ffd04b"
                background-color="#545c64"
                class="el-menu-vertical-demo"
                default-active="2"
                text-color="#fff"
                router
                
              >
            
                <el-menu-item index="/FlowerIndex" @click="handleMenuClick('鲜花管理', '/FlowerIndex')">
                  <template #title>
                    <el-icon>
                      <list />
                    </el-icon>
                    <span>鲜花管理</span>
                  </template>
                </el-menu-item>
                <el-menu-item index="/Category" @click="handleMenuClick('鲜花类别管理', '/Category')">
                  <template #title>
                    <el-icon>
                      <list />
                    </el-icon>
                    <span>鲜花类别管理</span>
                  </template>
                </el-menu-item>
                <el-menu-item index="/Users" @click="handleMenuClick('用户管理', '/Users')">
                  <template #title>
                    <el-icon>
                      <list />
                    </el-icon>
                    <span>用户管理</span>
                  </template>
                </el-menu-item>
                <el-menu-item index="/AdminOrder" @click="handleMenuClick('订单管理', '/AdminOrder')">
                  <template #title>
                    <el-icon>
                      <list />
                    </el-icon>
                    <span>订单管理</span>
                  </template>
                </el-menu-item>
              </el-menu>
           
        </el-aside>
        <el-main>
          <div class="flex gap-2">
            <el-tag
              v-for="tag in selectedTags"
              :key="tag.route"
              closable
              :type="tag.type"
              @click="handleTagClick(tag.route)"
            >
              {{ tag.name }}
            </el-tag>
          </div>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<style scoped>
.el-header {
  --el-header-padding: 1 20px;
  --el-header-height: 60px;
  box-sizing: border-box;
  flex-shrink: 0;
  height: var(--el-header-height);
  padding: var(--el-header-padding);
}
.el-aside {
    box-sizing: border-box;
    flex-shrink: 0;
    overflow: auto;
    width: var(--el-aside-width, 300px);
    background-color: #545c64;
}
.header-content {
  width: 100%;
  flex: auto;
  justify-content: space-between;
  align-items: center;
  padding: 1 20px;
  height: 100%;
  background-color: #4089ff;
  color: #fff;
}

.header-right {
  display: flex;
  align-items: center;
}

.el-dropdown {
  float: right;
}
.el-dropdown-link {
  display: flex;
  align-items: center;
  color: #fff;
  cursor: pointer;
  margin-left: auto; /* 使下拉菜单在右边 */
}

.el-dropdown-menu {
  width: 150px;
}
</style>