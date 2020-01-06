const {
  createNameDatabase,
  initializeFoodDatabase
} = require("./helper");

const {
  connectDatabaseFoods,
  killConnection,
  isFoodExist
} = initializeFoodDatabase('frijoles', 'pan', 'corozo', 'pollo');

let isName;
let cleanNameDatabase;

afterAll(() => {
  console.log("afterAll");
});

describe('This could do a simple scope about teardown', () => {
  beforeEach(() => {
    const container = createNameDatabase();

    isName = container.isName;
    cleanNameDatabase = container.clearNameDatabase;
  });

  afterEach(() => {
    cleanNameDatabase();
  });

  test("should name database has carlos", () => {
    expect(isName("carlos")).toBeTruthy();
  });

  test("should name database has karina", () => {
    expect(isName("karina")).toBeTruthy();
  });
});


describe('Handle promises on teardown process', () => {
  beforeAll(() => {
    return connectDatabaseFoods();
  });

  afterAll(() => {
    return killConnection();
  });

  test('should find a food `pan` on database', () => {
    expect(isFoodExist('pan')).toBeTruthy();
  });
});

describe("Error expected when we try to connect", () => {

  afterAll(() => {
    return killConnection();
  });

  test('should show exception when we try to find a food', () => {
    expect(() => isFoodExist('frijoles')).toThrow(/DB/);
  });

});