//Constants
import * as constants from '../../shared/constants';
import * as helpers from '../../shared/helpers';

//Interfaces
import { ICartItem } from '../../interfaces/cart';

export class CartItemModel implements ICartItem {
    id: number;
    name: string;
    price: number;
    imported: boolean;
    taxExempt: boolean;
    quantity: number;

    constructor(id: number, name: string, price: number, imported: boolean, taxExempt: boolean, quantity: number) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.imported = imported;
        this.taxExempt = taxExempt;
        this.quantity = quantity;
    }

    get finalPrice(): number {
        return this.listPrice + this.salesTax;
    }

    get listPrice(): number {
        return this.quantity * this.price;
    }

    get salesTax(): number {
        let tax = 0;

        if (!this.taxExempt) tax += helpers.roundToNearest(
            this.listPrice * helpers.toPercent(constants.salesTaxPercent), 
            constants.taxRoundTo
        );

        if (this.imported) tax += helpers.roundToNearest(
            this.listPrice * helpers.toPercent(constants.importDutyTaxPercent), 
            constants.taxRoundTo
        );

        return tax;
    }
}