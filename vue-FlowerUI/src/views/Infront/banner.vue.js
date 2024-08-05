import { ref, onMounted } from 'vue';
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
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
    if (__VLS_ctx.isShow) {
        // @ts-ignore
        const __VLS_0 = {}
            .ElCarousel;
        ({}.ElCarousel);
        ({}.ElCarousel);
        __VLS_components.ElCarousel;
        __VLS_components.elCarousel;
        __VLS_components.ElCarousel;
        __VLS_components.elCarousel;
        // @ts-ignore
        [ElCarousel, ElCarousel,];
        // @ts-ignore
        const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({ height: ("150px"), }));
        const __VLS_2 = __VLS_1({ height: ("150px"), }, ...__VLS_functionalComponentArgsRest(__VLS_1));
        ({}({ height: ("150px"), }));
        for (const [image, index] of __VLS_getVForSourceType((__VLS_ctx.images))) {
            // @ts-ignore
            const __VLS_6 = {}
                .ElCarouselItem;
            ({}.ElCarouselItem);
            ({}.ElCarouselItem);
            __VLS_components.ElCarouselItem;
            __VLS_components.elCarouselItem;
            __VLS_components.ElCarouselItem;
            __VLS_components.elCarouselItem;
            // @ts-ignore
            [ElCarouselItem, ElCarouselItem,];
            // @ts-ignore
            const __VLS_7 = __VLS_asFunctionalComponent(__VLS_6, new __VLS_6({ key: ((index)), }));
            const __VLS_8 = __VLS_7({ key: ((index)), }, ...__VLS_functionalComponentArgsRest(__VLS_7));
            ({}({ key: ((index)), }));
            // @ts-ignore
            const __VLS_12 = {}
                .ElImage;
            ({}.ElImage);
            ({}.ElImage);
            __VLS_components.ElImage;
            __VLS_components.elImage;
            __VLS_components.ElImage;
            __VLS_components.elImage;
            // @ts-ignore
            [ElImage, ElImage,];
            // @ts-ignore
            const __VLS_13 = __VLS_asFunctionalComponent(__VLS_12, new __VLS_12({ src: ((image.imgUrl)), ...{ style: ({}) }, }));
            const __VLS_14 = __VLS_13({ src: ((image.imgUrl)), ...{ style: ({}) }, }, ...__VLS_functionalComponentArgsRest(__VLS_13));
            ({}({ src: ((image.imgUrl)), ...{ style: ({}) }, }));
            // @ts-ignore
            [isShow, images,];
            const __VLS_17 = __VLS_pickFunctionalComponentCtx(__VLS_12, __VLS_14);
            (__VLS_11.slots).default;
            const __VLS_11 = __VLS_pickFunctionalComponentCtx(__VLS_6, __VLS_8);
        }
        (__VLS_5.slots).default;
        const __VLS_5 = __VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2);
    }
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
                images: images,
                isShow: isShow,
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
//# sourceMappingURL=banner.vue.js.map