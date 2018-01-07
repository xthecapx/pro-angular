import { greet } from "./greet";

describe('greet', () => {

  it('It should include the name in the message', () => {
    // expect(greet('mosh')).toBe('Welcome mosh'); // Too specifid
    expect(greet('mosh')).toContain('mosh');
  });
});

