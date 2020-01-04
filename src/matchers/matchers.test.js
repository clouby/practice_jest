const {
    double
} = require('./matchers');

test('should object assigment', () => {
    const data = {
        name: 'Carlos'
    };
    data.age = 25;

    expect(data).toEqual({
        name: 'Carlos',
        age: 25
    })
});

test.each([
    [3, 6],
    [5, 10]
])(
    'should return double value and never zero',
    (input, expected) => {
        expect(double(input)).toBe(expected);
    }
);