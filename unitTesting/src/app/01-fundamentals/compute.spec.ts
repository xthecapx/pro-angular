import { compute } from './compute';

describe('compute', () => {

  it('Should return 0 if input is negative', () => {
    const result = compute(-1);

    expect(result).toBe(0);
  });

  it('Should increment the input if it is postive', () => {
    const result = compute(2);

    expect(result).toBe(3);
  });

})
