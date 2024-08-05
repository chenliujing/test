  <template>
    <div class="common-layout" v-if="isShow">

                <el-breadcrumb separator="/">
                    <el-breadcrumb-item :to="{ path: '/Flower' }">首页</el-breadcrumb-item>
                    <el-breadcrumb-item>详情页</el-breadcrumb-item>
                </el-breadcrumb>

      
                <el-aside width="500px">
                    <el-image class="bigImage" :src="info.imgUrl"></el-image>
                </el-aside>

                    <ul class="product-info">
                        <li>
                            <h3>{{ info.name }}</h3>
                        </li>
                        <li>
                            <h3>{{ info.description }}</h3>
                        </li>
                       <li>
                        <el-button type="primary" @click="Add">加</el-button>
                        {{ number }}
                        <el-button type="primary" @click="Jian">减</el-button>
                       </li>
                        <li>
                            <span class="left">售价</span>
                            <span class="right" style="color:red;font-size:25px;">￥{{ info.price }}</span>
                        </li>
                      
                      
                    </ul>
                    <el-button type="primary" round @click="buy()" >购买</el-button>
  <ConfirmOrder :dialogFormVisible="dialogFormVisible" :form="form" @CloseAdd="CloseAdd"></ConfirmOrder>
                    <el-button type="warning" round @click="AddCart">加入购物车</el-button>
     
    </div>
</template>
<script lang="ts" setup>
import { ref, onMounted,computed,watch} from 'vue'
import ConfirmOrder from '../Order/ConfirmOrder.vue';
import { getFlowerbyId } from '../../../api/index'
import { useRoute } from 'vue-router';
import { addCartItem } from '../../../api/index';
import { ElMessage } from 'element-plus';
import { useStore } from 'vuex';

const store = useStore();
const route = useRoute();
let dialogFormVisible=ref(false)
let form=[] as any
let formdata=({flower:{},quantity:0, productId:0}) as any;
const buy=async()=>{
    let response = (await getFlowerbyId(id.value)) as any
    formdata.flower=response
    formdata.quantity=number.value
    formdata.productId=response.id
    form.push(formdata)
    console.log(form)
    dialogFormVisible.value=true
}
const id = computed(() => {
  // 确保 id 是一个数字，如果不是，返回一个默认值（例如 0）
  const idParam = Number(route.params.id);
  return isNaN(idParam) ? 0 : idParam;
});
let price=ref()
const number=ref(1)
watch(number,(newNumber)=>{
    price.value=newNumber*info.value.price
})
const CloseAdd = () => {
  dialogFormVisible.value = false;
  getFlowerbyId(id.value) as any
}
const isShow = ref(false);
const info = ref()

const Add=async()=>{
   
    if(number.value>=info.value.number)
{
    alert("所选商品的数量超过了商品的库存")
    return;
}
number.value++

}
const Jian=async()=>{
    if(number.value<=0)
{
    
    return;
}
number.value--
}
const AddCart=async()=>{
    const parms={
        userId:sessionStorage.getItem("id") as any,
        productId:info.value.id,
        quantity:number.value
    }
    //await store.dispatch('ADD_ITEM', parms);
    console.log(store.state.cartItems)
    await addCartItem(parms.userId,parms.productId,parms.quantity)
    ElMessage({
        message:"加入成功",
        type:'success'
    })
}
onMounted(async () => {
   
    info.value = (await getFlowerbyId(id.value)) as any
    isShow.value = true;
    price.value=info.value.price
})
console.log(info)
</script>


<style lang="scss">
.el-breadcrumb{
    padding:20px 20px 20px 20px
}
.bigImage {
    width: 458px;
    height: 500px;
}
.product-info {
    padding-left: 0;
    margin-top: -20px;
    text-align: initial;
    li {
        width: 100%;
        height: 30px;
        margin-bottom: 20px;
        .left {
            display: inline-block;
            width: 80px;
            padding-left: 12px;
            font-size: 13px;
            line-height: 18px;
            color: #71797f;
            vertical-align: top;
        }
        .right {
            display: inline-block;
            width: 580px;
            font-size: 13px;
            line-height: 18px;
            color: #232628;
            vertical-align: top;
            text-align: justify;
            padding-right: 36px;
        }
    }
}
.product-recommend {
    padding-left: initial;
}
.product-content {
    padding: 40px 115px 95px;
    text-align: center;
}
</style>