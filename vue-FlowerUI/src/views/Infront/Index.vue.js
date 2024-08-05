import { ref, onMounted } from 'vue';
import HomeContent from './HomeContent.vue';
import banner from './banner.vue';
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const images = ref([
    { imgUrl: "../../../public/Img/banners/1.jpg" },
    { imgUrl: "../../../public/Img/banners/2.jpg" },
    { imgUrl: "../../../public/Img/banners/3.jpeg" }
    // 添加更多图片和课程链接
]);
const isShow = ref(true); // 设置为true以显示轮播图，或者根据需要动态控制
onMounted(() => {
    // 可以在这里添加页面加载完成后需要执行的代码
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
    [banner, banner,];
    // @ts-ignore
    const __VLS_0 = __VLS_asFunctionalComponent(banner, new banner({}));
    const __VLS_1 = __VLS_0({}, ...__VLS_functionalComponentArgsRest(__VLS_0));
    ({}({}));
    const __VLS_4 = __VLS_pickFunctionalComponentCtx(banner, __VLS_1);
    // @ts-ignore
    [HomeContent,];
    // @ts-ignore
    const __VLS_5 = __VLS_asFunctionalComponent(HomeContent, new HomeContent({}));
    const __VLS_6 = __VLS_5({}, ...__VLS_functionalComponentArgsRest(__VLS_5));
    ({}({}));
    const __VLS_9 = __VLS_pickFunctionalComponentCtx(HomeContent, __VLS_6);
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
                HomeContent: HomeContent,
                banner: banner,
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