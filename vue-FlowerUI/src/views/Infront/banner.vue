<template>
    <div>
        <el-carousel height="150px" v-if="isShow">
            <el-carousel-item v-for="(image, index) in images" :key="index">
               
                    <el-image :src="image.imgUrl" style="width: 100%; height: 100%;"></el-image>
                
            </el-carousel-item>
        </el-carousel>
   
    </div> 
</template> 

<script setup lang="ts">
import { ref, onMounted } from 'vue';
const images = ref([
  {imgUrl:"../../../public/Img/banners/1.jpg"},
  {imgUrl:"../../../public/Img/banners/2.jpg"},
  {imgUrl:"../../../public/Img/banners/3.jpeg"}
    // 添加更多图片和课程链接
]);
const isShow = ref(true); // 设置为true以显示轮播图，或者根据需要动态控制

onMounted(() => {
    // 可以在这里添加页面加载完成后需要执行的代码
});
</script>

<style lang="scss">
.el-carousel__container {
    height: 150px !important; /* 与el-carousel的height属性保持一致 */
    margin-top: 10px;
}
.el-image {
    object-fit: cover; /* 确保图片填充整个轮播项而不失真 */
}
</style>