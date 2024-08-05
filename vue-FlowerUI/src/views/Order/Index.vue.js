import { onMounted, ref, computed } from 'vue';
import { getAllOrder, removeOrderItem, chuliOrder } from '../../api';
import { ElMessage } from 'element-plus';
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const info = ref([]);
const statusFilter = ref('');
const searchQuery = ref('');
const tableRef = ref();
const bulkDelete = async () => {
    const selectedRows = tableRef.value?.getSelectionRows();
    if (selectedRows.length === 0) {
        ElMessage.warning('请至少选择一项订单');
        return;
    }
    const confirmed = window.confirm('确定要删除所选订单吗？');
    if (confirmed) {
        try {
            await Promise.all(selectedRows.map(row => removeOrderItem(row.id)));
            ElMessage.success('批量删除成功');
            fetchOrder();
        }
        catch (error) {
            console.error('批量删除订单失败:', error);
        }
    }
};
const fetchOrder = async () => {
    const userId = sessionStorage.getItem('id');
    if (userId) {
        try {
            const response = await getAllOrder();
            info.value = response; // 假设 API 返回的数据在 response.data 中
        }
        catch (error) {
            console.error('获取订单失败', error);
        }
    }
};
const filteredInfo = computed(() => {
    let data = info.value;
    if (statusFilter.value) {
        data = data.filter(item => item.status.toString() === statusFilter.value);
    }
    if (!searchQuery.value.trim()) {
        return data;
    }
    return data.filter(item => {
        const searchTerm = searchQuery.value.toLowerCase();
        return (item.orderId.toLowerCase().includes(searchTerm) ||
            item.orderDate.toLowerCase().includes(searchTerm) ||
            item.flower.name.toLowerCase().includes(searchTerm) ||
            item.address.province.toLowerCase().includes(searchTerm) ||
            item.address.city.toLowerCase().includes(searchTerm) ||
            item.address.county.toLowerCase().includes(searchTerm) ||
            item.address.street.toLowerCase().includes(searchTerm));
    });
});
const doOrder = async (id) => {
    try {
        const response = await chuliOrder(id);
        if (response) {
            ElMessage.success('发货成功');
            fetchOrder();
        }
    }
    catch (error) {
        console.error('发货失败:', error);
    }
};
const deleteOrderItem = async (id) => {
    const confirmed = window.confirm('确定要删除吗？');
    if (confirmed) {
        try {
            await removeOrderItem(id);
            ElMessage.success('删除成功');
            fetchOrder();
        }
        catch (error) {
            console.error('删除订单项失败:', error);
        }
    }
};
onMounted(() => {
    fetchOrder();
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
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ style: ({}) }, });
    // @ts-ignore
    const __VLS_6 = {}
        .ElInput;
    ({}.ElInput);
    __VLS_components.ElInput;
    __VLS_components.elInput;
    // @ts-ignore
    [ElInput,];
    // @ts-ignore
    const __VLS_7 = __VLS_asFunctionalComponent(__VLS_6, new __VLS_6({ modelValue: ((__VLS_ctx.searchQuery)), placeholder: ("请输入订单编号、商品名称"), prefixIcon: ("el-icon-search"), }));
    const __VLS_8 = __VLS_7({ modelValue: ((__VLS_ctx.searchQuery)), placeholder: ("请输入订单编号、商品名称"), prefixIcon: ("el-icon-search"), }, ...__VLS_functionalComponentArgsRest(__VLS_7));
    ({}({ modelValue: ((__VLS_ctx.searchQuery)), placeholder: ("请输入订单编号、商品名称"), prefixIcon: ("el-icon-search"), }));
    // @ts-ignore
    [searchQuery,];
    const __VLS_11 = __VLS_pickFunctionalComponentCtx(__VLS_6, __VLS_8);
    // @ts-ignore
    const __VLS_12 = {}
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
    const __VLS_13 = __VLS_asFunctionalComponent(__VLS_12, new __VLS_12({ modelValue: ((__VLS_ctx.statusFilter)), placeholder: ("选择状态"), ...{ style: ({}) }, }));
    const __VLS_14 = __VLS_13({ modelValue: ((__VLS_ctx.statusFilter)), placeholder: ("选择状态"), ...{ style: ({}) }, }, ...__VLS_functionalComponentArgsRest(__VLS_13));
    ({}({ modelValue: ((__VLS_ctx.statusFilter)), placeholder: ("选择状态"), ...{ style: ({}) }, }));
    // @ts-ignore
    const __VLS_18 = {}
        .ElOption;
    ({}.ElOption);
    ({}.ElOption);
    __VLS_components.ElOption;
    __VLS_components.elOption;
    __VLS_components.ElOption;
    __VLS_components.elOption;
    // @ts-ignore
    [ElOption, ElOption,];
    // @ts-ignore
    const __VLS_19 = __VLS_asFunctionalComponent(__VLS_18, new __VLS_18({ label: ("全部"), value: (""), }));
    const __VLS_20 = __VLS_19({ label: ("全部"), value: (""), }, ...__VLS_functionalComponentArgsRest(__VLS_19));
    ({}({ label: ("全部"), value: (""), }));
    // @ts-ignore
    [statusFilter,];
    const __VLS_23 = __VLS_pickFunctionalComponentCtx(__VLS_18, __VLS_20);
    // @ts-ignore
    const __VLS_24 = {}
        .ElOption;
    ({}.ElOption);
    ({}.ElOption);
    __VLS_components.ElOption;
    __VLS_components.elOption;
    __VLS_components.ElOption;
    __VLS_components.elOption;
    // @ts-ignore
    [ElOption, ElOption,];
    // @ts-ignore
    const __VLS_25 = __VLS_asFunctionalComponent(__VLS_24, new __VLS_24({ label: ("未发货"), value: ("0"), }));
    const __VLS_26 = __VLS_25({ label: ("未发货"), value: ("0"), }, ...__VLS_functionalComponentArgsRest(__VLS_25));
    ({}({ label: ("未发货"), value: ("0"), }));
    const __VLS_29 = __VLS_pickFunctionalComponentCtx(__VLS_24, __VLS_26);
    // @ts-ignore
    const __VLS_30 = {}
        .ElOption;
    ({}.ElOption);
    ({}.ElOption);
    __VLS_components.ElOption;
    __VLS_components.elOption;
    __VLS_components.ElOption;
    __VLS_components.elOption;
    // @ts-ignore
    [ElOption, ElOption,];
    // @ts-ignore
    const __VLS_31 = __VLS_asFunctionalComponent(__VLS_30, new __VLS_30({ label: ("已发货"), value: ("1"), }));
    const __VLS_32 = __VLS_31({ label: ("已发货"), value: ("1"), }, ...__VLS_functionalComponentArgsRest(__VLS_31));
    ({}({ label: ("已发货"), value: ("1"), }));
    const __VLS_35 = __VLS_pickFunctionalComponentCtx(__VLS_30, __VLS_32);
    // @ts-ignore
    const __VLS_36 = {}
        .ElOption;
    ({}.ElOption);
    ({}.ElOption);
    __VLS_components.ElOption;
    __VLS_components.elOption;
    __VLS_components.ElOption;
    __VLS_components.elOption;
    // @ts-ignore
    [ElOption, ElOption,];
    // @ts-ignore
    const __VLS_37 = __VLS_asFunctionalComponent(__VLS_36, new __VLS_36({ label: ("已取消"), value: ("-1"), }));
    const __VLS_38 = __VLS_37({ label: ("已取消"), value: ("-1"), }, ...__VLS_functionalComponentArgsRest(__VLS_37));
    ({}({ label: ("已取消"), value: ("-1"), }));
    const __VLS_41 = __VLS_pickFunctionalComponentCtx(__VLS_36, __VLS_38);
    (__VLS_17.slots).default;
    const __VLS_17 = __VLS_pickFunctionalComponentCtx(__VLS_12, __VLS_14);
    // @ts-ignore
    const __VLS_42 = {}
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
    const __VLS_43 = __VLS_asFunctionalComponent(__VLS_42, new __VLS_42({ ...{ 'onClick': {} }, type: ("danger"), }));
    const __VLS_44 = __VLS_43({ ...{ 'onClick': {} }, type: ("danger"), }, ...__VLS_functionalComponentArgsRest(__VLS_43));
    ({}({ ...{ 'onClick': {} }, type: ("danger"), }));
    let __VLS_48;
    const __VLS_49 = {
        onClick: (__VLS_ctx.bulkDelete)
    };
    // @ts-ignore
    [bulkDelete,];
    (__VLS_47.slots).default;
    const __VLS_47 = __VLS_pickFunctionalComponentCtx(__VLS_42, __VLS_44);
    let __VLS_45;
    let __VLS_46;
    // @ts-ignore
    const __VLS_50 = {}
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
    const __VLS_51 = __VLS_asFunctionalComponent(__VLS_50, new __VLS_50({ data: ((__VLS_ctx.filteredInfo)), ref: ("tableRef"), }));
    const __VLS_52 = __VLS_51({ data: ((__VLS_ctx.filteredInfo)), ref: ("tableRef"), }, ...__VLS_functionalComponentArgsRest(__VLS_51));
    ({}({ data: ((__VLS_ctx.filteredInfo)), ref: ("tableRef"), }));
    // @ts-ignore
    (__VLS_ctx.tableRef);
    // @ts-ignore
    const __VLS_56 = {}
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
    const __VLS_57 = __VLS_asFunctionalComponent(__VLS_56, new __VLS_56({ type: ("selection"), width: ("55"), }));
    const __VLS_58 = __VLS_57({ type: ("selection"), width: ("55"), }, ...__VLS_functionalComponentArgsRest(__VLS_57));
    ({}({ type: ("selection"), width: ("55"), }));
    // @ts-ignore
    [filteredInfo, tableRef,];
    const __VLS_61 = __VLS_pickFunctionalComponentCtx(__VLS_56, __VLS_58);
    // @ts-ignore
    const __VLS_62 = {}
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
    const __VLS_63 = __VLS_asFunctionalComponent(__VLS_62, new __VLS_62({ prop: ("orderId"), label: ("订单编号"), width: ("200px"), }));
    const __VLS_64 = __VLS_63({ prop: ("orderId"), label: ("订单编号"), width: ("200px"), }, ...__VLS_functionalComponentArgsRest(__VLS_63));
    ({}({ prop: ("orderId"), label: ("订单编号"), width: ("200px"), }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.template, __VLS_intrinsicElements.template)({});
    {
        const [{ row }] = __VLS_getSlotParams((__VLS_67.slots).default);
        (row.orderId);
    }
    const __VLS_67 = __VLS_pickFunctionalComponentCtx(__VLS_62, __VLS_64);
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
    const __VLS_69 = __VLS_asFunctionalComponent(__VLS_68, new __VLS_68({ prop: ("orderDate"), label: ("订单日期"), width: ("200px"), }));
    const __VLS_70 = __VLS_69({ prop: ("orderDate"), label: ("订单日期"), width: ("200px"), }, ...__VLS_functionalComponentArgsRest(__VLS_69));
    ({}({ prop: ("orderDate"), label: ("订单日期"), width: ("200px"), }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.template, __VLS_intrinsicElements.template)({});
    {
        const [{ row }] = __VLS_getSlotParams((__VLS_73.slots).default);
        (row.orderDate);
    }
    const __VLS_73 = __VLS_pickFunctionalComponentCtx(__VLS_68, __VLS_70);
    // @ts-ignore
    const __VLS_74 = {}
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
    const __VLS_75 = __VLS_asFunctionalComponent(__VLS_74, new __VLS_74({ prop: ("flower.imgUrl"), label: ("图片"), width: ("100"), }));
    const __VLS_76 = __VLS_75({ prop: ("flower.imgUrl"), label: ("图片"), width: ("100"), }, ...__VLS_functionalComponentArgsRest(__VLS_75));
    ({}({ prop: ("flower.imgUrl"), label: ("图片"), width: ("100"), }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.template, __VLS_intrinsicElements.template)({});
    {
        const [{ row }] = __VLS_getSlotParams((__VLS_79.slots).default);
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("demo-image__preview") }, });
        // @ts-ignore
        const __VLS_80 = {}
            .ElImage;
        ({}.ElImage);
        __VLS_components.ElImage;
        __VLS_components.elImage;
        // @ts-ignore
        [ElImage,];
        // @ts-ignore
        const __VLS_81 = __VLS_asFunctionalComponent(__VLS_80, new __VLS_80({ ...{ style: ({}) }, src: ((row.flower.imgUrl)), zoomRate: ((1.2)), maxScale: ((7)), minScale: ((0.2)), fit: ("cover"), }));
        const __VLS_82 = __VLS_81({ ...{ style: ({}) }, src: ((row.flower.imgUrl)), zoomRate: ((1.2)), maxScale: ((7)), minScale: ((0.2)), fit: ("cover"), }, ...__VLS_functionalComponentArgsRest(__VLS_81));
        ({}({ ...{ style: ({}) }, src: ((row.flower.imgUrl)), zoomRate: ((1.2)), maxScale: ((7)), minScale: ((0.2)), fit: ("cover"), }));
        const __VLS_85 = __VLS_pickFunctionalComponentCtx(__VLS_80, __VLS_82);
    }
    const __VLS_79 = __VLS_pickFunctionalComponentCtx(__VLS_74, __VLS_76);
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
    const __VLS_87 = __VLS_asFunctionalComponent(__VLS_86, new __VLS_86({ prop: ("flower.name"), label: ("商品名称"), }));
    const __VLS_88 = __VLS_87({ prop: ("flower.name"), label: ("商品名称"), }, ...__VLS_functionalComponentArgsRest(__VLS_87));
    ({}({ prop: ("flower.name"), label: ("商品名称"), }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.template, __VLS_intrinsicElements.template)({});
    {
        const [{ row }] = __VLS_getSlotParams((__VLS_91.slots).default);
        (row.flower.name);
    }
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
    const __VLS_93 = __VLS_asFunctionalComponent(__VLS_92, new __VLS_92({ prop: ("quantity"), label: ("数量"), }));
    const __VLS_94 = __VLS_93({ prop: ("quantity"), label: ("数量"), }, ...__VLS_functionalComponentArgsRest(__VLS_93));
    ({}({ prop: ("quantity"), label: ("数量"), }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.template, __VLS_intrinsicElements.template)({});
    {
        const [{ row }] = __VLS_getSlotParams((__VLS_97.slots).default);
        (row.quantity);
    }
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
    const __VLS_99 = __VLS_asFunctionalComponent(__VLS_98, new __VLS_98({ prop: ("status"), label: ("状态"), }));
    const __VLS_100 = __VLS_99({ prop: ("status"), label: ("状态"), }, ...__VLS_functionalComponentArgsRest(__VLS_99));
    ({}({ prop: ("status"), label: ("状态"), }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.template, __VLS_intrinsicElements.template)({});
    {
        const [{ row }] = __VLS_getSlotParams((__VLS_103.slots).default);
        __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
        if (row.status === -1) {
        }
        if (row.status === 0) {
        }
        else if (row.status === 1) {
        }
        else if (row.status === 2) {
        }
    }
    const __VLS_103 = __VLS_pickFunctionalComponentCtx(__VLS_98, __VLS_100);
    // @ts-ignore
    const __VLS_104 = {}
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
    const __VLS_105 = __VLS_asFunctionalComponent(__VLS_104, new __VLS_104({ label: ("地址"), }));
    const __VLS_106 = __VLS_105({ label: ("地址"), }, ...__VLS_functionalComponentArgsRest(__VLS_105));
    ({}({ label: ("地址"), }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.template, __VLS_intrinsicElements.template)({});
    {
        const [{ row }] = __VLS_getSlotParams((__VLS_109.slots).default);
        (`${row.address.province} ${row.address.city} ${row.address.county} ${row.address.street}`);
    }
    const __VLS_109 = __VLS_pickFunctionalComponentCtx(__VLS_104, __VLS_106);
    // @ts-ignore
    const __VLS_110 = {}
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
    const __VLS_111 = __VLS_asFunctionalComponent(__VLS_110, new __VLS_110({ label: ("操作"), width: ("350px"), }));
    const __VLS_112 = __VLS_111({ label: ("操作"), width: ("350px"), }, ...__VLS_functionalComponentArgsRest(__VLS_111));
    ({}({ label: ("操作"), width: ("350px"), }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.template, __VLS_intrinsicElements.template)({});
    {
        const [{ row }] = __VLS_getSlotParams((__VLS_115.slots).default);
        // @ts-ignore
        const __VLS_116 = {}
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
        const __VLS_117 = __VLS_asFunctionalComponent(__VLS_116, new __VLS_116({ ...{ 'onClick': {} }, type: ("danger"), icon: ("el-icon-delete"), }));
        const __VLS_118 = __VLS_117({ ...{ 'onClick': {} }, type: ("danger"), icon: ("el-icon-delete"), }, ...__VLS_functionalComponentArgsRest(__VLS_117));
        ({}({ ...{ 'onClick': {} }, type: ("danger"), icon: ("el-icon-delete"), }));
        let __VLS_122;
        const __VLS_123 = {
            onClick: (...[$event]) => {
                __VLS_ctx.deleteOrderItem(row.id);
                // @ts-ignore
                [deleteOrderItem,];
            }
        };
        (__VLS_121.slots).default;
        const __VLS_121 = __VLS_pickFunctionalComponentCtx(__VLS_116, __VLS_118);
        let __VLS_119;
        let __VLS_120;
        // @ts-ignore
        const __VLS_124 = {}
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
        const __VLS_125 = __VLS_asFunctionalComponent(__VLS_124, new __VLS_124({ ...{ 'onClick': {} }, type: ("primary"), }));
        const __VLS_126 = __VLS_125({ ...{ 'onClick': {} }, type: ("primary"), }, ...__VLS_functionalComponentArgsRest(__VLS_125));
        ({}({ ...{ 'onClick': {} }, type: ("primary"), }));
        let __VLS_130;
        const __VLS_131 = {
            onClick: (...[$event]) => {
                __VLS_ctx.doOrder(row.id);
                // @ts-ignore
                [doOrder,];
            }
        };
        (__VLS_129.slots).default;
        const __VLS_129 = __VLS_pickFunctionalComponentCtx(__VLS_124, __VLS_126);
        let __VLS_127;
        let __VLS_128;
    }
    const __VLS_115 = __VLS_pickFunctionalComponentCtx(__VLS_110, __VLS_112);
    // @ts-ignore
    const __VLS_132 = {}
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
    const __VLS_133 = __VLS_asFunctionalComponent(__VLS_132, new __VLS_132({ prop: ("sumPrice"), label: ("总价"), }));
    const __VLS_134 = __VLS_133({ prop: ("sumPrice"), label: ("总价"), }, ...__VLS_functionalComponentArgsRest(__VLS_133));
    ({}({ prop: ("sumPrice"), label: ("总价"), }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.template, __VLS_intrinsicElements.template)({});
    {
        const [{ row }] = __VLS_getSlotParams((__VLS_137.slots).default);
        (row.sumPrice);
    }
    const __VLS_137 = __VLS_pickFunctionalComponentCtx(__VLS_132, __VLS_134);
    (__VLS_55.slots).default;
    const __VLS_55 = __VLS_pickFunctionalComponentCtx(__VLS_50, __VLS_52);
    (__VLS_5.slots).default;
    const __VLS_5 = __VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2);
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
        __VLS_styleScopedClasses['demo-image__preview'];
    }
    var __VLS_slots;
    return __VLS_slots;
    const __VLS_componentsOption = {};
    let __VLS_name;
    let __VLS_defineComponent;
    const __VLS_internalComponent = __VLS_defineComponent({
        setup() {
            return {
                statusFilter: statusFilter,
                searchQuery: searchQuery,
                tableRef: tableRef,
                bulkDelete: bulkDelete,
                filteredInfo: filteredInfo,
                doOrder: doOrder,
                deleteOrderItem: deleteOrderItem,
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
//# sourceMappingURL=Index.vue.js.map