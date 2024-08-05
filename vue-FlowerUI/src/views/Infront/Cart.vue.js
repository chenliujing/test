import { ref, onMounted } from 'vue';
import { ElTable, ElButton, ElImage, ElMessageBox, ElMessage } from 'element-plus';
import { getCartItems, removeCartItems, updateCartItem } from '../../api';
import { useStore } from 'vuex';
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const store = useStore();
import ConfirmOrder from './Order/ConfirmOrder.vue';
import { Delete, } from '@element-plus/icons-vue';
//确认订单
let dialogFormVisible = ref(false);
let form = ref();
// 声明变量
const info = ref([]);
const tableRef = ref(null);
// 获取 Vuex getters
// 获取 Vuex getters
const getQuantity = (productId) => {
    return store.getters.getItemById(productId);
};
console.log(getQuantity);
// // 函数：更新商品数量
// const updateQuantity = async (row: any, change: number) => {
//   const newQuantity = getQuantity(row.flower.id) + change;
//   if (newQuantity > 0) {
//     // 更新 Vuex store 中的数量
//     //await store.dispatch('updateItemQuantity', { productId: row.flower.id, quantity: newQuantity });
//   await  updateCartItem(row.id,newQuantity)
//     //row.quantity = newQuantity; // 更新本地数据
//   } else {
//     alert("该件商品的数量不能再减少了");
//   }
// };
// 函数：更新商品数量
const updateQuantity = async (row, change) => {
    if (row.quantity + change > 0) {
        row.quantity += change;
        row.sumPrice = row.flower.price * row.quantity;
        await updateCartItem(row.id, row.quantity);
    }
    if (row.quantity + change <= 0) {
        alert("该件商品的数量不能再减少了");
    }
};
//移除购物车中的商品
const deleteItem = async () => {
    if (tableRef.value) {
        const selectedRows = tableRef.value.getSelectionRows();
        if (selectedRows.length === 0) {
            // 没有选择任何商品，弹出提示框
            await ElMessageBox.alert('请选择至少一个商品进行移除。', '提示', {
                confirmButtonText: '确定',
                type: 'warning'
            });
        }
        else {
            let itemIds = []; // 定义一个数组存储所有要删除的商品ID
            const userId = sessionStorage.getItem("id");
            console.log(selectedRows);
            // 遍历所有选中的购物车项
            selectedRows.forEach(item => {
                itemIds.push(item.Id);
            });
            // 调用删除接口
            var response = await removeCartItems(Number(userId), itemIds);
            if (response) {
                ElMessage({
                    message: "删除成功",
                    type: "success"
                });
                info.value = await getCartItems(Number(userId));
            }
        }
    }
};
// 计算总价
const calculateTotalPrice = () => {
    return info.value.reduce((total, item) => total + (item.flower.price * item.quantity), 0);
};
// 处理购买逻辑
const buy = async () => {
    console.log(tableRef.value);
    if (tableRef.value) {
        const selectedRows = tableRef.value.getSelectionRows();
        if (selectedRows.length === 0) {
            // 没有选择任何商品，弹出提示框
            await ElMessageBox.alert('请选择至少一个商品进行购买。', '提示', {
                confirmButtonText: '确定',
                type: 'warning'
            });
        }
        else {
            dialogFormVisible.value = true;
            form.value = selectedRows;
        }
        console.log(selectedRows);
        // 处理购买逻辑
    }
    else {
        console.error('Table reference is not available.');
    }
};
const CloseAdd = () => {
    dialogFormVisible.value = false;
    GetCartItems(); // 重新加载数据
};
// 获取用户ID并从API获取购物车项
const userId = sessionStorage.getItem("id");
const GetCartItems = async () => {
    info.value = await getCartItems(Number(userId));
    console.log(info);
};
// 在组件挂载时获取购物车项
onMounted(GetCartItems);
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
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({ ref: ("tableRef"), data: ((__VLS_ctx.info)), ...{ style: ({}) }, color: ("blue"), }));
    const __VLS_2 = __VLS_1({ ref: ("tableRef"), data: ((__VLS_ctx.info)), ...{ style: ({}) }, color: ("blue"), }, ...__VLS_functionalComponentArgsRest(__VLS_1));
    ({}({ ref: ("tableRef"), data: ((__VLS_ctx.info)), ...{ style: ({}) }, color: ("blue"), }));
    // @ts-ignore
    (__VLS_ctx.tableRef);
    // @ts-ignore
    const __VLS_6 = {}
        .ElTableColumn;
    ({}.ElTableColumn);
    __VLS_components.ElTableColumn;
    __VLS_components.elTableColumn;
    // @ts-ignore
    [ElTableColumn,];
    // @ts-ignore
    const __VLS_7 = __VLS_asFunctionalComponent(__VLS_6, new __VLS_6({ type: ("selection"), width: ("55"), }));
    const __VLS_8 = __VLS_7({ type: ("selection"), width: ("55"), }, ...__VLS_functionalComponentArgsRest(__VLS_7));
    ({}({ type: ("selection"), width: ("55"), }));
    // @ts-ignore
    [info, tableRef,];
    const __VLS_11 = __VLS_pickFunctionalComponentCtx(__VLS_6, __VLS_8);
    // @ts-ignore
    const __VLS_12 = {}
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
    const __VLS_13 = __VLS_asFunctionalComponent(__VLS_12, new __VLS_12({ prop: ("imgUrl"), label: ("图片"), width: ("100"), }));
    const __VLS_14 = __VLS_13({ prop: ("imgUrl"), label: ("图片"), width: ("100"), }, ...__VLS_functionalComponentArgsRest(__VLS_13));
    ({}({ prop: ("imgUrl"), label: ("图片"), width: ("100"), }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.template, __VLS_intrinsicElements.template)({});
    {
        const [{ row }] = __VLS_getSlotParams((__VLS_17.slots).default);
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("demo-image__preview") }, });
        // @ts-ignore
        const __VLS_18 = {}
            .ElImage;
        ({}.ElImage);
        __VLS_components.ElImage;
        __VLS_components.elImage;
        // @ts-ignore
        [ElImage,];
        // @ts-ignore
        const __VLS_19 = __VLS_asFunctionalComponent(__VLS_18, new __VLS_18({ ...{ style: ({}) }, src: ((row.flower.imgUrl)), zoomRate: ((1.2)), maxScale: ((7)), minScale: ((0.2)), initialIndex: ((4)), fit: ("cover"), }));
        const __VLS_20 = __VLS_19({ ...{ style: ({}) }, src: ((row.flower.imgUrl)), zoomRate: ((1.2)), maxScale: ((7)), minScale: ((0.2)), initialIndex: ((4)), fit: ("cover"), }, ...__VLS_functionalComponentArgsRest(__VLS_19));
        ({}({ ...{ style: ({}) }, src: ((row.flower.imgUrl)), zoomRate: ((1.2)), maxScale: ((7)), minScale: ((0.2)), initialIndex: ((4)), fit: ("cover"), }));
        const __VLS_23 = __VLS_pickFunctionalComponentCtx(__VLS_18, __VLS_20);
    }
    const __VLS_17 = __VLS_pickFunctionalComponentCtx(__VLS_12, __VLS_14);
    // @ts-ignore
    const __VLS_24 = {}
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
    const __VLS_25 = __VLS_asFunctionalComponent(__VLS_24, new __VLS_24({ label: ("商品名称"), width: ("120"), }));
    const __VLS_26 = __VLS_25({ label: ("商品名称"), width: ("120"), }, ...__VLS_functionalComponentArgsRest(__VLS_25));
    ({}({ label: ("商品名称"), width: ("120"), }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.template, __VLS_intrinsicElements.template)({});
    {
        const [scope] = __VLS_getSlotParams((__VLS_29.slots).default);
        (scope.row.flower.name);
    }
    const __VLS_29 = __VLS_pickFunctionalComponentCtx(__VLS_24, __VLS_26);
    // @ts-ignore
    const __VLS_30 = {}
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
    const __VLS_31 = __VLS_asFunctionalComponent(__VLS_30, new __VLS_30({ label: ("商品数量"), width: ("200"), }));
    const __VLS_32 = __VLS_31({ label: ("商品数量"), width: ("200"), }, ...__VLS_functionalComponentArgsRest(__VLS_31));
    ({}({ label: ("商品数量"), width: ("200"), }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.template, __VLS_intrinsicElements.template)({});
    {
        const [scope] = __VLS_getSlotParams((__VLS_35.slots).default);
        // @ts-ignore
        const __VLS_36 = {}
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
        const __VLS_37 = __VLS_asFunctionalComponent(__VLS_36, new __VLS_36({ ...{ 'onClick': {} }, type: ("primary"), }));
        const __VLS_38 = __VLS_37({ ...{ 'onClick': {} }, type: ("primary"), }, ...__VLS_functionalComponentArgsRest(__VLS_37));
        ({}({ ...{ 'onClick': {} }, type: ("primary"), }));
        let __VLS_42;
        const __VLS_43 = {
            onClick: (...[$event]) => {
                __VLS_ctx.updateQuantity(scope.row, 1);
                // @ts-ignore
                [updateQuantity,];
            }
        };
        (__VLS_41.slots).default;
        const __VLS_41 = __VLS_pickFunctionalComponentCtx(__VLS_36, __VLS_38);
        let __VLS_39;
        let __VLS_40;
        (scope.row.quantity);
        // @ts-ignore
        const __VLS_44 = {}
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
        const __VLS_45 = __VLS_asFunctionalComponent(__VLS_44, new __VLS_44({ ...{ 'onClick': {} }, type: ("primary"), }));
        const __VLS_46 = __VLS_45({ ...{ 'onClick': {} }, type: ("primary"), }, ...__VLS_functionalComponentArgsRest(__VLS_45));
        ({}({ ...{ 'onClick': {} }, type: ("primary"), }));
        let __VLS_50;
        const __VLS_51 = {
            onClick: (...[$event]) => {
                __VLS_ctx.updateQuantity(scope.row, -1);
                // @ts-ignore
                [updateQuantity,];
            }
        };
        (__VLS_49.slots).default;
        const __VLS_49 = __VLS_pickFunctionalComponentCtx(__VLS_44, __VLS_46);
        let __VLS_47;
        let __VLS_48;
    }
    const __VLS_35 = __VLS_pickFunctionalComponentCtx(__VLS_30, __VLS_32);
    // @ts-ignore
    const __VLS_52 = {}
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
    const __VLS_53 = __VLS_asFunctionalComponent(__VLS_52, new __VLS_52({ label: ("价格"), width: ("200"), }));
    const __VLS_54 = __VLS_53({ label: ("价格"), width: ("200"), }, ...__VLS_functionalComponentArgsRest(__VLS_53));
    ({}({ label: ("价格"), width: ("200"), }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.template, __VLS_intrinsicElements.template)({});
    {
        const [scope] = __VLS_getSlotParams((__VLS_57.slots).default);
        (scope.row.flower.price);
    }
    const __VLS_57 = __VLS_pickFunctionalComponentCtx(__VLS_52, __VLS_54);
    // @ts-ignore
    const __VLS_58 = {}
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
    const __VLS_59 = __VLS_asFunctionalComponent(__VLS_58, new __VLS_58({ label: ("总价"), width: ("200"), }));
    const __VLS_60 = __VLS_59({ label: ("总价"), width: ("200"), }, ...__VLS_functionalComponentArgsRest(__VLS_59));
    ({}({ label: ("总价"), width: ("200"), }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.template, __VLS_intrinsicElements.template)({});
    {
        const [scope] = __VLS_getSlotParams((__VLS_63.slots).default);
        (scope.row.flower.price * scope.row.quantity);
    }
    const __VLS_63 = __VLS_pickFunctionalComponentCtx(__VLS_58, __VLS_60);
    (__VLS_5.slots).default;
    const __VLS_5 = __VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2);
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
    (__VLS_ctx.calculateTotalPrice());
    // @ts-ignore
    [calculateTotalPrice,];
    // @ts-ignore
    const __VLS_64 = {}
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
    const __VLS_65 = __VLS_asFunctionalComponent(__VLS_64, new __VLS_64({ ...{ 'onClick': {} }, type: ("primary"), }));
    const __VLS_66 = __VLS_65({ ...{ 'onClick': {} }, type: ("primary"), }, ...__VLS_functionalComponentArgsRest(__VLS_65));
    ({}({ ...{ 'onClick': {} }, type: ("primary"), }));
    let __VLS_70;
    const __VLS_71 = {
        onClick: (__VLS_ctx.buy)
    };
    // @ts-ignore
    [buy,];
    (__VLS_69.slots).default;
    const __VLS_69 = __VLS_pickFunctionalComponentCtx(__VLS_64, __VLS_66);
    let __VLS_67;
    let __VLS_68;
    // @ts-ignore
    const __VLS_72 = {}
        .ElButton;
    ({}.ElButton);
    __VLS_components.ElButton;
    __VLS_components.elButton;
    // @ts-ignore
    [ElButton,];
    // @ts-ignore
    const __VLS_73 = __VLS_asFunctionalComponent(__VLS_72, new __VLS_72({ ...{ 'onClick': {} }, type: ("danger"), icon: ((__VLS_ctx.Delete)), circle: (true), }));
    const __VLS_74 = __VLS_73({ ...{ 'onClick': {} }, type: ("danger"), icon: ((__VLS_ctx.Delete)), circle: (true), }, ...__VLS_functionalComponentArgsRest(__VLS_73));
    ({}({ ...{ 'onClick': {} }, type: ("danger"), icon: ((__VLS_ctx.Delete)), circle: (true), }));
    let __VLS_78;
    const __VLS_79 = {
        onClick: (__VLS_ctx.deleteItem)
    };
    // @ts-ignore
    [Delete, deleteItem,];
    const __VLS_77 = __VLS_pickFunctionalComponentCtx(__VLS_72, __VLS_74);
    let __VLS_75;
    let __VLS_76;
    // @ts-ignore
    [ConfirmOrder, ConfirmOrder,];
    // @ts-ignore
    const __VLS_80 = __VLS_asFunctionalComponent(ConfirmOrder, new ConfirmOrder({ ...{ 'onCloseAdd': {} }, dialogFormVisible: ((__VLS_ctx.dialogFormVisible)), form: ((__VLS_ctx.form)), }));
    const __VLS_81 = __VLS_80({ ...{ 'onCloseAdd': {} }, dialogFormVisible: ((__VLS_ctx.dialogFormVisible)), form: ((__VLS_ctx.form)), }, ...__VLS_functionalComponentArgsRest(__VLS_80));
    ({}({ ...{ 'onCloseAdd': {} }, dialogFormVisible: ((__VLS_ctx.dialogFormVisible)), form: ((__VLS_ctx.form)), }));
    let __VLS_85;
    const __VLS_86 = {
        onCloseAdd: (__VLS_ctx.CloseAdd)
    };
    // @ts-ignore
    [dialogFormVisible, form, CloseAdd,];
    const __VLS_84 = __VLS_pickFunctionalComponentCtx(ConfirmOrder, __VLS_81);
    let __VLS_82;
    let __VLS_83;
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
                ElTable: ElTable,
                ElButton: ElButton,
                ElImage: ElImage,
                ConfirmOrder: ConfirmOrder,
                Delete: Delete,
                dialogFormVisible: dialogFormVisible,
                form: form,
                info: info,
                tableRef: tableRef,
                updateQuantity: updateQuantity,
                deleteItem: deleteItem,
                calculateTotalPrice: calculateTotalPrice,
                buy: buy,
                CloseAdd: CloseAdd,
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
//# sourceMappingURL=Cart.vue.js.map