import { ref, onMounted, reactive, computed } from 'vue';
import { getUsers, deleteUser } from '../../api/index';
import { ElMessage } from 'element-plus';
import addVue from './Add.vue';
import setingRole from './settingRole.vue';
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const flowers = ref([]);
const addVisible = ref(false);
const setingRoleVisible = ref(false);
const ruleFormRef = ref();
const multipleTableRef = ref();
const rules = reactive({
    name: [{ required: false, message: '请输入名称', trigger: 'blur' }]
});
let searchText = ref('');
const fetchUsers = async () => {
    try {
        let res = await getUsers();
        console.log(res);
        flowers.value = res;
    }
    catch (error) {
        console.error('获取用户失败:', error);
    }
};
const filteredUsers = computed(() => {
    let data = flowers.value;
    if (!searchText.value.trim()) {
        return data;
    }
    const searchTerm = searchText.value.toLowerCase();
    return data.filter(item => {
        const name = item.name ? item.name.toLowerCase() : '';
        return (name.includes(searchTerm));
    });
});
const DeleteUser = async (id, index) => {
    // 弹出提示框，确认是否删除
    const confirmed = window.confirm('确定要删除吗？');
    if (confirmed) {
        try {
            await deleteUser(id);
            flowers.value.splice(index, 1);
            ElMessage({
                message: "删除成功",
                type: 'success'
            });
        }
        catch (error) {
            console.error('删除用户失败:', error);
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
const editUser = (index, row) => {
    info.value = JSON.stringify(row);
    console.log(info);
    addVisible.value = true;
};
const personId = ref();
const assign = (index, row) => {
    setingRoleVisible.value = true;
    personId.value = row.id;
};
const CloseAdd = () => {
    addVisible.value = false;
    fetchUsers(); // 重新加载数据
};
const CloseSetingRole = () => {
    setingRoleVisible.value = false;
    fetchUsers(); // 重新加载数据
};
// const editFlower = (index: number) => {
//   if (index >= 0 && index < flowers.value.length) {
//     flowers.value[index].editing = true;
//   }
// }
onMounted(fetchUsers);
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
    const __VLS_7 = __VLS_asFunctionalComponent(__VLS_6, new __VLS_6({ modelValue: ((__VLS_ctx.searchText)), placeholder: ("请输入用户名"), prefixIcon: ("el-icon-search"), }));
    const __VLS_8 = __VLS_7({ modelValue: ((__VLS_ctx.searchText)), placeholder: ("请输入用户名"), prefixIcon: ("el-icon-search"), }, ...__VLS_functionalComponentArgsRest(__VLS_7));
    ({}({ modelValue: ((__VLS_ctx.searchText)), placeholder: ("请输入用户名"), prefixIcon: ("el-icon-search"), }));
    // @ts-ignore
    [searchText,];
    const __VLS_11 = __VLS_pickFunctionalComponentCtx(__VLS_6, __VLS_8);
    // @ts-ignore
    const __VLS_12 = {}
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
    const __VLS_13 = __VLS_asFunctionalComponent(__VLS_12, new __VLS_12({ data: ((__VLS_ctx.filteredUsers)), ...{ style: ({}) }, }));
    const __VLS_14 = __VLS_13({ data: ((__VLS_ctx.filteredUsers)), ...{ style: ({}) }, }, ...__VLS_functionalComponentArgsRest(__VLS_13));
    ({}({ data: ((__VLS_ctx.filteredUsers)), ...{ style: ({}) }, }));
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
    const __VLS_19 = __VLS_asFunctionalComponent(__VLS_18, new __VLS_18({ prop: ("name"), label: ("名字"), width: ("180"), }));
    const __VLS_20 = __VLS_19({ prop: ("name"), label: ("名字"), width: ("180"), }, ...__VLS_functionalComponentArgsRest(__VLS_19));
    ({}({ prop: ("name"), label: ("名字"), width: ("180"), }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.template, __VLS_intrinsicElements.template)({});
    {
        const [{ row }] = __VLS_getSlotParams((__VLS_23.slots).default);
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
        (row.name);
        // @ts-ignore
        [filteredUsers,];
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
    const __VLS_25 = __VLS_asFunctionalComponent(__VLS_24, new __VLS_24({ prop: ("password"), label: ("密码"), width: ("180"), }));
    const __VLS_26 = __VLS_25({ prop: ("password"), label: ("密码"), width: ("180"), }, ...__VLS_functionalComponentArgsRest(__VLS_25));
    ({}({ prop: ("password"), label: ("密码"), width: ("180"), }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.template, __VLS_intrinsicElements.template)({});
    {
        const [{ row }] = __VLS_getSlotParams((__VLS_29.slots).default);
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
        (row.password);
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
    const __VLS_31 = __VLS_asFunctionalComponent(__VLS_30, new __VLS_30({ prop: ("email"), label: ("邮箱"), width: ("100"), }));
    const __VLS_32 = __VLS_31({ prop: ("email"), label: ("邮箱"), width: ("100"), }, ...__VLS_functionalComponentArgsRest(__VLS_31));
    ({}({ prop: ("email"), label: ("邮箱"), width: ("100"), }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.template, __VLS_intrinsicElements.template)({});
    {
        const [{ row }] = __VLS_getSlotParams((__VLS_35.slots).default);
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
        (row.email);
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
    const __VLS_37 = __VLS_asFunctionalComponent(__VLS_36, new __VLS_36({ prop: ("roleNames"), label: ("角色"), width: ("100"), }));
    const __VLS_38 = __VLS_37({ prop: ("roleNames"), label: ("角色"), width: ("100"), }, ...__VLS_functionalComponentArgsRest(__VLS_37));
    ({}({ prop: ("roleNames"), label: ("角色"), width: ("100"), }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.template, __VLS_intrinsicElements.template)({});
    {
        const [{ row }] = __VLS_getSlotParams((__VLS_41.slots).default);
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
        (row.roleNames.join(','));
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
    const __VLS_43 = __VLS_asFunctionalComponent(__VLS_42, new __VLS_42({ label: ("操作"), width: ("400"), }));
    const __VLS_44 = __VLS_43({ label: ("操作"), width: ("400"), }, ...__VLS_functionalComponentArgsRest(__VLS_43));
    ({}({ label: ("操作"), width: ("400"), }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.template, __VLS_intrinsicElements.template)({});
    {
        const [{ row, $index }] = __VLS_getSlotParams((__VLS_47.slots).default);
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
        const __VLS_49 = __VLS_asFunctionalComponent(__VLS_48, new __VLS_48({ ...{ 'onClick': {} }, type: ("primary"), }));
        const __VLS_50 = __VLS_49({ ...{ 'onClick': {} }, type: ("primary"), }, ...__VLS_functionalComponentArgsRest(__VLS_49));
        ({}({ ...{ 'onClick': {} }, type: ("primary"), }));
        let __VLS_54;
        const __VLS_55 = {
            onClick: (...[$event]) => {
                __VLS_ctx.editUser($index, row);
                // @ts-ignore
                [editUser,];
            }
        };
        (__VLS_53.slots).default;
        const __VLS_53 = __VLS_pickFunctionalComponentCtx(__VLS_48, __VLS_50);
        let __VLS_51;
        let __VLS_52;
        // @ts-ignore
        const __VLS_56 = {}
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
        const __VLS_57 = __VLS_asFunctionalComponent(__VLS_56, new __VLS_56({ ...{ 'onClick': {} }, type: ("primary"), }));
        const __VLS_58 = __VLS_57({ ...{ 'onClick': {} }, type: ("primary"), }, ...__VLS_functionalComponentArgsRest(__VLS_57));
        ({}({ ...{ 'onClick': {} }, type: ("primary"), }));
        let __VLS_62;
        const __VLS_63 = {
            onClick: (...[$event]) => {
                __VLS_ctx.assign($index, row);
                // @ts-ignore
                [assign,];
            }
        };
        (__VLS_61.slots).default;
        const __VLS_61 = __VLS_pickFunctionalComponentCtx(__VLS_56, __VLS_58);
        let __VLS_59;
        let __VLS_60;
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
        const __VLS_65 = __VLS_asFunctionalComponent(__VLS_64, new __VLS_64({ ...{ 'onClick': {} }, type: ("danger"), }));
        const __VLS_66 = __VLS_65({ ...{ 'onClick': {} }, type: ("danger"), }, ...__VLS_functionalComponentArgsRest(__VLS_65));
        ({}({ ...{ 'onClick': {} }, type: ("danger"), }));
        let __VLS_70;
        const __VLS_71 = {
            onClick: (...[$event]) => {
                __VLS_ctx.DeleteUser(row.id, $index);
                // @ts-ignore
                [DeleteUser,];
            }
        };
        (__VLS_69.slots).default;
        const __VLS_69 = __VLS_pickFunctionalComponentCtx(__VLS_64, __VLS_66);
        let __VLS_67;
        let __VLS_68;
    }
    const __VLS_47 = __VLS_pickFunctionalComponentCtx(__VLS_42, __VLS_44);
    (__VLS_17.slots).default;
    const __VLS_17 = __VLS_pickFunctionalComponentCtx(__VLS_12, __VLS_14);
    // @ts-ignore
    const __VLS_72 = {}
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
    const __VLS_73 = __VLS_asFunctionalComponent(__VLS_72, new __VLS_72({ ...{ 'onClick': {} }, type: ("primary"), }));
    const __VLS_74 = __VLS_73({ ...{ 'onClick': {} }, type: ("primary"), }, ...__VLS_functionalComponentArgsRest(__VLS_73));
    ({}({ ...{ 'onClick': {} }, type: ("primary"), }));
    let __VLS_78;
    const __VLS_79 = {
        onClick: (__VLS_ctx.add)
    };
    // @ts-ignore
    [add,];
    (__VLS_77.slots).default;
    const __VLS_77 = __VLS_pickFunctionalComponentCtx(__VLS_72, __VLS_74);
    let __VLS_75;
    let __VLS_76;
    (__VLS_5.slots).default;
    const __VLS_5 = __VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2);
    // @ts-ignore
    [addVue, addVue,];
    // @ts-ignore
    const __VLS_80 = __VLS_asFunctionalComponent(addVue, new addVue({ ...{ 'onCloseAdd': {} }, addVisible: ((__VLS_ctx.addVisible)), info: ((__VLS_ctx.info)), }));
    const __VLS_81 = __VLS_80({ ...{ 'onCloseAdd': {} }, addVisible: ((__VLS_ctx.addVisible)), info: ((__VLS_ctx.info)), }, ...__VLS_functionalComponentArgsRest(__VLS_80));
    ({}({ ...{ 'onCloseAdd': {} }, addVisible: ((__VLS_ctx.addVisible)), info: ((__VLS_ctx.info)), }));
    let __VLS_85;
    const __VLS_86 = {
        onCloseAdd: (__VLS_ctx.CloseAdd)
    };
    // @ts-ignore
    [addVisible, info, CloseAdd,];
    const __VLS_84 = __VLS_pickFunctionalComponentCtx(addVue, __VLS_81);
    let __VLS_82;
    let __VLS_83;
    // @ts-ignore
    [setingRole, setingRole,];
    // @ts-ignore
    const __VLS_87 = __VLS_asFunctionalComponent(setingRole, new setingRole({ ...{ 'onCloseSetingRole': {} }, setingRoleVisible: ((__VLS_ctx.setingRoleVisible)), personId: ((__VLS_ctx.personId)), }));
    const __VLS_88 = __VLS_87({ ...{ 'onCloseSetingRole': {} }, setingRoleVisible: ((__VLS_ctx.setingRoleVisible)), personId: ((__VLS_ctx.personId)), }, ...__VLS_functionalComponentArgsRest(__VLS_87));
    ({}({ ...{ 'onCloseSetingRole': {} }, setingRoleVisible: ((__VLS_ctx.setingRoleVisible)), personId: ((__VLS_ctx.personId)), }));
    let __VLS_92;
    const __VLS_93 = {
        onCloseSetingRole: (__VLS_ctx.CloseSetingRole)
    };
    // @ts-ignore
    [setingRoleVisible, personId, CloseSetingRole,];
    const __VLS_91 = __VLS_pickFunctionalComponentCtx(setingRole, __VLS_88);
    let __VLS_89;
    let __VLS_90;
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
                setingRole: setingRole,
                addVisible: addVisible,
                setingRoleVisible: setingRoleVisible,
                searchText: searchText,
                filteredUsers: filteredUsers,
                DeleteUser: DeleteUser,
                add: add,
                info: info,
                editUser: editUser,
                personId: personId,
                assign: assign,
                CloseAdd: CloseAdd,
                CloseSetingRole: CloseSetingRole,
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