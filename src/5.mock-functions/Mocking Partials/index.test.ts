import { get } from './Axios';

jest.mock('./Axios', () => {
  const actualModule = jest.requireActual('./Axios');
  return {
    ...actualModule,
    get: jest.fn(() => {
      return new Promise<string>((resolve) => {
        setTimeout(() => resolve('mock get'), 1000);
      })
    })
  };
});

describe('mocking-modules', () => {
  test('mock-axios', () => {
    return get(`/api/users`).then((response) => {
      expect(response).toBe('mock get');
    })
  })
})