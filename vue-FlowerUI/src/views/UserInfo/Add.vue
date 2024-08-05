<template>
    <el-dialog v-model="props.addVisible" :title="info == undefined ? '新增' : '修改'" @close="handleClose">
        <el-form :model="form" label-width="80px">
            <el-form-item label="名字">
                <el-input v-model="form.name" placeholder="请输入名字" />
            </el-form-item>
            <el-form-item label="邮箱">
                <el-input v-model="form.email" placeholder="请输入邮箱" />
            </el-form-item>
            <el-form-item label="密码">
                <el-input v-model="form.password"  placeholder="请输入密码" />
            </el-form-item>
          
        </el-form>
        <span slot="footer" class="dialog-footer">
            <el-button @click="handleClose">取消</el-button>
            <el-button type="primary" @click="handleSave">保存</el-button>
        </span>
    </el-dialog>
</template>

<script setup lang="ts">
import { ref, defineProps, defineEmits, onMounted, watch } from 'vue';
import { getRoles, addUser, UpdateUser, updateFlower } from '../../api';
import { ElMessage } from 'element-plus';
import   UserInfo  from '../class/UserInfo';
import {Role} from '../class/Role'
import Flower from '../class/Flower';

const props = defineProps({
    addVisible: Boolean,
    info: Object as () => UserInfo
});
console.log(props)
const emit = defineEmits(['CloseAdd']);

const RoleName = ref(<Role[]>[]);
const form = ref({
    id: 0,
    name: '',
    password: "",
    email: "",
    
});

// 获取角色数据
const fetchRole = async () => {
    try {
        const res = await getRoles() as any;
        RoleName.value = res;
        console.log(RoleName)
    } catch (error) {
        console.error('获取角色失败:', error);
    }
};

// 初始化数据
onMounted(() => {
    fetchRole();

});

// 监听 props.info 的变化，填充表单
watch(
    () => props.info,

    (newInfo, oldInfo) => {
        if (newInfo != undefined) {
            let currInfo: UserInfo = (JSON.parse(newInfo as any)) as UserInfo
            console.log(currInfo)
            form.value = {
                id: currInfo.id,
                name: currInfo.name,
                email: currInfo.email,
                password: currInfo.password,
              


            }
            console.log(form);
        } else {
            form.value = {
                id: 0,
                name: '',
                email: '',
                password: '',
            

            }
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
            Email: form.value.email,
            Password: form.value.password,
           
        };
        console.log(params)
        if (props.info == undefined) {
            await addUser(params);
            ElMessage({
                message: '添加成功！',
                type: 'success'
            });
            handleClose(); // 保存成功后关闭对话框
        }
        else {
            await UpdateUser(params)
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