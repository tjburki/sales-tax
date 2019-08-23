import { CartItemModel } from './cart-item-model';

const importedAndTaxableModel = new CartItemModel(1, 'Test', 13.99, true, false, 1);

it('correct list price', () => {
    expect(importedAndTaxableModel.listPrice).toBe(13.99);
});

it('correct tax amount imported & taxable', () => {
    expect(importedAndTaxableModel.salesTax.toFixed(1)).toBe(2.1.toFixed(1));
});

it('correct final price imported & taxable', () => {
    expect(importedAndTaxableModel.finalPrice).toBe(16.09);
});

const importedAndTaxExemptModel = new CartItemModel(1, 'Test', 13.99, true, true, 1);

it('correct tax amount imported and tax exempt', () => {
    expect(importedAndTaxExemptModel.salesTax).toBe(.7);
});

it('correct final price imported and tax exempt', () => {
    expect(importedAndTaxExemptModel.finalPrice).toBe(14.69);
});

const nonImportedTaxExemptModel = new CartItemModel(1, 'Test', 13.99, false, true, 1);

it('correct tax amount not imported and tax exempt', () => {
    expect(nonImportedTaxExemptModel.salesTax).toBe(0);
});

it('correct final price not imported and tax exempt', () => {
    expect(nonImportedTaxExemptModel.finalPrice).toBe(13.99);
});

const nonImportedTaxableModel = new CartItemModel(1, 'Test', 13.99, false, false, 1);

it('correct tax amount not imported taxable', () => {
    expect(nonImportedTaxableModel.salesTax).toBe(1.4);
});

it('correct final price not imported taxable', () => {
    expect(nonImportedTaxableModel.finalPrice).toBe(15.39);
});