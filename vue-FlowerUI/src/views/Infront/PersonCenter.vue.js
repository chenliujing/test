import { ref, onMounted, reactive } from 'vue';
import { ElForm, ElFormItem, ElInput, ElButton, ElMessage, ElMessageBox } from 'element-plus';
import { getUserById, UpdateUser } from '../../api';
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const handleRemove = (file, uploadFiles) => {
    console.log(file, uploadFiles);
};
const ruleFormRef = ref();
const ruleForm = ref({
    name: "",
    password: "",
    email: "",
    imgUrl: ""
});
const checkEmail = (rule, value, callback) => {
    if (!value) {
        return callback(new Error('请输入邮箱'));
    }
    else {
        const reg = /^[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,}$/; // 修正正则表达式的书写
        if (!reg.test(value)) {
            callback(new Error('请输入正确的邮箱格式'));
        }
        else {
            callback(); // 确保在正则验证通过时调用 callback
        }
    }
};
const checkUserName = (rule, value, callback) => {
    if (!value) {
        return callback(new Error('请输入用户名'));
    }
    else {
        const reg = /^[a-zA-Z_][0-9a-zA-Z_]{0,}$/; // 修正正则表达式的书写
        if (!reg.test(value)) {
            callback(new Error('用户名必须以字母或下划线开头，并且只包含字母、数字和下划线'));
        }
        else {
            callback(); // 确保在正则验证通过时调用 callback
        }
    }
};
const validatePass = (rule, value, callback) => {
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
const rules = reactive({
    password: [{ validator: validatePass, trigger: 'blur' }],
    email: [{ validator: checkEmail, trigger: 'blur' }], // 添加 email 验证规则
    name: [{ validator: checkUserName, trigger: 'blur' }]
});
const form = ref({
    name: "",
    email: "",
    imgUrl: "",
    password: ""
});
const handlePreview = (uploadFile) => {
    console.log(uploadFile);
};
const handleExceed = (files, uploadFiles) => {
    ElMessage.warning(`The limit is 1, you selected ${files.length} files this time, add up to ${files.length + uploadFiles.length} totally`);
};
const handleSuccess = async (response, file) => {
    console.log(response);
    if (response && response.result) {
        ruleForm.value.imgUrl = response.result;
    }
    else {
        ElMessage.error('上传失败，服务器未返回有效结果');
    }
};
const beforeRemove = (uploadFile, uploadFiles) => {
    return ElMessageBox.confirm(`Cancel the transfer of ${uploadFile.name} ?`).then(() => true, () => false);
};
let userId = Number(sessionStorage.getItem("id"));
let fileList = ref();
const loading = ref(false);
const updateUserInfo = async (formEl) => {
    console.log(formEl);
    if (!formEl) {
        ElMessage({
            message: "格式不正确",
            type: "warning"
        });
        return;
    }
    await formEl.validate(async (valid) => {
        if (valid) {
            loading.value = true;
            try {
                const response = await UpdateUser(ruleForm.value);
                if (response) {
                    ElMessage.success('修改成功');
                }
            }
            catch (error) {
                ElMessage.error('修改失败，请重试');
            }
            finally {
                loading.value = false;
            }
        }
    });
};
onMounted(async () => {
    let response = await getUserById(userId);
    ruleForm.value = response;
    console.log(response);
});
const __VLS_fnComponent = (await import('vue')).defineComponent({});
let __VLS_functionalComponentProps;
function __VLS_template() {
    let __VLS_ctx;
    /* Components */
    let __VLS_otherComponents;
    let __VLS_own;
    let __VLS_localComponents;
    let __VLS_components;
    let __VLS_styleScopedClasses;
    // CSS variable injection 
    // CSS variable injection end 
    let __VLS_resolvedLocalAndGlobalComponents;
    // @ts-ignore
    const __VLS_0 = {}
        .ElCard;
    ({}.ElCard);
    ({}.ElCard);
    __VLS_components.ElCard;
    __VLS_components.elCard;
    __VLS_components.ElCard;
    __VLS_components.elCard;
    // @ts-ignore
    [ElCard, ElCard,];
    // @ts-ignore
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({}));
    const __VLS_2 = __VLS_1({}, ...__VLS_functionalComponentArgsRest(__VLS_1));
    ({}({}));
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("user-profile") }, });
    // @ts-ignore
    const __VLS_6 = {}
        .ElForm;
    ({}.ElForm);
    ({}.ElForm);
    __VLS_components.ElForm;
    __VLS_components.elForm;
    __VLS_components.ElForm;
    __VLS_components.elForm;
    // @ts-ignore
    [ElForm, ElForm,];
    // @ts-ignore
    const __VLS_7 = __VLS_asFunctionalComponent(__VLS_6, new __VLS_6({ model: ((__VLS_ctx.ruleForm)), ref: ("ruleFormRef"), rules: ((__VLS_ctx.rules)), labelWidth: ("120px"), }));
    const __VLS_8 = __VLS_7({ model: ((__VLS_ctx.ruleForm)), ref: ("ruleFormRef"), rules: ((__VLS_ctx.rules)), labelWidth: ("120px"), }, ...__VLS_functionalComponentArgsRest(__VLS_7));
    ({}({ model: ((__VLS_ctx.ruleForm)), ref: ("ruleFormRef"), rules: ((__VLS_ctx.rules)), labelWidth: ("120px"), }));
    // @ts-ignore
    (__VLS_ctx.ruleFormRef);
    // @ts-ignore
    const __VLS_12 = {}
        .ElFormItem;
    ({}.ElFormItem);
    ({}.ElFormItem);
    __VLS_components.ElFormItem;
    __VLS_components.elFormItem;
    __VLS_components.ElFormItem;
    __VLS_components.elFormItem;
    // @ts-ignore
    [ElFormItem, ElFormItem,];
    // @ts-ignore
    const __VLS_13 = __VLS_asFunctionalComponent(__VLS_12, new __VLS_12({ label: ("头像"), }));
    const __VLS_14 = __VLS_13({ label: ("头像"), }, ...__VLS_functionalComponentArgsRest(__VLS_13));
    ({}({ label: ("头像"), }));
    // @ts-ignore
    const __VLS_18 = {}
        .ElAvatar;
    ({}.ElAvatar);
    __VLS_components.ElAvatar;
    __VLS_components.elAvatar;
    // @ts-ignore
    [ElAvatar,];
    // @ts-ignore
    const __VLS_19 = __VLS_asFunctionalComponent(__VLS_18, new __VLS_18({ size: ((50)), src: ((__VLS_ctx.ruleForm.imgUrl)), }));
    const __VLS_20 = __VLS_19({ size: ((50)), src: ((__VLS_ctx.ruleForm.imgUrl)), }, ...__VLS_functionalComponentArgsRest(__VLS_19));
    ({}({ size: ((50)), src: ((__VLS_ctx.ruleForm.imgUrl)), }));
    // @ts-ignore
    [ruleForm, ruleForm, rules, ruleFormRef,];
    const __VLS_23 = __VLS_pickFunctionalComponentCtx(__VLS_18, __VLS_20);
    // @ts-ignore
    const __VLS_24 = {}
        .ElUpload;
    ({}.ElUpload);
    ({}.ElUpload);
    __VLS_components.ElUpload;
    __VLS_components.elUpload;
    __VLS_components.ElUpload;
    __VLS_components.elUpload;
    // @ts-ignore
    [ElUpload, ElUpload,];
    // @ts-ignore
    const __VLS_25 = __VLS_asFunctionalComponent(__VLS_24, new __VLS_24({ fileList: ((__VLS_ctx.fileList)), ...{ class: ("upload-demo") }, action: ("https://localhost:7288/api/FileUpload/UploadLargeFile/UploadLargeFile"), multiple: (true), onPreview: ((__VLS_ctx.handlePreview)), onRemove: ((__VLS_ctx.handleRemove)), beforeRemove: ((__VLS_ctx.beforeRemove)), onSuccess: ((__VLS_ctx.handleSuccess)), limit: ((1)), onExceed: ((__VLS_ctx.handleExceed)), }));
    const __VLS_26 = __VLS_25({ fileList: ((__VLS_ctx.fileList)), ...{ class: ("upload-demo") }, action: ("https://localhost:7288/api/FileUpload/UploadLargeFile/UploadLargeFile"), multiple: (true), onPreview: ((__VLS_ctx.handlePreview)), onRemove: ((__VLS_ctx.handleRemove)), beforeRemove: ((__VLS_ctx.beforeRemove)), onSuccess: ((__VLS_ctx.handleSuccess)), limit: ((1)), onExceed: ((__VLS_ctx.handleExceed)), }, ...__VLS_functionalComponentArgsRest(__VLS_25));
    ({}({ fileList: ((__VLS_ctx.fileList)), ...{ class: ("upload-demo") }, action: ("https://localhost:7288/api/FileUpload/UploadLargeFile/UploadLargeFile"), multiple: (true), onPreview: ((__VLS_ctx.handlePreview)), onRemove: ((__VLS_ctx.handleRemove)), beforeRemove: ((__VLS_ctx.beforeRemove)), onSuccess: ((__VLS_ctx.handleSuccess)), limit: ((1)), onExceed: ((__VLS_ctx.handleExceed)), }));
    // @ts-ignore
    const __VLS_30 = {}
        .ElButton;
    ({}.ElButton);
    ({}.ElButton);
    __VLS_components.ElButton;
    __VLS_components.elButton;
    __VLS_components.ElButton;
    __VLS_components.elButton;
    // @ts-ignore
    [ElButton, ElButton,];
    // @ts-ignore
    const __VLS_31 = __VLS_asFunctionalComponent(__VLS_30, new __VLS_30({ type: ("primary"), }));
    const __VLS_32 = __VLS_31({ type: ("primary"), }, ...__VLS_functionalComponentArgsRest(__VLS_31));
    ({}({ type: ("primary"), }));
    // @ts-ignore
    [fileList, handlePreview, handleRemove, beforeRemove, handleSuccess, handleExceed,];
    (__VLS_35.slots).default;
    const __VLS_35 = __VLS_pickFunctionalComponentCtx(__VLS_30, __VLS_32);
    __VLS_elementAsFunction(__VLS_intrinsicElements.template, __VLS_intrinsicElements.template)({});
    {
        (__VLS_29.slots).tip;
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("el-upload__tip") }, });
    }
    const __VLS_29 = __VLS_pickFunctionalComponentCtx(__VLS_24, __VLS_26);
    (__VLS_17.slots).default;
    const __VLS_17 = __VLS_pickFunctionalComponentCtx(__VLS_12, __VLS_14);
    // @ts-ignore
    const __VLS_36 = {}
        .ElFormItem;
    ({}.ElFormItem);
    ({}.ElFormItem);
    __VLS_components.ElFormItem;
    __VLS_components.elFormItem;
    __VLS_components.ElFormItem;
    __VLS_components.elFormItem;
    // @ts-ignore
    [ElFormItem, ElFormItem,];
    // @ts-ignore
    const __VLS_37 = __VLS_asFunctionalComponent(__VLS_36, new __VLS_36({ label: ("用户名"), }));
    const __VLS_38 = __VLS_37({ label: ("用户名"), }, ...__VLS_functionalComponentArgsRest(__VLS_37));
    ({}({ label: ("用户名"), }));
    // @ts-ignore
    const __VLS_42 = {}
        .ElInput;
    ({}.ElInput);
    ({}.ElInput);
    __VLS_components.ElInput;
    __VLS_components.elInput;
    __VLS_components.ElInput;
    __VLS_components.elInput;
    // @ts-ignore
    [ElInput, ElInput,];
    // @ts-ignore
    const __VLS_43 = __VLS_asFunctionalComponent(__VLS_42, new __VLS_42({ modelValue: ((__VLS_ctx.ruleForm.name)), }));
    const __VLS_44 = __VLS_43({ modelValue: ((__VLS_ctx.ruleForm.name)), }, ...__VLS_functionalComponentArgsRest(__VLS_43));
    ({}({ modelValue: ((__VLS_ctx.ruleForm.name)), }));
    // @ts-ignore
    [ruleForm,];
    const __VLS_47 = __VLS_pickFunctionalComponentCtx(__VLS_42, __VLS_44);
    (__VLS_41.slots).default;
    const __VLS_41 = __VLS_pickFunctionalComponentCtx(__VLS_36, __VLS_38);
    // @ts-ignore
    const __VLS_48 = {}
        .ElFormItem;
    ({}.ElFormItem);
    ({}.ElFormItem);
    __VLS_components.ElFormItem;
    __VLS_components.elFormItem;
    __VLS_components.ElFormItem;
    __VLS_components.elFormItem;
    // @ts-ignore
    [ElFormItem, ElFormItem,];
    // @ts-ignore
    const __VLS_49 = __VLS_asFunctionalComponent(__VLS_48, new __VLS_48({ label: ("邮箱"), }));
    const __VLS_50 = __VLS_49({ label: ("邮箱"), }, ...__VLS_functionalComponentArgsRest(__VLS_49));
    ({}({ label: ("邮箱"), }));
    // @ts-ignore
    const __VLS_54 = {}
        .ElInput;
    ({}.ElInput);
    ({}.ElInput);
    __VLS_components.ElInput;
    __VLS_components.elInput;
    __VLS_components.ElInput;
    __VLS_components.elInput;
    // @ts-ignore
    [ElInput, ElInput,];
    // @ts-ignore
    const __VLS_55 = __VLS_asFunctionalComponent(__VLS_54, new __VLS_54({ modelValue: ((__VLS_ctx.ruleForm.email)), }));
    const __VLS_56 = __VLS_55({ modelValue: ((__VLS_ctx.ruleForm.email)), }, ...__VLS_functionalComponentArgsRest(__VLS_55));
    ({}({ modelValue: ((__VLS_ctx.ruleForm.email)), }));
    // @ts-ignore
    [ruleForm,];
    const __VLS_59 = __VLS_pickFunctionalComponentCtx(__VLS_54, __VLS_56);
    (__VLS_53.slots).default;
    const __VLS_53 = __VLS_pickFunctionalComponentCtx(__VLS_48, __VLS_50);
    // @ts-ignore
    const __VLS_60 = {}
        .ElFormItem;
    ({}.ElFormItem);
    ({}.ElFormItem);
    __VLS_components.ElFormItem;
    __VLS_components.elFormItem;
    __VLS_components.ElFormItem;
    __VLS_components.elFormItem;
    // @ts-ignore
    [ElFormItem, ElFormItem,];
    // @ts-ignore
    const __VLS_61 = __VLS_asFunctionalComponent(__VLS_60, new __VLS_60({ label: ("密码"), }));
    const __VLS_62 = __VLS_61({ label: ("密码"), }, ...__VLS_functionalComponentArgsRest(__VLS_61));
    ({}({ label: ("密码"), }));
    // @ts-ignore
    const __VLS_66 = {}
        .ElInput;
    ({}.ElInput);
    ({}.ElInput);
    __VLS_components.ElInput;
    __VLS_components.elInput;
    __VLS_components.ElInput;
    __VLS_components.elInput;
    // @ts-ignore
    [ElInput, ElInput,];
    // @ts-ignore
    const __VLS_67 = __VLS_asFunctionalComponent(__VLS_66, new __VLS_66({ modelValue: ((__VLS_ctx.ruleForm.password)), }));
    const __VLS_68 = __VLS_67({ modelValue: ((__VLS_ctx.ruleForm.password)), }, ...__VLS_functionalComponentArgsRest(__VLS_67));
    ({}({ modelValue: ((__VLS_ctx.ruleForm.password)), }));
    // @ts-ignore
    [ruleForm,];
    const __VLS_71 = __VLS_pickFunctionalComponentCtx(__VLS_66, __VLS_68);
    (__VLS_65.slots).default;
    const __VLS_65 = __VLS_pickFunctionalComponentCtx(__VLS_60, __VLS_62);
    // @ts-ignore
    const __VLS_72 = {}
        .ElFormItem;
    ({}.ElFormItem);
    ({}.ElFormItem);
    __VLS_components.ElFormItem;
    __VLS_components.elFormItem;
    __VLS_components.ElFormItem;
    __VLS_components.elFormItem;
    // @ts-ignore
    [ElFormItem, ElFormItem,];
    // @ts-ignore
    const __VLS_73 = __VLS_asFunctionalComponent(__VLS_72, new __VLS_72({}));
    const __VLS_74 = __VLS_73({}, ...__VLS_functionalComponentArgsRest(__VLS_73));
    ({}({}));
    // @ts-ignore
    const __VLS_78 = {}
        .ElButton;
    ({}.ElButton);
    ({}.ElButton);
    __VLS_components.ElButton;
    __VLS_components.elButton;
    __VLS_components.ElButton;
    __VLS_components.elButton;
    // @ts-ignore
    [ElButton, ElButton,];
    // @ts-ignore
    const __VLS_79 = __VLS_asFunctionalComponent(__VLS_78, new __VLS_78({ ...{ 'onClick': {} }, type: ("primary"), }));
    const __VLS_80 = __VLS_79({ ...{ 'onClick': {} }, type: ("primary"), }, ...__VLS_functionalComponentArgsRest(__VLS_79));
    ({}({ ...{ 'onClick': {} }, type: ("primary"), }));
    let __VLS_84;
    const __VLS_85 = {
        onClick: (...[$event]) => {
            __VLS_ctx.updateUserInfo(__VLS_ctx.ruleFormRef);
            // @ts-ignore
            [ruleFormRef, updateUserInfo,];
        }
    };
    (__VLS_83.slots).default;
    const __VLS_83 = __VLS_pickFunctionalComponentCtx(__VLS_78, __VLS_80);
    let __VLS_81;
    let __VLS_82;
    (__VLS_77.slots).default;
    const __VLS_77 = __VLS_pickFunctionalComponentCtx(__VLS_72, __VLS_74);
    (__VLS_11.slots).default;
    const __VLS_11 = __VLS_pickFunctionalComponentCtx(__VLS_6, __VLS_8);
    (__VLS_5.slots).default;
    const __VLS_5 = __VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2);
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
        __VLS_styleScopedClasses['user-profile'];
        __VLS_styleScopedClasses['upload-demo'];
        __VLS_styleScopedClasses['el-upload__tip'];
    }
    var __VLS_slots;
    return __VLS_slots;
    const __VLS_componentsOption = {};
    let __VLS_name;
    let __VLS_defineComponent;
    const __VLS_internalComponent = __VLS_defineComponent({
        setup() {
            return {
                ElForm: ElForm,
                ElFormItem: ElFormItem,
                ElInput: ElInput,
                ElButton: ElButton,
                handleRemove: handleRemove,
                ruleFormRef: ruleFormRef,
                ruleForm: ruleForm,
                rules: rules,
                handlePreview: handlePreview,
                handleExceed: handleExceed,
                handleSuccess: handleSuccess,
                beforeRemove: beforeRemove,
                fileList: fileList,
                updateUserInfo: updateUserInfo,
            };
        },
    });
}
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
});
;
//# sourceMappingURL=PersonCenter.vue.js.map