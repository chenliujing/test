import { ref, onMounted, reactive, computed } from 'vue';
import { getFlowers, deleteFlower as apiDeleteFlower } from '../../api/index';
import { ElMessage } from 'element-plus';
import addVue from './Add.vue';
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
//分页
const pageSize = ref(10); // 每页条数
const currentPage = ref(1); // 当前页码
const paginatedFlowers = computed(() => {
    const start = (currentPage.value - 1) * pageSize.value;
    const end = start + pageSize.value;
    return filteredFlowers.value.slice(start, end);
});
const handleSizeChange = (newSize) => {
    pageSize.value = newSize;
    currentPage.value = 1; // 每次更改每页条数时，重置为第一页
};
const handleCurrentChange = (newPage) => {
    currentPage.value = newPage;
};
const tableRef = ref();
const flowers = ref([]);
const addVisible = ref(false);
const ruleFormRef = ref();
const multipleTableRef = ref();
const rules = reactive({
    name: [{ required: false, message: '请输入名称', trigger: 'blur' }]
});
const srcList = ref([]);
const searchText = ref('');
const filteredFlowers = computed(() => {
    let data = flowers.value;
    if (!searchText.value.trim()) {
        return data;
    }
    const searchTerm = searchText.value.toLowerCase();
    return data.filter(item => {
        const name = item.name ? item.name.toLowerCase() : '';
        const color = item.color ? item.color.toLowerCase() : '';
        const categoryName = item.category && item.category.Name ? item.category.Name.toLowerCase() : '';
        return (name.includes(searchTerm) ||
            color.includes(searchTerm) ||
            categoryName.includes(searchTerm));
    });
});
const fetchFlowers = async () => {
    try {
        const res = await getFlowers();
        flowers.value = res;
        srcList.value = res.map(c => c.imgUrl);
    }
    catch (error) {
        console.error('获取鲜花失败:', error);
    }
};
const deleteFlower = async (id, index) => {
    const confirmed = window.confirm('确定要删除吗？');
    if (confirmed) {
        try {
            await apiDeleteFlower(id);
            flowers.value.splice(index, 1);
            ElMessage({
                message: "删除成功",
                type: 'success'
            });
        }
        catch (error) {
            console.error('删除鲜花失败:', error);
        }
    }
    else {
        console.log('用户取消了删除操作');
    }
};
const add = () => {
    addVisible.value = true;
    info.value = undefined;
};
const info = ref();
const editFlower = (index, row) => {
    info.value = row;
    addVisible.value = true;
};
const CloseAdd = () => {
    addVisible.value = false;
    fetchFlowers(); // 重新加载数据
};
const handleSearch = () => {
    // 在这里可以做其他的搜索逻辑
    console.log('搜索文本:', searchText.value);
};
onMounted(fetchFlowers);
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
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({ ...{ class: ("box-card") }, }));
    const __VLS_2 = __VLS_1({ ...{ class: ("box-card") }, }, ...__VLS_functionalComponentArgsRest(__VLS_1));
    ({}({ ...{ class: ("box-card") }, }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.h2, __VLS_intrinsicElements.h2)({});
    // @ts-ignore
    const __VLS_6 = {}
        .ElInput;
    ({}.ElInput);
    __VLS_components.ElInput;
    __VLS_components.elInput;
    // @ts-ignore
    [ElInput,];
    // @ts-ignore
    const __VLS_7 = __VLS_asFunctionalComponent(__VLS_6, new __VLS_6({ ...{ 'onInput': {} }, modelValue: ((__VLS_ctx.searchText)), placeholder: ("请输入商品名称"), prefixIcon: ("el-icon-search"), }));
    const __VLS_8 = __VLS_7({ ...{ 'onInput': {} }, modelValue: ((__VLS_ctx.searchText)), placeholder: ("请输入商品名称"), prefixIcon: ("el-icon-search"), }, ...__VLS_functionalComponentArgsRest(__VLS_7));
    ({}({ ...{ 'onInput': {} }, modelValue: ((__VLS_ctx.searchText)), placeholder: ("请输入商品名称"), prefixIcon: ("el-icon-search"), }));
    let __VLS_12;
    const __VLS_13 = {
        onInput: (__VLS_ctx.handleSearch)
    };
    // @ts-ignore
    [searchText, handleSearch,];
    const __VLS_11 = __VLS_pickFunctionalComponentCtx(__VLS_6, __VLS_8);
    let __VLS_9;
    let __VLS_10;
    // @ts-ignore
    const __VLS_14 = {}
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
    const __VLS_15 = __VLS_asFunctionalComponent(__VLS_14, new __VLS_14({ data: ((__VLS_ctx.paginatedFlowers)), ref: ("tableRef"), ...{ style: ({}) }, }));
    const __VLS_16 = __VLS_15({ data: ((__VLS_ctx.paginatedFlowers)), ref: ("tableRef"), ...{ style: ({}) }, }, ...__VLS_functionalComponentArgsRest(__VLS_15));
    ({}({ data: ((__VLS_ctx.paginatedFlowers)), ref: ("tableRef"), ...{ style: ({}) }, }));
    // @ts-ignore
    (__VLS_ctx.tableRef);
    // @ts-ignore
    const __VLS_20 = {}
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
    const __VLS_21 = __VLS_asFunctionalComponent(__VLS_20, new __VLS_20({ prop: ("name"), label: ("名字"), width: ("180"), }));
    const __VLS_22 = __VLS_21({ prop: ("name"), label: ("名字"), width: ("180"), }, ...__VLS_functionalComponentArgsRest(__VLS_21));
    ({}({ prop: ("name"), label: ("名字"), width: ("180"), }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.template, __VLS_intrinsicElements.template)({});
    {
        const [{ row }] = __VLS_getSlotParams((__VLS_25.slots).default);
        (row.name);
        // @ts-ignore
        [paginatedFlowers, tableRef,];
    }
    const __VLS_25 = __VLS_pickFunctionalComponentCtx(__VLS_20, __VLS_22);
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
    const __VLS_27 = __VLS_asFunctionalComponent(__VLS_26, new __VLS_26({ prop: ("color"), label: ("颜色"), width: ("180"), }));
    const __VLS_28 = __VLS_27({ prop: ("color"), label: ("颜色"), width: ("180"), }, ...__VLS_functionalComponentArgsRest(__VLS_27));
    ({}({ prop: ("color"), label: ("颜色"), width: ("180"), }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.template, __VLS_intrinsicElements.template)({});
    {
        const [{ row }] = __VLS_getSlotParams((__VLS_31.slots).default);
        (row.color);
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
    const __VLS_33 = __VLS_asFunctionalComponent(__VLS_32, new __VLS_32({ prop: ("price"), label: ("价格"), width: ("100"), }));
    const __VLS_34 = __VLS_33({ prop: ("price"), label: ("价格"), width: ("100"), }, ...__VLS_functionalComponentArgsRest(__VLS_33));
    ({}({ prop: ("price"), label: ("价格"), width: ("100"), }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.template, __VLS_intrinsicElements.template)({});
    {
        const [{ row }] = __VLS_getSlotParams((__VLS_37.slots).default);
        (row.price);
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
    const __VLS_39 = __VLS_asFunctionalComponent(__VLS_38, new __VLS_38({ prop: ("category.name"), label: ("类别"), width: ("100"), }));
    const __VLS_40 = __VLS_39({ prop: ("category.name"), label: ("类别"), width: ("100"), }, ...__VLS_functionalComponentArgsRest(__VLS_39));
    ({}({ prop: ("category.name"), label: ("类别"), width: ("100"), }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.template, __VLS_intrinsicElements.template)({});
    {
        const [{ row }] = __VLS_getSlotParams((__VLS_43.slots).default);
        (row.category.name);
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
    const __VLS_45 = __VLS_asFunctionalComponent(__VLS_44, new __VLS_44({ prop: ("imgUrl"), label: ("图片"), width: ("100"), }));
    const __VLS_46 = __VLS_45({ prop: ("imgUrl"), label: ("图片"), width: ("100"), }, ...__VLS_functionalComponentArgsRest(__VLS_45));
    ({}({ prop: ("imgUrl"), label: ("图片"), width: ("100"), }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.template, __VLS_intrinsicElements.template)({});
    {
        const [{ row }] = __VLS_getSlotParams((__VLS_49.slots).default);
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("demo-image__preview") }, });
        // @ts-ignore
        const __VLS_50 = {}
            .ElImage;
        ({}.ElImage);
        __VLS_components.ElImage;
        __VLS_components.elImage;
        // @ts-ignore
        [ElImage,];
        // @ts-ignore
        const __VLS_51 = __VLS_asFunctionalComponent(__VLS_50, new __VLS_50({ ...{ style: ({}) }, src: ((row.imgUrl)), zoomRate: ((1.2)), maxScale: ((7)), minScale: ((0.2)), previewSrcList: ((__VLS_ctx.srcList)), initialIndex: ((0)), fit: ("cover"), }));
        const __VLS_52 = __VLS_51({ ...{ style: ({}) }, src: ((row.imgUrl)), zoomRate: ((1.2)), maxScale: ((7)), minScale: ((0.2)), previewSrcList: ((__VLS_ctx.srcList)), initialIndex: ((0)), fit: ("cover"), }, ...__VLS_functionalComponentArgsRest(__VLS_51));
        ({}({ ...{ style: ({}) }, src: ((row.imgUrl)), zoomRate: ((1.2)), maxScale: ((7)), minScale: ((0.2)), previewSrcList: ((__VLS_ctx.srcList)), initialIndex: ((0)), fit: ("cover"), }));
        // @ts-ignore
        [srcList,];
        const __VLS_55 = __VLS_pickFunctionalComponentCtx(__VLS_50, __VLS_52);
    }
    const __VLS_49 = __VLS_pickFunctionalComponentCtx(__VLS_44, __VLS_46);
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
    const __VLS_57 = __VLS_asFunctionalComponent(__VLS_56, new __VLS_56({ label: ("操作"), width: ("200"), }));
    const __VLS_58 = __VLS_57({ label: ("操作"), width: ("200"), }, ...__VLS_functionalComponentArgsRest(__VLS_57));
    ({}({ label: ("操作"), width: ("200"), }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.template, __VLS_intrinsicElements.template)({});
    {
        const [{ row, $index }] = __VLS_getSlotParams((__VLS_61.slots).default);
        // @ts-ignore
        const __VLS_62 = {}
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
        const __VLS_63 = __VLS_asFunctionalComponent(__VLS_62, new __VLS_62({ ...{ 'onClick': {} }, type: ("primary"), }));
        const __VLS_64 = __VLS_63({ ...{ 'onClick': {} }, type: ("primary"), }, ...__VLS_functionalComponentArgsRest(__VLS_63));
        ({}({ ...{ 'onClick': {} }, type: ("primary"), }));
        let __VLS_68;
        const __VLS_69 = {
            onClick: (...[$event]) => {
                __VLS_ctx.editFlower($index, row);
                // @ts-ignore
                [editFlower,];
            }
        };
        (__VLS_67.slots).default;
        const __VLS_67 = __VLS_pickFunctionalComponentCtx(__VLS_62, __VLS_64);
        let __VLS_65;
        let __VLS_66;
        // @ts-ignore
        const __VLS_70 = {}
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
        const __VLS_71 = __VLS_asFunctionalComponent(__VLS_70, new __VLS_70({ ...{ 'onClick': {} }, type: ("danger"), }));
        const __VLS_72 = __VLS_71({ ...{ 'onClick': {} }, type: ("danger"), }, ...__VLS_functionalComponentArgsRest(__VLS_71));
        ({}({ ...{ 'onClick': {} }, type: ("danger"), }));
        let __VLS_76;
        const __VLS_77 = {
            onClick: (...[$event]) => {
                __VLS_ctx.deleteFlower(row.id, $index);
                // @ts-ignore
                [deleteFlower,];
            }
        };
        (__VLS_75.slots).default;
        const __VLS_75 = __VLS_pickFunctionalComponentCtx(__VLS_70, __VLS_72);
        let __VLS_73;
        let __VLS_74;
    }
    const __VLS_61 = __VLS_pickFunctionalComponentCtx(__VLS_56, __VLS_58);
    (__VLS_19.slots).default;
    const __VLS_19 = __VLS_pickFunctionalComponentCtx(__VLS_14, __VLS_16);
    // @ts-ignore
    const __VLS_78 = {}
        .ElPagination;
    ({}.ElPagination);
    __VLS_components.ElPagination;
    __VLS_components.elPagination;
    // @ts-ignore
    [ElPagination,];
    // @ts-ignore
    const __VLS_79 = __VLS_asFunctionalComponent(__VLS_78, new __VLS_78({ ...{ 'onSizeChange': {} }, ...{ 'onCurrentChange': {} }, currentPage: ((__VLS_ctx.currentPage)), pageSize: ((__VLS_ctx.pageSize)), total: ((__VLS_ctx.filteredFlowers.length)), layout: ("total, sizes, prev, pager, next, jumper"), }));
    const __VLS_80 = __VLS_79({ ...{ 'onSizeChange': {} }, ...{ 'onCurrentChange': {} }, currentPage: ((__VLS_ctx.currentPage)), pageSize: ((__VLS_ctx.pageSize)), total: ((__VLS_ctx.filteredFlowers.length)), layout: ("total, sizes, prev, pager, next, jumper"), }, ...__VLS_functionalComponentArgsRest(__VLS_79));
    ({}({ ...{ 'onSizeChange': {} }, ...{ 'onCurrentChange': {} }, currentPage: ((__VLS_ctx.currentPage)), pageSize: ((__VLS_ctx.pageSize)), total: ((__VLS_ctx.filteredFlowers.length)), layout: ("total, sizes, prev, pager, next, jumper"), }));
    let __VLS_84;
    const __VLS_85 = {
        onSizeChange: (__VLS_ctx.handleSizeChange)
    };
    const __VLS_86 = {
        onCurrentChange: (__VLS_ctx.handleCurrentChange)
    };
    // @ts-ignore
    [currentPage, pageSize, filteredFlowers, handleSizeChange, handleCurrentChange,];
    const __VLS_83 = __VLS_pickFunctionalComponentCtx(__VLS_78, __VLS_80);
    let __VLS_81;
    let __VLS_82;
    // @ts-ignore
    const __VLS_87 = {}
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
    const __VLS_88 = __VLS_asFunctionalComponent(__VLS_87, new __VLS_87({ ...{ 'onClick': {} }, type: ("primary"), }));
    const __VLS_89 = __VLS_88({ ...{ 'onClick': {} }, type: ("primary"), }, ...__VLS_functionalComponentArgsRest(__VLS_88));
    ({}({ ...{ 'onClick': {} }, type: ("primary"), }));
    let __VLS_93;
    const __VLS_94 = {
        onClick: (__VLS_ctx.add)
    };
    // @ts-ignore
    [add,];
    (__VLS_92.slots).default;
    const __VLS_92 = __VLS_pickFunctionalComponentCtx(__VLS_87, __VLS_89);
    let __VLS_90;
    let __VLS_91;
    (__VLS_5.slots).default;
    const __VLS_5 = __VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2);
    // @ts-ignore
    [addVue, addVue,];
    // @ts-ignore
    const __VLS_95 = __VLS_asFunctionalComponent(addVue, new addVue({ ...{ 'onCloseAdd': {} }, addVisible: ((__VLS_ctx.addVisible)), info: ((__VLS_ctx.info)), }));
    const __VLS_96 = __VLS_95({ ...{ 'onCloseAdd': {} }, addVisible: ((__VLS_ctx.addVisible)), info: ((__VLS_ctx.info)), }, ...__VLS_functionalComponentArgsRest(__VLS_95));
    ({}({ ...{ 'onCloseAdd': {} }, addVisible: ((__VLS_ctx.addVisible)), info: ((__VLS_ctx.info)), }));
    let __VLS_100;
    const __VLS_101 = {
        onCloseAdd: (__VLS_ctx.CloseAdd)
    };
    // @ts-ignore
    [addVisible, info, CloseAdd,];
    const __VLS_99 = __VLS_pickFunctionalComponentCtx(addVue, __VLS_96);
    let __VLS_97;
    let __VLS_98;
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
        __VLS_styleScopedClasses['box-card'];
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
                addVue: addVue,
                pageSize: pageSize,
                currentPage: currentPage,
                paginatedFlowers: paginatedFlowers,
                handleSizeChange: handleSizeChange,
                handleCurrentChange: handleCurrentChange,
                tableRef: tableRef,
                addVisible: addVisible,
                srcList: srcList,
                searchText: searchText,
                filteredFlowers: filteredFlowers,
                deleteFlower: deleteFlower,
                add: add,
                info: info,
                editFlower: editFlower,
                CloseAdd: CloseAdd,
                handleSearch: handleSearch,
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