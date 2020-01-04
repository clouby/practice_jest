const {
    fetchData
} = require('./helper')

test('should the data is magnolia', done => {
    expect.assertions(2);

    function cb(data) {
        expect(data).toBe('magnolia');
        done();
    }

    function cbb(data) {
        expect(data).toBe('magnolia');
        done();
    }

    fetchData(cb, cbb);
});