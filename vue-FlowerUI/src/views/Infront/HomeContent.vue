<template>
    <div class="common-layout">
        <el-container>
            <el-header>
                <div class="hd">
                    <h3>
                        <span>鲜花首页</span>
                    </h3>
                </div>
            </el-header>
            <el-container>
                <el-main>
                    <div class="main-content">
                        <el-card>
                            <div v-for="item in category" :key="item.id" @click="filterByCategory(item.name)" class="category-item">
                                <span>{{ item.name }}</span>
                            </div>
                        </el-card>
                    </div>
                    <div class="fl-products">
                        <div class="search">
                            <el-input v-model="form.name" style="max-width: 600px" placeholder="请输入鲜花的名称" class="input-with-select">
                                <template #append>
                                    <el-button :icon="Search" @click="SearchFlower">搜索</el-button>
                                </template>
                            </el-input>
                        </div>
                        <div class="fl-products-item" v-for="item in list" :key="item.id">
                            <a>
                                <div class="img-box">
                                    <RouterLink :to="`/detail/${item.id}`">
                                        <el-image style="width: 220px; height: 240px" :src="item.imgUrl" />
                                    </RouterLink>
                                </div>
                                <div class="product-content">
                                    <p class="product-title">{{ item.name }}</p>
                                    <p class="product-price">
                                        <span class="price-sign">¥</span>
                                        <span class="price-num">{{ item.price }}</span>
                                    </p>
                                </div>
                            </a>
                        </div>
                    </div>
                </el-main>
            </el-container>
        </el-container>
    </div>
</template>
<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { getFlowers, getCategory, getFlowersSearch } from '../../api'
import { Search } from '@element-plus/icons-vue'
import Flower from '../class/Flower'
import Category from '../class/Category'

const list = ref([{
    id:0,
    name:"",
    imgUrl:"",
    price:0
}])  // 修改为数组类型
const form = ref<{ name: string }>({ name: '' })  // 初始化为空字符串
const category = ref<Category[]>([])  // 修改为数组类型

const SearchFlower = async () => {
    try {
        const response: Flower[] = await getFlowersSearch(form.value.name) as any
        list.value = response.map(c => ({
            id: c.id,
            name: c.name,
            imgUrl: c.imgUrl,
            price: c.price
        }))
    } catch (error) {
        console.error('搜索鲜花数据失败', error)
    }
}

const GetFlowerCategory = async () => {
    try {
        category.value = await getCategory() as any
    } catch (error) {
        console.error('获取鲜花类别数据失败', error)
    }
}

const GetFlowers = async () => {
    try {
        const response: Flower[] = await getFlowers() as any  // 修正为获取所有鲜花
        list.value = response.map(c => ({
            id: c.id,
            name: c.name,
            imgUrl: c.imgUrl,
            price: c.price
        }))
    } catch (error) {
        console.error('获取鲜花数据失败', error)
    }
}

const filterByCategory = async (name: string) => {
    try {
        const response: Flower[] = await getFlowersSearch(name) as any
        list.value = response.map(c => ({
            id: c.id,
            name: c.name,
            imgUrl: c.imgUrl,
            price: c.price
        }))
    } catch (error) {
        console.error('按类别筛选鲜花数据失败', error)
    }
}

onMounted(() => {
    GetFlowers()
    GetFlowerCategory()
})
</script>
<style lang="scss">
.category-item {
    cursor: pointer;
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 4px;
    background-color: #f9f9f9;
    transition: background-color 0.3s;
}

.category-item:hover {
    background-color: #e0e0e0;
}

.search {
    margin: 30px;
}

.common-layout {
    background-color: #f7f9fa;
}

.main-content, .fl-products {
    display: inline-block;
}

.main-content {
    width: 30%;
}

.fl-products {
    float: right;
    width: 70%;
    background-color: #fff;
    vertical-align: top;
}

.fl-products-item {
    display: inline-block;
    width: 212px;
    margin-left: 16px;
    margin-bottom: 16px;
    background-color: #fff;
    vertical-align: top;

    .product-content {
        padding: 10px 8px 14px;
        text-align: center;
        color: #232628;

        .product-title {
            max-width: 100%;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            font-size: 16px;
            line-height: 20px;
        }

        .product-price {
            margin-top: 5px;
            font-size: 16px;
            font-weight: bold;
            line-height: 20px;
        }
    }
}

.hd {
    text-align: initial;

    h3 {
        font-size: 26px;
        line-height: 30px;
        color: #232628;
        font-weight: bold;

        a {
            color: inherit;
        }

        span {
            padding-left: 15px;
            margin-left: 16px;
            font-size: 20px;
            line-height: 24px;
            font-weight: normal;
            border-left: 1px solid #71797f;
        }
    }
}
</style>