const {
    fetchDataPromise
} = require('./helper')

const objExpected = {
    name: 'Carlos',
    age: 25
};

test('should the data is name: Carlos and age: 25', () => {
    return fetchDataPromise().then(data => {
        expect(data).toEqual(objExpected);
    })
});

test('should fetch fails with an error', () => {

    expect.assertions(2);

    fetchDataPromise(true).catch(e => {
        expect(e).toMatch(/error/);
        return e;
    });

    return fetchDataPromise(true).catch(e => {
        expect(e).toMatch(/error/);
        return e;
    });

});

test('should the data is name: Carlos and age: 25 on helpers', () => {
    return expect(fetchDataPromise()).resolves.toEqual(objExpected);
});

test('should the data is name: Carlos and age: 25 on async/await', async () => {
    try {
        await fetchDataPromise(true);
    } catch (error) {
        expect(error).toMatch(/err/);
    }
});