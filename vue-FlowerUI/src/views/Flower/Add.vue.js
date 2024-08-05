import { ref, defineProps, defineEmits, onMounted, watch } from 'vue';
import { getCategory, addFlower, updateFlower } from '../../api';
import { ElMessage, ElMessageBox } from 'element-plus';
const { defineSlots, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const fileList = ref();
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
    color: '',
    price: 0,
    categoryId: 1,
    number: 0,
    imgUrl: '',
    description: " "
});
// 获取类别数据
const fetchCategory = async () => {
    try {
        const res = await getCategory();
        category.value = res;
        console.log(category);
    }
    catch (error) {
        console.error('获取类别失败:', error);
    }
};
// 初始化数据
onMounted(() => {
    fetchCategory();
});
// 监听 props.info 的变化，填充表单
watch(() => props.info, (newInfo, oldInfo) => {
    if (newInfo != undefined) {
        let currInfo = (JSON.parse(newInfo));
        console.log(currInfo);
        form.value = {
            id: currInfo.id,
            name: currInfo.name,
            color: currInfo.color,
            number: currInfo.number,
            categoryId: currInfo.categoryId,
            price: currInfo.price,
            imgUrl: currInfo.imgUrl,
            description: currInfo.description
        };
        console.log(form);
    }
    else {
        form.value = {
            id: 0,
            name: "",
            color: "",
            number: 0,
            categoryId: 1,
            price: 0,
            imgUrl: '',
            description: ""
        };
        console.log(form);
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
            Color: form.value.color,
            Number: form.value.number,
            CategoryId: form.value.categoryId,
            Price: form.value.price,
            imgUrl: fileList.value[0].response.result,
            description: form.value.description
        };
        console.log(params);
        if (props.info == undefined) {
            await addFlower(params);
            ElMessage({
                message: '添加成功！',
                type: 'success'
            });
            handleClose(); // 保存成功后关闭对话框
        }
        else {
            await updateFlower(params);
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
    const __VLS_27 = __VLS_asFunctionalComponent(__VLS_26, new __VLS_26({ label: ("颜色"), }));
    const __VLS_28 = __VLS_27({ label: ("颜色"), }, ...__VLS_functionalComponentArgsRest(__VLS_27));
    ({}({ label: ("颜色"), }));
    // @ts-ignore
    const __VLS_32 = {}
        .ElInput;
    ({}.ElInput);
    __VLS_components.ElInput;
    __VLS_components.elInput;
    // @ts-ignore
    [ElInput,];
    // @ts-ignore
    const __VLS_33 = __VLS_asFunctionalComponent(__VLS_32, new __VLS_32({ modelValue: ((__VLS_ctx.form.color)), placeholder: ("请输入颜色"), }));
    const __VLS_34 = __VLS_33({ modelValue: ((__VLS_ctx.form.color)), placeholder: ("请输入颜色"), }, ...__VLS_functionalComponentArgsRest(__VLS_33));
    ({}({ modelValue: ((__VLS_ctx.form.color)), placeholder: ("请输入颜色"), }));
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
    const __VLS_39 = __VLS_asFunctionalComponent(__VLS_38, new __VLS_38({ label: ("价格"), }));
    const __VLS_40 = __VLS_39({ label: ("价格"), }, ...__VLS_functionalComponentArgsRest(__VLS_39));
    ({}({ label: ("价格"), }));
    // @ts-ignore
    const __VLS_44 = {}
        .ElInput;
    ({}.ElInput);
    __VLS_components.ElInput;
    __VLS_components.elInput;
    // @ts-ignore
    [ElInput,];
    // @ts-ignore
    const __VLS_45 = __VLS_asFunctionalComponent(__VLS_44, new __VLS_44({ modelValue: ((__VLS_ctx.form.price)), type: ("number"), placeholder: ("请输入价格"), }));
    const __VLS_46 = __VLS_45({ modelValue: ((__VLS_ctx.form.price)), type: ("number"), placeholder: ("请输入价格"), }, ...__VLS_functionalComponentArgsRest(__VLS_45));
    ({}({ modelValue: ((__VLS_ctx.form.price)), type: ("number"), placeholder: ("请输入价格"), }));
    // @ts-ignore
    [form,];
    const __VLS_49 = __VLS_pickFunctionalComponentCtx(__VLS_44, __VLS_46);
    (__VLS_43.slots).default;
    const __VLS_43 = __VLS_pickFunctionalComponentCtx(__VLS_38, __VLS_40);
    // @ts-ignore
    const __VLS_50 = {}
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
    const __VLS_51 = __VLS_asFunctionalComponent(__VLS_50, new __VLS_50({ label: ("描述"), }));
    const __VLS_52 = __VLS_51({ label: ("描述"), }, ...__VLS_functionalComponentArgsRest(__VLS_51));
    ({}({ label: ("描述"), }));
    // @ts-ignore
    const __VLS_56 = {}
        .ElInput;
    ({}.ElInput);
    __VLS_components.ElInput;
    __VLS_components.elInput;
    // @ts-ignore
    [ElInput,];
    // @ts-ignore
    const __VLS_57 = __VLS_asFunctionalComponent(__VLS_56, new __VLS_56({ modelValue: ((__VLS_ctx.form.description)), type: ("textarea"), placeholder: ("请输入鲜花描述"), }));
    const __VLS_58 = __VLS_57({ modelValue: ((__VLS_ctx.form.description)), type: ("textarea"), placeholder: ("请输入鲜花描述"), }, ...__VLS_functionalComponentArgsRest(__VLS_57));
    ({}({ modelValue: ((__VLS_ctx.form.description)), type: ("textarea"), placeholder: ("请输入鲜花描述"), }));
    // @ts-ignore
    [form,];
    const __VLS_61 = __VLS_pickFunctionalComponentCtx(__VLS_56, __VLS_58);
    (__VLS_55.slots).default;
    const __VLS_55 = __VLS_pickFunctionalComponentCtx(__VLS_50, __VLS_52);
    // @ts-ignore
    const __VLS_62 = {}
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
    const __VLS_63 = __VLS_asFunctionalComponent(__VLS_62, new __VLS_62({ label: ("库存"), }));
    const __VLS_64 = __VLS_63({ label: ("库存"), }, ...__VLS_functionalComponentArgsRest(__VLS_63));
    ({}({ label: ("库存"), }));
    // @ts-ignore
    const __VLS_68 = {}
        .ElInput;
    ({}.ElInput);
    __VLS_components.ElInput;
    __VLS_components.elInput;
    // @ts-ignore
    [ElInput,];
    // @ts-ignore
    const __VLS_69 = __VLS_asFunctionalComponent(__VLS_68, new __VLS_68({ modelValue: ((__VLS_ctx.form.number)), type: ("number"), placeholder: ("请输入库存"), }));
    const __VLS_70 = __VLS_69({ modelValue: ((__VLS_ctx.form.number)), type: ("number"), placeholder: ("请输入库存"), }, ...__VLS_functionalComponentArgsRest(__VLS_69));
    ({}({ modelValue: ((__VLS_ctx.form.number)), type: ("number"), placeholder: ("请输入库存"), }));
    // @ts-ignore
    [form,];
    const __VLS_73 = __VLS_pickFunctionalComponentCtx(__VLS_68, __VLS_70);
    (__VLS_67.slots).default;
    const __VLS_67 = __VLS_pickFunctionalComponentCtx(__VLS_62, __VLS_64);
    // @ts-ignore
    const __VLS_74 = {}
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
    const __VLS_75 = __VLS_asFunctionalComponent(__VLS_74, new __VLS_74({ label: ("类别"), }));
    const __VLS_76 = __VLS_75({ label: ("类别"), }, ...__VLS_functionalComponentArgsRest(__VLS_75));
    ({}({ label: ("类别"), }));
    // @ts-ignore
    const __VLS_80 = {}
        .ElSelect;
    ({}.ElSelect);
    ({}.ElSelect);
    __VLS_components.ElSelect;
    __VLS_components.elSelect;
    __VLS_components.ElSelect;
    __VLS_components.elSelect;
    // @ts-ignore
    [ElSelect, ElSelect,];
    // @ts-ignore
    const __VLS_81 = __VLS_asFunctionalComponent(__VLS_80, new __VLS_80({ modelValue: ((__VLS_ctx.form.categoryId)), placeholder: ("请选择类别"), size: ("large"), }));
    const __VLS_82 = __VLS_81({ modelValue: ((__VLS_ctx.form.categoryId)), placeholder: ("请选择类别"), size: ("large"), }, ...__VLS_functionalComponentArgsRest(__VLS_81));
    ({}({ modelValue: ((__VLS_ctx.form.categoryId)), placeholder: ("请选择类别"), size: ("large"), }));
    for (const [item] of __VLS_getVForSourceType((__VLS_ctx.category))) {
        // @ts-ignore
        const __VLS_86 = {}
            .ElOption;
        ({}.ElOption);
        __VLS_components.ElOption;
        __VLS_components.elOption;
        // @ts-ignore
        [ElOption,];
        // @ts-ignore
        const __VLS_87 = __VLS_asFunctionalComponent(__VLS_86, new __VLS_86({ key: ((item.id)), label: ((item.name)), value: ((item.id)), }));
        const __VLS_88 = __VLS_87({ key: ((item.id)), label: ((item.name)), value: ((item.id)), }, ...__VLS_functionalComponentArgsRest(__VLS_87));
        ({}({ key: ((item.id)), label: ((item.name)), value: ((item.id)), }));
        // @ts-ignore
        [form, category,];
        const __VLS_91 = __VLS_pickFunctionalComponentCtx(__VLS_86, __VLS_88);
    }
    (__VLS_85.slots).default;
    const __VLS_85 = __VLS_pickFunctionalComponentCtx(__VLS_80, __VLS_82);
    (__VLS_79.slots).default;
    const __VLS_79 = __VLS_pickFunctionalComponentCtx(__VLS_74, __VLS_76);
    // @ts-ignore
    const __VLS_92 = {}
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
    const __VLS_93 = __VLS_asFunctionalComponent(__VLS_92, new __VLS_92({ label: ("鲜花图片"), }));
    const __VLS_94 = __VLS_93({ label: ("鲜花图片"), }, ...__VLS_functionalComponentArgsRest(__VLS_93));
    ({}({ label: ("鲜花图片"), }));
    // @ts-ignore
    const __VLS_98 = {}
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
    const __VLS_99 = __VLS_asFunctionalComponent(__VLS_98, new __VLS_98({ fileList: ((__VLS_ctx.fileList)), ...{ class: ("upload-demo") }, action: ("https://localhost:7288/api/FileUpload/UploadLargeFile/UploadLargeFile"), multiple: (true), onPreview: ((__VLS_ctx.handlePreview)), onRemove: ((__VLS_ctx.handleRemove)), beforeRemove: ((__VLS_ctx.beforeRemove)), limit: ((1)), onExceed: ((__VLS_ctx.handleExceed)), }));
    const __VLS_100 = __VLS_99({ fileList: ((__VLS_ctx.fileList)), ...{ class: ("upload-demo") }, action: ("https://localhost:7288/api/FileUpload/UploadLargeFile/UploadLargeFile"), multiple: (true), onPreview: ((__VLS_ctx.handlePreview)), onRemove: ((__VLS_ctx.handleRemove)), beforeRemove: ((__VLS_ctx.beforeRemove)), limit: ((1)), onExceed: ((__VLS_ctx.handleExceed)), }, ...__VLS_functionalComponentArgsRest(__VLS_99));
    ({}({ fileList: ((__VLS_ctx.fileList)), ...{ class: ("upload-demo") }, action: ("https://localhost:7288/api/FileUpload/UploadLargeFile/UploadLargeFile"), multiple: (true), onPreview: ((__VLS_ctx.handlePreview)), onRemove: ((__VLS_ctx.handleRemove)), beforeRemove: ((__VLS_ctx.beforeRemove)), limit: ((1)), onExceed: ((__VLS_ctx.handleExceed)), }));
    // @ts-ignore
    const __VLS_104 = {}
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
    const __VLS_105 = __VLS_asFunctionalComponent(__VLS_104, new __VLS_104({ type: ("primary"), }));
    const __VLS_106 = __VLS_105({ type: ("primary"), }, ...__VLS_functionalComponentArgsRest(__VLS_105));
    ({}({ type: ("primary"), }));
    // @ts-ignore
    [fileList, handlePreview, handleRemove, beforeRemove, handleExceed,];
    (__VLS_109.slots).default;
    const __VLS_109 = __VLS_pickFunctionalComponentCtx(__VLS_104, __VLS_106);
    __VLS_elementAsFunction(__VLS_intrinsicElements.template, __VLS_intrinsicElements.template)({});
    {
        (__VLS_103.slots).tip;
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("el-upload__tip") }, });
    }
    const __VLS_103 = __VLS_pickFunctionalComponentCtx(__VLS_98, __VLS_100);
    (__VLS_97.slots).default;
    const __VLS_97 = __VLS_pickFunctionalComponentCtx(__VLS_92, __VLS_94);
    (__VLS_13.slots).default;
    const __VLS_13 = __VLS_pickFunctionalComponentCtx(__VLS_8, __VLS_10);
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ slot: ("footer"), ...{ class: ("dialog-footer") }, });
    // @ts-ignore
    const __VLS_110 = {}
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
    const __VLS_111 = __VLS_asFunctionalComponent(__VLS_110, new __VLS_110({ ...{ 'onClick': {} }, }));
    const __VLS_112 = __VLS_111({ ...{ 'onClick': {} }, }, ...__VLS_functionalComponentArgsRest(__VLS_111));
    ({}({ ...{ 'onClick': {} }, }));
    let __VLS_116;
    const __VLS_117 = {
        onClick: (__VLS_ctx.handleClose)
    };
    // @ts-ignore
    [handleClose,];
    (__VLS_115.slots).default;
    const __VLS_115 = __VLS_pickFunctionalComponentCtx(__VLS_110, __VLS_112);
    let __VLS_113;
    let __VLS_114;
    // @ts-ignore
    const __VLS_118 = {}
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
    const __VLS_119 = __VLS_asFunctionalComponent(__VLS_118, new __VLS_118({ ...{ 'onClick': {} }, type: ("primary"), }));
    const __VLS_120 = __VLS_119({ ...{ 'onClick': {} }, type: ("primary"), }, ...__VLS_functionalComponentArgsRest(__VLS_119));
    ({}({ ...{ 'onClick': {} }, type: ("primary"), }));
    let __VLS_124;
    const __VLS_125 = {
        onClick: (__VLS_ctx.handleSave)
    };
    // @ts-ignore
    [handleSave,];
    (__VLS_123.slots).default;
    const __VLS_123 = __VLS_pickFunctionalComponentCtx(__VLS_118, __VLS_120);
    let __VLS_121;
    let __VLS_122;
    (__VLS_5.slots).default;
    const __VLS_5 = __VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2);
    let __VLS_3;
    let __VLS_4;
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
        __VLS_styleScopedClasses['upload-demo'];
        __VLS_styleScopedClasses['el-upload__tip'];
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
                fileList: fileList,
                handleRemove: handleRemove,
                handlePreview: handlePreview,
                handleExceed: handleExceed,
                beforeRemove: beforeRemove,
                category: category,
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