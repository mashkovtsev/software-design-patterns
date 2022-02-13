import CreatorOne from './CreatorOne';
import CreatorTwo from './CreatorTwo';
import { clientCode } from './index';

it('ProductOne can sparkle', () => {
  const result = clientCode(new CreatorOne());

  expect(result).toBe('ProductOne can sparkle');
})

it('ProductTwo can fly', () => {
  const result = clientCode(new CreatorTwo());

  expect(result).toBe('ProductTwo can fly');
})
