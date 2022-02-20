import Singleton from './Singleton';

describe('singleton', () => {
  it('variables contain the same instance', () => {
    expect.assertions(1);

    const s1 = Singleton.getInstance();
    const s2 = Singleton.getInstance();

    expect(s1).toBe(s2);
  });

  it('variables contain the different instance', () => {
    expect.assertions(1);

    // @ts-expect-error – by design. Only for this test.
    const s1 = new Singleton() as Singleton;
    const s2 = Singleton.getInstance();

    expect(s1).not.toBe(s2);
  });
});
