import { ref, defineProps, defineEmits, watch } from 'vue';
import { addCategory, UpdateCategory } from '../../api';
import { ElMessage } from 'element-plus';
const { defineSlots, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const props = defineProps({
    addVisible: Boolean,
    info: Object
});
console.log(props);
const emit = defineEmits(['CloseAdd']);
const category = ref([]);
const form = ref({
    id: 0,
    name: '',
});
console.log(form);
// 监听 props.info 的变化，填充表单
watch(() => props.info, (newInfo, oldInfo) => {
    if (newInfo != undefined) {
        let currInfo = (JSON.parse(newInfo));
        console.log(currInfo);
        form.value = {
            id: currInfo.id,
            name: currInfo.name,
        };
        console.log(form);
    }
    else {
        form.value = {
            id: 0,
            name: "",
        };
    }
});
const handleClose = () => {
    // form.value = {
    //   id: 0,
    //   name: '',
    // };
    emit('CloseAdd');
};
const handleSave = async () => {
    try {
        const params = {
            id: form.value.id,
            name: form.value.name,
        };
        console.log(params);
        if (props.info == undefined) {
            var res = await addCategory(params);
            ElMessage({
                message: '添加成功！',
                type: 'success'
            });
            handleClose(); // 保存成功后关闭对话框
        }
        else {
            await UpdateCategory(params);
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
    const __VLS_15 = __VLS_asFunctionalComponent(__VLS_14, new __VLS_14({ label: ("类别"), }));
    const __VLS_16 = __VLS_15({ label: ("类别"), }, ...__VLS_functionalComponentArgsRest(__VLS_15));
    ({}({ label: ("类别"), }));
    // @ts-ignore
    const __VLS_20 = {}
        .ElInput;
    ({}.ElInput);
    __VLS_components.ElInput;
    __VLS_components.elInput;
    // @ts-ignore
    [ElInput,];
    // @ts-ignore
    const __VLS_21 = __VLS_asFunctionalComponent(__VLS_20, new __VLS_20({ modelValue: ((__VLS_ctx.form.name)), placeholder: ("请输入类别"), }));
    const __VLS_22 = __VLS_21({ modelValue: ((__VLS_ctx.form.name)), placeholder: ("请输入类别"), }, ...__VLS_functionalComponentArgsRest(__VLS_21));
    ({}({ modelValue: ((__VLS_ctx.form.name)), placeholder: ("请输入类别"), }));
    // @ts-ignore
    [info, handleClose, form, form,];
    const __VLS_25 = __VLS_pickFunctionalComponentCtx(__VLS_20, __VLS_22);
    (__VLS_19.slots).default;
    const __VLS_19 = __VLS_pickFunctionalComponentCtx(__VLS_14, __VLS_16);
    (__VLS_13.slots).default;
    const __VLS_13 = __VLS_pickFunctionalComponentCtx(__VLS_8, __VLS_10);
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ slot: ("footer"), ...{ class: ("dialog-footer") }, });
    // @ts-ignore
    const __VLS_26 = {}
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
    const __VLS_27 = __VLS_asFunctionalComponent(__VLS_26, new __VLS_26({ ...{ 'onClick': {} }, }));
    const __VLS_28 = __VLS_27({ ...{ 'onClick': {} }, }, ...__VLS_functionalComponentArgsRest(__VLS_27));
    ({}({ ...{ 'onClick': {} }, }));
    let __VLS_32;
    const __VLS_33 = {
        onClick: (__VLS_ctx.handleClose)
    };
    // @ts-ignore
    [handleClose,];
    (__VLS_31.slots).default;
    const __VLS_31 = __VLS_pickFunctionalComponentCtx(__VLS_26, __VLS_28);
    let __VLS_29;
    let __VLS_30;
    // @ts-ignore
    const __VLS_34 = {}
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
    const __VLS_35 = __VLS_asFunctionalComponent(__VLS_34, new __VLS_34({ ...{ 'onClick': {} }, type: ("primary"), }));
    const __VLS_36 = __VLS_35({ ...{ 'onClick': {} }, type: ("primary"), }, ...__VLS_functionalComponentArgsRest(__VLS_35));
    ({}({ ...{ 'onClick': {} }, type: ("primary"), }));
    let __VLS_40;
    const __VLS_41 = {
        onClick: (__VLS_ctx.handleSave)
    };
    // @ts-ignore
    [handleSave,];
    (__VLS_39.slots).default;
    const __VLS_39 = __VLS_pickFunctionalComponentCtx(__VLS_34, __VLS_36);
    let __VLS_37;
    let __VLS_38;
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