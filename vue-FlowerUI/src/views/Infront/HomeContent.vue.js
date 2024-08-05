import { ref, onMounted } from 'vue';
import { getFlowers, getCategory, getFlowersSearch } from '../../api';
import { Search } from '@element-plus/icons-vue';
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const list = ref([{
        id: 0,
        name: "",
        imgUrl: "",
        price: 0
    }]); // 修改为数组类型
const form = ref({ name: '' }); // 初始化为空字符串
const category = ref([]); // 修改为数组类型
const SearchFlower = async () => {
    try {
        const response = await getFlowersSearch(form.value.name);
        list.value = response.map(c => ({
            id: c.id,
            name: c.name,
            imgUrl: c.imgUrl,
            price: c.price
        }));
    }
    catch (error) {
        console.error('搜索鲜花数据失败', error);
    }
};
const GetFlowerCategory = async () => {
    try {
        category.value = await getCategory();
    }
    catch (error) {
        console.error('获取鲜花类别数据失败', error);
    }
};
const GetFlowers = async () => {
    try {
        const response = await getFlowers(); // 修正为获取所有鲜花
        list.value = response.map(c => ({
            id: c.id,
            name: c.name,
            imgUrl: c.imgUrl,
            price: c.price
        }));
    }
    catch (error) {
        console.error('获取鲜花数据失败', error);
    }
};
const filterByCategory = async (name) => {
    try {
        const response = await getFlowersSearch(name);
        list.value = response.map(c => ({
            id: c.id,
            name: c.name,
            imgUrl: c.imgUrl,
            price: c.price
        }));
    }
    catch (error) {
        console.error('按类别筛选鲜花数据失败', error);
    }
};
onMounted(() => {
    GetFlowers();
    GetFlowerCategory();
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
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("hd") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.h3, __VLS_intrinsicElements.h3)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
    (__VLS_11.slots).default;
    const __VLS_11 = __VLS_pickFunctionalComponentCtx(__VLS_6, __VLS_8);
    // @ts-ignore
    const __VLS_12 = {}
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
    const __VLS_13 = __VLS_asFunctionalComponent(__VLS_12, new __VLS_12({}));
    const __VLS_14 = __VLS_13({}, ...__VLS_functionalComponentArgsRest(__VLS_13));
    ({}({}));
    // @ts-ignore
    const __VLS_18 = {}
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
    const __VLS_19 = __VLS_asFunctionalComponent(__VLS_18, new __VLS_18({}));
    const __VLS_20 = __VLS_19({}, ...__VLS_functionalComponentArgsRest(__VLS_19));
    ({}({}));
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("main-content") }, });
    // @ts-ignore
    const __VLS_24 = {}
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
    const __VLS_25 = __VLS_asFunctionalComponent(__VLS_24, new __VLS_24({}));
    const __VLS_26 = __VLS_25({}, ...__VLS_functionalComponentArgsRest(__VLS_25));
    ({}({}));
    for (const [item] of __VLS_getVForSourceType((__VLS_ctx.category))) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ onClick: (...[$event]) => {
                    __VLS_ctx.filterByCategory(item.name);
                    // @ts-ignore
                    [category, filterByCategory,];
                } }, key: ((item.id)), ...{ class: ("category-item") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
        (item.name);
    }
    (__VLS_29.slots).default;
    const __VLS_29 = __VLS_pickFunctionalComponentCtx(__VLS_24, __VLS_26);
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("fl-products") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("search") }, });
    // @ts-ignore
    const __VLS_30 = {}
        .ElInput;
    ({}.ElInput);
    ({}.ElInput);
    __VLS_components.ElInput;
    __VLS_components.elInput;
    __VLS_components.ElInput;
    __VLS_components.elInput;
    // @ts-ignore
    [ElInput, ElInput,];
    // @ts-ignore
    const __VLS_31 = __VLS_asFunctionalComponent(__VLS_30, new __VLS_30({ modelValue: ((__VLS_ctx.form.name)), ...{ style: ({}) }, placeholder: ("请输入鲜花的名称"), ...{ class: ("input-with-select") }, }));
    const __VLS_32 = __VLS_31({ modelValue: ((__VLS_ctx.form.name)), ...{ style: ({}) }, placeholder: ("请输入鲜花的名称"), ...{ class: ("input-with-select") }, }, ...__VLS_functionalComponentArgsRest(__VLS_31));
    ({}({ modelValue: ((__VLS_ctx.form.name)), ...{ style: ({}) }, placeholder: ("请输入鲜花的名称"), ...{ class: ("input-with-select") }, }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.template, __VLS_intrinsicElements.template)({});
    {
        (__VLS_35.slots).append;
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
        const __VLS_37 = __VLS_asFunctionalComponent(__VLS_36, new __VLS_36({ ...{ 'onClick': {} }, icon: ((__VLS_ctx.Search)), }));
        const __VLS_38 = __VLS_37({ ...{ 'onClick': {} }, icon: ((__VLS_ctx.Search)), }, ...__VLS_functionalComponentArgsRest(__VLS_37));
        ({}({ ...{ 'onClick': {} }, icon: ((__VLS_ctx.Search)), }));
        let __VLS_42;
        const __VLS_43 = {
            onClick: (__VLS_ctx.SearchFlower)
        };
        // @ts-ignore
        [form, Search, SearchFlower,];
        (__VLS_41.slots).default;
        const __VLS_41 = __VLS_pickFunctionalComponentCtx(__VLS_36, __VLS_38);
        let __VLS_39;
        let __VLS_40;
    }
    const __VLS_35 = __VLS_pickFunctionalComponentCtx(__VLS_30, __VLS_32);
    for (const [item] of __VLS_getVForSourceType((__VLS_ctx.list))) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("fl-products-item") }, key: ((item.id)), });
        __VLS_elementAsFunction(__VLS_intrinsicElements.a, __VLS_intrinsicElements.a)({});
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("img-box") }, });
        // @ts-ignore
        const __VLS_44 = {}
            .RouterLink;
        ({}.RouterLink);
        ({}.RouterLink);
        __VLS_components.RouterLink;
        __VLS_components.RouterLink;
        // @ts-ignore
        [RouterLink, RouterLink,];
        // @ts-ignore
        const __VLS_45 = __VLS_asFunctionalComponent(__VLS_44, new __VLS_44({ to: ((`/detail/${item.id}`)), }));
        const __VLS_46 = __VLS_45({ to: ((`/detail/${item.id}`)), }, ...__VLS_functionalComponentArgsRest(__VLS_45));
        ({}({ to: ((`/detail/${item.id}`)), }));
        // @ts-ignore
        const __VLS_50 = {}
            .ElImage;
        ({}.ElImage);
        __VLS_components.ElImage;
        __VLS_components.elImage;
        // @ts-ignore
        [ElImage,];
        // @ts-ignore
        const __VLS_51 = __VLS_asFunctionalComponent(__VLS_50, new __VLS_50({ ...{ style: ({}) }, src: ((item.imgUrl)), }));
        const __VLS_52 = __VLS_51({ ...{ style: ({}) }, src: ((item.imgUrl)), }, ...__VLS_functionalComponentArgsRest(__VLS_51));
        ({}({ ...{ style: ({}) }, src: ((item.imgUrl)), }));
        // @ts-ignore
        [list,];
        const __VLS_55 = __VLS_pickFunctionalComponentCtx(__VLS_50, __VLS_52);
        (__VLS_49.slots).default;
        const __VLS_49 = __VLS_pickFunctionalComponentCtx(__VLS_44, __VLS_46);
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("product-content") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ class: ("product-title") }, });
        (item.name);
        __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ class: ("product-price") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("price-sign") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("price-num") }, });
        (item.price);
    }
    (__VLS_23.slots).default;
    const __VLS_23 = __VLS_pickFunctionalComponentCtx(__VLS_18, __VLS_20);
    (__VLS_17.slots).default;
    const __VLS_17 = __VLS_pickFunctionalComponentCtx(__VLS_12, __VLS_14);
    (__VLS_5.slots).default;
    const __VLS_5 = __VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2);
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
        __VLS_styleScopedClasses['common-layout'];
        __VLS_styleScopedClasses['hd'];
        __VLS_styleScopedClasses['main-content'];
        __VLS_styleScopedClasses['category-item'];
        __VLS_styleScopedClasses['fl-products'];
        __VLS_styleScopedClasses['search'];
        __VLS_styleScopedClasses['input-with-select'];
        __VLS_styleScopedClasses['fl-products-item'];
        __VLS_styleScopedClasses['img-box'];
        __VLS_styleScopedClasses['product-content'];
        __VLS_styleScopedClasses['product-title'];
        __VLS_styleScopedClasses['product-price'];
        __VLS_styleScopedClasses['price-sign'];
        __VLS_styleScopedClasses['price-num'];
    }
    var __VLS_slots;
    return __VLS_slots;
    const __VLS_componentsOption = {};
    let __VLS_name;
    let __VLS_defineComponent;
    const __VLS_internalComponent = __VLS_defineComponent({
        setup() {
            return {
                Search: Search,
                list: list,
                form: form,
                category: category,
                SearchFlower: SearchFlower,
                filterByCategory: filterByCategory,
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
//# sourceMappingURL=HomeContent.vue.js.map