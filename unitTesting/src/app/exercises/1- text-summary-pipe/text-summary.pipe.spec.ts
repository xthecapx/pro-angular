import { TextSummaryPipe } from "./text-summary.pipe";

describe('TextSummaryPipe', () => {
  let pipe: TextSummaryPipe;

  beforeEach(() => {
    pipe = new TextSummaryPipe();
  });

  // 1. If not value return empty
  it('Should return empty if no args', () => {
    expect (pipe.transform(null)).toEqual('');
  });

  // 2. If no args, value.length <= 10 TRUE, should return value
  it('Should return the string if the value.length <= 10', () => {
    expect (pipe.transform('12345')).toEqual('12345');
  });

  // 3. If no args, value.length <= 10 FALSE, should return value + ...
  it('Should return the string + ...  if the value.length > 10', () => {
    expect (pipe.transform('123456789XXX')).toEqual('123456789X...');
  });

  // 4. If args, value.length <= args TRUE, should return value
  it('Should return the string if the value.length <= limit', () => {
    expect (pipe.transform('12345', 6)).toEqual('12345');
  });

  // 5. If args, value.length <= args FALSE, should return value + ...
  it('Should return the string + ...  if the value.length > limit', () => {
    expect (pipe.transform('12345X', 5)).toEqual('12345...');
  });
});

