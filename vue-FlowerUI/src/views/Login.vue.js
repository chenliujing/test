import { ref } from 'vue';
import { ElForm, ElFormItem, ElInput, ElButton, ElCard } from 'element-plus';
import { getToken } from '../api/index';
import { useStore } from 'vuex';
import router from '../routes/index';
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const store = useStore();
const loginForm = ref({
    username: '',
    password: '',
});
const loginFormRef = ref(null);
const rules = {
    username: [
        { required: true, message: '请输入用户名', trigger: 'blur' },
    ],
    password: [
        { required: true, message: '请输入密码', trigger: 'blur' },
    ],
};
const handleLogin = async () => {
    loginFormRef.value?.validate(async (valid) => {
        if (valid) {
            try {
                const response = await getToken(loginForm.value.username, loginForm.value.password);
                console.log(response);
                sessionStorage.setItem("token", response.token);
                sessionStorage.setItem("name", response.user.name);
                sessionStorage.setItem("id", response.user.id);
                console.log(sessionStorage.getItem("id"));
                store.commit("SettingToken", response.token);
                alert("登录成功");
                // 根据角色名跳转到不同的页面
                const roleNames = response.user.roleNames;
                if (roleNames.includes('管理员')) {
                    router.push("/"); // 管理员界面
                }
                else if (roleNames.includes('用户')) {
                    router.push("/InfrontPage"); // 普通用户界面
                }
            }
            catch (error) {
                console.error('登录请求失败:', error);
            }
        }
        else {
            console.log('表单验证失败');
        }
    });
};
const handleRegister = async () => {
    router.push("/register");
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
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("login-container") }, });
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
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({ ...{ class: ("login-card") }, }));
    const __VLS_2 = __VLS_1({ ...{ class: ("login-card") }, }, ...__VLS_functionalComponentArgsRest(__VLS_1));
    ({}({ ...{ class: ("login-card") }, }));
    __VLS_elementAsFunction(__VLS_intrinsicElements.h2, __VLS_intrinsicElements.h2)({ ...{ class: ("title") }, });
    // @ts-ignore
    const __VLS_6 = {}
        .ElForm;
    ({}.ElForm);
    ({}.ElForm);
    __VLS_components.ElForm;
    __VLS_components.elForm;
    __VLS_components.ElForm;
    __VLS_components.elForm;
    // @ts-ignore
    [ElForm, ElForm,];
    // @ts-ignore
    const __VLS_7 = __VLS_asFunctionalComponent(__VLS_6, new __VLS_6({ model: ((__VLS_ctx.loginForm)), ref: ("loginFormRef"), statusIcon: (true), }));
    const __VLS_8 = __VLS_7({ model: ((__VLS_ctx.loginForm)), ref: ("loginFormRef"), statusIcon: (true), }, ...__VLS_functionalComponentArgsRest(__VLS_7));
    ({}({ model: ((__VLS_ctx.loginForm)), ref: ("loginFormRef"), statusIcon: (true), }));
    // @ts-ignore
    (__VLS_ctx.loginFormRef);
    // @ts-ignore
    const __VLS_12 = {}
        .ElFormItem;
    ({}.ElFormItem);
    ({}.ElFormItem);
    __VLS_components.ElFormItem;
    __VLS_components.elFormItem;
    __VLS_components.ElFormItem;
    __VLS_components.elFormItem;
    // @ts-ignore
    [ElFormItem, ElFormItem,];
    // @ts-ignore
    const __VLS_13 = __VLS_asFunctionalComponent(__VLS_12, new __VLS_12({ label: ("用户名"), prop: ("username"), rules: ((__VLS_ctx.rules.username)), }));
    const __VLS_14 = __VLS_13({ label: ("用户名"), prop: ("username"), rules: ((__VLS_ctx.rules.username)), }, ...__VLS_functionalComponentArgsRest(__VLS_13));
    ({}({ label: ("用户名"), prop: ("username"), rules: ((__VLS_ctx.rules.username)), }));
    // @ts-ignore
    const __VLS_18 = {}
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
    const __VLS_19 = __VLS_asFunctionalComponent(__VLS_18, new __VLS_18({ modelValue: ((__VLS_ctx.loginForm.username)), placeholder: ("请输入用户名"), }));
    const __VLS_20 = __VLS_19({ modelValue: ((__VLS_ctx.loginForm.username)), placeholder: ("请输入用户名"), }, ...__VLS_functionalComponentArgsRest(__VLS_19));
    ({}({ modelValue: ((__VLS_ctx.loginForm.username)), placeholder: ("请输入用户名"), }));
    // @ts-ignore
    [loginForm, loginForm, loginFormRef, rules,];
    const __VLS_23 = __VLS_pickFunctionalComponentCtx(__VLS_18, __VLS_20);
    (__VLS_17.slots).default;
    const __VLS_17 = __VLS_pickFunctionalComponentCtx(__VLS_12, __VLS_14);
    // @ts-ignore
    const __VLS_24 = {}
        .ElFormItem;
    ({}.ElFormItem);
    ({}.ElFormItem);
    __VLS_components.ElFormItem;
    __VLS_components.elFormItem;
    __VLS_components.ElFormItem;
    __VLS_components.elFormItem;
    // @ts-ignore
    [ElFormItem, ElFormItem,];
    // @ts-ignore
    const __VLS_25 = __VLS_asFunctionalComponent(__VLS_24, new __VLS_24({ label: ("密码"), prop: ("password"), rules: ((__VLS_ctx.rules.password)), }));
    const __VLS_26 = __VLS_25({ label: ("密码"), prop: ("password"), rules: ((__VLS_ctx.rules.password)), }, ...__VLS_functionalComponentArgsRest(__VLS_25));
    ({}({ label: ("密码"), prop: ("password"), rules: ((__VLS_ctx.rules.password)), }));
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
    const __VLS_31 = __VLS_asFunctionalComponent(__VLS_30, new __VLS_30({ modelValue: ((__VLS_ctx.loginForm.password)), type: ("password"), placeholder: ("请输入密码"), }));
    const __VLS_32 = __VLS_31({ modelValue: ((__VLS_ctx.loginForm.password)), type: ("password"), placeholder: ("请输入密码"), }, ...__VLS_functionalComponentArgsRest(__VLS_31));
    ({}({ modelValue: ((__VLS_ctx.loginForm.password)), type: ("password"), placeholder: ("请输入密码"), }));
    // @ts-ignore
    [loginForm, rules,];
    const __VLS_35 = __VLS_pickFunctionalComponentCtx(__VLS_30, __VLS_32);
    (__VLS_29.slots).default;
    const __VLS_29 = __VLS_pickFunctionalComponentCtx(__VLS_24, __VLS_26);
    // @ts-ignore
    const __VLS_36 = {}
        .ElFormItem;
    ({}.ElFormItem);
    ({}.ElFormItem);
    __VLS_components.ElFormItem;
    __VLS_components.elFormItem;
    __VLS_components.ElFormItem;
    __VLS_components.elFormItem;
    // @ts-ignore
    [ElFormItem, ElFormItem,];
    // @ts-ignore
    const __VLS_37 = __VLS_asFunctionalComponent(__VLS_36, new __VLS_36({}));
    const __VLS_38 = __VLS_37({}, ...__VLS_functionalComponentArgsRest(__VLS_37));
    ({}({}));
    // @ts-ignore
    const __VLS_42 = {}
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
    const __VLS_43 = __VLS_asFunctionalComponent(__VLS_42, new __VLS_42({ ...{ 'onClick': {} }, type: ("primary"), }));
    const __VLS_44 = __VLS_43({ ...{ 'onClick': {} }, type: ("primary"), }, ...__VLS_functionalComponentArgsRest(__VLS_43));
    ({}({ ...{ 'onClick': {} }, type: ("primary"), }));
    let __VLS_48;
    const __VLS_49 = {
        onClick: (__VLS_ctx.handleLogin)
    };
    // @ts-ignore
    [handleLogin,];
    (__VLS_47.slots).default;
    const __VLS_47 = __VLS_pickFunctionalComponentCtx(__VLS_42, __VLS_44);
    let __VLS_45;
    let __VLS_46;
    // @ts-ignore
    const __VLS_50 = {}
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
    const __VLS_51 = __VLS_asFunctionalComponent(__VLS_50, new __VLS_50({ ...{ 'onClick': {} }, type: ("primary"), }));
    const __VLS_52 = __VLS_51({ ...{ 'onClick': {} }, type: ("primary"), }, ...__VLS_functionalComponentArgsRest(__VLS_51));
    ({}({ ...{ 'onClick': {} }, type: ("primary"), }));
    let __VLS_56;
    const __VLS_57 = {
        onClick: (__VLS_ctx.handleRegister)
    };
    // @ts-ignore
    [handleRegister,];
    (__VLS_55.slots).default;
    const __VLS_55 = __VLS_pickFunctionalComponentCtx(__VLS_50, __VLS_52);
    let __VLS_53;
    let __VLS_54;
    (__VLS_41.slots).default;
    const __VLS_41 = __VLS_pickFunctionalComponentCtx(__VLS_36, __VLS_38);
    (__VLS_11.slots).default;
    const __VLS_11 = __VLS_pickFunctionalComponentCtx(__VLS_6, __VLS_8);
    (__VLS_5.slots).default;
    const __VLS_5 = __VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2);
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
        __VLS_styleScopedClasses['login-container'];
        __VLS_styleScopedClasses['login-card'];
        __VLS_styleScopedClasses['title'];
    }
    var __VLS_slots;
    return __VLS_slots;
    const __VLS_componentsOption = {};
    let __VLS_name;
    let __VLS_defineComponent;
    const __VLS_internalComponent = __VLS_defineComponent({
        setup() {
            return {
                ElForm: ElForm,
                ElFormItem: ElFormItem,
                ElInput: ElInput,
                ElButton: ElButton,
                ElCard: ElCard,
                loginForm: loginForm,
                loginFormRef: loginFormRef,
                rules: rules,
                handleLogin: handleLogin,
                handleRegister: handleRegister,
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
//# sourceMappingURL=Login.vue.js.map