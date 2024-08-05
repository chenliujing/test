export default class Order {
    id;
    sumPrice;
    status;
    items;
    orderDate;
    constructor(id, sumPrice, status, items = [], orderDate) {
        this.id = id;
        this.sumPrice = sumPrice;
        this.status = status;
        this.items = items;
        this.orderDate = orderDate;
    }
    addItem(flower, quantity) {
        this.items.push({ flower, quantity });
    }
}
//# sourceMappingURL=Order.js.map