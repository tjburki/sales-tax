import { ICategory } from "./interfaces/category";

export const categories = [
    {
        id: 1,
        name: 'Candy',
        items: [
            {
                id: 1,
                name: '16lb Bag of Skittles',
                price: 16.00,
                imported: false
            },
            {
                id: 2,
                name: 'Crate of Almond Snickers',
                price: 75.99,
                imported: true
            }
        ],
        taxExempt: true
    },
    {
        id: 2,
        name: 'Coffee',
        items: [
            {
                id: 3,
                name: 'Bag of Vanilla-Hazelnut Coffee',
                price: 11.00,
                imported: true
            },
            {
                id: 4,
                name: '300# Bag of Fair-Trade Coffee',
                price: 997.99,
                imported: false
            }
        ],
        taxExempt: true
    },
    {
        id: 3,
        name: 'Popcorn',
        items: [
            {
                id: 5,
                name: 'Bag of Microwave Popcorn',
                price: .99,
                imported: false
            }
        ],
        taxExempt: true
    },
    {
        id: 4,
        name: 'Electronics',
        items: [
            {
                id: 6, 
                name: 'Walkman',
                price: 99.99,
                imported: false
            },
            {
                id: 7, 
                name: 'Discman',
                price: 55.00,
                imported: false
            }
        ],
        taxExempt: false
    },
    {
        id: 5,
        name: 'Scooters',
        items: [
            {
                id: 8,
                name: 'Vespa',
                price: 15001.25,
                imported: true
            }
        ],
        taxExempt: false
    },
    {
        id: 6,
        name: 'Spirits',
        items: [
            {
                id: 9,
                name: 'Bottle of Wine',
                price: 10.00,
                imported: true
            }
        ],
        taxExempt: false
    }
];

export const bundles = [
    {
        name: 'Basket Deal #1',
        items: [
            {
                id: 1,
                quantity: 1
            },
            {
                id: 5,
                quantity: 1
            },
            {
                id: 6,
                quantity: 1
            }
        ]
    },
    {
        name: 'Basket Deal #2',
        items: [
            {
                id: 3,
                quantity: 1
            },
            {
                id: 8,
                quantity: 1
            }
        ]
    },
    {
        name: 'Basket Deal #3',
        items: [
            {
                id: 2,
                quantity: 1
            },
            {
                id: 7,
                quantity: 1
            },
            {
                id: 9,
                quantity: 1
            },
            {
                id: 4,
                quantity: 1
            }
        ]
    }
];