

// FlowerItem.ts
import Flower from "./Flower";

export interface OrderItem {
    flower: Flower;
    quantity: number;
}
export default class Order {
    id: number;
    sumPrice: number;
    status: number;
    items: OrderItem[];
    orderDate:Date;

    constructor(id: number, sumPrice: number, status: number, items: OrderItem[] = [], orderDate:Date) {
        this.id = id;
        this.sumPrice = sumPrice;
        this.status = status;
        this.items = items;
        this.orderDate=orderDate
    }

    addItem(flower: Flower, quantity: number) {
        this.items.push({ flower, quantity });
    }
}