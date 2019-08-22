import { bundles } from '../data/data';

exports.handler = async(event) => {
    switch(event.httpMethod) {
        case 'GET':
            return getBundles();
    }
}

//GET
function getBundles() {
    return result(bundles);
}