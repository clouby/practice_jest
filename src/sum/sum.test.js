const sum = require('./sum');

test('should a + b to be equal 3', () => {
    expect(sum(1, 2)).toBe(3);
})