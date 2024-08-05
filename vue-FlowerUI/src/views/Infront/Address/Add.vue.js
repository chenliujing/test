import { ref, defineProps, defineEmits, watch } from 'vue';
import { pcaTextArr, } from "element-china-area-data";
import { addAddress, updateAddress } from '../../../api';
import { ElMessage } from 'element-plus';
const { defineSlots, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
let selectedOptions = ref([]);
const props = defineProps({
    addVisible: Boolean,
    info: Object
});
console.log(props);
const emit = defineEmits(['CloseAdd']);
const form = ref({
    id: 0,
    province: "",
    city: "",
    county: "",
    street: "",
});
// 获取类别数据
//地区下拉框选择事件
// 监听 props.info 的变化，填充表单
// 监听 props.info 的变化，填充表单
watch(() => props.info, (newInfo) => {
    if (newInfo != undefined) {
        let currInfo = (JSON.parse(newInfo));
        form.value = {
            id: currInfo.id,
            province: currInfo.province,
            city: currInfo.city,
            county: currInfo.county,
            street: currInfo.street,
        };
        console.log(form);
        // 填充联动选择器
        selectedOptions.value = [
            currInfo.province,
            currInfo.city,
            currInfo.county
        ].filter(Boolean); // 过滤掉空值
    }
    else {
        form.value = {
            id: 0,
            province: "",
            city: "",
            county: "",
            street: "",
        };
        selectedOptions.value = [];
    }
});
const handleClose = () => {
    emit('CloseAdd');
};
let userId = sessionStorage.getItem("id");
console.log(userId);
const handleSave = async () => {
    console.log(selectedOptions);
    try {
        const params = {
            id: form.value.id,
            province: selectedOptions.value[0],
            city: selectedOptions.value[1],
            county: selectedOptions.value[2],
            street: form.value.street,
            userId: Number(userId)
        };
        console.log(params);
        console.log(props.info);
        if (props.info == undefined) {
            let response = await addAddress(params);
            if (response) {
                ElMessage({
                    message: '添加成功！',
                    type: 'success'
                });
                handleClose(); // 保存成功后关闭对话框
            }
        }
        else {
            var response = await updateAddress(params);
            if (response) {
                ElMessage({
                    message: '修改成功！',
                    type: 'success'
                });
            }
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
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({ ...{ 'onClose': {} }, modelValue: ((props.addVisible)), title: ((props.info == undefined ? '新增' : '修改')), }));
    const __VLS_2 = __VLS_1({ ...{ 'onClose': {} }, modelValue: ((props.addVisible)), title: ((props.info == undefined ? '新增' : '修改')), }, ...__VLS_functionalComponentArgsRest(__VLS_1));
    ({}({ ...{ 'onClose': {} }, modelValue: ((props.addVisible)), title: ((props.info == undefined ? '新增' : '修改')), }));
    let __VLS_6;
    const __VLS_7 = {
        onClose: (__VLS_ctx.handleClose)
    };
    // @ts-ignore
    const __VLS_8 = {}
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
    const __VLS_9 = __VLS_asFunctionalComponent(__VLS_8, new __VLS_8({ label: ("省/市/区"), }));
    const __VLS_10 = __VLS_9({ label: ("省/市/区"), }, ...__VLS_functionalComponentArgsRest(__VLS_9));
    ({}({ label: ("省/市/区"), }));
    // @ts-ignore
    const __VLS_14 = {}
        .ElCascader;
    ({}.ElCascader);
    ({}.ElCascader);
    __VLS_components.ElCascader;
    __VLS_components.elCascader;
    __VLS_components.ElCascader;
    __VLS_components.elCascader;
    // @ts-ignore
    [ElCascader, ElCascader,];
    // @ts-ignore
    const __VLS_15 = __VLS_asFunctionalComponent(__VLS_14, new __VLS_14({ size: ("large"), options: ((__VLS_ctx.pcaTextArr)), modelValue: ((__VLS_ctx.selectedOptions)), }));
    const __VLS_16 = __VLS_15({ size: ("large"), options: ((__VLS_ctx.pcaTextArr)), modelValue: ((__VLS_ctx.selectedOptions)), }, ...__VLS_functionalComponentArgsRest(__VLS_15));
    ({}({ size: ("large"), options: ((__VLS_ctx.pcaTextArr)), modelValue: ((__VLS_ctx.selectedOptions)), }));
    // @ts-ignore
    [handleClose, pcaTextArr, selectedOptions,];
    const __VLS_19 = __VLS_pickFunctionalComponentCtx(__VLS_14, __VLS_16);
    (__VLS_13.slots).default;
    const __VLS_13 = __VLS_pickFunctionalComponentCtx(__VLS_8, __VLS_10);
    // @ts-ignore
    const __VLS_20 = {}
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
    const __VLS_21 = __VLS_asFunctionalComponent(__VLS_20, new __VLS_20({ label: ("详细地址"), }));
    const __VLS_22 = __VLS_21({ label: ("详细地址"), }, ...__VLS_functionalComponentArgsRest(__VLS_21));
    ({}({ label: ("详细地址"), }));
    // @ts-ignore
    const __VLS_26 = {}
        .ElInput;
    ({}.ElInput);
    __VLS_components.ElInput;
    __VLS_components.elInput;
    // @ts-ignore
    [ElInput,];
    // @ts-ignore
    const __VLS_27 = __VLS_asFunctionalComponent(__VLS_26, new __VLS_26({ modelValue: ((__VLS_ctx.form.street)), placeholder: ("请输入名字"), }));
    const __VLS_28 = __VLS_27({ modelValue: ((__VLS_ctx.form.street)), placeholder: ("请输入名字"), }, ...__VLS_functionalComponentArgsRest(__VLS_27));
    ({}({ modelValue: ((__VLS_ctx.form.street)), placeholder: ("请输入名字"), }));
    // @ts-ignore
    [form,];
    const __VLS_31 = __VLS_pickFunctionalComponentCtx(__VLS_26, __VLS_28);
    (__VLS_25.slots).default;
    const __VLS_25 = __VLS_pickFunctionalComponentCtx(__VLS_20, __VLS_22);
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ slot: ("footer"), ...{ class: ("dialog-footer") }, });
    // @ts-ignore
    const __VLS_32 = {}
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
    const __VLS_33 = __VLS_asFunctionalComponent(__VLS_32, new __VLS_32({ ...{ 'onClick': {} }, }));
    const __VLS_34 = __VLS_33({ ...{ 'onClick': {} }, }, ...__VLS_functionalComponentArgsRest(__VLS_33));
    ({}({ ...{ 'onClick': {} }, }));
    let __VLS_38;
    const __VLS_39 = {
        onClick: (__VLS_ctx.handleClose)
    };
    // @ts-ignore
    [handleClose,];
    (__VLS_37.slots).default;
    const __VLS_37 = __VLS_pickFunctionalComponentCtx(__VLS_32, __VLS_34);
    let __VLS_35;
    let __VLS_36;
    // @ts-ignore
    const __VLS_40 = {}
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
    const __VLS_41 = __VLS_asFunctionalComponent(__VLS_40, new __VLS_40({ ...{ 'onClick': {} }, type: ("primary"), }));
    const __VLS_42 = __VLS_41({ ...{ 'onClick': {} }, type: ("primary"), }, ...__VLS_functionalComponentArgsRest(__VLS_41));
    ({}({ ...{ 'onClick': {} }, type: ("primary"), }));
    let __VLS_46;
    const __VLS_47 = {
        onClick: (__VLS_ctx.handleSave)
    };
    // @ts-ignore
    [handleSave,];
    (__VLS_45.slots).default;
    const __VLS_45 = __VLS_pickFunctionalComponentCtx(__VLS_40, __VLS_42);
    let __VLS_43;
    let __VLS_44;
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
                pcaTextArr: pcaTextArr,
                selectedOptions: selectedOptions,
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