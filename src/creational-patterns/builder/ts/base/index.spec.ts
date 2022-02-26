import { getCustomProduct, getFullProduct, getSimpleProduct } from './index';
import Product1 from './product/Product1';

describe('client code', () => {
  it('getSimpleProduct', () => {
    const result = getSimpleProduct();

    expect(result).toBeInstanceOf(Product1);
    expect(result.getParts()).toStrictEqual(['PartA']);
  });

  it('getFullProduct', () => {
    const result = getFullProduct();

    expect(result).toBeInstanceOf(Product1);
    expect(result.getParts()).toStrictEqual(['PartA', 'PartB', 'PartC']);
  });

  it('getCustomProduct', () => {
    const result = getCustomProduct();

    expect(result).toBeInstanceOf(Product1);
    expect(result.getParts()).toStrictEqual(['PartC', 'PartA']);
  });
});
