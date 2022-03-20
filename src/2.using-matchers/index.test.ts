/**
 * 基本数据类型 - 值传递
 */
test('2.using-matchers | 基本数据类型,值比较', () => {
  expect(1 + 2).toBe(3);
})

/**
 * 复杂数据类型 - 引用传递
 */
test('2.using-matchers | 引用数据类型，递归比较', () => {
  expect({ test: 1, children: [{ test: 2 }] }).toStrictEqual({ test: 1, children: [{ test: 2 }] });
})

/**
 * (真 | 假) 值
 */
test('2.using-matchers | 真假值', () => {
  const falsy = null;
  const definded = new Date();;
  expect(falsy).toBeNull();
  expect(definded).toBeDefined();
})

/**
 * 数字
 */
test('2.using-matchers | 数字', () => {
  /**
   * 等于
   */
  expect(10).toEqual(10);
  /**
   * 等于 - 小数等于
   */
  expect(0.1 + 0.2).toBeCloseTo(0.3);
  /**
   * 大于
   */
  expect(10).toBeGreaterThan(5);
  /**
   * 大于等于
   */
  expect(10).toBeGreaterThanOrEqual(10);
})

/**
 * 字符串
 */
test('2.using-matchers | 字符串', () => {
  /**
   * 正则匹配
   */
  expect('hello jest').toMatch(/jest/);
});

/**
 * 可迭代对象
 */
test('2.using-matchers | 数组', () => {
  /**
   * 包含
   */
  expect(['cat', 'dov']).toContain('cat');
});

/**
 * 异常
 */
test('2.using-matchers | 数组', () => {

  function throwErrorFunc() {
    throw new RangeError(`it's a range error`);
  }

  /**
   * 函数抛出异常，异常中包含 range
   */
  expect(() => throwErrorFunc()).toThrowError(/range/);
});