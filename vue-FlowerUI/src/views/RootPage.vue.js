import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { ElDropdown, ElDropdownItem } from 'element-plus';
import { List } from '@element-plus/icons-vue';
import { ArrowDown } from '@element-plus/icons-vue';
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const tags = ref([
    { name: 'Tag 1', type: 'primary', route: '/page1' },
    { name: 'Tag 2', type: 'success', route: '/page2' },
    { name: 'Tag 3', type: 'info', route: '/page3' },
    { name: 'Tag 4', type: 'warning', route: '/page4' },
    { name: 'Tag 5', type: 'danger', route: '/page5' },
]);
// 获取路由实例
const router = useRouter();
router.push('/FlowerIndex');
// 处理下拉菜单的选择
const handleCommand = (command) => {
    switch (command) {
        case 'profile':
            router.push('/profile');
            break;
        case 'settings':
            router.push('/settings');
            break;
        case 'logout':
            // 执行退出操作，例如清除用户信息、重定向到登录页等
            sessionStorage.removeItem("token");
            sessionStorage.removeItem("name");
            sessionStorage.removeItem("id");
            router.push('/login');
            break;
        case 'infront':
            // 执行退出操作，例如清除用户信息、重定向到登录页等
            router.push('/InfrontPage');
            break;
    }
};
const selectedTags = ref([]); // 使用 ref 来处理选中的标签数组
// 处理菜单点击事件，更新选中的标签
const handleMenuClick = (name, route) => {
    selectedTags.value = selectedTags.value.filter(tag => tag.route !== route); // 避免重复
    selectedTags.value.push({ name, type: 'info', route }); // 添加新的标签
    router.push(route);
};
// 处理标签点击事件
const handleTagClick = (route) => {
    router.push(route);
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
    const __VLS_7 = __VLS_asFunctionalComponent(__VLS_6, new __VLS_6({}));
    const __VLS_8 = __VLS_7({}, ...__VLS_functionalComponentArgsRest(__VLS_7));
    ({}({}));
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("header-content") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("logo") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.h1, __VLS_intrinsicElements.h1)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("header-right") }, });
    // @ts-ignore
    const __VLS_12 = {}
        .ElDropdown;
    ({}.ElDropdown);
    ({}.ElDropdown);
    __VLS_components.ElDropdown;
    __VLS_components.elDropdown;
    __VLS_components.ElDropdown;
    __VLS_components.elDropdown;
    // @ts-ignore
    [ElDropdown, ElDropdown,];
    // @ts-ignore
    const __VLS_13 = __VLS_asFunctionalComponent(__VLS_12, new __VLS_12({ ...{ 'onCommand': {} }, }));
    const __VLS_14 = __VLS_13({ ...{ 'onCommand': {} }, }, ...__VLS_functionalComponentArgsRest(__VLS_13));
    ({}({ ...{ 'onCommand': {} }, }));
    let __VLS_18;
    const __VLS_19 = {
        onCommand: (__VLS_ctx.handleCommand)
    };
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("el-dropdown-link") }, });
    // @ts-ignore
    const __VLS_20 = {}
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
    const __VLS_21 = __VLS_asFunctionalComponent(__VLS_20, new __VLS_20({ ...{ class: ("el-icon--right") }, }));
    const __VLS_22 = __VLS_21({ ...{ class: ("el-icon--right") }, }, ...__VLS_functionalComponentArgsRest(__VLS_21));
    ({}({ ...{ class: ("el-icon--right") }, }));
    // @ts-ignore
    const __VLS_26 = {}
        .ArrowDown;
    ({}.ArrowDown);
    __VLS_components.ArrowDown;
    __VLS_components.arrowDown;
    // @ts-ignore
    [ArrowDown,];
    // @ts-ignore
    const __VLS_27 = __VLS_asFunctionalComponent(__VLS_26, new __VLS_26({}));
    const __VLS_28 = __VLS_27({}, ...__VLS_functionalComponentArgsRest(__VLS_27));
    ({}({}));
    // @ts-ignore
    [handleCommand,];
    const __VLS_31 = __VLS_pickFunctionalComponentCtx(__VLS_26, __VLS_28);
    (__VLS_25.slots).default;
    const __VLS_25 = __VLS_pickFunctionalComponentCtx(__VLS_20, __VLS_22);
    __VLS_elementAsFunction(__VLS_intrinsicElements.template, __VLS_intrinsicElements.template)({});
    {
        (__VLS_17.slots).dropdown;
        // @ts-ignore
        const __VLS_32 = {}
            .ElDropdownMenu;
        ({}.ElDropdownMenu);
        ({}.ElDropdownMenu);
        __VLS_components.ElDropdownMenu;
        __VLS_components.elDropdownMenu;
        __VLS_components.ElDropdownMenu;
        __VLS_components.elDropdownMenu;
        // @ts-ignore
        [ElDropdownMenu, ElDropdownMenu,];
        // @ts-ignore
        const __VLS_33 = __VLS_asFunctionalComponent(__VLS_32, new __VLS_32({}));
        const __VLS_34 = __VLS_33({}, ...__VLS_functionalComponentArgsRest(__VLS_33));
        ({}({}));
        // @ts-ignore
        const __VLS_38 = {}
            .ElDropdownItem;
        ({}.ElDropdownItem);
        ({}.ElDropdownItem);
        __VLS_components.ElDropdownItem;
        __VLS_components.elDropdownItem;
        __VLS_components.ElDropdownItem;
        __VLS_components.elDropdownItem;
        // @ts-ignore
        [ElDropdownItem, ElDropdownItem,];
        // @ts-ignore
        const __VLS_39 = __VLS_asFunctionalComponent(__VLS_38, new __VLS_38({ command: ("profile"), }));
        const __VLS_40 = __VLS_39({ command: ("profile"), }, ...__VLS_functionalComponentArgsRest(__VLS_39));
        ({}({ command: ("profile"), }));
        (__VLS_43.slots).default;
        const __VLS_43 = __VLS_pickFunctionalComponentCtx(__VLS_38, __VLS_40);
        // @ts-ignore
        const __VLS_44 = {}
            .ElDropdownItem;
        ({}.ElDropdownItem);
        ({}.ElDropdownItem);
        __VLS_components.ElDropdownItem;
        __VLS_components.elDropdownItem;
        __VLS_components.ElDropdownItem;
        __VLS_components.elDropdownItem;
        // @ts-ignore
        [ElDropdownItem, ElDropdownItem,];
        // @ts-ignore
        const __VLS_45 = __VLS_asFunctionalComponent(__VLS_44, new __VLS_44({ command: ("logout"), }));
        const __VLS_46 = __VLS_45({ command: ("logout"), }, ...__VLS_functionalComponentArgsRest(__VLS_45));
        ({}({ command: ("logout"), }));
        (__VLS_49.slots).default;
        const __VLS_49 = __VLS_pickFunctionalComponentCtx(__VLS_44, __VLS_46);
        // @ts-ignore
        const __VLS_50 = {}
            .ElDropdownItem;
        ({}.ElDropdownItem);
        ({}.ElDropdownItem);
        __VLS_components.ElDropdownItem;
        __VLS_components.elDropdownItem;
        __VLS_components.ElDropdownItem;
        __VLS_components.elDropdownItem;
        // @ts-ignore
        [ElDropdownItem, ElDropdownItem,];
        // @ts-ignore
        const __VLS_51 = __VLS_asFunctionalComponent(__VLS_50, new __VLS_50({ command: ("infront"), }));
        const __VLS_52 = __VLS_51({ command: ("infront"), }, ...__VLS_functionalComponentArgsRest(__VLS_51));
        ({}({ command: ("infront"), }));
        (__VLS_55.slots).default;
        const __VLS_55 = __VLS_pickFunctionalComponentCtx(__VLS_50, __VLS_52);
        (__VLS_37.slots).default;
        const __VLS_37 = __VLS_pickFunctionalComponentCtx(__VLS_32, __VLS_34);
    }
    const __VLS_17 = __VLS_pickFunctionalComponentCtx(__VLS_12, __VLS_14);
    let __VLS_15;
    let __VLS_16;
    (__VLS_11.slots).default;
    const __VLS_11 = __VLS_pickFunctionalComponentCtx(__VLS_6, __VLS_8);
    // @ts-ignore
    const __VLS_56 = {}
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
    const __VLS_57 = __VLS_asFunctionalComponent(__VLS_56, new __VLS_56({}));
    const __VLS_58 = __VLS_57({}, ...__VLS_functionalComponentArgsRest(__VLS_57));
    ({}({}));
    // @ts-ignore
    const __VLS_62 = {}
        .ElAside;
    ({}.ElAside);
    ({}.ElAside);
    __VLS_components.ElAside;
    __VLS_components.elAside;
    __VLS_components.ElAside;
    __VLS_components.elAside;
    // @ts-ignore
    [ElAside, ElAside,];
    // @ts-ignore
    const __VLS_63 = __VLS_asFunctionalComponent(__VLS_62, new __VLS_62({ width: ("200px"), }));
    const __VLS_64 = __VLS_63({ width: ("200px"), }, ...__VLS_functionalComponentArgsRest(__VLS_63));
    ({}({ width: ("200px"), }));
    // @ts-ignore
    const __VLS_68 = {}
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
    const __VLS_69 = __VLS_asFunctionalComponent(__VLS_68, new __VLS_68({ activeTextColor: ("#ffd04b"), backgroundColor: ("#545c64"), ...{ class: ("el-menu-vertical-demo") }, defaultActive: ("2"), textColor: ("#fff"), router: (true), }));
    const __VLS_70 = __VLS_69({ activeTextColor: ("#ffd04b"), backgroundColor: ("#545c64"), ...{ class: ("el-menu-vertical-demo") }, defaultActive: ("2"), textColor: ("#fff"), router: (true), }, ...__VLS_functionalComponentArgsRest(__VLS_69));
    ({}({ activeTextColor: ("#ffd04b"), backgroundColor: ("#545c64"), ...{ class: ("el-menu-vertical-demo") }, defaultActive: ("2"), textColor: ("#fff"), router: (true), }));
    // @ts-ignore
    const __VLS_74 = {}
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
    const __VLS_75 = __VLS_asFunctionalComponent(__VLS_74, new __VLS_74({ ...{ 'onClick': {} }, index: ("/FlowerIndex"), }));
    const __VLS_76 = __VLS_75({ ...{ 'onClick': {} }, index: ("/FlowerIndex"), }, ...__VLS_functionalComponentArgsRest(__VLS_75));
    ({}({ ...{ 'onClick': {} }, index: ("/FlowerIndex"), }));
    let __VLS_80;
    const __VLS_81 = {
        onClick: (...[$event]) => {
            __VLS_ctx.handleMenuClick('鲜花管理', '/FlowerIndex');
            // @ts-ignore
            [handleMenuClick,];
        }
    };
    __VLS_elementAsFunction(__VLS_intrinsicElements.template, __VLS_intrinsicElements.template)({});
    {
        (__VLS_79.slots).title;
        // @ts-ignore
        const __VLS_82 = {}
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
        const __VLS_83 = __VLS_asFunctionalComponent(__VLS_82, new __VLS_82({}));
        const __VLS_84 = __VLS_83({}, ...__VLS_functionalComponentArgsRest(__VLS_83));
        ({}({}));
        // @ts-ignore
        const __VLS_88 = {}
            .list;
        ({}.list);
        __VLS_components.List;
        __VLS_components.list;
        // @ts-ignore
        [List,];
        // @ts-ignore
        const __VLS_89 = __VLS_asFunctionalComponent(__VLS_88, new __VLS_88({}));
        const __VLS_90 = __VLS_89({}, ...__VLS_functionalComponentArgsRest(__VLS_89));
        ({}({}));
        const __VLS_93 = __VLS_pickFunctionalComponentCtx(__VLS_88, __VLS_90);
        (__VLS_87.slots).default;
        const __VLS_87 = __VLS_pickFunctionalComponentCtx(__VLS_82, __VLS_84);
        __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
    }
    const __VLS_79 = __VLS_pickFunctionalComponentCtx(__VLS_74, __VLS_76);
    let __VLS_77;
    let __VLS_78;
    // @ts-ignore
    const __VLS_94 = {}
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
    const __VLS_95 = __VLS_asFunctionalComponent(__VLS_94, new __VLS_94({ ...{ 'onClick': {} }, index: ("/Category"), }));
    const __VLS_96 = __VLS_95({ ...{ 'onClick': {} }, index: ("/Category"), }, ...__VLS_functionalComponentArgsRest(__VLS_95));
    ({}({ ...{ 'onClick': {} }, index: ("/Category"), }));
    let __VLS_100;
    const __VLS_101 = {
        onClick: (...[$event]) => {
            __VLS_ctx.handleMenuClick('鲜花类别管理', '/Category');
            // @ts-ignore
            [handleMenuClick,];
        }
    };
    __VLS_elementAsFunction(__VLS_intrinsicElements.template, __VLS_intrinsicElements.template)({});
    {
        (__VLS_99.slots).title;
        // @ts-ignore
        const __VLS_102 = {}
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
        const __VLS_103 = __VLS_asFunctionalComponent(__VLS_102, new __VLS_102({}));
        const __VLS_104 = __VLS_103({}, ...__VLS_functionalComponentArgsRest(__VLS_103));
        ({}({}));
        // @ts-ignore
        const __VLS_108 = {}
            .list;
        ({}.list);
        __VLS_components.List;
        __VLS_components.list;
        // @ts-ignore
        [List,];
        // @ts-ignore
        const __VLS_109 = __VLS_asFunctionalComponent(__VLS_108, new __VLS_108({}));
        const __VLS_110 = __VLS_109({}, ...__VLS_functionalComponentArgsRest(__VLS_109));
        ({}({}));
        const __VLS_113 = __VLS_pickFunctionalComponentCtx(__VLS_108, __VLS_110);
        (__VLS_107.slots).default;
        const __VLS_107 = __VLS_pickFunctionalComponentCtx(__VLS_102, __VLS_104);
        __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
    }
    const __VLS_99 = __VLS_pickFunctionalComponentCtx(__VLS_94, __VLS_96);
    let __VLS_97;
    let __VLS_98;
    // @ts-ignore
    const __VLS_114 = {}
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
    const __VLS_115 = __VLS_asFunctionalComponent(__VLS_114, new __VLS_114({ ...{ 'onClick': {} }, index: ("/Users"), }));
    const __VLS_116 = __VLS_115({ ...{ 'onClick': {} }, index: ("/Users"), }, ...__VLS_functionalComponentArgsRest(__VLS_115));
    ({}({ ...{ 'onClick': {} }, index: ("/Users"), }));
    let __VLS_120;
    const __VLS_121 = {
        onClick: (...[$event]) => {
            __VLS_ctx.handleMenuClick('用户管理', '/Users');
            // @ts-ignore
            [handleMenuClick,];
        }
    };
    __VLS_elementAsFunction(__VLS_intrinsicElements.template, __VLS_intrinsicElements.template)({});
    {
        (__VLS_119.slots).title;
        // @ts-ignore
        const __VLS_122 = {}
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
        const __VLS_123 = __VLS_asFunctionalComponent(__VLS_122, new __VLS_122({}));
        const __VLS_124 = __VLS_123({}, ...__VLS_functionalComponentArgsRest(__VLS_123));
        ({}({}));
        // @ts-ignore
        const __VLS_128 = {}
            .list;
        ({}.list);
        __VLS_components.List;
        __VLS_components.list;
        // @ts-ignore
        [List,];
        // @ts-ignore
        const __VLS_129 = __VLS_asFunctionalComponent(__VLS_128, new __VLS_128({}));
        const __VLS_130 = __VLS_129({}, ...__VLS_functionalComponentArgsRest(__VLS_129));
        ({}({}));
        const __VLS_133 = __VLS_pickFunctionalComponentCtx(__VLS_128, __VLS_130);
        (__VLS_127.slots).default;
        const __VLS_127 = __VLS_pickFunctionalComponentCtx(__VLS_122, __VLS_124);
        __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
    }
    const __VLS_119 = __VLS_pickFunctionalComponentCtx(__VLS_114, __VLS_116);
    let __VLS_117;
    let __VLS_118;
    // @ts-ignore
    const __VLS_134 = {}
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
    const __VLS_135 = __VLS_asFunctionalComponent(__VLS_134, new __VLS_134({ ...{ 'onClick': {} }, index: ("/AdminOrder"), }));
    const __VLS_136 = __VLS_135({ ...{ 'onClick': {} }, index: ("/AdminOrder"), }, ...__VLS_functionalComponentArgsRest(__VLS_135));
    ({}({ ...{ 'onClick': {} }, index: ("/AdminOrder"), }));
    let __VLS_140;
    const __VLS_141 = {
        onClick: (...[$event]) => {
            __VLS_ctx.handleMenuClick('订单管理', '/AdminOrder');
            // @ts-ignore
            [handleMenuClick,];
        }
    };
    __VLS_elementAsFunction(__VLS_intrinsicElements.template, __VLS_intrinsicElements.template)({});
    {
        (__VLS_139.slots).title;
        // @ts-ignore
        const __VLS_142 = {}
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
        const __VLS_143 = __VLS_asFunctionalComponent(__VLS_142, new __VLS_142({}));
        const __VLS_144 = __VLS_143({}, ...__VLS_functionalComponentArgsRest(__VLS_143));
        ({}({}));
        // @ts-ignore
        const __VLS_148 = {}
            .list;
        ({}.list);
        __VLS_components.List;
        __VLS_components.list;
        // @ts-ignore
        [List,];
        // @ts-ignore
        const __VLS_149 = __VLS_asFunctionalComponent(__VLS_148, new __VLS_148({}));
        const __VLS_150 = __VLS_149({}, ...__VLS_functionalComponentArgsRest(__VLS_149));
        ({}({}));
        const __VLS_153 = __VLS_pickFunctionalComponentCtx(__VLS_148, __VLS_150);
        (__VLS_147.slots).default;
        const __VLS_147 = __VLS_pickFunctionalComponentCtx(__VLS_142, __VLS_144);
        __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
    }
    const __VLS_139 = __VLS_pickFunctionalComponentCtx(__VLS_134, __VLS_136);
    let __VLS_137;
    let __VLS_138;
    (__VLS_73.slots).default;
    const __VLS_73 = __VLS_pickFunctionalComponentCtx(__VLS_68, __VLS_70);
    (__VLS_67.slots).default;
    const __VLS_67 = __VLS_pickFunctionalComponentCtx(__VLS_62, __VLS_64);
    // @ts-ignore
    const __VLS_154 = {}
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
    const __VLS_155 = __VLS_asFunctionalComponent(__VLS_154, new __VLS_154({}));
    const __VLS_156 = __VLS_155({}, ...__VLS_functionalComponentArgsRest(__VLS_155));
    ({}({}));
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("flex gap-2") }, });
    for (const [tag] of __VLS_getVForSourceType((__VLS_ctx.selectedTags))) {
        // @ts-ignore
        const __VLS_160 = {}
            .ElTag;
        ({}.ElTag);
        ({}.ElTag);
        __VLS_components.ElTag;
        __VLS_components.elTag;
        __VLS_components.ElTag;
        __VLS_components.elTag;
        // @ts-ignore
        [ElTag, ElTag,];
        // @ts-ignore
        const __VLS_161 = __VLS_asFunctionalComponent(__VLS_160, new __VLS_160({ ...{ 'onClick': {} }, key: ((tag.route)), closable: (true), type: ((tag.type)), }));
        const __VLS_162 = __VLS_161({ ...{ 'onClick': {} }, key: ((tag.route)), closable: (true), type: ((tag.type)), }, ...__VLS_functionalComponentArgsRest(__VLS_161));
        ({}({ ...{ 'onClick': {} }, key: ((tag.route)), closable: (true), type: ((tag.type)), }));
        let __VLS_166;
        const __VLS_167 = {
            onClick: (...[$event]) => {
                __VLS_ctx.handleTagClick(tag.route);
                // @ts-ignore
                [selectedTags, handleTagClick,];
            }
        };
        (tag.name);
        (__VLS_165.slots).default;
        const __VLS_165 = __VLS_pickFunctionalComponentCtx(__VLS_160, __VLS_162);
        let __VLS_163;
        let __VLS_164;
    }
    // @ts-ignore
    const __VLS_168 = {}
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
    const __VLS_169 = __VLS_asFunctionalComponent(__VLS_168, new __VLS_168({}));
    const __VLS_170 = __VLS_169({}, ...__VLS_functionalComponentArgsRest(__VLS_169));
    ({}({}));
    const __VLS_173 = __VLS_pickFunctionalComponentCtx(__VLS_168, __VLS_170);
    (__VLS_159.slots).default;
    const __VLS_159 = __VLS_pickFunctionalComponentCtx(__VLS_154, __VLS_156);
    (__VLS_61.slots).default;
    const __VLS_61 = __VLS_pickFunctionalComponentCtx(__VLS_56, __VLS_58);
    (__VLS_5.slots).default;
    const __VLS_5 = __VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2);
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
        __VLS_styleScopedClasses['common-layout'];
        __VLS_styleScopedClasses['header-content'];
        __VLS_styleScopedClasses['logo'];
        __VLS_styleScopedClasses['header-right'];
        __VLS_styleScopedClasses['el-dropdown-link'];
        __VLS_styleScopedClasses['el-icon--right'];
        __VLS_styleScopedClasses['el-menu-vertical-demo'];
        __VLS_styleScopedClasses['flex'];
        __VLS_styleScopedClasses['gap-2'];
    }
    var __VLS_slots;
    return __VLS_slots;
    const __VLS_componentsOption = {};
    let __VLS_name;
    let __VLS_defineComponent;
    const __VLS_internalComponent = __VLS_defineComponent({
        setup() {
            return {
                ElDropdown: ElDropdown,
                ElDropdownItem: ElDropdownItem,
                List: List,
                ArrowDown: ArrowDown,
                handleCommand: handleCommand,
                selectedTags: selectedTags,
                handleMenuClick: handleMenuClick,
                handleTagClick: handleTagClick,
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
//# sourceMappingURL=RootPage.vue.js.map