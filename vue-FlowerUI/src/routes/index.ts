import { createRouter, createWebHistory } from 'vue-router';
import RootPage from '../views/RootPage.vue';
import FlowerIndex from '../views/Flower/Index.vue'
import Category from '../views/Category/Index.vue'
import  UserInfo  from '../views/UserInfo/Index.vue';
import Detail from '../views/Infront/FlowerDetail/FlowerDetail.vue'
import Flower  from '../views/Infront/Index.vue'
import Register from '../views/Register.vue';
import OrderIndex from '../views/Infront/Order/OrderIndex.vue';
import { useStore } from 'vuex';
import PersonCenter from '../views/Infront/PersonCenter.vue';
import FrontPage from '../views/FrontPage.vue';
import Cart from '../views/Infront/Cart.vue';
import Order from '../views/Order/Index.vue'
import Address from '../views/Infront/Address/Address.vue';

// 导入组件
import Login from '../views/Login.vue'
import { id } from 'element-plus/es/locale';

const store=useStore()
let routes = [
  {
      path: "/", component: RootPage,
      children: [
          { name: "鲜花管理", path: "FlowerIndex", component: FlowerIndex },
          { name: "鲜花类别管理", path: "/Category", component: Category },
          { name: "用户管理", path: "/Users", component: UserInfo },
          { name: "订单管理", path: "/AdminOrder", component: Order },
        
        
      ]
  },
  {
    path: "/InfrontPage", component: FrontPage,
    children: [
      { name: "首页", path: "/Flower", component: Flower },
      { name: "购物车", path: "/Cart", component: Cart },
      { name: "订单", path: "/Order", component: OrderIndex },
      { name: "个人中心", path: "/PersonCenter", component: PersonCenter },
      { name: "我的地址", path: "/Address", component: Address },
      {
        name:"商品详情页",
        path: '/detail/:id',
        component: Detail
      },
      
    
    
  ]
   
},

  { path: "/login", component: Login },
  { path: "/register", component: Register }
]


// 创建路由实例
const router = createRouter({
  history: createWebHistory(),
  routes
});
//创建导航前置守卫
router.beforeEach((to,from,next)=>{
  if(to.path == '/login'||to.path=='/register'){ //若访问登录页面，则放行
      next();
  }else{
    console.log(sessionStorage.getItem("token"))
      if(sessionStorage.getItem("token")){//若用户已登录，则放行
          next();
      }else{
          //用户没有登录，并且要访问受保护的资源，则将登录组件的地址告诉给next函数
          next({
              path:'/login',
              
          })
          
      }
  }
})
export default router;