import { getAddress, deleteAddress } from '../../../api';
import { ref, onMounted } from 'vue';
import Add from './Add.vue';
import { ElTable } from 'element-plus';
import { ElMessageBox, ElMessage } from 'element-plus';
import { Edit, CirclePlus } from '@element-plus/icons-vue';
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const tableRef = ref(null);
let form = ref([]);
let userId = sessionStorage.getItem("id");
onMounted(async () => {
    let response = await getAddress(Number(userId));
    form.value = response;
    console.log(form);
});
const addAddress = () => {
    addVisible.value = true;
    info.value = undefined;
};
const info = ref();
const editAddress = (row) => {
    info.value = JSON.stringify(row);
    console.log(info);
    addVisible.value = true;
};
const DeleteAddress = async () => {
    if (!tableRef.value)
        return;
    const selectedRows = await tableRef.value.getSelectionRows();
    if (selectedRows.length === 0) {
        ElMessage.warning('请先选择一个地址进行删除');
        return;
    }
    ElMessageBox.confirm('确定要删除所选地址吗？', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
    }).then(async () => {
        try {
            await deleteAddress(selectedRows); // 确保这里的删除操作成功
            ElMessage({
                message: "删除成功",
                type: "success"
            });
            form.value = await getAddress(Number(userId)); // 刷新数据
        }
        catch (error) {
            ElMessage.error("删除失败");
        }
    }).catch(() => {
        // 取消删除
    });
};
let addVisible = ref(false);
const CloseAdd = async () => {
    addVisible.value = false;
    let response = await getAddress(Number(userId));
    form.value = response;
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
    // @ts-ignore
    const __VLS_6 = {}
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
    const __VLS_7 = __VLS_asFunctionalComponent(__VLS_6, new __VLS_6({ ref: ("tableRef"), data: ((__VLS_ctx.form)), ...{ style: ({}) }, }));
    const __VLS_8 = __VLS_7({ ref: ("tableRef"), data: ((__VLS_ctx.form)), ...{ style: ({}) }, }, ...__VLS_functionalComponentArgsRest(__VLS_7));
    ({}({ ref: ("tableRef"), data: ((__VLS_ctx.form)), ...{ style: ({}) }, }));
    // @ts-ignore
    (__VLS_ctx.tableRef);
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
    const __VLS_13 = __VLS_asFunctionalComponent(__VLS_12, new __VLS_12({ type: ("selection"), width: ("55"), }));
    const __VLS_14 = __VLS_13({ type: ("selection"), width: ("55"), }, ...__VLS_functionalComponentArgsRest(__VLS_13));
    ({}({ type: ("selection"), width: ("55"), }));
    // @ts-ignore
    [form, tableRef,];
    const __VLS_17 = __VLS_pickFunctionalComponentCtx(__VLS_12, __VLS_14);
    // @ts-ignore
    const __VLS_18 = {}
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
    const __VLS_19 = __VLS_asFunctionalComponent(__VLS_18, new __VLS_18({ prop: ("province"), label: ("省"), width: ("180"), }));
    const __VLS_20 = __VLS_19({ prop: ("province"), label: ("省"), width: ("180"), }, ...__VLS_functionalComponentArgsRest(__VLS_19));
    ({}({ prop: ("province"), label: ("省"), width: ("180"), }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.template, __VLS_intrinsicElements.template)({});
    {
        const [{ row }] = __VLS_getSlotParams((__VLS_23.slots).default);
        (row.province);
    }
    const __VLS_23 = __VLS_pickFunctionalComponentCtx(__VLS_18, __VLS_20);
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
    const __VLS_25 = __VLS_asFunctionalComponent(__VLS_24, new __VLS_24({ prop: ("city"), label: ("市"), width: ("180"), }));
    const __VLS_26 = __VLS_25({ prop: ("city"), label: ("市"), width: ("180"), }, ...__VLS_functionalComponentArgsRest(__VLS_25));
    ({}({ prop: ("city"), label: ("市"), width: ("180"), }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.template, __VLS_intrinsicElements.template)({});
    {
        const [{ row }] = __VLS_getSlotParams((__VLS_29.slots).default);
        (row.city);
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
    const __VLS_31 = __VLS_asFunctionalComponent(__VLS_30, new __VLS_30({ prop: ("county"), label: ("区"), width: ("180"), }));
    const __VLS_32 = __VLS_31({ prop: ("county"), label: ("区"), width: ("180"), }, ...__VLS_functionalComponentArgsRest(__VLS_31));
    ({}({ prop: ("county"), label: ("区"), width: ("180"), }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.template, __VLS_intrinsicElements.template)({});
    {
        const [{ row }] = __VLS_getSlotParams((__VLS_35.slots).default);
        (row.county);
    }
    const __VLS_35 = __VLS_pickFunctionalComponentCtx(__VLS_30, __VLS_32);
    // @ts-ignore
    const __VLS_36 = {}
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
    const __VLS_37 = __VLS_asFunctionalComponent(__VLS_36, new __VLS_36({ prop: ("street"), label: ("详细地址"), width: ("180"), }));
    const __VLS_38 = __VLS_37({ prop: ("street"), label: ("详细地址"), width: ("180"), }, ...__VLS_functionalComponentArgsRest(__VLS_37));
    ({}({ prop: ("street"), label: ("详细地址"), width: ("180"), }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.template, __VLS_intrinsicElements.template)({});
    {
        const [{ row }] = __VLS_getSlotParams((__VLS_41.slots).default);
        (row.street);
    }
    const __VLS_41 = __VLS_pickFunctionalComponentCtx(__VLS_36, __VLS_38);
    // @ts-ignore
    const __VLS_42 = {}
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
    const __VLS_43 = __VLS_asFunctionalComponent(__VLS_42, new __VLS_42({ label: ("操作"), }));
    const __VLS_44 = __VLS_43({ label: ("操作"), }, ...__VLS_functionalComponentArgsRest(__VLS_43));
    ({}({ label: ("操作"), }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.template, __VLS_intrinsicElements.template)({});
    {
        const [{ row }] = __VLS_getSlotParams((__VLS_47.slots).default);
        // @ts-ignore
        const __VLS_48 = {}
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
        const __VLS_49 = __VLS_asFunctionalComponent(__VLS_48, new __VLS_48({ ...{ 'onClick': {} }, icon: ((__VLS_ctx.Edit)), type: ("primary"), }));
        const __VLS_50 = __VLS_49({ ...{ 'onClick': {} }, icon: ((__VLS_ctx.Edit)), type: ("primary"), }, ...__VLS_functionalComponentArgsRest(__VLS_49));
        ({}({ ...{ 'onClick': {} }, icon: ((__VLS_ctx.Edit)), type: ("primary"), }));
        let __VLS_54;
        const __VLS_55 = {
            onClick: (...[$event]) => {
                __VLS_ctx.editAddress(row);
                // @ts-ignore
                [Edit, editAddress,];
            }
        };
        (__VLS_53.slots).default;
        const __VLS_53 = __VLS_pickFunctionalComponentCtx(__VLS_48, __VLS_50);
        let __VLS_51;
        let __VLS_52;
    }
    const __VLS_47 = __VLS_pickFunctionalComponentCtx(__VLS_42, __VLS_44);
    (__VLS_11.slots).default;
    const __VLS_11 = __VLS_pickFunctionalComponentCtx(__VLS_6, __VLS_8);
    // @ts-ignore
    [Add, Add,];
    // @ts-ignore
    const __VLS_56 = __VLS_asFunctionalComponent(Add, new Add({ ...{ 'onCloseAdd': {} }, addVisible: ((__VLS_ctx.addVisible)), info: ((__VLS_ctx.info)), }));
    const __VLS_57 = __VLS_56({ ...{ 'onCloseAdd': {} }, addVisible: ((__VLS_ctx.addVisible)), info: ((__VLS_ctx.info)), }, ...__VLS_functionalComponentArgsRest(__VLS_56));
    ({}({ ...{ 'onCloseAdd': {} }, addVisible: ((__VLS_ctx.addVisible)), info: ((__VLS_ctx.info)), }));
    let __VLS_61;
    const __VLS_62 = {
        onCloseAdd: (__VLS_ctx.CloseAdd)
    };
    // @ts-ignore
    [addVisible, info, CloseAdd,];
    const __VLS_60 = __VLS_pickFunctionalComponentCtx(Add, __VLS_57);
    let __VLS_58;
    let __VLS_59;
    // @ts-ignore
    const __VLS_63 = {}
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
    const __VLS_64 = __VLS_asFunctionalComponent(__VLS_63, new __VLS_63({ ...{ 'onClick': {} }, type: ("primary"), icon: ((__VLS_ctx.CirclePlus)), }));
    const __VLS_65 = __VLS_64({ ...{ 'onClick': {} }, type: ("primary"), icon: ((__VLS_ctx.CirclePlus)), }, ...__VLS_functionalComponentArgsRest(__VLS_64));
    ({}({ ...{ 'onClick': {} }, type: ("primary"), icon: ((__VLS_ctx.CirclePlus)), }));
    let __VLS_69;
    const __VLS_70 = {
        onClick: (__VLS_ctx.addAddress)
    };
    // @ts-ignore
    [CirclePlus, addAddress,];
    (__VLS_68.slots).default;
    const __VLS_68 = __VLS_pickFunctionalComponentCtx(__VLS_63, __VLS_65);
    let __VLS_66;
    let __VLS_67;
    // @ts-ignore
    const __VLS_71 = {}
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
    const __VLS_72 = __VLS_asFunctionalComponent(__VLS_71, new __VLS_71({ ...{ 'onClick': {} }, type: ("danger"), }));
    const __VLS_73 = __VLS_72({ ...{ 'onClick': {} }, type: ("danger"), }, ...__VLS_functionalComponentArgsRest(__VLS_72));
    ({}({ ...{ 'onClick': {} }, type: ("danger"), }));
    let __VLS_77;
    const __VLS_78 = {
        onClick: (__VLS_ctx.DeleteAddress)
    };
    // @ts-ignore
    [DeleteAddress,];
    (__VLS_76.slots).default;
    const __VLS_76 = __VLS_pickFunctionalComponentCtx(__VLS_71, __VLS_73);
    let __VLS_74;
    let __VLS_75;
    (__VLS_5.slots).default;
    const __VLS_5 = __VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2);
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
    }
    var __VLS_slots;
    return __VLS_slots;
    const __VLS_componentsOption = {};
    let __VLS_name;
    let __VLS_defineComponent;
    const __VLS_internalComponent = __VLS_defineComponent({
        setup() {
            return {
                Add: Add,
                ElTable: ElTable,
                Edit: Edit,
                CirclePlus: CirclePlus,
                tableRef: tableRef,
                form: form,
                addAddress: addAddress,
                info: info,
                editAddress: editAddress,
                DeleteAddress: DeleteAddress,
                addVisible: addVisible,
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
//# sourceMappingURL=Address.vue.js.map