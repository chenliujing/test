import router from '../routes';
import { Setting, Handbag, Goods, ShoppingCart, Place, User } from '@element-plus/icons-vue';
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const logout = async () => {
    sessionStorage.removeItem("id");
    router.push("/login");
};
router.push('/Flower');
const handleOpen = (key, keyPath) => {
    console.log(key, keyPath);
};
const handleClose = (key, keyPath) => {
    console.log(key, keyPath);
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
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("common-layout") }, });
    // @ts-ignore
    const __VLS_0 = {}
        .ElContainer;
    ({}.ElContainer);
    ({}.ElContainer);
    __VLS_components.ElContainer;
    __VLS_components.elContainer;
    __VLS_components.ElContainer;
    __VLS_components.elContainer;
    // @ts-ignore
    [ElContainer, ElContainer,];
    // @ts-ignore
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({}));
    const __VLS_2 = __VLS_1({}, ...__VLS_functionalComponentArgsRest(__VLS_1));
    ({}({}));
    // @ts-ignore
    const __VLS_6 = {}
        .ElHeader;
    ({}.ElHeader);
    ({}.ElHeader);
    __VLS_components.ElHeader;
    __VLS_components.elHeader;
    __VLS_components.ElHeader;
    __VLS_components.elHeader;
    // @ts-ignore
    [ElHeader, ElHeader,];
    // @ts-ignore
    const __VLS_7 = __VLS_asFunctionalComponent(__VLS_6, new __VLS_6({ ...{ class: ("header") }, }));
    const __VLS_8 = __VLS_7({ ...{ class: ("header") }, }, ...__VLS_functionalComponentArgsRest(__VLS_7));
    ({}({ ...{ class: ("header") }, }));
    // @ts-ignore
    const __VLS_12 = {}
        .ElMenu;
    ({}.ElMenu);
    ({}.ElMenu);
    __VLS_components.ElMenu;
    __VLS_components.elMenu;
    __VLS_components.ElMenu;
    __VLS_components.elMenu;
    // @ts-ignore
    [ElMenu, ElMenu,];
    // @ts-ignore
    const __VLS_13 = __VLS_asFunctionalComponent(__VLS_12, new __VLS_12({ ...{ 'onOpen': {} }, ...{ 'onClose': {} }, mode: ("horizontal"), defaultActive: ("/Flower"), ...{ class: ("el-menu-demo") }, router: (true), }));
    const __VLS_14 = __VLS_13({ ...{ 'onOpen': {} }, ...{ 'onClose': {} }, mode: ("horizontal"), defaultActive: ("/Flower"), ...{ class: ("el-menu-demo") }, router: (true), }, ...__VLS_functionalComponentArgsRest(__VLS_13));
    ({}({ ...{ 'onOpen': {} }, ...{ 'onClose': {} }, mode: ("horizontal"), defaultActive: ("/Flower"), ...{ class: ("el-menu-demo") }, router: (true), }));
    let __VLS_18;
    const __VLS_19 = {
        onOpen: (__VLS_ctx.handleOpen)
    };
    const __VLS_20 = {
        onClose: (__VLS_ctx.handleClose)
    };
    // @ts-ignore
    const __VLS_21 = {}
        .ElMenuItem;
    ({}.ElMenuItem);
    ({}.ElMenuItem);
    __VLS_components.ElMenuItem;
    __VLS_components.elMenuItem;
    __VLS_components.ElMenuItem;
    __VLS_components.elMenuItem;
    // @ts-ignore
    [ElMenuItem, ElMenuItem,];
    // @ts-ignore
    const __VLS_22 = __VLS_asFunctionalComponent(__VLS_21, new __VLS_21({ index: ("/Flower"), }));
    const __VLS_23 = __VLS_22({ index: ("/Flower"), }, ...__VLS_functionalComponentArgsRest(__VLS_22));
    ({}({ index: ("/Flower"), }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.template, __VLS_intrinsicElements.template)({});
    {
        (__VLS_26.slots).title;
        // @ts-ignore
        const __VLS_27 = {}
            .ElIcon;
        ({}.ElIcon);
        ({}.ElIcon);
        __VLS_components.ElIcon;
        __VLS_components.elIcon;
        __VLS_components.ElIcon;
        __VLS_components.elIcon;
        // @ts-ignore
        [ElIcon, ElIcon,];
        // @ts-ignore
        const __VLS_28 = __VLS_asFunctionalComponent(__VLS_27, new __VLS_27({}));
        const __VLS_29 = __VLS_28({}, ...__VLS_functionalComponentArgsRest(__VLS_28));
        ({}({}));
        // @ts-ignore
        const __VLS_33 = {}
            .Goods;
        ({}.Goods);
        __VLS_components.Goods;
        // @ts-ignore
        [Goods,];
        // @ts-ignore
        const __VLS_34 = __VLS_asFunctionalComponent(__VLS_33, new __VLS_33({}));
        const __VLS_35 = __VLS_34({}, ...__VLS_functionalComponentArgsRest(__VLS_34));
        ({}({}));
        // @ts-ignore
        [handleOpen, handleClose,];
        const __VLS_38 = __VLS_pickFunctionalComponentCtx(__VLS_33, __VLS_35);
        (__VLS_32.slots).default;
        const __VLS_32 = __VLS_pickFunctionalComponentCtx(__VLS_27, __VLS_29);
        __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
    }
    const __VLS_26 = __VLS_pickFunctionalComponentCtx(__VLS_21, __VLS_23);
    // @ts-ignore
    const __VLS_39 = {}
        .ElMenuItem;
    ({}.ElMenuItem);
    ({}.ElMenuItem);
    __VLS_components.ElMenuItem;
    __VLS_components.elMenuItem;
    __VLS_components.ElMenuItem;
    __VLS_components.elMenuItem;
    // @ts-ignore
    [ElMenuItem, ElMenuItem,];
    // @ts-ignore
    const __VLS_40 = __VLS_asFunctionalComponent(__VLS_39, new __VLS_39({ index: ("/Cart"), }));
    const __VLS_41 = __VLS_40({ index: ("/Cart"), }, ...__VLS_functionalComponentArgsRest(__VLS_40));
    ({}({ index: ("/Cart"), }));
    // @ts-ignore
    const __VLS_45 = {}
        .ElIcon;
    ({}.ElIcon);
    ({}.ElIcon);
    __VLS_components.ElIcon;
    __VLS_components.elIcon;
    __VLS_components.ElIcon;
    __VLS_components.elIcon;
    // @ts-ignore
    [ElIcon, ElIcon,];
    // @ts-ignore
    const __VLS_46 = __VLS_asFunctionalComponent(__VLS_45, new __VLS_45({}));
    const __VLS_47 = __VLS_46({}, ...__VLS_functionalComponentArgsRest(__VLS_46));
    ({}({}));
    // @ts-ignore
    const __VLS_51 = {}
        .ShoppingCart;
    ({}.ShoppingCart);
    __VLS_components.ShoppingCart;
    // @ts-ignore
    [ShoppingCart,];
    // @ts-ignore
    const __VLS_52 = __VLS_asFunctionalComponent(__VLS_51, new __VLS_51({}));
    const __VLS_53 = __VLS_52({}, ...__VLS_functionalComponentArgsRest(__VLS_52));
    ({}({}));
    const __VLS_56 = __VLS_pickFunctionalComponentCtx(__VLS_51, __VLS_53);
    (__VLS_50.slots).default;
    const __VLS_50 = __VLS_pickFunctionalComponentCtx(__VLS_45, __VLS_47);
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
    (__VLS_44.slots).default;
    const __VLS_44 = __VLS_pickFunctionalComponentCtx(__VLS_39, __VLS_41);
    // @ts-ignore
    const __VLS_57 = {}
        .ElMenuItem;
    ({}.ElMenuItem);
    ({}.ElMenuItem);
    __VLS_components.ElMenuItem;
    __VLS_components.elMenuItem;
    __VLS_components.ElMenuItem;
    __VLS_components.elMenuItem;
    // @ts-ignore
    [ElMenuItem, ElMenuItem,];
    // @ts-ignore
    const __VLS_58 = __VLS_asFunctionalComponent(__VLS_57, new __VLS_57({ index: ("/Order"), }));
    const __VLS_59 = __VLS_58({ index: ("/Order"), }, ...__VLS_functionalComponentArgsRest(__VLS_58));
    ({}({ index: ("/Order"), }));
    // @ts-ignore
    const __VLS_63 = {}
        .ElIcon;
    ({}.ElIcon);
    ({}.ElIcon);
    __VLS_components.ElIcon;
    __VLS_components.elIcon;
    __VLS_components.ElIcon;
    __VLS_components.elIcon;
    // @ts-ignore
    [ElIcon, ElIcon,];
    // @ts-ignore
    const __VLS_64 = __VLS_asFunctionalComponent(__VLS_63, new __VLS_63({}));
    const __VLS_65 = __VLS_64({}, ...__VLS_functionalComponentArgsRest(__VLS_64));
    ({}({}));
    // @ts-ignore
    const __VLS_69 = {}
        .Handbag;
    ({}.Handbag);
    __VLS_components.Handbag;
    // @ts-ignore
    [Handbag,];
    // @ts-ignore
    const __VLS_70 = __VLS_asFunctionalComponent(__VLS_69, new __VLS_69({}));
    const __VLS_71 = __VLS_70({}, ...__VLS_functionalComponentArgsRest(__VLS_70));
    ({}({}));
    const __VLS_74 = __VLS_pickFunctionalComponentCtx(__VLS_69, __VLS_71);
    (__VLS_68.slots).default;
    const __VLS_68 = __VLS_pickFunctionalComponentCtx(__VLS_63, __VLS_65);
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
    (__VLS_62.slots).default;
    const __VLS_62 = __VLS_pickFunctionalComponentCtx(__VLS_57, __VLS_59);
    // @ts-ignore
    const __VLS_75 = {}
        .ElMenuItem;
    ({}.ElMenuItem);
    ({}.ElMenuItem);
    __VLS_components.ElMenuItem;
    __VLS_components.elMenuItem;
    __VLS_components.ElMenuItem;
    __VLS_components.elMenuItem;
    // @ts-ignore
    [ElMenuItem, ElMenuItem,];
    // @ts-ignore
    const __VLS_76 = __VLS_asFunctionalComponent(__VLS_75, new __VLS_75({ index: ("/PersonCenter"), }));
    const __VLS_77 = __VLS_76({ index: ("/PersonCenter"), }, ...__VLS_functionalComponentArgsRest(__VLS_76));
    ({}({ index: ("/PersonCenter"), }));
    // @ts-ignore
    const __VLS_81 = {}
        .ElIcon;
    ({}.ElIcon);
    ({}.ElIcon);
    __VLS_components.ElIcon;
    __VLS_components.elIcon;
    __VLS_components.ElIcon;
    __VLS_components.elIcon;
    // @ts-ignore
    [ElIcon, ElIcon,];
    // @ts-ignore
    const __VLS_82 = __VLS_asFunctionalComponent(__VLS_81, new __VLS_81({}));
    const __VLS_83 = __VLS_82({}, ...__VLS_functionalComponentArgsRest(__VLS_82));
    ({}({}));
    // @ts-ignore
    const __VLS_87 = {}
        .User;
    ({}.User);
    __VLS_components.User;
    // @ts-ignore
    [User,];
    // @ts-ignore
    const __VLS_88 = __VLS_asFunctionalComponent(__VLS_87, new __VLS_87({}));
    const __VLS_89 = __VLS_88({}, ...__VLS_functionalComponentArgsRest(__VLS_88));
    ({}({}));
    const __VLS_92 = __VLS_pickFunctionalComponentCtx(__VLS_87, __VLS_89);
    (__VLS_86.slots).default;
    const __VLS_86 = __VLS_pickFunctionalComponentCtx(__VLS_81, __VLS_83);
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
    (__VLS_80.slots).default;
    const __VLS_80 = __VLS_pickFunctionalComponentCtx(__VLS_75, __VLS_77);
    // @ts-ignore
    const __VLS_93 = {}
        .ElMenuItem;
    ({}.ElMenuItem);
    ({}.ElMenuItem);
    __VLS_components.ElMenuItem;
    __VLS_components.elMenuItem;
    __VLS_components.ElMenuItem;
    __VLS_components.elMenuItem;
    // @ts-ignore
    [ElMenuItem, ElMenuItem,];
    // @ts-ignore
    const __VLS_94 = __VLS_asFunctionalComponent(__VLS_93, new __VLS_93({ index: ("/Address"), }));
    const __VLS_95 = __VLS_94({ index: ("/Address"), }, ...__VLS_functionalComponentArgsRest(__VLS_94));
    ({}({ index: ("/Address"), }));
    // @ts-ignore
    const __VLS_99 = {}
        .ElIcon;
    ({}.ElIcon);
    ({}.ElIcon);
    __VLS_components.ElIcon;
    __VLS_components.elIcon;
    __VLS_components.ElIcon;
    __VLS_components.elIcon;
    // @ts-ignore
    [ElIcon, ElIcon,];
    // @ts-ignore
    const __VLS_100 = __VLS_asFunctionalComponent(__VLS_99, new __VLS_99({}));
    const __VLS_101 = __VLS_100({}, ...__VLS_functionalComponentArgsRest(__VLS_100));
    ({}({}));
    // @ts-ignore
    const __VLS_105 = {}
        .Place;
    ({}.Place);
    __VLS_components.Place;
    // @ts-ignore
    [Place,];
    // @ts-ignore
    const __VLS_106 = __VLS_asFunctionalComponent(__VLS_105, new __VLS_105({}));
    const __VLS_107 = __VLS_106({}, ...__VLS_functionalComponentArgsRest(__VLS_106));
    ({}({}));
    const __VLS_110 = __VLS_pickFunctionalComponentCtx(__VLS_105, __VLS_107);
    (__VLS_104.slots).default;
    const __VLS_104 = __VLS_pickFunctionalComponentCtx(__VLS_99, __VLS_101);
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
    (__VLS_98.slots).default;
    const __VLS_98 = __VLS_pickFunctionalComponentCtx(__VLS_93, __VLS_95);
    // @ts-ignore
    const __VLS_111 = {}
        .ElMenuItem;
    ({}.ElMenuItem);
    ({}.ElMenuItem);
    __VLS_components.ElMenuItem;
    __VLS_components.elMenuItem;
    __VLS_components.ElMenuItem;
    __VLS_components.elMenuItem;
    // @ts-ignore
    [ElMenuItem, ElMenuItem,];
    // @ts-ignore
    const __VLS_112 = __VLS_asFunctionalComponent(__VLS_111, new __VLS_111({}));
    const __VLS_113 = __VLS_112({}, ...__VLS_functionalComponentArgsRest(__VLS_112));
    ({}({}));
    // @ts-ignore
    const __VLS_117 = {}
        .ElIcon;
    ({}.ElIcon);
    ({}.ElIcon);
    __VLS_components.ElIcon;
    __VLS_components.elIcon;
    __VLS_components.ElIcon;
    __VLS_components.elIcon;
    // @ts-ignore
    [ElIcon, ElIcon,];
    // @ts-ignore
    const __VLS_118 = __VLS_asFunctionalComponent(__VLS_117, new __VLS_117({}));
    const __VLS_119 = __VLS_118({}, ...__VLS_functionalComponentArgsRest(__VLS_118));
    ({}({}));
    // @ts-ignore
    const __VLS_123 = {}
        .Setting;
    ({}.Setting);
    __VLS_components.Setting;
    // @ts-ignore
    [Setting,];
    // @ts-ignore
    const __VLS_124 = __VLS_asFunctionalComponent(__VLS_123, new __VLS_123({}));
    const __VLS_125 = __VLS_124({}, ...__VLS_functionalComponentArgsRest(__VLS_124));
    ({}({}));
    const __VLS_128 = __VLS_pickFunctionalComponentCtx(__VLS_123, __VLS_125);
    (__VLS_122.slots).default;
    const __VLS_122 = __VLS_pickFunctionalComponentCtx(__VLS_117, __VLS_119);
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ onClick: (__VLS_ctx.logout) }, });
    // @ts-ignore
    [logout,];
    (__VLS_116.slots).default;
    const __VLS_116 = __VLS_pickFunctionalComponentCtx(__VLS_111, __VLS_113);
    (__VLS_17.slots).default;
    const __VLS_17 = __VLS_pickFunctionalComponentCtx(__VLS_12, __VLS_14);
    let __VLS_15;
    let __VLS_16;
    (__VLS_11.slots).default;
    const __VLS_11 = __VLS_pickFunctionalComponentCtx(__VLS_6, __VLS_8);
    // @ts-ignore
    const __VLS_129 = {}
        .ElContainer;
    ({}.ElContainer);
    ({}.ElContainer);
    __VLS_components.ElContainer;
    __VLS_components.elContainer;
    __VLS_components.ElContainer;
    __VLS_components.elContainer;
    // @ts-ignore
    [ElContainer, ElContainer,];
    // @ts-ignore
    const __VLS_130 = __VLS_asFunctionalComponent(__VLS_129, new __VLS_129({}));
    const __VLS_131 = __VLS_130({}, ...__VLS_functionalComponentArgsRest(__VLS_130));
    ({}({}));
    // @ts-ignore
    const __VLS_135 = {}
        .ElMain;
    ({}.ElMain);
    ({}.ElMain);
    __VLS_components.ElMain;
    __VLS_components.elMain;
    __VLS_components.ElMain;
    __VLS_components.elMain;
    // @ts-ignore
    [ElMain, ElMain,];
    // @ts-ignore
    const __VLS_136 = __VLS_asFunctionalComponent(__VLS_135, new __VLS_135({}));
    const __VLS_137 = __VLS_136({}, ...__VLS_functionalComponentArgsRest(__VLS_136));
    ({}({}));
    // @ts-ignore
    const __VLS_141 = {}
        .RouterView;
    ({}.RouterView);
    ({}.RouterView);
    __VLS_components.RouterView;
    __VLS_components.routerView;
    __VLS_components.RouterView;
    __VLS_components.routerView;
    // @ts-ignore
    [RouterView, RouterView,];
    // @ts-ignore
    const __VLS_142 = __VLS_asFunctionalComponent(__VLS_141, new __VLS_141({}));
    const __VLS_143 = __VLS_142({}, ...__VLS_functionalComponentArgsRest(__VLS_142));
    ({}({}));
    const __VLS_146 = __VLS_pickFunctionalComponentCtx(__VLS_141, __VLS_143);
    (__VLS_140.slots).default;
    const __VLS_140 = __VLS_pickFunctionalComponentCtx(__VLS_135, __VLS_137);
    (__VLS_134.slots).default;
    const __VLS_134 = __VLS_pickFunctionalComponentCtx(__VLS_129, __VLS_131);
    (__VLS_5.slots).default;
    const __VLS_5 = __VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2);
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
        __VLS_styleScopedClasses['common-layout'];
        __VLS_styleScopedClasses['header'];
        __VLS_styleScopedClasses['el-menu-demo'];
    }
    var __VLS_slots;
    return __VLS_slots;
    const __VLS_componentsOption = {};
    let __VLS_name;
    let __VLS_defineComponent;
    const __VLS_internalComponent = __VLS_defineComponent({
        setup() {
            return {
                Setting: Setting,
                Handbag: Handbag,
                Goods: Goods,
                ShoppingCart: ShoppingCart,
                Place: Place,
                User: User,
                logout: logout,
                handleOpen: handleOpen,
                handleClose: handleClose,
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
//# sourceMappingURL=FrontPage.vue.js.map