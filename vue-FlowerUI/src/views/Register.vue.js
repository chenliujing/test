import { reactive, ref } from 'vue';
import { register } from '../api/index';
import { ElMessage, ElMessageBox } from 'element-plus';
import router from '../routes';
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const fileList = ref();
console.log(fileList);
const url = ref();
const handleSuccess = async (response, file) => {
    console.log(response);
    if (response && response.result) {
        url.value = response.result;
    }
    else {
        ElMessage.error('上传失败，服务器未返回有效结果');
    }
};
// const url=fileList.value[0].response.result
const handleRemove = (file, uploadFiles) => {
    console.log(file, uploadFiles);
};
const handlePreview = (uploadFile) => {
    console.log(uploadFile);
};
const handleExceed = (files, uploadFiles) => {
    ElMessage.warning(`The limit is 3, you selected ${files.length} files this time, add up to ${files.length + uploadFiles.length} totally`);
};
const beforeRemove = (uploadFile, uploadFiles) => {
    return ElMessageBox.confirm(`Cancel the transfer of ${uploadFile.name} ?`).then(() => true, () => false);
};
const formSize = ref('default');
const ruleFormRef = ref();
const ruleForm = ref({
    name: "",
    password: "",
    email: "",
    checkPass: ""
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
    if (ruleForm.value.checkPass !== '') {
        if (!ruleFormRef.value)
            return;
        ruleFormRef.value.validateField('checkPass');
    }
    // 确保调用 callback 以表示验证成功
    callback();
};
const validatePass2 = (rule, value, callback) => {
    if (value === '') {
        callback(new Error('请再次输入密码'));
    }
    else if (value !== ruleForm.value.password) {
        callback(new Error('两次密码不匹配'));
    }
    else {
        callback(); // 确保在验证通过时调用 callback
    }
};
const rules = reactive({
    password: [{ validator: validatePass, trigger: 'blur' }],
    checkPass: [{ validator: validatePass2, trigger: 'blur' }],
    email: [{ validator: checkEmail, trigger: 'blur' }], // 添加 email 验证规则
    name: [{ validator: checkUserName, trigger: 'blur' }]
});
const submitForm = async (formEl) => {
    if (!formEl)
        return;
    await formEl.validate(async (valid) => {
        if (valid) {
            const params = {
                Name: ruleForm.value.name,
                Email: ruleForm.value.email,
                Password: ruleForm.value.password,
                ImgUrl: url.value,
            };
            console.log(params);
            const response = await register(params);
            console.log(response);
            if (response) {
                alert("注册成功");
                router.push("/login");
            }
            console.log('submit!');
        }
        else {
            console.log('error submit!');
        }
    });
};
const resetForm = (formEl) => {
    if (!formEl)
        return;
    formEl.resetFields();
};
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
    const __VLS_7 = __VLS_asFunctionalComponent(__VLS_6, new __VLS_6({ ref: ("ruleFormRef"), ...{ style: ({}) }, model: ((__VLS_ctx.ruleForm)), rules: ((__VLS_ctx.rules)), labelWidth: ("auto"), ...{ class: ("demo-ruleForm") }, size: ((__VLS_ctx.formSize)), statusIcon: (true), }));
    const __VLS_8 = __VLS_7({ ref: ("ruleFormRef"), ...{ style: ({}) }, model: ((__VLS_ctx.ruleForm)), rules: ((__VLS_ctx.rules)), labelWidth: ("auto"), ...{ class: ("demo-ruleForm") }, size: ((__VLS_ctx.formSize)), statusIcon: (true), }, ...__VLS_functionalComponentArgsRest(__VLS_7));
    ({}({ ref: ("ruleFormRef"), ...{ style: ({}) }, model: ((__VLS_ctx.ruleForm)), rules: ((__VLS_ctx.rules)), labelWidth: ("auto"), ...{ class: ("demo-ruleForm") }, size: ((__VLS_ctx.formSize)), statusIcon: (true), }));
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
    const __VLS_13 = __VLS_asFunctionalComponent(__VLS_12, new __VLS_12({ label: ("用户名"), prop: ("name"), }));
    const __VLS_14 = __VLS_13({ label: ("用户名"), prop: ("name"), }, ...__VLS_functionalComponentArgsRest(__VLS_13));
    ({}({ label: ("用户名"), prop: ("name"), }));
    // @ts-ignore
    const __VLS_18 = {}
        .ElInput;
    ({}.ElInput);
    __VLS_components.ElInput;
    __VLS_components.elInput;
    // @ts-ignore
    [ElInput,];
    // @ts-ignore
    const __VLS_19 = __VLS_asFunctionalComponent(__VLS_18, new __VLS_18({ modelValue: ((__VLS_ctx.ruleForm.name)), }));
    const __VLS_20 = __VLS_19({ modelValue: ((__VLS_ctx.ruleForm.name)), }, ...__VLS_functionalComponentArgsRest(__VLS_19));
    ({}({ modelValue: ((__VLS_ctx.ruleForm.name)), }));
    // @ts-ignore
    [ruleForm, ruleForm, rules, formSize, ruleFormRef,];
    const __VLS_23 = __VLS_pickFunctionalComponentCtx(__VLS_18, __VLS_20);
    (__VLS_17.slots).default;
    const __VLS_17 = __VLS_pickFunctionalComponentCtx(__VLS_12, __VLS_14);
    // @ts-ignore
    const __VLS_24 = {}
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
    const __VLS_25 = __VLS_asFunctionalComponent(__VLS_24, new __VLS_24({ label: ("密码"), prop: ("password"), }));
    const __VLS_26 = __VLS_25({ label: ("密码"), prop: ("password"), }, ...__VLS_functionalComponentArgsRest(__VLS_25));
    ({}({ label: ("密码"), prop: ("password"), }));
    // @ts-ignore
    const __VLS_30 = {}
        .ElInput;
    ({}.ElInput);
    __VLS_components.ElInput;
    __VLS_components.elInput;
    // @ts-ignore
    [ElInput,];
    // @ts-ignore
    const __VLS_31 = __VLS_asFunctionalComponent(__VLS_30, new __VLS_30({ type: ("password"), modelValue: ((__VLS_ctx.ruleForm.password)), }));
    const __VLS_32 = __VLS_31({ type: ("password"), modelValue: ((__VLS_ctx.ruleForm.password)), }, ...__VLS_functionalComponentArgsRest(__VLS_31));
    ({}({ type: ("password"), modelValue: ((__VLS_ctx.ruleForm.password)), }));
    // @ts-ignore
    [ruleForm,];
    const __VLS_35 = __VLS_pickFunctionalComponentCtx(__VLS_30, __VLS_32);
    (__VLS_29.slots).default;
    const __VLS_29 = __VLS_pickFunctionalComponentCtx(__VLS_24, __VLS_26);
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
    const __VLS_37 = __VLS_asFunctionalComponent(__VLS_36, new __VLS_36({ label: ("确认密码"), prop: ("checkPass"), }));
    const __VLS_38 = __VLS_37({ label: ("确认密码"), prop: ("checkPass"), }, ...__VLS_functionalComponentArgsRest(__VLS_37));
    ({}({ label: ("确认密码"), prop: ("checkPass"), }));
    // @ts-ignore
    const __VLS_42 = {}
        .ElInput;
    ({}.ElInput);
    __VLS_components.ElInput;
    __VLS_components.elInput;
    // @ts-ignore
    [ElInput,];
    // @ts-ignore
    const __VLS_43 = __VLS_asFunctionalComponent(__VLS_42, new __VLS_42({ modelValue: ((__VLS_ctx.ruleForm.checkPass)), type: ("password"), autocomplete: ("off"), }));
    const __VLS_44 = __VLS_43({ modelValue: ((__VLS_ctx.ruleForm.checkPass)), type: ("password"), autocomplete: ("off"), }, ...__VLS_functionalComponentArgsRest(__VLS_43));
    ({}({ modelValue: ((__VLS_ctx.ruleForm.checkPass)), type: ("password"), autocomplete: ("off"), }));
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
    const __VLS_49 = __VLS_asFunctionalComponent(__VLS_48, new __VLS_48({ label: ("头像"), }));
    const __VLS_50 = __VLS_49({ label: ("头像"), }, ...__VLS_functionalComponentArgsRest(__VLS_49));
    ({}({ label: ("头像"), }));
    // @ts-ignore
    const __VLS_54 = {}
        .ElAvatar;
    ({}.ElAvatar);
    __VLS_components.ElAvatar;
    __VLS_components.elAvatar;
    // @ts-ignore
    [ElAvatar,];
    // @ts-ignore
    const __VLS_55 = __VLS_asFunctionalComponent(__VLS_54, new __VLS_54({ size: ((50)), src: ((__VLS_ctx.url)), }));
    const __VLS_56 = __VLS_55({ size: ((50)), src: ((__VLS_ctx.url)), }, ...__VLS_functionalComponentArgsRest(__VLS_55));
    ({}({ size: ((50)), src: ((__VLS_ctx.url)), }));
    // @ts-ignore
    [url,];
    const __VLS_59 = __VLS_pickFunctionalComponentCtx(__VLS_54, __VLS_56);
    // @ts-ignore
    const __VLS_60 = {}
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
    const __VLS_61 = __VLS_asFunctionalComponent(__VLS_60, new __VLS_60({ fileList: ((__VLS_ctx.fileList)), ...{ class: ("upload-demo") }, action: ("https://localhost:7288/api/FileUpload/UploadLargeFile/UploadLargeFile"), multiple: (true), onPreview: ((__VLS_ctx.handlePreview)), onRemove: ((__VLS_ctx.handleRemove)), beforeRemove: ((__VLS_ctx.beforeRemove)), onSuccess: ((__VLS_ctx.handleSuccess)), limit: ((1)), onExceed: ((__VLS_ctx.handleExceed)), }));
    const __VLS_62 = __VLS_61({ fileList: ((__VLS_ctx.fileList)), ...{ class: ("upload-demo") }, action: ("https://localhost:7288/api/FileUpload/UploadLargeFile/UploadLargeFile"), multiple: (true), onPreview: ((__VLS_ctx.handlePreview)), onRemove: ((__VLS_ctx.handleRemove)), beforeRemove: ((__VLS_ctx.beforeRemove)), onSuccess: ((__VLS_ctx.handleSuccess)), limit: ((1)), onExceed: ((__VLS_ctx.handleExceed)), }, ...__VLS_functionalComponentArgsRest(__VLS_61));
    ({}({ fileList: ((__VLS_ctx.fileList)), ...{ class: ("upload-demo") }, action: ("https://localhost:7288/api/FileUpload/UploadLargeFile/UploadLargeFile"), multiple: (true), onPreview: ((__VLS_ctx.handlePreview)), onRemove: ((__VLS_ctx.handleRemove)), beforeRemove: ((__VLS_ctx.beforeRemove)), onSuccess: ((__VLS_ctx.handleSuccess)), limit: ((1)), onExceed: ((__VLS_ctx.handleExceed)), }));
    // @ts-ignore
    const __VLS_66 = {}
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
    const __VLS_67 = __VLS_asFunctionalComponent(__VLS_66, new __VLS_66({ type: ("primary"), }));
    const __VLS_68 = __VLS_67({ type: ("primary"), }, ...__VLS_functionalComponentArgsRest(__VLS_67));
    ({}({ type: ("primary"), }));
    // @ts-ignore
    [fileList, handlePreview, handleRemove, beforeRemove, handleSuccess, handleExceed,];
    (__VLS_71.slots).default;
    const __VLS_71 = __VLS_pickFunctionalComponentCtx(__VLS_66, __VLS_68);
    __VLS_elementAsFunction(__VLS_intrinsicElements.template, __VLS_intrinsicElements.template)({});
    {
        (__VLS_65.slots).tip;
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("el-upload__tip") }, });
    }
    const __VLS_65 = __VLS_pickFunctionalComponentCtx(__VLS_60, __VLS_62);
    (__VLS_53.slots).default;
    const __VLS_53 = __VLS_pickFunctionalComponentCtx(__VLS_48, __VLS_50);
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
    const __VLS_73 = __VLS_asFunctionalComponent(__VLS_72, new __VLS_72({ label: ("邮箱"), }));
    const __VLS_74 = __VLS_73({ label: ("邮箱"), }, ...__VLS_functionalComponentArgsRest(__VLS_73));
    ({}({ label: ("邮箱"), }));
    // @ts-ignore
    const __VLS_78 = {}
        .ElInput;
    ({}.ElInput);
    __VLS_components.ElInput;
    __VLS_components.elInput;
    // @ts-ignore
    [ElInput,];
    // @ts-ignore
    const __VLS_79 = __VLS_asFunctionalComponent(__VLS_78, new __VLS_78({ modelValue: ((__VLS_ctx.ruleForm.email)), }));
    const __VLS_80 = __VLS_79({ modelValue: ((__VLS_ctx.ruleForm.email)), }, ...__VLS_functionalComponentArgsRest(__VLS_79));
    ({}({ modelValue: ((__VLS_ctx.ruleForm.email)), }));
    // @ts-ignore
    [ruleForm,];
    const __VLS_83 = __VLS_pickFunctionalComponentCtx(__VLS_78, __VLS_80);
    (__VLS_77.slots).default;
    const __VLS_77 = __VLS_pickFunctionalComponentCtx(__VLS_72, __VLS_74);
    // @ts-ignore
    const __VLS_84 = {}
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
    const __VLS_85 = __VLS_asFunctionalComponent(__VLS_84, new __VLS_84({}));
    const __VLS_86 = __VLS_85({}, ...__VLS_functionalComponentArgsRest(__VLS_85));
    ({}({}));
    // @ts-ignore
    const __VLS_90 = {}
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
    const __VLS_91 = __VLS_asFunctionalComponent(__VLS_90, new __VLS_90({ ...{ 'onClick': {} }, type: ("primary"), }));
    const __VLS_92 = __VLS_91({ ...{ 'onClick': {} }, type: ("primary"), }, ...__VLS_functionalComponentArgsRest(__VLS_91));
    ({}({ ...{ 'onClick': {} }, type: ("primary"), }));
    let __VLS_96;
    const __VLS_97 = {
        onClick: (...[$event]) => {
            __VLS_ctx.submitForm(__VLS_ctx.ruleFormRef);
            // @ts-ignore
            [ruleFormRef, submitForm,];
        }
    };
    (__VLS_95.slots).default;
    const __VLS_95 = __VLS_pickFunctionalComponentCtx(__VLS_90, __VLS_92);
    let __VLS_93;
    let __VLS_94;
    // @ts-ignore
    const __VLS_98 = {}
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
    const __VLS_99 = __VLS_asFunctionalComponent(__VLS_98, new __VLS_98({ ...{ 'onClick': {} }, }));
    const __VLS_100 = __VLS_99({ ...{ 'onClick': {} }, }, ...__VLS_functionalComponentArgsRest(__VLS_99));
    ({}({ ...{ 'onClick': {} }, }));
    let __VLS_104;
    const __VLS_105 = {
        onClick: (...[$event]) => {
            __VLS_ctx.resetForm(__VLS_ctx.ruleFormRef);
            // @ts-ignore
            [ruleFormRef, resetForm,];
        }
    };
    (__VLS_103.slots).default;
    const __VLS_103 = __VLS_pickFunctionalComponentCtx(__VLS_98, __VLS_100);
    let __VLS_101;
    let __VLS_102;
    (__VLS_89.slots).default;
    const __VLS_89 = __VLS_pickFunctionalComponentCtx(__VLS_84, __VLS_86);
    (__VLS_11.slots).default;
    const __VLS_11 = __VLS_pickFunctionalComponentCtx(__VLS_6, __VLS_8);
    (__VLS_5.slots).default;
    const __VLS_5 = __VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2);
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
        __VLS_styleScopedClasses['demo-ruleForm'];
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
                fileList: fileList,
                url: url,
                handleSuccess: handleSuccess,
                handleRemove: handleRemove,
                handlePreview: handlePreview,
                handleExceed: handleExceed,
                beforeRemove: beforeRemove,
                formSize: formSize,
                ruleFormRef: ruleFormRef,
                ruleForm: ruleForm,
                rules: rules,
                submitForm: submitForm,
                resetForm: resetForm,
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
//# sourceMappingURL=Register.vue.js.map