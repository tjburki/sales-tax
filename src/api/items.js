exports.handler = async(event) => {
    if (event.httpMethod !== 'GET') {
        return {
            statusCode: 405,
            body: 'Method Not Allowed'
        };
    }

    return {
        statusCode: 200,
        body: 'Testing'
    }
}

const items = [
    {
        id: 1,
        name: '16lb Bag of Skittles',
        price: 16.00,
        imported: false,
        taxExempt: true
    },
    {
        id: 2,
        name: 'Crate of Almond Snickers',
        price: 75.99,
        imported: true,
        taxExempt: true
    },
    {
        id: 3,
        name: 'Bag of Vanilla-Hazelnut Coffee',
        price: 11.00,
        imported: true,
        taxExempt: true
    },
    {
        id: 4,
        name: '300# Bag of Fair-Trade Coffee',
        price: 997.99,
        imported: false,
        taxExempt: true
    },
    {
        id: 5,
        name: 'Bag of Microwave Popcorn',
        price: .99,
        imported: false,
        taxExempt: true
    },
    {
        id: 6, 
        name: 'Walkman',
        price: 99.99,
        imported: false,
        taxExempt: false
    },
    {
        id: 7, 
        name: 'Discman',
        price: 55.00,
        imported: false,
        taxExempt: false
    },
    {
        id: 8,
        name: 'Vespa',
        price: 15001.25,
        imported: true,
        taxExempt: false
    },
    {
        id: 9,
        name: 'Bottle of Wine',
        price: 10.00,
        imported: true,
        taxExempt: false
    }
];