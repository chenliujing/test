import { ref, onMounted, computed, watch } from 'vue';
import ConfirmOrder from '../Order/ConfirmOrder.vue';
import { getFlowerbyId } from '../../../api/index';
import { useRoute } from 'vue-router';
import { addCartItem } from '../../../api/index';
import { ElMessage } from 'element-plus';
import { useStore } from 'vuex';
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const store = useStore();
const route = useRoute();
let dialogFormVisible = ref(false);
let form = [];
let formdata = ({ flower: {}, quantity: 0, productId: 0 });
const buy = async () => {
    let response = (await getFlowerbyId(id.value));
    formdata.flower = response;
    formdata.quantity = number.value;
    formdata.productId = response.id;
    form.push(formdata);
    console.log(form);
    dialogFormVisible.value = true;
};
const id = computed(() => {
    // 确保 id 是一个数字，如果不是，返回一个默认值（例如 0）
    const idParam = Number(route.params.id);
    return isNaN(idParam) ? 0 : idParam;
});
let price = ref();
const number = ref(1);
watch(number, (newNumber) => {
    price.value = newNumber * info.value.price;
});
const CloseAdd = () => {
    dialogFormVisible.value = false;
    getFlowerbyId(id.value);
};
const isShow = ref(false);
const info = ref();
const Add = async () => {
    if (number.value >= info.value.number) {
        alert("所选商品的数量超过了商品的库存");
        return;
    }
    number.value++;
};
const Jian = async () => {
    if (number.value <= 0) {
        return;
    }
    number.value--;
};
const AddCart = async () => {
    const parms = {
        userId: sessionStorage.getItem("id"),
        productId: info.value.id,
        quantity: number.value
    };
    //await store.dispatch('ADD_ITEM', parms);
    console.log(store.state.cartItems);
    await addCartItem(parms.userId, parms.productId, parms.quantity);
    ElMessage({
        message: "加入成功",
        type: 'success'
    });
};
onMounted(async () => {
    info.value = (await getFlowerbyId(id.value));
    isShow.value = true;
    price.value = info.value.price;
});
console.log(info);
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
    if (__VLS_ctx.isShow) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("common-layout") }, });
        // @ts-ignore
        const __VLS_0 = {}
            .ElBreadcrumb;
        ({}.ElBreadcrumb);
        ({}.ElBreadcrumb);
        __VLS_components.ElBreadcrumb;
        __VLS_components.elBreadcrumb;
        __VLS_components.ElBreadcrumb;
        __VLS_components.elBreadcrumb;
        // @ts-ignore
        [ElBreadcrumb, ElBreadcrumb,];
        // @ts-ignore
        const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({ separator: ("/"), }));
        const __VLS_2 = __VLS_1({ separator: ("/"), }, ...__VLS_functionalComponentArgsRest(__VLS_1));
        ({}({ separator: ("/"), }));
        // @ts-ignore
        const __VLS_6 = {}
            .ElBreadcrumbItem;
        ({}.ElBreadcrumbItem);
        ({}.ElBreadcrumbItem);
        __VLS_components.ElBreadcrumbItem;
        __VLS_components.elBreadcrumbItem;
        __VLS_components.ElBreadcrumbItem;
        __VLS_components.elBreadcrumbItem;
        // @ts-ignore
        [ElBreadcrumbItem, ElBreadcrumbItem,];
        // @ts-ignore
        const __VLS_7 = __VLS_asFunctionalComponent(__VLS_6, new __VLS_6({ to: (({ path: '/Flower' })), }));
        const __VLS_8 = __VLS_7({ to: (({ path: '/Flower' })), }, ...__VLS_functionalComponentArgsRest(__VLS_7));
        ({}({ to: (({ path: '/Flower' })), }));
        // @ts-ignore
        [isShow,];
        (__VLS_11.slots).default;
        const __VLS_11 = __VLS_pickFunctionalComponentCtx(__VLS_6, __VLS_8);
        // @ts-ignore
        const __VLS_12 = {}
            .ElBreadcrumbItem;
        ({}.ElBreadcrumbItem);
        ({}.ElBreadcrumbItem);
        __VLS_components.ElBreadcrumbItem;
        __VLS_components.elBreadcrumbItem;
        __VLS_components.ElBreadcrumbItem;
        __VLS_components.elBreadcrumbItem;
        // @ts-ignore
        [ElBreadcrumbItem, ElBreadcrumbItem,];
        // @ts-ignore
        const __VLS_13 = __VLS_asFunctionalComponent(__VLS_12, new __VLS_12({}));
        const __VLS_14 = __VLS_13({}, ...__VLS_functionalComponentArgsRest(__VLS_13));
        ({}({}));
        (__VLS_17.slots).default;
        const __VLS_17 = __VLS_pickFunctionalComponentCtx(__VLS_12, __VLS_14);
        (__VLS_5.slots).default;
        const __VLS_5 = __VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2);
        // @ts-ignore
        const __VLS_18 = {}
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
        const __VLS_19 = __VLS_asFunctionalComponent(__VLS_18, new __VLS_18({ width: ("500px"), }));
        const __VLS_20 = __VLS_19({ width: ("500px"), }, ...__VLS_functionalComponentArgsRest(__VLS_19));
        ({}({ width: ("500px"), }));
        // @ts-ignore
        const __VLS_24 = {}
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
        const __VLS_25 = __VLS_asFunctionalComponent(__VLS_24, new __VLS_24({ ...{ class: ("bigImage") }, src: ((__VLS_ctx.info.imgUrl)), }));
        const __VLS_26 = __VLS_25({ ...{ class: ("bigImage") }, src: ((__VLS_ctx.info.imgUrl)), }, ...__VLS_functionalComponentArgsRest(__VLS_25));
        ({}({ ...{ class: ("bigImage") }, src: ((__VLS_ctx.info.imgUrl)), }));
        // @ts-ignore
        [info,];
        const __VLS_29 = __VLS_pickFunctionalComponentCtx(__VLS_24, __VLS_26);
        (__VLS_23.slots).default;
        const __VLS_23 = __VLS_pickFunctionalComponentCtx(__VLS_18, __VLS_20);
        __VLS_elementAsFunction(__VLS_intrinsicElements.ul, __VLS_intrinsicElements.ul)({ ...{ class: ("product-info") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({});
        __VLS_elementAsFunction(__VLS_intrinsicElements.h3, __VLS_intrinsicElements.h3)({});
        (__VLS_ctx.info.name);
        // @ts-ignore
        [info,];
        __VLS_elementAsFunction(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({});
        __VLS_elementAsFunction(__VLS_intrinsicElements.h3, __VLS_intrinsicElements.h3)({});
        (__VLS_ctx.info.description);
        // @ts-ignore
        [info,];
        __VLS_elementAsFunction(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({});
        // @ts-ignore
        const __VLS_30 = {}
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
        const __VLS_31 = __VLS_asFunctionalComponent(__VLS_30, new __VLS_30({ ...{ 'onClick': {} }, type: ("primary"), }));
        const __VLS_32 = __VLS_31({ ...{ 'onClick': {} }, type: ("primary"), }, ...__VLS_functionalComponentArgsRest(__VLS_31));
        ({}({ ...{ 'onClick': {} }, type: ("primary"), }));
        let __VLS_36;
        const __VLS_37 = {
            onClick: (__VLS_ctx.Add)
        };
        // @ts-ignore
        [Add,];
        (__VLS_35.slots).default;
        const __VLS_35 = __VLS_pickFunctionalComponentCtx(__VLS_30, __VLS_32);
        let __VLS_33;
        let __VLS_34;
        (__VLS_ctx.number);
        // @ts-ignore
        const __VLS_38 = {}
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
        const __VLS_39 = __VLS_asFunctionalComponent(__VLS_38, new __VLS_38({ ...{ 'onClick': {} }, type: ("primary"), }));
        const __VLS_40 = __VLS_39({ ...{ 'onClick': {} }, type: ("primary"), }, ...__VLS_functionalComponentArgsRest(__VLS_39));
        ({}({ ...{ 'onClick': {} }, type: ("primary"), }));
        let __VLS_44;
        const __VLS_45 = {
            onClick: (__VLS_ctx.Jian)
        };
        // @ts-ignore
        [number, Jian,];
        (__VLS_43.slots).default;
        const __VLS_43 = __VLS_pickFunctionalComponentCtx(__VLS_38, __VLS_40);
        let __VLS_41;
        let __VLS_42;
        __VLS_elementAsFunction(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({});
        __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("left") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("right") }, ...{ style: ({}) }, });
        (__VLS_ctx.info.price);
        // @ts-ignore
        [info,];
        // @ts-ignore
        const __VLS_46 = {}
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
        const __VLS_47 = __VLS_asFunctionalComponent(__VLS_46, new __VLS_46({ ...{ 'onClick': {} }, type: ("primary"), round: (true), }));
        const __VLS_48 = __VLS_47({ ...{ 'onClick': {} }, type: ("primary"), round: (true), }, ...__VLS_functionalComponentArgsRest(__VLS_47));
        ({}({ ...{ 'onClick': {} }, type: ("primary"), round: (true), }));
        let __VLS_52;
        const __VLS_53 = {
            onClick: (...[$event]) => {
                if (!((__VLS_ctx.isShow)))
                    return;
                __VLS_ctx.buy();
                // @ts-ignore
                [buy,];
            }
        };
        (__VLS_51.slots).default;
        const __VLS_51 = __VLS_pickFunctionalComponentCtx(__VLS_46, __VLS_48);
        let __VLS_49;
        let __VLS_50;
        // @ts-ignore
        [ConfirmOrder, ConfirmOrder,];
        // @ts-ignore
        const __VLS_54 = __VLS_asFunctionalComponent(ConfirmOrder, new ConfirmOrder({ ...{ 'onCloseAdd': {} }, dialogFormVisible: ((__VLS_ctx.dialogFormVisible)), form: ((__VLS_ctx.form)), }));
        const __VLS_55 = __VLS_54({ ...{ 'onCloseAdd': {} }, dialogFormVisible: ((__VLS_ctx.dialogFormVisible)), form: ((__VLS_ctx.form)), }, ...__VLS_functionalComponentArgsRest(__VLS_54));
        ({}({ ...{ 'onCloseAdd': {} }, dialogFormVisible: ((__VLS_ctx.dialogFormVisible)), form: ((__VLS_ctx.form)), }));
        let __VLS_59;
        const __VLS_60 = {
            onCloseAdd: (__VLS_ctx.CloseAdd)
        };
        // @ts-ignore
        [dialogFormVisible, form, CloseAdd,];
        const __VLS_58 = __VLS_pickFunctionalComponentCtx(ConfirmOrder, __VLS_55);
        let __VLS_56;
        let __VLS_57;
        // @ts-ignore
        const __VLS_61 = {}
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
        const __VLS_62 = __VLS_asFunctionalComponent(__VLS_61, new __VLS_61({ ...{ 'onClick': {} }, type: ("warning"), round: (true), }));
        const __VLS_63 = __VLS_62({ ...{ 'onClick': {} }, type: ("warning"), round: (true), }, ...__VLS_functionalComponentArgsRest(__VLS_62));
        ({}({ ...{ 'onClick': {} }, type: ("warning"), round: (true), }));
        let __VLS_67;
        const __VLS_68 = {
            onClick: (__VLS_ctx.AddCart)
        };
        // @ts-ignore
        [AddCart,];
        (__VLS_66.slots).default;
        const __VLS_66 = __VLS_pickFunctionalComponentCtx(__VLS_61, __VLS_63);
        let __VLS_64;
        let __VLS_65;
    }
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
        __VLS_styleScopedClasses['common-layout'];
        __VLS_styleScopedClasses['bigImage'];
        __VLS_styleScopedClasses['product-info'];
        __VLS_styleScopedClasses['left'];
        __VLS_styleScopedClasses['right'];
    }
    var __VLS_slots;
    return __VLS_slots;
    const __VLS_componentsOption = {};
    let __VLS_name;
    let __VLS_defineComponent;
    const __VLS_internalComponent = __VLS_defineComponent({
        setup() {
            return {
                ConfirmOrder: ConfirmOrder,
                dialogFormVisible: dialogFormVisible,
                form: form,
                buy: buy,
                number: number,
                CloseAdd: CloseAdd,
                isShow: isShow,
                info: info,
                Add: Add,
                Jian: Jian,
                AddCart: AddCart,
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
//# sourceMappingURL=FlowerDetail.vue.js.map