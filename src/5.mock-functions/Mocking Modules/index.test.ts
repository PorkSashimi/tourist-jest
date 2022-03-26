import Axios from './Axios';

jest.mock('./Axios');

describe('mocking-modules', () => {

  test('mock-axios', () => {
    /** @ts-ignore */
    Axios.patch.mockReturnValue('hello jest');
    
    expect(Axios.patch(``)).toBe('hello jest');
  })

})