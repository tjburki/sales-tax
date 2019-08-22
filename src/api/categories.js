import { categories } from '../data/data';

exports.handler = async(event) => {
    switch(event.httpMethod) {
        case 'GET':
            return getCategories();
    }
}

//GET
function getCategories() {
    return result(categories);
}