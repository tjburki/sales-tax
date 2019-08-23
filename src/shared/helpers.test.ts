import * as helpers from './helpers';
import * as constants from './constants';

it('format currency', () => {
    expect(helpers.formatCurrency(10)).toBe('$10.00');
});

it('format currency round', () => {
    expect(helpers.formatCurrency(10.333)).toBe('$10.33');
});

it('format currency zero', () => {
    expect(helpers.formatCurrency(0)).toBe('$0.00');
});

it('round to nearest > 1 factor', () => {
    expect(helpers.roundToNearest(12, 5)).toBe(15);
});

it('round to nearest < 1 factor', () => {
    expect(helpers.roundToNearest(12.622, .05)).toBe(12.65);
});

it('round to nearest zero', () => {
    expect(helpers.roundToNearest(0, 10)).toBe(0);
});

it('to percent', () => {
    expect(helpers.toPercent(12.56).toFixed(4)).toBe(.1256.toFixed(4));
});

it('reduce property to number', () => {
    expect(helpers.reducePropertyToNumber([{a: 1},{a: 2},{a: 3}], 'a')).toBe(6);
});

it('reduce property to number invalid property', () => {
    expect(helpers.reducePropertyToNumber([{a: 1},{a: 2},{a: 3}], 'b')).toBe(0);
});

it('create fake order number', () => {
    expect(helpers.createFakeOrderNumber() <= constants.fakeOrderNumberMultiplier);
});