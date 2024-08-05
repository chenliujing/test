import { ref, onMounted, reactive } from 'vue';
import { getCategory, deleteCategory } from '../../api/index';
import { ElMessage } from 'element-plus';
import addVue from './Add.vue';
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const category = ref([]);
const addVisible = ref(false);
const ruleFormRef = ref();
const multipleTableRef = ref();
const rules = reactive({
    name: [{ required: false, message: '请输入名称', trigger: 'blur' }]
});
const fetchCategory = async () => {
    try {
        let res = await getCategory();
        category.value = res;
    }
    catch (error) {
        console.error('获取鲜花类别失败:', error);
    }
};
const deleteFlower = async (id, index) => {
    // 弹出提示框，确认是否删除
    const confirmed = window.confirm('确定要删除吗？');
    if (confirmed) {
        try {
            await deleteCategory(id);
            category.value.splice(index, 1);
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
    info.value = JSON.stringify(row);
    console.log(info);
    addVisible.value = true;
};
const CloseAdd = () => {
    addVisible.value = false;
    fetchCategory(); // 重新加载数据
};
// const editFlower = (index: number) => {
//   if (index >= 0 && index < flowers.value.length) {
//     flowers.value[index].editing = true;
//   }
// }
onMounted(fetchCategory);
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
    const __VLS_7 = __VLS_asFunctionalComponent(__VLS_6, new __VLS_6({ data: ((__VLS_ctx.category)), ...{ style: ({}) }, }));
    const __VLS_8 = __VLS_7({ data: ((__VLS_ctx.category)), ...{ style: ({}) }, }, ...__VLS_functionalComponentArgsRest(__VLS_7));
    ({}({ data: ((__VLS_ctx.category)), ...{ style: ({}) }, }));
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
    const __VLS_13 = __VLS_asFunctionalComponent(__VLS_12, new __VLS_12({ prop: ("name"), label: ("名字"), width: ("180"), }));
    const __VLS_14 = __VLS_13({ prop: ("name"), label: ("名字"), width: ("180"), }, ...__VLS_functionalComponentArgsRest(__VLS_13));
    ({}({ prop: ("name"), label: ("名字"), width: ("180"), }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.template, __VLS_intrinsicElements.template)({});
    {
        const [{ row }] = __VLS_getSlotParams((__VLS_17.slots).default);
        (row.name);
        // @ts-ignore
        [category,];
    }
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
    const __VLS_19 = __VLS_asFunctionalComponent(__VLS_18, new __VLS_18({ label: ("操作"), width: ("200"), }));
    const __VLS_20 = __VLS_19({ label: ("操作"), width: ("200"), }, ...__VLS_functionalComponentArgsRest(__VLS_19));
    ({}({ label: ("操作"), width: ("200"), }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.template, __VLS_intrinsicElements.template)({});
    {
        const [{ row, $index }] = __VLS_getSlotParams((__VLS_23.slots).default);
        // @ts-ignore
        const __VLS_24 = {}
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
        const __VLS_25 = __VLS_asFunctionalComponent(__VLS_24, new __VLS_24({ ...{ 'onClick': {} }, type: ("primary"), }));
        const __VLS_26 = __VLS_25({ ...{ 'onClick': {} }, type: ("primary"), }, ...__VLS_functionalComponentArgsRest(__VLS_25));
        ({}({ ...{ 'onClick': {} }, type: ("primary"), }));
        let __VLS_30;
        const __VLS_31 = {
            onClick: (...[$event]) => {
                __VLS_ctx.editFlower($index, row);
                // @ts-ignore
                [editFlower,];
            }
        };
        (__VLS_29.slots).default;
        const __VLS_29 = __VLS_pickFunctionalComponentCtx(__VLS_24, __VLS_26);
        let __VLS_27;
        let __VLS_28;
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
        const __VLS_33 = __VLS_asFunctionalComponent(__VLS_32, new __VLS_32({ ...{ 'onClick': {} }, type: ("danger"), }));
        const __VLS_34 = __VLS_33({ ...{ 'onClick': {} }, type: ("danger"), }, ...__VLS_functionalComponentArgsRest(__VLS_33));
        ({}({ ...{ 'onClick': {} }, type: ("danger"), }));
        let __VLS_38;
        const __VLS_39 = {
            onClick: (...[$event]) => {
                __VLS_ctx.deleteFlower(row.id, $index);
                // @ts-ignore
                [deleteFlower,];
            }
        };
        (__VLS_37.slots).default;
        const __VLS_37 = __VLS_pickFunctionalComponentCtx(__VLS_32, __VLS_34);
        let __VLS_35;
        let __VLS_36;
    }
    const __VLS_23 = __VLS_pickFunctionalComponentCtx(__VLS_18, __VLS_20);
    (__VLS_11.slots).default;
    const __VLS_11 = __VLS_pickFunctionalComponentCtx(__VLS_6, __VLS_8);
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
        onClick: (__VLS_ctx.add)
    };
    // @ts-ignore
    [add,];
    (__VLS_45.slots).default;
    const __VLS_45 = __VLS_pickFunctionalComponentCtx(__VLS_40, __VLS_42);
    let __VLS_43;
    let __VLS_44;
    (__VLS_5.slots).default;
    const __VLS_5 = __VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2);
    // @ts-ignore
    [addVue, addVue,];
    // @ts-ignore
    const __VLS_48 = __VLS_asFunctionalComponent(addVue, new addVue({ ...{ 'onCloseAdd': {} }, addVisible: ((__VLS_ctx.addVisible)), info: ((__VLS_ctx.info)), }));
    const __VLS_49 = __VLS_48({ ...{ 'onCloseAdd': {} }, addVisible: ((__VLS_ctx.addVisible)), info: ((__VLS_ctx.info)), }, ...__VLS_functionalComponentArgsRest(__VLS_48));
    ({}({ ...{ 'onCloseAdd': {} }, addVisible: ((__VLS_ctx.addVisible)), info: ((__VLS_ctx.info)), }));
    let __VLS_53;
    const __VLS_54 = {
        onCloseAdd: (__VLS_ctx.CloseAdd)
    };
    // @ts-ignore
    [addVisible, info, CloseAdd,];
    const __VLS_52 = __VLS_pickFunctionalComponentCtx(addVue, __VLS_49);
    let __VLS_50;
    let __VLS_51;
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
        __VLS_styleScopedClasses['box-card'];
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
                category: category,
                addVisible: addVisible,
                deleteFlower: deleteFlower,
                add: add,
                info: info,
                editFlower: editFlower,
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
//# sourceMappingURL=Index.vue.js.map