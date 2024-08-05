const http = "http://localhost:8081/api";
import instance from './filter';
//获取token
export const getToken = async (name, password) => {
    console.log("Function getToken called");
    const url = `${http}/Login/GetToken?userName=${name}&Password=${password}`;
    console.log("Request URL:", url);
    return await instance.get(url);
};
export const register = async (parms) => {
    const response = await instance.post(http + "/User/AddUser", parms);
    console.log(response);
    return response;
};
//获取鲜花
export const getFlowers = async () => {
    return await instance.get(http + "/Flower/GetFlower");
};
export const getFlowersSearch = async (text) => {
    return await instance.get(http + "/Flower/GetFlowerSearch?text=" + text);
};
export const updateFlower = async (parms) => {
    const response = await instance.put(http + "/Flower/UpdateFlower", parms);
};
export const getFlowerbyId = async (id) => {
    const response = await instance.get(http + "/Flower/GetFlowerById?id=" + id);
    return response;
};
export const upLoad = async (url) => {
    const response = await instance.put(http + "/FileUpload/UploadLargeFile", url);
};
export const deleteFlower = async (id) => {
    await instance.delete(http + "/Flower/DeleteFlower?id=" + id);
};
export const addFlower = async (parms) => {
    const response = await instance.post(http + "/Flower/AddFlower", parms);
    return response;
};
//类别管理
export const getCategory = async () => {
    const response = await instance.get(http + "/Category/GetCategory");
    return response;
};
export const addCategory = async (parms) => {
    const response = await instance.post(http + "/Category/AddCategory", parms);
    return response;
};
export const deleteCategory = async (id) => {
    const response = await instance.delete(http + "/Category/DeleteCategory?id=" + id);
    return response;
};
export const UpdateCategory = async (parms) => {
    const response = await instance.put(http + "/Category/UpdateCategory", parms);
    return response;
};
//用户管理
export const getUsers = async () => {
    const response = await instance.get(http + "/User/GetUsers");
    return response;
};
export const getUserById = async (id) => {
    const response = await instance.get(http + "/User/GetUserById?userId=" + id);
    return response;
};
export const addUser = async (parms) => {
    const response = await instance.post(http + "/User/AddUser", parms);
    return response;
};
export const deleteUser = async (id) => {
    const response = await instance.delete(http + "/Category/DeleteUser?id=" + id);
    return response;
};
export const UpdateUser = async (parms) => {
    const response = await instance.put(http + "/User/UpdateUser", parms);
    return response;
};
export const getRoles = async () => {
    const response = await instance.get(http + "/Role/GetRoles");
    return response;
};
export const settingRole = async (userRole) => {
    const response = await instance.post(http + "/User/SettingRole", userRole);
    return response;
};
export const getRoleByUserId = async (userId) => {
    const response = await instance.get(http + "/User/GetRoleByUserId?userId=" + userId);
    return response;
};
//购物车项
export const addCartItem = async (userId, productId, quantity) => {
    const response = await instance.post(http + "/CartItems/AddCartItem/" + userId + "/" + productId + "/" + quantity);
    return response;
};
export const updateCartItem = async (cartItemId, quantity) => {
    const response = await instance.put(http + "/CartItems/UpdateCartItems/" + cartItemId + "/" + quantity);
    return response;
};
export const getCartItems = async (userId) => {
    const response = await instance.get(http + "/CartItems/GetCartItem/" + userId);
    return response;
};
export const removeCartItems = async (userId, cartItemIds) => {
    try {
        // 发送 DELETE 请求，传递 userId 作为 URL 参数，cartItemIds 作为请求体
        const response = await instance.delete(http + "/CartItems/DeleteCartItems/" + userId, {
            data: cartItemIds, // 直接传递数组，后端会将其解析为 List<int>
        });
        return response;
    }
    catch (error) {
        console.error('Error removing cart items:', error);
        throw error; // 或者处理错误
    }
};
//订单
export const addOrderItem = async (OrderItem) => {
    const response = await instance.post(http + "/Order/AddOrder/", OrderItem);
    return response;
};
export const getOrderItems = async (userId) => {
    const response = await instance.get(http + "/Order/GetOrder/" + userId);
    return response;
};
export const removeOrderItem = async (id) => {
    const response = await instance.get(http + "/Order/DeleteOrder/" + id);
    return response;
};
export const getAllOrder = async () => {
    const response = await instance.get(http + "/Order/GetAllOrder/");
    return response;
};
//处理订单
export const chuliOrder = async (id) => {
    const response = await instance.post(http + "/Order/ChuliOrder/" + id);
    return response;
};
//完成订单
export const completeOrder = async (id) => {
    const response = await instance.post(http + "/Order/CompleteOrder/" + id);
    return response;
};
//取消订单
export const cancelOrder = async (id) => {
    const response = await instance.post(http + "/Order/CancelOrder/" + id);
    return response;
};
//个人地址
export const getAddress = async (userId) => {
    const response = await instance.get(http + "/Address/GetAddressByUserId/" + userId);
    return response;
};
export const addAddress = async (address) => {
    const response = await instance.post(http + "/Address/AddAddress/", address);
    return response;
};
export const updateAddress = async (address) => {
    const response = await instance.put(http + "/Address/UpdateAddress/", address);
    return response;
};
export const deleteAddress = async (parms) => {
    const response = await instance.delete(http + "/Address/DeleteAddresses", { data: parms });
    return response;
};
//# sourceMappingURL=index.js.map