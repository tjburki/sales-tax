//Constants
import * as constants from './constants';

//Formatting
export const formatCurrency = (value: number): string => 
    `$${value.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})}`;

//Calculation
export const roundToNearest = (value: number, roundTo: number): number => {
    const roundToFactor = 1 / roundTo;
    return Math.ceil(roundToFactor * value) / roundToFactor;
};

export const toPercent = (value: number): number =>
    value / 100;

export const reducePropertyToNumber = (arr: [], propertyName: string): number =>
    arr.reduce((a: number, b: any) => 
        a + b[propertyName] || 0,
        0
    );

//Workflow
export const createFakeOrderNumber = (): number => 
    Math.round(Math.random() * constants.fakeOrderNumberMultiplier);