let CITY_DATABASE: Record<string, string> = {};

// ------ ------ ------ ------ ------ ------ ------ ------ ------ ------

/**
 * 在「所有」test 之前执行
 */
beforeAll(() => {
  CITY_DATABASE = { BEI_JING: '天安门', NAN_JING: '总统府' };
  console.log('beforeAll');
});

/**
 * 在「所有」test 之后执行
 */
afterAll(() => {
  console.log('afterAll');
});

// ------ ------ ------ ------ ------ ------ ------ ------ ------ ------

/**
 * 在「每个」test 之前执行
 */
beforeEach(() => {
  console.log('beforeEach');
});

/**
 * 在「每个」test 之后执行
 */
afterEach(() => {
  console.log('afterEach');
});

// ------ ------ ------ ------ ------ ------ ------ ------ ------ ------

test('database init successful', () => {
  const label = 'BEI_JING';
  const value = CITY_DATABASE[label];
  expect(value).toBe('天安门');
})

test('database init successful', () => {
  const label = 'NAN_JING';
  const value = CITY_DATABASE[label];
  expect(value).toBe('总统府');
})
