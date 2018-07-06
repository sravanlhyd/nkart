import { Injectable } from '@angular/core';

@Injectable()
export class ProductService {
    productList: Array<any>;
    constructor() {

    }   
    getProducts() {
        this.productList = [{ brand: 'Apple', model: 'iPhonex', price: 100000, quantity: 5 },
        { brand: 'Samsung', model: 'iPhonex', price: 100000, quantity: 4 },
        { brand: 'Oppo', model: 'O4', price: 30000, quantity: 5 },
        { brand: 'OnePlus 5', model: 'OnePlus5T', price: 50000, quantity: 3 }];
        return this.productList;
    }
}
