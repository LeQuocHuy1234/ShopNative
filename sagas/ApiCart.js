const url = 'http://192.168.1.72:8000/api/order';

export function* getToOrder(data){
    const response = yield fetch(url, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data.data)
    })
    .then((response) => {
        return response.json();
    })
    .catch((error) => {
        return error;
    });
    
    return response;
}