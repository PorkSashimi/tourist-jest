let CITY_DATABASE: Record<string, string> = {};

function initDataBase() {
  jest.setTimeout(1000);
  CITY_DATABASE = { BEI_JING: '天安门', NAN_JING: '总统府' };
  console.log('initDataBase');
}

function closeDataBase() {
  jest.setTimeout(1000);
  CITY_DATABASE = { BEI_JING: '天安门', NAN_JING: '总统府' };
  console.log('closeDataBase');
}

// ------ ------ ------ ------ ------ ------ ------ ------ ------ ------ ------ ------ ------ ------ ------ ------ ------ ------ ------ ------

/**
 * 每一个 test 前执行
 * ---
 * @focus 控制台会输出两次 `console.log('initDataBase');`
 * ---
 */
beforeEach(() => initDataBase());

/**
 * 每一个 test 后执行
 * ---
 * @focus 控制台会输出两次 `console.log('closeDataBase');`
 * ---
 */
afterEach(() => closeDataBase());

// ------ ------ ------ ------ ------ ------ ------ ------ ------ ------ ------ ------ ------ ------ ------ ------ ------ ------ ------ ------

test('4.setup-teardown | city in beijing', () => {
  expect(CITY_DATABASE['BEI_JING']).toBe('天安门');
})

test('4.setup-teardown | city in nanjing', () => {
  expect(CITY_DATABASE['NAN_JING']).toBe('天安门');
})