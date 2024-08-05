<template>
   <el-card>
    <div class="user-profile">
      <el-form :model="ruleForm" ref="ruleFormRef"
      :rules="rules"  label-width="120px">
        <el-form-item label="头像">
      <el-avatar :size="50" :src="ruleForm.imgUrl" />
      <el-upload
    v-model:file-list="fileList"
    class="upload-demo"
    action="https://localhost:7288/api/FileUpload/UploadLargeFile/UploadLargeFile"
    multiple
    :on-preview="handlePreview"
    :on-remove="handleRemove"
    :before-remove="beforeRemove"
     :on-success="handleSuccess"
    :limit="1"
    :on-exceed="handleExceed"
    
  >
    <el-button type="primary">点击上传头像</el-button>
    <template #tip>
      <div class="el-upload__tip">
        jpg/png files with a size less than 500KB.
      </div>
    </template>
  </el-upload>
   </el-form-item>
        <el-form-item label="用户名">
          <el-input v-model="ruleForm.name"></el-input>
        </el-form-item>
        
        <el-form-item label="邮箱">
          <el-input v-model="ruleForm.email"></el-input>
        </el-form-item>
        <el-form-item label="密码">
          <el-input v-model="ruleForm.password"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="updateUserInfo(ruleFormRef)">保存修改</el-button>
        </el-form-item>
      </el-form>
    </div>
   </el-card>
  </template>
  
  <script setup lang="ts">
  import { ref, onMounted,reactive } from 'vue';
  import { ElForm, ElFormItem, ElInput, ElButton,ElMessage,ElMessageBox} from 'element-plus';
  import axios from 'axios';
  import type { UploadProps, UploadUserFile } from 'element-plus'
  import { upLoad } from '../../api';
  import type { ComponentSize, FormInstance, FormRules } from 'element-plus'
  import { getUserById,UpdateUser } from '../../api';
  const handleRemove: UploadProps['onRemove'] = (file, uploadFiles) => {
  console.log(file, uploadFiles)
}
interface RuleForm {
  name: string
  password: string
  email: string
  imgUrl:string

 
}
const ruleFormRef = ref<FormInstance>()
const ruleForm = ref<RuleForm>({
  name: "",
  password: "",
  email: "",
  imgUrl:""
 
})

const checkEmail = (rule: any, value: any, callback: any) => {
  if (!value) {
    return callback(new Error('请输入邮箱'));
  } else {
    const reg = /^[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,}$/; // 修正正则表达式的书写
    if (!reg.test(value)) {
      callback(new Error('请输入正确的邮箱格式'));
    } else {
      callback(); // 确保在正则验证通过时调用 callback
    }
  }
};
const checkUserName= (rule: any, value: any, callback: any) => {
  if (!value) {
    return callback(new Error('请输入用户名'));
  } else {
    const reg = /^[a-zA-Z_][0-9a-zA-Z_]{0,}$/; // 修正正则表达式的书写
    if (!reg.test(value)) {
      callback(new Error('用户名必须以字母或下划线开头，并且只包含字母、数字和下划线'))
    } else {
      callback(); // 确保在正则验证通过时调用 callback
    }
  }
};
const validatePass = (rule: any, value: any, callback: any) => {
  if (!value) {
    return callback(new Error('请输入密码'));
  }
  
  // 改进后的正则表达式，密码至少8位，必须包含字母和数字
  const reg = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d!@#$%^&*()_+]{8,}$/;
  
  if (!reg.test(value)) {
    return callback(new Error('请输入正确的密码格式,密码至少8位,可以包含数字、字母和一些特殊字符（如!@#$%^&*()_+)'));
  }
  // if (ruleForm.value.checkPass !== '') {
  //     if (!ruleFormRef.value) return
  //     ruleFormRef.value.validateField('checkPass')
  //   }
  // 确保调用 callback 以表示验证成功
  callback();
};

const rules = reactive<FormRules<typeof ruleForm>>({
  password: [{ validator: validatePass, trigger: 'blur' }],
  email: [{ validator: checkEmail, trigger: 'blur' }],// 添加 email 验证规则
  name:[{validator: checkUserName, trigger: 'blur'}]
});
const form=ref({
    name:"",
    email:"",
    imgUrl:"",
    password:""
 })
const handlePreview: UploadProps['onPreview'] = (uploadFile) => {
  console.log(uploadFile)
}
const handleExceed: UploadProps['onExceed'] = (files, uploadFiles) => {
  ElMessage.warning(
    `The limit is 1, you selected ${files.length} files this time, add up to ${
      files.length + uploadFiles.length
    } totally`
  )
}
const handleSuccess =async (response: any, file: File) => {
  console.log(response)
  if (response && response.result) {
    ruleForm.value.imgUrl = response.result
  } else {
    ElMessage.error('上传失败，服务器未返回有效结果')
  }
}
const beforeRemove: UploadProps['beforeRemove'] = (uploadFile, uploadFiles) => {
  return ElMessageBox.confirm(
    `Cancel the transfer of ${uploadFile.name} ?`
  ).then(
    () => true,
    () => false
  )
}
 let userId=Number(sessionStorage.getItem("id"))

 let fileList=ref()
 const loading = ref(false);

const updateUserInfo = async (formEl: FormInstance | undefined) => {
  console.log(formEl)
  if (!formEl){
    ElMessage({
      message:"格式不正确",
      type:"warning"
    })
    return
  }
 await formEl.validate(async(valid) => {
    if (valid) {
      loading.value = true;
  try {
    const response = await UpdateUser(ruleForm.value);
    if (response) {
      ElMessage.success('修改成功');
    }
  } catch (error) {
    ElMessage.error('修改失败，请重试');
  } finally {
    loading.value = false;
  }
    }})

};
 
 onMounted(async()=>
 {
   let response=await getUserById(userId) as any
   ruleForm.value=response
   console.log(response)
 }
)
  </script>
  
  <style scoped>
  .user-profile {
    padding: 20px;
  }
  .el-input{
    width: 400px;
  }
  </style>