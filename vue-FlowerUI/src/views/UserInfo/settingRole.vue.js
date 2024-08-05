import { ref, defineProps, defineEmits, onMounted, watch } from 'vue';
import { getRoles, getRoleByUserId, settingRole } from '../../api/index';
import { ElMessage } from 'element-plus';
const { defineSlots, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
let __VLS_typeProps;
const props = defineProps();
const emit = defineEmits();
const form = ref({
    roleId: [],
});
const tableData = ref([]);
// 获取用户已经有的角色
const getUserRole = async (userId) => {
    try {
        const roles = await getRoleByUserId(userId);
        console.log(roles);
        // 提取角色 ID，并设置 form.roleId
        const roleIds = roles.map(role => role.id);
        form.value.roleId = roleIds;
        console.log(form);
    }
    catch (error) {
        console.error('获取用户角色失败:', error);
    }
};
// 监听 props.personId 的变化
watch(() => props.personId, (newPersonId) => {
    if (newPersonId !== undefined) {
        getUserRole(newPersonId);
    }
}, { immediate: true });
onMounted(async () => {
    try {
        const roles = await getRoles();
        tableData.value = roles;
        console.log(tableData);
    }
    catch (error) {
        console.error('获取角色列表失败:', error);
    }
});
const submit = async () => {
    try {
        console.log(form);
        const userRole = form.value.roleId.map(id => ({
            roleId: id,
            userId: props.personId,
        }));
        console.log(userRole);
        const response = await settingRole(userRole);
        if (response) {
            ElMessage({
                message: '添加成功！',
                type: 'success',
            });
            const roles = await getRoles();
            tableData.value = roles;
            handleClose(); // 保存成功后关闭对话框
        }
    }
    catch (error) {
        ElMessage({
            message: '保存失败，请重试。',
            type: 'error',
        });
        console.error('添加失败:', error);
    }
};
const handleClose = () => {
    emit('CloseSetingRole');
};
const __VLS_fnComponent = (await import('vue')).defineComponent({
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
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({ visible: ((props.setingRoleVisible)), title: ("分配角色"), width: ("50%"), beforeClose: ((__VLS_ctx.handleClose)), }));
    const __VLS_2 = __VLS_1({ visible: ((props.setingRoleVisible)), title: ("分配角色"), width: ("50%"), beforeClose: ((__VLS_ctx.handleClose)), }, ...__VLS_functionalComponentArgsRest(__VLS_1));
    ({}({ visible: ((props.setingRoleVisible)), title: ("分配角色"), width: ("50%"), beforeClose: ((__VLS_ctx.handleClose)), }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("content") }, });
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
    const __VLS_7 = __VLS_asFunctionalComponent(__VLS_6, new __VLS_6({ model: ((__VLS_ctx.form)), ref: ("multipleTableRef"), labelWidth: ("100px"), }));
    const __VLS_8 = __VLS_7({ model: ((__VLS_ctx.form)), ref: ("multipleTableRef"), labelWidth: ("100px"), }, ...__VLS_functionalComponentArgsRest(__VLS_7));
    ({}({ model: ((__VLS_ctx.form)), ref: ("multipleTableRef"), labelWidth: ("100px"), }));
    // @ts-ignore
    (__VLS_ctx.multipleTableRef);
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
    const __VLS_13 = __VLS_asFunctionalComponent(__VLS_12, new __VLS_12({ label: ("角色"), }));
    const __VLS_14 = __VLS_13({ label: ("角色"), }, ...__VLS_functionalComponentArgsRest(__VLS_13));
    ({}({ label: ("角色"), }));
    // @ts-ignore
    const __VLS_18 = {}
        .ElCheckboxGroup;
    ({}.ElCheckboxGroup);
    ({}.ElCheckboxGroup);
    __VLS_components.ElCheckboxGroup;
    __VLS_components.elCheckboxGroup;
    __VLS_components.ElCheckboxGroup;
    __VLS_components.elCheckboxGroup;
    // @ts-ignore
    [ElCheckboxGroup, ElCheckboxGroup,];
    // @ts-ignore
    const __VLS_19 = __VLS_asFunctionalComponent(__VLS_18, new __VLS_18({ modelValue: ((__VLS_ctx.form.roleId)), }));
    const __VLS_20 = __VLS_19({ modelValue: ((__VLS_ctx.form.roleId)), }, ...__VLS_functionalComponentArgsRest(__VLS_19));
    ({}({ modelValue: ((__VLS_ctx.form.roleId)), }));
    for (const [role] of __VLS_getVForSourceType((__VLS_ctx.tableData))) {
        // @ts-ignore
        const __VLS_24 = {}
            .ElCheckbox;
        ({}.ElCheckbox);
        ({}.ElCheckbox);
        __VLS_components.ElCheckbox;
        __VLS_components.elCheckbox;
        __VLS_components.ElCheckbox;
        __VLS_components.elCheckbox;
        // @ts-ignore
        [ElCheckbox, ElCheckbox,];
        // @ts-ignore
        const __VLS_25 = __VLS_asFunctionalComponent(__VLS_24, new __VLS_24({ key: ((role.id)), label: ((role.id)), }));
        const __VLS_26 = __VLS_25({ key: ((role.id)), label: ((role.id)), }, ...__VLS_functionalComponentArgsRest(__VLS_25));
        ({}({ key: ((role.id)), label: ((role.id)), }));
        (role.roleName);
        // @ts-ignore
        [handleClose, form, form, multipleTableRef, tableData,];
        (__VLS_29.slots).default;
        const __VLS_29 = __VLS_pickFunctionalComponentCtx(__VLS_24, __VLS_26);
    }
    (__VLS_23.slots).default;
    const __VLS_23 = __VLS_pickFunctionalComponentCtx(__VLS_18, __VLS_20);
    (__VLS_17.slots).default;
    const __VLS_17 = __VLS_pickFunctionalComponentCtx(__VLS_12, __VLS_14);
    (__VLS_11.slots).default;
    const __VLS_11 = __VLS_pickFunctionalComponentCtx(__VLS_6, __VLS_8);
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("btn") }, });
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
    const __VLS_31 = __VLS_asFunctionalComponent(__VLS_30, new __VLS_30({ ...{ 'onClick': {} }, type: ("primary"), }));
    const __VLS_32 = __VLS_31({ ...{ 'onClick': {} }, type: ("primary"), }, ...__VLS_functionalComponentArgsRest(__VLS_31));
    ({}({ ...{ 'onClick': {} }, type: ("primary"), }));
    let __VLS_36;
    const __VLS_37 = {
        onClick: (__VLS_ctx.submit)
    };
    // @ts-ignore
    [submit,];
    (__VLS_35.slots).default;
    const __VLS_35 = __VLS_pickFunctionalComponentCtx(__VLS_30, __VLS_32);
    let __VLS_33;
    let __VLS_34;
    // @ts-ignore
    const __VLS_38 = {}
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
    const __VLS_39 = __VLS_asFunctionalComponent(__VLS_38, new __VLS_38({ ...{ 'onClick': {} }, }));
    const __VLS_40 = __VLS_39({ ...{ 'onClick': {} }, }, ...__VLS_functionalComponentArgsRest(__VLS_39));
    ({}({ ...{ 'onClick': {} }, }));
    let __VLS_44;
    const __VLS_45 = {
        onClick: (__VLS_ctx.handleClose)
    };
    // @ts-ignore
    [handleClose,];
    (__VLS_43.slots).default;
    const __VLS_43 = __VLS_pickFunctionalComponentCtx(__VLS_38, __VLS_40);
    let __VLS_41;
    let __VLS_42;
    (__VLS_5.slots).default;
    const __VLS_5 = __VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2);
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
        __VLS_styleScopedClasses['content'];
        __VLS_styleScopedClasses['btn'];
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
                tableData: tableData,
                submit: submit,
                handleClose: handleClose,
            };
        },
        props: {},
        emits: {},
    });
}
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
    props: {},
    emits: {},
});
;
//# sourceMappingURL=settingRole.vue.js.map