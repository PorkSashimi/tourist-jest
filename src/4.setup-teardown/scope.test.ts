
let SCOPE_DATABASE: Record<string, string> = {};

// ------ ------ ------ ------ ------ ------ ------ ------ ------ ------

describe('scope inside', () => {

  beforeAll(() => {
    SCOPE_DATABASE = { BEI_JING: '天安门' };
  });

  afterAll(() => {
    SCOPE_DATABASE = {};
  });

  test('database init successful', () => {
    expect(SCOPE_DATABASE).toStrictEqual({ BEI_JING: '天安门' });
  });

});

// ------ ------ ------ ------ ------ ------ ------ ------ ------ ------

test('scope outside', () => {
  expect(SCOPE_DATABASE).toEqual({});
});
