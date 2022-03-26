/**
 * 模拟函数「名称」
 * ---
 * TODO: 没搞明白
 * ---
 */
describe('mock-names', () => {

  /**
   * @api mockName
   */
  test('mockName', async () => {
    const mock = jest.fn().mockImplementation(() => 3).mockName('mockFunction');
    expect((() => mock())()).toBe(4);
  });

})