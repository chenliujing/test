<template>
  <el-card>
    <!-- 搜索框和状态筛选 -->
    <div style="margin-bottom: 20px;">
      <el-input
        v-model="searchQuery"
        placeholder="请输入订单编号、商品名称"
        prefix-icon="el-icon-search"
      />
      <el-select v-model="statusFilter" placeholder="选择状态" style="margin:20px;width: 100px;">
        <el-option label="全部" value=""></el-option>
        <el-option label="未发货" value="0"></el-option>
        <el-option label="已发货" value="1"></el-option>
        <el-option label="已取消" value="-1"></el-option>
      </el-select>
      <el-button type="danger" @click="bulkDelete">批量删除订单</el-button>
    </div>
    <el-table :data="filteredInfo" ref="tableRef">
      <el-table-column type="selection" width="55"></el-table-column>
      <!-- 订单编号列 -->
      <el-table-column prop="orderId" label="订单编号" width="200px">
        <template #default="{ row }">
          {{ row.orderId }}
        </template>
      </el-table-column>
      <el-table-column prop="orderDate" label="订单日期" width="200px">
        <template #default="{ row }">
          {{ row.orderDate }}
        </template>
      </el-table-column>
      <el-table-column prop="flower.imgUrl" label="图片" width="100">
        <template #default="{ row }">
          <div class="demo-image__preview">
            <el-image style="width: 50px; height: 50px" :src="row.flower.imgUrl" :zoom-rate="1.2" :max-scale="7"
              :min-scale="0.2" fit="cover" />
          </div>
        </template>
      </el-table-column>
      <!-- 订单项名称列 -->
      <el-table-column prop="flower.name" label="商品名称">
        <template #default="{ row }">
          {{ row.flower.name }}
        </template>
      </el-table-column>
      <el-table-column prop="quantity" label="数量">
        <template #default="{ row }">
          {{ row.quantity }}
        </template>
      </el-table-column>
      <el-table-column prop="status" label="状态">
        <template #default="{ row }">
          <span>
            <!-- 根据 row.status 的值来显示不同的状态 -->
            <template v-if="row.status === -1">已取消</template>
            <template v-if="row.status === 0">未处理</template>
            <template v-else-if="row.status === 1">已发货</template>
            <template v-else-if="row.status === 2">已完成</template>
            
          </span>
        </template>
      </el-table-column>
      <!-- 地址列 -->
      <el-table-column label="地址">
        <template #default="{ row }">
          {{ `${row.address.province} ${row.address.city} ${row.address.county} ${row.address.street}` }}
        </template>
      </el-table-column>
      <el-table-column label="操作" width="350px">
        <template #default="{ row }">
          <el-button type="danger" icon="el-icon-delete" @click="deleteOrderItem(row.id)">
            删除订单
          </el-button>
          <el-button type="primary" @click="doOrder(row.id)">
            发货
          </el-button>
        </template>
      </el-table-column>
      <el-table-column prop="sumPrice" label="总价">
        <template #default="{ row }">
          {{ row.sumPrice }}
        </template>
      </el-table-column>
    </el-table>
  </el-card>
</template>

<script setup lang="ts">
import { onMounted, ref, computed } from 'vue';
import { getAllOrder, removeOrderItem, chuliOrder } from '../../api';
import { ElMessage } from 'element-plus';
import Order from '../class/Order';
const info = ref<any[]>([]);
const statusFilter = ref<string>('');
const searchQuery = ref<string>('');
const tableRef = ref<any>();

const bulkDelete = async () => {
  const selectedRows:Order[] = tableRef.value?.getSelectionRows();
  if (selectedRows.length === 0) {
    ElMessage.warning('请至少选择一项订单');
    return;
  }

  const confirmed = window.confirm('确定要删除所选订单吗？');
  if (confirmed) {
    try {
      await Promise.all(selectedRows.map(row => removeOrderItem(row.id)));
      ElMessage.success('批量删除成功');
      fetchOrder();
    } catch (error) {
      console.error('批量删除订单失败:', error);
    }
  }
};

const fetchOrder = async () => {
  const userId = sessionStorage.getItem('id');
  if (userId) {
    try {
      const response = await getAllOrder() as any;
      info.value = response; // 假设 API 返回的数据在 response.data 中
    } catch (error) {
      console.error('获取订单失败', error);
    }
  }
};

const filteredInfo = computed(() => {
  let data = info.value;

  if (statusFilter.value) {
    data = data.filter(item => item.status.toString() === statusFilter.value);
  }

  if (!searchQuery.value.trim()) {
    return data;
  }

  return data.filter(item => {
    const searchTerm = searchQuery.value.toLowerCase();
    return (
      item.orderId.toLowerCase().includes(searchTerm) ||
      item.orderDate.toLowerCase().includes(searchTerm) ||
      item.flower.name.toLowerCase().includes(searchTerm) ||
      item.address.province.toLowerCase().includes(searchTerm) ||
      item.address.city.toLowerCase().includes(searchTerm) ||
      item.address.county.toLowerCase().includes(searchTerm) ||
      item.address.street.toLowerCase().includes(searchTerm)
    );
  });
});

const doOrder = async (id: number) => {
  try {
    const response = await chuliOrder(id);
    if (response) {
      ElMessage.success('发货成功');
      fetchOrder();
    }
  } catch (error) {
    console.error('发货失败:', error);
  }
};

const deleteOrderItem = async (id: number) => {
  const confirmed = window.confirm('确定要删除吗？');

  if (confirmed) {
    try {
      await removeOrderItem(id);
      ElMessage.success('删除成功');
      fetchOrder();
    } catch (error) {
      console.error('删除订单项失败:', error);
    }
  }
};

onMounted(() => {
  fetchOrder();
});
</script>

<style scoped>
/* 你可以在这里添加一些样式来调整表格的外观 */
</style>