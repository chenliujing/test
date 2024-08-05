import { createStore } from 'vuex';
const store = createStore({
    //状态变量
    state() {
        return {
            cartItems: [], // 用于存储购物车中的商品
            Token: localStorage["token"],
            Name: localStorage["Name"]
        };
    },
    //方法
    mutations: {
        SettingNickName(state, Name) {
            state.Name = Name;
        },
        SettingToken(state, Token) {
            state.Token = Token;
        }
    },
    actions: {
        addItemToCart({ commit }, item) {
            commit('ADD_ITEM', item);
        },
        removeItemFromCart({ commit }, itemId) {
            commit('REMOVE_ITEM', itemId);
        },
        clearCart({ commit }) {
            commit('CLEAR_CART');
        }
    }
});
export default store;
//# sourceMappingURL=index.js.map