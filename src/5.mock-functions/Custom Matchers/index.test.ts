/**
 * 函数断言
 */
describe('Custom Matchers', () => {

  /**
   * @api matcher
   */
  test('matcher', async () => {
    const mock = jest.fn();

    mock(1);
    mock(2);
    mock(3);

    expect(mock).toBeCalledTimes(3);
    expect(mock).toHaveBeenCalled();
    expect(mock).toHaveBeenNthCalledWith(2, 2);
  });

})