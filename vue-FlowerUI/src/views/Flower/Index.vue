<template>
  <el-card class="box-card">
    <h2>鲜花管理</h2>

    <!-- 搜索框 -->
    <el-input
      v-model="searchText"
      placeholder="请输入商品名称"
      prefix-icon="el-icon-search"
      @input="handleSearch"
    />
    
    <el-table :data="paginatedFlowers" ref="tableRef" style="width: 100%">
      <el-table-column prop="name" label="名字" width="180">
        <template #default="{ row }">
          {{ row.name }}
        </template>
      </el-table-column>
      <el-table-column prop="color" label="颜色" width="180">
        <template #default="{ row }">
          {{ row.color }}
        </template>
      </el-table-column>
      <el-table-column prop="price" label="价格" width="100">
        <template #default="{ row }">
          {{ row.price }}
        </template>
      </el-table-column>
      <el-table-column prop="category.name" label="类别" width="100">
        <template #default="{ row }">
          {{ row.category.name }}
        </template>
      </el-table-column>
      <el-table-column prop="imgUrl" label="图片" width="100">
        <template #default="{ row }">
          <div class="demo-image__preview">
            <el-image
              style="width: 100px; height: 100px"
              :src="row.imgUrl"
              :zoom-rate="1.2"
              :max-scale="7"
              :min-scale="0.2"
              :preview-src-list="srcList"
              :initial-index="0"
              fit="cover"
            />
          </div>
        </template>
      </el-table-column>
      <el-table-column label="操作" width="200">
        <template #default="{ row, $index }">
          <el-button @click="editFlower($index, row)" type="primary">编辑</el-button>
          <el-button @click="deleteFlower(row.id, $index)" type="danger">删除</el-button>
        </template>
      </el-table-column>
    </el-table>

    <!-- 分页组件 -->
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage"
      :page-size="pageSize"
      :total="filteredFlowers.length"
      layout="total, sizes, prev, pager, next, jumper"
    />
    
    <el-button type="primary" @click="add">新增</el-button>
  </el-card>
  <addVue :addVisible="addVisible" :info="info" @CloseAdd="CloseAdd"></addVue>
</template>

<script setup lang="ts">
import { ref, onMounted, reactive, computed } from 'vue';
import { getFlowers, updateFlower, deleteFlower as apiDeleteFlower, addFlower as apiAddFlower } from '../../api/index';
import { SCOPE, type FormInstance, type FormRules } from 'element-plus';
import type { ElTable } from 'element-plus';
import { ElMessage } from 'element-plus';
import addVue from './Add.vue';
import Flower from '../class/Flower';
//分页
const pageSize = ref(10); // 每页条数
const currentPage = ref(1); // 当前页码

const paginatedFlowers = computed(() => {
  const start = (currentPage.value - 1) * pageSize.value;
  const end = start + pageSize.value;
  return filteredFlowers.value.slice(start, end);
});

const handleSizeChange = (newSize: number) => {
  pageSize.value = newSize;
  currentPage.value = 1; // 每次更改每页条数时，重置为第一页
};

const handleCurrentChange = (newPage: number) => {
  currentPage.value = newPage;
};

const tableRef = ref<InstanceType<typeof ElTable>>();
const flowers = ref<Flower[]>([]);
const addVisible = ref(false);
const ruleFormRef = ref<FormInstance>();
const multipleTableRef = ref<InstanceType<typeof ElTable>>();
const rules = reactive<FormRules>({
  name: [{ required: false, message: '请输入名称', trigger: 'blur' }]
});
const srcList = ref<string[]>([]);
const searchText = ref('');
const filteredFlowers = computed(() => {
  let data = flowers.value;

  if (!searchText.value.trim()) {
    return data;
  }

  const searchTerm = searchText.value.toLowerCase();
  return data.filter(item => {
    const name = item.name ? item.name.toLowerCase() : '';
    const color = item.color ? item.color.toLowerCase() : '';
    const categoryName = item.category && item.category.Name ? item.category.Name.toLowerCase() : '';

    return (
      name.includes(searchTerm) ||
      color.includes(searchTerm) ||
      categoryName.includes(searchTerm)
    );
  });
});

const fetchFlowers = async () => {
  try {
    const res:Flower[] = await getFlowers() as any;
    flowers.value = res;
    srcList.value = res.map(c => c.imgUrl);
  } catch (error) {
    console.error('获取鲜花失败:', error);
  }
};

const deleteFlower = async (id: number, index: number) => {
  const confirmed = window.confirm('确定要删除吗？');
  if (confirmed) {
    try {
      await apiDeleteFlower(id);
      flowers.value.splice(index, 1);
      ElMessage({
        message: "删除成功",
        type: 'success'
      });
    } catch (error) {
      console.error('删除鲜花失败:', error);
    }
  } else {
    console.log('用户取消了删除操作');
  }
};

const add = () => {
  addVisible.value = true;
  info.value = undefined;
};

const info = ref<Flower | undefined>();
const editFlower = (index: number, row: Flower) => {
  info.value = row;
  addVisible.value = true;
};

const CloseAdd = () => {
  addVisible.value = false;
  fetchFlowers(); // 重新加载数据
};

const handleSearch = () => {
  // 在这里可以做其他的搜索逻辑
  console.log('搜索文本:', searchText.value);
};

onMounted(fetchFlowers);
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

.demo-image__error .image-slot {
  font-size: 30px;
}

.demo-image__error .image-slot .el-icon {
  font-size: 30px;
}

.demo-image__error .el-image {
  width: 100%;
  height: 200px;
}
</style>