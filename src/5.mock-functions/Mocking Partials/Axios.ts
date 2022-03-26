export function get(url: string) {
  return new Promise<string>((resolve) => {
    setTimeout(() => resolve('get'), 1000);
  })
}
