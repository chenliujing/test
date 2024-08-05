<template>
  <el-dialog v-model="props.addVisible" :title="info == undefined ? '新增' : '修改'" @close="handleClose">
    <el-form :model="form" label-width="80px">
      <el-form-item label="名字">
        <el-input v-model="form.name" placeholder="请输入名字" />
      </el-form-item>
      <el-form-item label="颜色">
        <el-input v-model="form.color" placeholder="请输入颜色" />
      </el-form-item>
      <el-form-item label="价格">
        <el-input v-model="form.price" type="number" placeholder="请输入价格" />
      </el-form-item>
      <el-form-item label="描述">
        <el-input v-model="form.description" type="textarea" placeholder="请输入鲜花描述" />
      </el-form-item>
      <el-form-item label="库存">
        <el-input v-model="form.number" type="number" placeholder="请输入库存" />
      </el-form-item>
      <el-form-item label="类别">
        <el-select v-model="form.categoryId" placeholder="请选择类别" size="large">
          <el-option
            v-for="item in category"
            :key="item.id"
            :label="item.name"
            :value="item.id"
          />
        </el-select>
      </el-form-item>
    <el-form-item label="鲜花图片">
      <el-upload
    v-model:file-list="fileList"
    class="upload-demo"
    action="https://localhost:7288/api/FileUpload/UploadLargeFile/UploadLargeFile"
    multiple
    :on-preview="handlePreview"
    :on-remove="handleRemove"
    :before-remove="beforeRemove"
    :limit="1"
    :on-exceed="handleExceed"
    
  >
    <el-button type="primary">点击上传鲜花图片</el-button>
    <template #tip>
      <div class="el-upload__tip">
        jpg/png files with a size less than 500KB.
      </div>
    </template>
  </el-upload>
   </el-form-item>
    </el-form>
    <span slot="footer" class="dialog-footer">
      <el-button @click="handleClose">取消</el-button>
      <el-button type="primary"   @click="handleSave" >保存</el-button>
    </span>
  </el-dialog>
</template>

<script setup lang="ts">
import { ref, defineProps, defineEmits, onMounted, watch } from 'vue';
import { getCategory, addFlower, updateFlower } from '../../api';
import { ElMessage,ElMessageBox } from 'element-plus';
import  Category  from '../class/Category';
import Flower from '../class/Flower';
import type { UploadProps, UploadUserFile } from 'element-plus'

const fileList = ref()

const handleRemove: UploadProps['onRemove'] = (file, uploadFiles) => {
  console.log(file, uploadFiles)
}

const handlePreview: UploadProps['onPreview'] = (uploadFile) => {
  console.log(uploadFile)
}
const handleExceed: UploadProps['onExceed'] = (files, uploadFiles) => {
  ElMessage.warning(
    `The limit is 3, you selected ${files.length} files this time, add up to ${
      files.length + uploadFiles.length
    } totally`
  )
}

const beforeRemove: UploadProps['beforeRemove'] = (uploadFile, uploadFiles) => {
  return ElMessageBox.confirm(
    `Cancel the transfer of ${uploadFile.name} ?`
  ).then(
    () => true,
    () => false
  )
}
const props = defineProps({
  addVisible: Boolean,
  info: Object as () => Flower
});
console.log(props)
const emit = defineEmits(['CloseAdd']);

const category = ref(<Category[]>[]);
const form = ref({
  id: 0,
  name: '',
  color: '',
  price: 0,
  categoryId:1,
  number: 0,
  imgUrl:'',
  description:" "
});
// 获取类别数据
const fetchCategory = async () => {
  try {
    const res = await getCategory() as any;
    category.value = res;
    console.log(category)
  } catch (error) {
    console.error('获取类别失败:', error);
  }
};

// 初始化数据
onMounted(() => {
  fetchCategory();
 
});

// 监听 props.info 的变化，填充表单
watch(
    () => props.info,
   
    (newInfo, oldInfo) => {
        if (newInfo != undefined) {
            let currInfo: Flower = (JSON.parse(newInfo as any)) as Flower
            console.log(currInfo)
            form.value = {
                id: currInfo.id,
                name: currInfo.name,
                color: currInfo.color,
                number: currInfo.number,
                categoryId: currInfo.categoryId,
                price:currInfo.price,
                imgUrl:currInfo.imgUrl,
                description:currInfo.description
                
            }
            console.log(form);
        }else{
          form.value = {
                id:0,
                name: "",
                color: "",
                number: 0,
                categoryId: 1,
                price:0,
                imgUrl:'',
                description:""
                
            }
            console.log(form)
        }
    }
);
const handleClose = () => {
  emit('CloseAdd');
};
const handleSave = async () => {
  try {
    const params = {
      Id: form.value.id,
      Name: form.value.name,
      Color: form.value.color,
      Number: form.value.number,
      CategoryId: form.value.categoryId,
      Price: form.value.price,
      imgUrl:fileList.value[0].response.result,
      description:form.value.description
    };
    console.log(params)
if(props.info==undefined)
{
  await addFlower(params);
  ElMessage({
      message: '添加成功！',
      type: 'success'
    });
    handleClose(); // 保存成功后关闭对话框
}
else
{
  await updateFlower(params)
  ElMessage({
      message: '修改成功！',
      type: 'success'
    });
    handleClose(); // 保存成功后关闭对话框
}
    

  } catch (error) {
    ElMessage({
      message: '保存失败，请重试。',
      type: 'error'
    });
    console.error('添加失败:', error);
  }
};
</script>

<style scoped>
.dialog-footer {
  text-align: right;
}
</style>