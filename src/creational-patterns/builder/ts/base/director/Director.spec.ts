import Builder1 from '../builder/Builder1';
import Director from './Director';

jest.mock('../builder/Builder1');
const mockProducePartA = jest.spyOn(Builder1.prototype, 'producePartA');
const mockProducePartB = jest.spyOn(Builder1.prototype, 'producePartB');
const mockProducePartC = jest.spyOn(Builder1.prototype, 'producePartC');

const builder = new Builder1();
const director = new Director(builder);

describe('director', () => {
  /**
   * Test buildMinimalViableProduct().
   */
  it('buildMinimalViableProduct', () => {
    director.buildMinimalViableProduct();

    expect(mockProducePartA).toBeCalledTimes(1);
  });
  /**
   * Test buildFullFeaturedProduct().
   */
  it('buildFullFeaturedProduct', () => {
    director.buildFullFeaturedProduct();

    expect(mockProducePartA).toBeCalledTimes(1);
    expect(mockProducePartB).toBeCalledTimes(1);
    expect(mockProducePartC).toBeCalledTimes(1);
  });
});
