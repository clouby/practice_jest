const {
    createNameDatabase
} = require('./helper');

let isName;
let cleanNameDatabase;

beforeEach(() => {
    const container = createNameDatabase();

    isName = container.isName;
    cleanNameDatabase = container.clearNameDatabase;
});

afterEach(() => {
    cleanNameDatabase();
});

test('should name database has carlos', () => {
    expect(isName('carlos')).toBeTruthy();
});


test('should name database has karina', () => {
    expect(isName('karina')).toBeTruthy();
});