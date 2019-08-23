//Taxes
export const salesTaxPercent: number = 10;
export const importDutyTaxPercent: number = 5;
export const taxRoundTo: number = .05;

//Order
export const fakeOrderNumberMultiplier: number = 10000000000;

//Display
export const taxExemptMarker = '*';
export const importedMarker = '†';

//Network
const urlStem = 'https://goofy-mayer-d56149.netlify.com/.netlify/functions';
export const itemsUrl = `${urlStem}/items`;
export const bundlesUrl = `${urlStem}/bundles`;
export const categoriesUrl = `${urlStem}/categories`;