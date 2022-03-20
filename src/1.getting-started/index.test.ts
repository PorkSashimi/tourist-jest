export function sum(a: number, b: number) {
  return a + b;
}

test('1.getting-started | 1 plus 1 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
})
