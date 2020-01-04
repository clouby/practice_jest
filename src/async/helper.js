function fetchData(cb, cbb) {
    const data = 'magnolia';
    cb(data);
    cbb(data);
};


function fetchDataPromise(error = false) {
    const data = {
        name: 'Carlos',
        age: 25
    };

    return new Promise((resolve, reject) => {
        if (error) {
            reject('error magnolia')
        } else {
            resolve(data);
        }
    });
}

module.exports = {
    fetchData,
    fetchDataPromise
}