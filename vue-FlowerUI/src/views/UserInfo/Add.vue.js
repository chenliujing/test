import { ref, defineProps, defineEmits, onMounted, watch } from 'vue';
import { getRoles, addUser, UpdateUser } from '../../api';
import { ElMessage } from 'element-plus';
const { defineSlots, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const props = defineProps({
    addVisible: Boolean,
    info: Object
});
console.log(props);
const emit = defineEmits(['CloseAdd']);
const RoleName = ref([]);
const form = ref({
    id: 0,
    name: '',
    password: "",
    email: "",
});
// 获取角色数据
const fetchRole = async () => {
    try {
        const res = await getRoles();
        RoleName.value = res;
        console.log(RoleName);
    }
    catch (error) {
        console.error('获取角色失败:', error);
    }
};
// 初始化数据
onMounted(() => {
    fetchRole();
});
// 监听 props.info 的变化，填充表单
watch(() => props.info, (newInfo, oldInfo) => {
    if (newInfo != undefined) {
        let currInfo = (JSON.parse(newInfo));
        console.log(currInfo);
        form.value = {
            id: currInfo.id,
            name: currInfo.name,
            email: currInfo.email,
            password: currInfo.password,
        };
        console.log(form);
    }
    else {
        form.value = {
            id: 0,
            name: '',
            email: '',
            password: '',
        };
    }
});
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
        console.log(params);
        if (props.info == undefined) {
            await addUser(params);
            ElMessage({
                message: '添加成功！',
                type: 'success'
            });
            handleClose(); // 保存成功后关闭对话框
        }
        else {
            await UpdateUser(params);
            ElMessage({
                message: '修改成功！',
                type: 'success'
            });
            handleClose(); // 保存成功后关闭对话框
        }
    }
    catch (error) {
        ElMessage({
            message: '保存失败，请重试。',
            type: 'error'
        });
        console.error('添加失败:', error);
    }
};
const __VLS_fnComponent = (await import('vue')).defineComponent({
    props: {
        addVisible: Boolean,
        info: Object
    },
    emits: {},
});
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
        .ElDialog;
    ({}.ElDialog);
    ({}.ElDialog);
    __VLS_components.ElDialog;
    __VLS_components.elDialog;
    __VLS_components.ElDialog;
    __VLS_components.elDialog;
    // @ts-ignore
    [ElDialog, ElDialog,];
    // @ts-ignore
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({ ...{ 'onClose': {} }, modelValue: ((props.addVisible)), title: ((__VLS_ctx.info == undefined ? '新增' : '修改')), }));
    const __VLS_2 = __VLS_1({ ...{ 'onClose': {} }, modelValue: ((props.addVisible)), title: ((__VLS_ctx.info == undefined ? '新增' : '修改')), }, ...__VLS_functionalComponentArgsRest(__VLS_1));
    ({}({ ...{ 'onClose': {} }, modelValue: ((props.addVisible)), title: ((__VLS_ctx.info == undefined ? '新增' : '修改')), }));
    let __VLS_6;
    const __VLS_7 = {
        onClose: (__VLS_ctx.handleClose)
    };
    // @ts-ignore
    const __VLS_8 = {}
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
    const __VLS_9 = __VLS_asFunctionalComponent(__VLS_8, new __VLS_8({ model: ((__VLS_ctx.form)), labelWidth: ("80px"), }));
    const __VLS_10 = __VLS_9({ model: ((__VLS_ctx.form)), labelWidth: ("80px"), }, ...__VLS_functionalComponentArgsRest(__VLS_9));
    ({}({ model: ((__VLS_ctx.form)), labelWidth: ("80px"), }));
    // @ts-ignore
    const __VLS_14 = {}
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
    const __VLS_15 = __VLS_asFunctionalComponent(__VLS_14, new __VLS_14({ label: ("名字"), }));
    const __VLS_16 = __VLS_15({ label: ("名字"), }, ...__VLS_functionalComponentArgsRest(__VLS_15));
    ({}({ label: ("名字"), }));
    // @ts-ignore
    const __VLS_20 = {}
        .ElInput;
    ({}.ElInput);
    __VLS_components.ElInput;
    __VLS_components.elInput;
    // @ts-ignore
    [ElInput,];
    // @ts-ignore
    const __VLS_21 = __VLS_asFunctionalComponent(__VLS_20, new __VLS_20({ modelValue: ((__VLS_ctx.form.name)), placeholder: ("请输入名字"), }));
    const __VLS_22 = __VLS_21({ modelValue: ((__VLS_ctx.form.name)), placeholder: ("请输入名字"), }, ...__VLS_functionalComponentArgsRest(__VLS_21));
    ({}({ modelValue: ((__VLS_ctx.form.name)), placeholder: ("请输入名字"), }));
    // @ts-ignore
    [info, handleClose, form, form,];
    const __VLS_25 = __VLS_pickFunctionalComponentCtx(__VLS_20, __VLS_22);
    (__VLS_19.slots).default;
    const __VLS_19 = __VLS_pickFunctionalComponentCtx(__VLS_14, __VLS_16);
    // @ts-ignore
    const __VLS_26 = {}
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
    const __VLS_27 = __VLS_asFunctionalComponent(__VLS_26, new __VLS_26({ label: ("邮箱"), }));
    const __VLS_28 = __VLS_27({ label: ("邮箱"), }, ...__VLS_functionalComponentArgsRest(__VLS_27));
    ({}({ label: ("邮箱"), }));
    // @ts-ignore
    const __VLS_32 = {}
        .ElInput;
    ({}.ElInput);
    __VLS_components.ElInput;
    __VLS_components.elInput;
    // @ts-ignore
    [ElInput,];
    // @ts-ignore
    const __VLS_33 = __VLS_asFunctionalComponent(__VLS_32, new __VLS_32({ modelValue: ((__VLS_ctx.form.email)), placeholder: ("请输入邮箱"), }));
    const __VLS_34 = __VLS_33({ modelValue: ((__VLS_ctx.form.email)), placeholder: ("请输入邮箱"), }, ...__VLS_functionalComponentArgsRest(__VLS_33));
    ({}({ modelValue: ((__VLS_ctx.form.email)), placeholder: ("请输入邮箱"), }));
    // @ts-ignore
    [form,];
    const __VLS_37 = __VLS_pickFunctionalComponentCtx(__VLS_32, __VLS_34);
    (__VLS_31.slots).default;
    const __VLS_31 = __VLS_pickFunctionalComponentCtx(__VLS_26, __VLS_28);
    // @ts-ignore
    const __VLS_38 = {}
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
    const __VLS_39 = __VLS_asFunctionalComponent(__VLS_38, new __VLS_38({ label: ("密码"), }));
    const __VLS_40 = __VLS_39({ label: ("密码"), }, ...__VLS_functionalComponentArgsRest(__VLS_39));
    ({}({ label: ("密码"), }));
    // @ts-ignore
    const __VLS_44 = {}
        .ElInput;
    ({}.ElInput);
    __VLS_components.ElInput;
    __VLS_components.elInput;
    // @ts-ignore
    [ElInput,];
    // @ts-ignore
    const __VLS_45 = __VLS_asFunctionalComponent(__VLS_44, new __VLS_44({ modelValue: ((__VLS_ctx.form.password)), placeholder: ("请输入密码"), }));
    const __VLS_46 = __VLS_45({ modelValue: ((__VLS_ctx.form.password)), placeholder: ("请输入密码"), }, ...__VLS_functionalComponentArgsRest(__VLS_45));
    ({}({ modelValue: ((__VLS_ctx.form.password)), placeholder: ("请输入密码"), }));
    // @ts-ignore
    [form,];
    const __VLS_49 = __VLS_pickFunctionalComponentCtx(__VLS_44, __VLS_46);
    (__VLS_43.slots).default;
    const __VLS_43 = __VLS_pickFunctionalComponentCtx(__VLS_38, __VLS_40);
    (__VLS_13.slots).default;
    const __VLS_13 = __VLS_pickFunctionalComponentCtx(__VLS_8, __VLS_10);
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ slot: ("footer"), ...{ class: ("dialog-footer") }, });
    // @ts-ignore
    const __VLS_50 = {}
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
    const __VLS_51 = __VLS_asFunctionalComponent(__VLS_50, new __VLS_50({ ...{ 'onClick': {} }, }));
    const __VLS_52 = __VLS_51({ ...{ 'onClick': {} }, }, ...__VLS_functionalComponentArgsRest(__VLS_51));
    ({}({ ...{ 'onClick': {} }, }));
    let __VLS_56;
    const __VLS_57 = {
        onClick: (__VLS_ctx.handleClose)
    };
    // @ts-ignore
    [handleClose,];
    (__VLS_55.slots).default;
    const __VLS_55 = __VLS_pickFunctionalComponentCtx(__VLS_50, __VLS_52);
    let __VLS_53;
    let __VLS_54;
    // @ts-ignore
    const __VLS_58 = {}
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
    const __VLS_59 = __VLS_asFunctionalComponent(__VLS_58, new __VLS_58({ ...{ 'onClick': {} }, type: ("primary"), }));
    const __VLS_60 = __VLS_59({ ...{ 'onClick': {} }, type: ("primary"), }, ...__VLS_functionalComponentArgsRest(__VLS_59));
    ({}({ ...{ 'onClick': {} }, type: ("primary"), }));
    let __VLS_64;
    const __VLS_65 = {
        onClick: (__VLS_ctx.handleSave)
    };
    // @ts-ignore
    [handleSave,];
    (__VLS_63.slots).default;
    const __VLS_63 = __VLS_pickFunctionalComponentCtx(__VLS_58, __VLS_60);
    let __VLS_61;
    let __VLS_62;
    (__VLS_5.slots).default;
    const __VLS_5 = __VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2);
    let __VLS_3;
    let __VLS_4;
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
        __VLS_styleScopedClasses['dialog-footer'];
    }
    var __VLS_slots;
    return __VLS_slots;
    const __VLS_componentsOption = {};
    let __VLS_name;
    let __VLS_defineComponent;
    const __VLS_internalComponent = __VLS_defineComponent({
        setup() {
            return {
                form: form,
                handleClose: handleClose,
                handleSave: handleSave,
            };
        },
        props: {
            addVisible: Boolean,
            info: Object
        },
        emits: {},
    });
}
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
    props: {
        addVisible: Boolean,
        info: Object
    },
    emits: {},
});
;
//# sourceMappingURL=Add.vue.js.map