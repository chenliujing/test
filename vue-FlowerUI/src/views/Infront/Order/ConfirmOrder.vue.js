import { ref, watch, defineEmits, defineProps, onMounted } from 'vue';
import { ElDialog, ElForm, ElFormItem, ElTable, ElTableColumn, ElButton, ElMessage } from 'element-plus';
import { addOrderItem, getAddress } from '../../../api';
const { defineSlots, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
let __VLS_typeProps;
const props = defineProps();
console.log(props);
let selectedRow = ref();
const emit = defineEmits(['CloseAdd']);
const formLabelWidth = '140px';
const info = ref(props.form || []);
//获取用户地址
const UserAddress = ref([]);
let userId = Number(sessionStorage.getItem("id"));
const GetUserAddress = async () => {
    UserAddress.value = await getAddress(userId);
};
const calculateTotalPrice = () => {
    return info.value.reduce((total, item) => total + (item.flower.price * item.quantity), 0);
};
onMounted(GetUserAddress);
const handleClose = () => {
    emit('CloseAdd');
};
//确认订单
const Confirm = async () => {
    try {
        const userId = sessionStorage.getItem("id");
        if (!userId) {
            ElMessage.error("用户未登录");
            return;
        }
        console.log(selectedRow);
        if (selectedRow.value == undefined) {
            ElMessage({
                message: "请选择地址",
                type: "error"
            });
        }
        const parms = info.value.map(item => ({
            productId: item.productId,
            quantity: item.quantity,
            userId: Number(userId),
            addressId: selectedRow.value.id
        }));
        console.log(parms);
        const response = await addOrderItem(parms);
        if (response) {
            ElMessage({
                message: "提交成功",
                type: 'success'
            });
        }
        else {
            ElMessage.error("提交失败");
        }
    }
    catch (error) {
        ElMessage.error("提交时发生错误");
    }
};
// 监听 props.form 的变化，更新 info
watch(() => props.form, (newInfo) => {
    if (newInfo !== undefined) {
        info.value = newInfo;
    }
});
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
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({ ...{ 'onClose': {} }, modelValue: ((props.dialogFormVisible)), title: ("确认订单信息"), width: ("800px"), }));
    const __VLS_2 = __VLS_1({ ...{ 'onClose': {} }, modelValue: ((props.dialogFormVisible)), title: ("确认订单信息"), width: ("800px"), }, ...__VLS_functionalComponentArgsRest(__VLS_1));
    ({}({ ...{ 'onClose': {} }, modelValue: ((props.dialogFormVisible)), title: ("确认订单信息"), width: ("800px"), }));
    let __VLS_6;
    const __VLS_7 = {
        onClose: (__VLS_ctx.handleClose)
    };
    // @ts-ignore
    const __VLS_8 = {}
        .ElTable;
    ({}.ElTable);
    ({}.ElTable);
    __VLS_components.ElTable;
    __VLS_components.elTable;
    __VLS_components.ElTable;
    __VLS_components.elTable;
    // @ts-ignore
    [ElTable, ElTable,];
    // @ts-ignore
    const __VLS_9 = __VLS_asFunctionalComponent(__VLS_8, new __VLS_8({ data: ((__VLS_ctx.UserAddress)), ...{ style: ({}) }, }));
    const __VLS_10 = __VLS_9({ data: ((__VLS_ctx.UserAddress)), ...{ style: ({}) }, }, ...__VLS_functionalComponentArgsRest(__VLS_9));
    ({}({ data: ((__VLS_ctx.UserAddress)), ...{ style: ({}) }, }));
    // @ts-ignore
    const __VLS_14 = {}
        .ElTableColumn;
    ({}.ElTableColumn);
    ({}.ElTableColumn);
    __VLS_components.ElTableColumn;
    __VLS_components.elTableColumn;
    __VLS_components.ElTableColumn;
    __VLS_components.elTableColumn;
    // @ts-ignore
    [ElTableColumn, ElTableColumn,];
    // @ts-ignore
    const __VLS_15 = __VLS_asFunctionalComponent(__VLS_14, new __VLS_14({ type: ("selection"), width: ("55"), }));
    const __VLS_16 = __VLS_15({ type: ("selection"), width: ("55"), }, ...__VLS_functionalComponentArgsRest(__VLS_15));
    ({}({ type: ("selection"), width: ("55"), }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.template, __VLS_intrinsicElements.template)({});
    {
        const [{ row }] = __VLS_getSlotParams((__VLS_19.slots).default);
        // @ts-ignore
        const __VLS_20 = {}
            .ElRadio;
        ({}.ElRadio);
        ({}.ElRadio);
        __VLS_components.ElRadio;
        __VLS_components.elRadio;
        __VLS_components.ElRadio;
        __VLS_components.elRadio;
        // @ts-ignore
        [ElRadio, ElRadio,];
        // @ts-ignore
        const __VLS_21 = __VLS_asFunctionalComponent(__VLS_20, new __VLS_20({ value: ((row)), modelValue: ((__VLS_ctx.selectedRow)), }));
        const __VLS_22 = __VLS_21({ value: ((row)), modelValue: ((__VLS_ctx.selectedRow)), }, ...__VLS_functionalComponentArgsRest(__VLS_21));
        ({}({ value: ((row)), modelValue: ((__VLS_ctx.selectedRow)), }));
        // @ts-ignore
        [handleClose, UserAddress, selectedRow,];
        const __VLS_25 = __VLS_pickFunctionalComponentCtx(__VLS_20, __VLS_22);
    }
    const __VLS_19 = __VLS_pickFunctionalComponentCtx(__VLS_14, __VLS_16);
    // @ts-ignore
    const __VLS_26 = {}
        .ElTableColumn;
    ({}.ElTableColumn);
    ({}.ElTableColumn);
    __VLS_components.ElTableColumn;
    __VLS_components.elTableColumn;
    __VLS_components.ElTableColumn;
    __VLS_components.elTableColumn;
    // @ts-ignore
    [ElTableColumn, ElTableColumn,];
    // @ts-ignore
    const __VLS_27 = __VLS_asFunctionalComponent(__VLS_26, new __VLS_26({ prop: ("province"), }));
    const __VLS_28 = __VLS_27({ prop: ("province"), }, ...__VLS_functionalComponentArgsRest(__VLS_27));
    ({}({ prop: ("province"), }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.template, __VLS_intrinsicElements.template)({});
    {
        const [{ row }] = __VLS_getSlotParams((__VLS_31.slots).default);
        (row.province);
    }
    const __VLS_31 = __VLS_pickFunctionalComponentCtx(__VLS_26, __VLS_28);
    // @ts-ignore
    const __VLS_32 = {}
        .ElTableColumn;
    ({}.ElTableColumn);
    ({}.ElTableColumn);
    __VLS_components.ElTableColumn;
    __VLS_components.elTableColumn;
    __VLS_components.ElTableColumn;
    __VLS_components.elTableColumn;
    // @ts-ignore
    [ElTableColumn, ElTableColumn,];
    // @ts-ignore
    const __VLS_33 = __VLS_asFunctionalComponent(__VLS_32, new __VLS_32({ prop: ("city"), }));
    const __VLS_34 = __VLS_33({ prop: ("city"), }, ...__VLS_functionalComponentArgsRest(__VLS_33));
    ({}({ prop: ("city"), }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.template, __VLS_intrinsicElements.template)({});
    {
        const [{ row }] = __VLS_getSlotParams((__VLS_37.slots).default);
        (row.city);
    }
    const __VLS_37 = __VLS_pickFunctionalComponentCtx(__VLS_32, __VLS_34);
    // @ts-ignore
    const __VLS_38 = {}
        .ElTableColumn;
    ({}.ElTableColumn);
    ({}.ElTableColumn);
    __VLS_components.ElTableColumn;
    __VLS_components.elTableColumn;
    __VLS_components.ElTableColumn;
    __VLS_components.elTableColumn;
    // @ts-ignore
    [ElTableColumn, ElTableColumn,];
    // @ts-ignore
    const __VLS_39 = __VLS_asFunctionalComponent(__VLS_38, new __VLS_38({ prop: ("county"), }));
    const __VLS_40 = __VLS_39({ prop: ("county"), }, ...__VLS_functionalComponentArgsRest(__VLS_39));
    ({}({ prop: ("county"), }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.template, __VLS_intrinsicElements.template)({});
    {
        const [{ row }] = __VLS_getSlotParams((__VLS_43.slots).default);
        (row.county);
    }
    const __VLS_43 = __VLS_pickFunctionalComponentCtx(__VLS_38, __VLS_40);
    // @ts-ignore
    const __VLS_44 = {}
        .ElTableColumn;
    ({}.ElTableColumn);
    ({}.ElTableColumn);
    __VLS_components.ElTableColumn;
    __VLS_components.elTableColumn;
    __VLS_components.ElTableColumn;
    __VLS_components.elTableColumn;
    // @ts-ignore
    [ElTableColumn, ElTableColumn,];
    // @ts-ignore
    const __VLS_45 = __VLS_asFunctionalComponent(__VLS_44, new __VLS_44({ prop: ("street"), }));
    const __VLS_46 = __VLS_45({ prop: ("street"), }, ...__VLS_functionalComponentArgsRest(__VLS_45));
    ({}({ prop: ("street"), }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.template, __VLS_intrinsicElements.template)({});
    {
        const [{ row }] = __VLS_getSlotParams((__VLS_49.slots).default);
        (row.street);
    }
    const __VLS_49 = __VLS_pickFunctionalComponentCtx(__VLS_44, __VLS_46);
    (__VLS_13.slots).default;
    const __VLS_13 = __VLS_pickFunctionalComponentCtx(__VLS_8, __VLS_10);
    // @ts-ignore
    const __VLS_50 = {}
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
    const __VLS_51 = __VLS_asFunctionalComponent(__VLS_50, new __VLS_50({ model: ((props.form)), }));
    const __VLS_52 = __VLS_51({ model: ((props.form)), }, ...__VLS_functionalComponentArgsRest(__VLS_51));
    ({}({ model: ((props.form)), }));
    // @ts-ignore
    const __VLS_56 = {}
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
    const __VLS_57 = __VLS_asFunctionalComponent(__VLS_56, new __VLS_56({ label: ("订单详情"), labelWidth: ((__VLS_ctx.formLabelWidth)), }));
    const __VLS_58 = __VLS_57({ label: ("订单详情"), labelWidth: ((__VLS_ctx.formLabelWidth)), }, ...__VLS_functionalComponentArgsRest(__VLS_57));
    ({}({ label: ("订单详情"), labelWidth: ((__VLS_ctx.formLabelWidth)), }));
    // @ts-ignore
    const __VLS_62 = {}
        .ElTable;
    ({}.ElTable);
    ({}.ElTable);
    __VLS_components.ElTable;
    __VLS_components.elTable;
    __VLS_components.ElTable;
    __VLS_components.elTable;
    // @ts-ignore
    [ElTable, ElTable,];
    // @ts-ignore
    const __VLS_63 = __VLS_asFunctionalComponent(__VLS_62, new __VLS_62({ data: ((__VLS_ctx.info)), ...{ style: ({}) }, }));
    const __VLS_64 = __VLS_63({ data: ((__VLS_ctx.info)), ...{ style: ({}) }, }, ...__VLS_functionalComponentArgsRest(__VLS_63));
    ({}({ data: ((__VLS_ctx.info)), ...{ style: ({}) }, }));
    // @ts-ignore
    const __VLS_68 = {}
        .ElTableColumn;
    ({}.ElTableColumn);
    ({}.ElTableColumn);
    __VLS_components.ElTableColumn;
    __VLS_components.elTableColumn;
    __VLS_components.ElTableColumn;
    __VLS_components.elTableColumn;
    // @ts-ignore
    [ElTableColumn, ElTableColumn,];
    // @ts-ignore
    const __VLS_69 = __VLS_asFunctionalComponent(__VLS_68, new __VLS_68({ prop: ("flower.imgUrl"), label: ("商品图片"), }));
    const __VLS_70 = __VLS_69({ prop: ("flower.imgUrl"), label: ("商品图片"), }, ...__VLS_functionalComponentArgsRest(__VLS_69));
    ({}({ prop: ("flower.imgUrl"), label: ("商品图片"), }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.template, __VLS_intrinsicElements.template)({});
    {
        const [{ row }] = __VLS_getSlotParams((__VLS_73.slots).default);
        // @ts-ignore
        const __VLS_74 = {}
            .ElImage;
        ({}.ElImage);
        __VLS_components.ElImage;
        __VLS_components.elImage;
        // @ts-ignore
        [ElImage,];
        // @ts-ignore
        const __VLS_75 = __VLS_asFunctionalComponent(__VLS_74, new __VLS_74({ ...{ style: ({}) }, src: ((row.flower.imgUrl)), }));
        const __VLS_76 = __VLS_75({ ...{ style: ({}) }, src: ((row.flower.imgUrl)), }, ...__VLS_functionalComponentArgsRest(__VLS_75));
        ({}({ ...{ style: ({}) }, src: ((row.flower.imgUrl)), }));
        // @ts-ignore
        [formLabelWidth, info,];
        const __VLS_79 = __VLS_pickFunctionalComponentCtx(__VLS_74, __VLS_76);
    }
    const __VLS_73 = __VLS_pickFunctionalComponentCtx(__VLS_68, __VLS_70);
    // @ts-ignore
    const __VLS_80 = {}
        .ElTableColumn;
    ({}.ElTableColumn);
    ({}.ElTableColumn);
    __VLS_components.ElTableColumn;
    __VLS_components.elTableColumn;
    __VLS_components.ElTableColumn;
    __VLS_components.elTableColumn;
    // @ts-ignore
    [ElTableColumn, ElTableColumn,];
    // @ts-ignore
    const __VLS_81 = __VLS_asFunctionalComponent(__VLS_80, new __VLS_80({ prop: ("flower.name"), label: ("商品名"), }));
    const __VLS_82 = __VLS_81({ prop: ("flower.name"), label: ("商品名"), }, ...__VLS_functionalComponentArgsRest(__VLS_81));
    ({}({ prop: ("flower.name"), label: ("商品名"), }));
    const __VLS_85 = __VLS_pickFunctionalComponentCtx(__VLS_80, __VLS_82);
    // @ts-ignore
    const __VLS_86 = {}
        .ElTableColumn;
    ({}.ElTableColumn);
    ({}.ElTableColumn);
    __VLS_components.ElTableColumn;
    __VLS_components.elTableColumn;
    __VLS_components.ElTableColumn;
    __VLS_components.elTableColumn;
    // @ts-ignore
    [ElTableColumn, ElTableColumn,];
    // @ts-ignore
    const __VLS_87 = __VLS_asFunctionalComponent(__VLS_86, new __VLS_86({ prop: ("quantity"), label: ("数量"), }));
    const __VLS_88 = __VLS_87({ prop: ("quantity"), label: ("数量"), }, ...__VLS_functionalComponentArgsRest(__VLS_87));
    ({}({ prop: ("quantity"), label: ("数量"), }));
    const __VLS_91 = __VLS_pickFunctionalComponentCtx(__VLS_86, __VLS_88);
    // @ts-ignore
    const __VLS_92 = {}
        .ElTableColumn;
    ({}.ElTableColumn);
    ({}.ElTableColumn);
    __VLS_components.ElTableColumn;
    __VLS_components.elTableColumn;
    __VLS_components.ElTableColumn;
    __VLS_components.elTableColumn;
    // @ts-ignore
    [ElTableColumn, ElTableColumn,];
    // @ts-ignore
    const __VLS_93 = __VLS_asFunctionalComponent(__VLS_92, new __VLS_92({ prop: ("flower.price"), label: ("单价"), }));
    const __VLS_94 = __VLS_93({ prop: ("flower.price"), label: ("单价"), }, ...__VLS_functionalComponentArgsRest(__VLS_93));
    ({}({ prop: ("flower.price"), label: ("单价"), }));
    const __VLS_97 = __VLS_pickFunctionalComponentCtx(__VLS_92, __VLS_94);
    // @ts-ignore
    const __VLS_98 = {}
        .ElTableColumn;
    ({}.ElTableColumn);
    ({}.ElTableColumn);
    __VLS_components.ElTableColumn;
    __VLS_components.elTableColumn;
    __VLS_components.ElTableColumn;
    __VLS_components.elTableColumn;
    // @ts-ignore
    [ElTableColumn, ElTableColumn,];
    // @ts-ignore
    const __VLS_99 = __VLS_asFunctionalComponent(__VLS_98, new __VLS_98({ label: ("商品总价"), width: ("200"), }));
    const __VLS_100 = __VLS_99({ label: ("商品总价"), width: ("200"), }, ...__VLS_functionalComponentArgsRest(__VLS_99));
    ({}({ label: ("商品总价"), width: ("200"), }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.template, __VLS_intrinsicElements.template)({});
    {
        const [{ row }] = __VLS_getSlotParams((__VLS_103.slots).default);
        (row.flower.price * row.quantity);
    }
    const __VLS_103 = __VLS_pickFunctionalComponentCtx(__VLS_98, __VLS_100);
    (__VLS_67.slots).default;
    const __VLS_67 = __VLS_pickFunctionalComponentCtx(__VLS_62, __VLS_64);
    (__VLS_61.slots).default;
    const __VLS_61 = __VLS_pickFunctionalComponentCtx(__VLS_56, __VLS_58);
    // @ts-ignore
    const __VLS_104 = {}
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
    const __VLS_105 = __VLS_asFunctionalComponent(__VLS_104, new __VLS_104({ label: ("总价"), labelWidth: ((__VLS_ctx.formLabelWidth)), }));
    const __VLS_106 = __VLS_105({ label: ("总价"), labelWidth: ((__VLS_ctx.formLabelWidth)), }, ...__VLS_functionalComponentArgsRest(__VLS_105));
    ({}({ label: ("总价"), labelWidth: ((__VLS_ctx.formLabelWidth)), }));
    (__VLS_ctx.calculateTotalPrice());
    // @ts-ignore
    [formLabelWidth, calculateTotalPrice,];
    (__VLS_109.slots).default;
    const __VLS_109 = __VLS_pickFunctionalComponentCtx(__VLS_104, __VLS_106);
    (__VLS_55.slots).default;
    const __VLS_55 = __VLS_pickFunctionalComponentCtx(__VLS_50, __VLS_52);
    __VLS_elementAsFunction(__VLS_intrinsicElements.template, __VLS_intrinsicElements.template)({});
    {
        (__VLS_5.slots).footer;
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("dialog-footer") }, });
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
            onClick: (__VLS_ctx.Confirm)
        };
        // @ts-ignore
        [Confirm,];
        (__VLS_123.slots).default;
        const __VLS_123 = __VLS_pickFunctionalComponentCtx(__VLS_118, __VLS_120);
        let __VLS_121;
        let __VLS_122;
    }
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
                ElDialog: ElDialog,
                ElForm: ElForm,
                ElFormItem: ElFormItem,
                ElTable: ElTable,
                ElTableColumn: ElTableColumn,
                ElButton: ElButton,
                selectedRow: selectedRow,
                formLabelWidth: formLabelWidth,
                info: info,
                UserAddress: UserAddress,
                calculateTotalPrice: calculateTotalPrice,
                handleClose: handleClose,
                Confirm: Confirm,
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
//# sourceMappingURL=ConfirmOrder.vue.js.map