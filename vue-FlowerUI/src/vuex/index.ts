import { createStore } from 'vuex'

const store = createStore({
    //状态变量
    state() {
        return {
            cartItems: [] as any[],  // 用于存储购物车中的商品
            Token: localStorage["token"],
            Name: localStorage["Name"]
        }
    },
   
    //方法
    mutations: {
      
        SettingNickName(state: any, Name:any) {
            state.Name = Name
        },
        SettingToken(state: any, Token:any) {
            state.Token = Token
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
    
})
export default store