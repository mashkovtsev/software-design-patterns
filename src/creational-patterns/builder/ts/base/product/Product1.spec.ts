import Product1 from './Product1';

describe('product1', () => {
  const product = new Product1();

  it('initial', () => {
    expect(product.getParts()).toStrictEqual([]);
  });

  it('getParts and addParts', () => {
    product.addPart('42').addPart('5');
    product.addPart('00');

    expect(product.getParts()).toStrictEqual(['42', '5', '00']);
  });

  it('addParts return this', () => {
    const result = product.addPart('42');

    expect(result).toBe(product);
  });
});
