exports.handler = async(event) => {
    return {
        statusCode: 200,
		headers: {
            'content-type': 'application/json',
			'Access-Control-Allow-Methods': 'GET,OPTION',
            'Access-Control-Allow-Origin': '*',
        }
        body: JSON.stringify(items),
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