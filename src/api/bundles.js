exports.handler = async(event) => {
    return {
        statusCode: 200,
		headers: {
            'content-type': 'application/json',
			'Access-Control-Allow-Methods': 'GET,OPTION',
            'Access-Control-Allow-Origin': '*',
        }
        body: JSON.stringify(bundles),
    }
}

const bundles = [
    {
        name: 'Basket #1',
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
        name: 'Basket #2',
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
        name: 'Basket #3',
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