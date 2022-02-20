import CreatorOne from './CreatorOne';
import CreatorTwo from './CreatorTwo';
import clientCode from './index';

describe('client code', () => {
  it('should be a ProductOne can sparkle', () => {
    expect.assertions(1);

    const result = clientCode(new CreatorOne());

    expect(result).toBe('ProductOne can sparkle');
  });

  it('should be a ProductTwo can fly', () => {
    expect.assertions(1);

    const result = clientCode(new CreatorTwo());

    expect(result).toBe('ProductTwo can fly');
  });
});
