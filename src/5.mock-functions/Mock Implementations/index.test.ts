/**
 * 模拟函数「实现」
 */
describe('mock-implementations', () => {

  /**
   * @api mockImplementation
   */
  test('mockImplementation', async () => {
    const mock = jest.fn(() => 1).mockImplementation(() => 3);

    expect(mock()).toBe(3);
    expect(mock()).toBe(3);
    expect(mock()).toBe(3);
  });

  /**
   * @api mockImplementationOnce
   */
  test('mockImplementationOnce', async () => {
    const mock = jest.fn(() => 1).mockImplementationOnce(() => 3);

    expect(mock()).toBe(3);
    expect(mock()).toBe(1);
    expect(mock()).toBe(1);
  });

})