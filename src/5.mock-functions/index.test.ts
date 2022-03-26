describe('Mock Functions', () => {

  /**
   * @api jest.fn
   * @api jest.Mock.mock.calls[][]
   */
  test('「参数 | 次数 | 结果」测试', () => {

    const mockFun = jest.fn((x, y) => x + y);

    /**
     * 调用次数
     */
    const mockCount = 2;

    /**
     * 第一次调用：x = 0 | y = 0 -> 0 + 0 = 0
     * 第二次调用：x = 0 | y = 1 -> 0 + 1 = 1
     */
    new Array(mockCount).fill(0).forEach(mockFun);

    /**
     * @参数测试 第一次调用函数的第一个参数 x
     */
    expect(mockFun.mock.calls[0][0]).toBe(0);

    /**
     * @参数测试 第二次调用函数的第二个参数 y
     */
    expect(mockFun.mock.calls[1][1]).toBe(1);

    /**
     * @次数测试 调用函数的总次数
     */
    expect(mockFun.mock.calls.length).toBe(mockCount);

    /**
    * @结果测试 结果类型
    */
    expect(mockFun.mock.results[0].type).toBe('return');

    /**
    * @结果测试 结果内容
    */
    expect(mockFun.mock.results[0].value).toBe(0);
  });

  /**
   * @api jest.Mock.mockReturnValue
   */
  test('「返回值」测试 | mockReturnValue', () => {
    const mockFun = jest.fn((x, y) => x + y);
    mockFun.mockReturnValue(1)

    mockFun(1, 2);
    mockFun(3, 4);
    mockFun(5, 6);
      
    expect(mockFun.mock.results[0].value).toBe(1);
    expect(mockFun.mock.results[1].value).toBe(1);
    expect(mockFun.mock.results[2].value).toBe(1);
  });

  /**
   * @api jest.Mock.mockReturnValueOnce
   */
  test('「返回值」测试 | mockReturnValueOnce', () => {
    const mockFun = jest.fn((x, y) => x + y);
    mockFun.mockReturnValueOnce(1).mockReturnValueOnce(2);
    
    mockFun(1, 2);
    mockFun(3, 4);

    expect(mockFun.mock.results[0].value).toBe(1);
    expect(mockFun.mock.results[1].value).toBe(2);
  });

})