<template>
  <el-card>
    <el-form
    ref="ruleFormRef"
    style="max-width: 600px"
    :model="ruleForm"
    :rules="rules"
    label-width="auto"
    class="demo-ruleForm"
    :size="formSize"
    status-icon
  >
    <el-form-item label="用户名" prop="name" >
      <el-input v-model="ruleForm.name" />
    </el-form-item>
    <el-form-item label="密码" prop="password" >
      <el-input type="password" v-model="ruleForm.password" />
    </el-form-item>
    <el-form-item label="确认密码" prop="checkPass">
      <el-input
        v-model="ruleForm.checkPass"
        type="password"
        autocomplete="off"
      />
    </el-form-item>
    <el-form-item label="头像">
      <el-avatar :size="50" :src="url" />
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
    <el-form-item label="邮箱" >
      <el-input v-model="ruleForm.email" />
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="submitForm(ruleFormRef)">
        注册
      </el-button>
      <el-button @click="resetForm(ruleFormRef)">重置</el-button>
    </el-form-item>
  </el-form>
  </el-card>
  
</template>

<script lang="ts" setup>
import { reactive, ref,watch} from 'vue'
import type { ComponentSize, FormInstance, FormRules } from 'element-plus'
import { register } from '../api/index';
import {ElMessage,ElMessageBox} from 'element-plus'
import router from '../routes';
import type { UploadProps, UploadUserFile } from 'element-plus'
interface RuleForm {
  name: string
  password: string
  email: string
  checkPass:string
 
}
const fileList = ref()
console.log(fileList)
const url=ref()

const handleSuccess =async (response: any, file: File) => {
  console.log(response)
  if (response && response.result) {
    url.value = response.result
  } else {
    ElMessage.error('上传失败，服务器未返回有效结果')
  }
}
// const url=fileList.value[0].response.result
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
const formSize = ref<ComponentSize>('default')
const ruleFormRef = ref<FormInstance>()
const ruleForm = ref<RuleForm>({
  name: "",
  password: "",
  email: "",
  checkPass:""
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
  if (ruleForm.value.checkPass !== '') {
      if (!ruleFormRef.value) return
      ruleFormRef.value.validateField('checkPass')
    }
  // 确保调用 callback 以表示验证成功
  callback();
};
const validatePass2 = (rule: any, value: any, callback: any) => {
  if (value === '') {
    callback(new Error('请再次输入密码'));
  } else if (value !== ruleForm.value.password) {
    callback(new Error('两次密码不匹配'));
  } else {
    callback(); // 确保在验证通过时调用 callback
  }
};

const rules = reactive<FormRules<typeof ruleForm>>({
  password: [{ validator: validatePass, trigger: 'blur' }],
  checkPass: [{ validator: validatePass2, trigger: 'blur' }],
  email: [{ validator: checkEmail, trigger: 'blur' }],// 添加 email 验证规则
  name:[{validator: checkUserName, trigger: 'blur'}]
});
const submitForm =async(formEl: FormInstance | undefined) => {
  if (!formEl) return
 await formEl.validate(async(valid) => {
    if (valid) {
      const params = {
           
            Name: ruleForm.value.name,
            Email: ruleForm.value.email,
            Password: ruleForm.value.password,
            ImgUrl:url.value,
            
        };
      console.log(params)
      const response = await register(params) as any
      console.log(response)
          if(response)
        {
          alert("注册成功")
          router.push("/login")
        }
      console.log('submit!')
    } else {
      console.log('error submit!')
    }
  })
}

const resetForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return
  formEl.resetFields()
}
</script>
