import Singleton from './Singleton';

it('both variables contain the same instance', () => {
  const s1 = Singleton.getInstance();
  const s2 = Singleton.getInstance();

  expect(s1).toBe(s2);
})

it('variables contain the different instance', () => {
  // @ts-expect-error
  const s1 = new Singleton();
  const s2 = Singleton.getInstance();

  expect(s1).not.toBe(s2);
})
