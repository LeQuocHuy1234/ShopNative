const url = 'http://192.168.1.72:8000/api/products';

export function* getAllProductApi(){
    const response = yield fetch(url, {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: '',
    })
    .then((response) => {
        return response.json();
    })
    .catch((error) => {
        return error;
    });
    
    return response;
}