import Product1 from '../product/Product1';
import Builder1 from './Builder1';

jest.mock('../product/Product1');

describe('builder1', () => {
  const builder = new Builder1();

  /**
   * Test new Builder1().
   */
  it('initialise', () => {
    // eslint-disable-next-line no-new
    new Builder1();

    expect(Product1).toBeCalledTimes(1);
  });

  /**
   * Test reset().
   */
  it('reset', () => {
    builder.reset();

    expect(Product1).toBeCalledTimes(1);
  });

  /**
   * Tests a producePart*() methods.
   */
  describe('producePart*()', () => {
    const mockAddPart = jest.spyOn(Product1.prototype, 'addPart');

    /**
     * Test producePartA().
     */
    it('producePartA', () => {
      builder.producePartA();

      expect(mockAddPart).toBeCalledTimes(1);
      expect(mockAddPart).toBeCalledWith('PartA');
    });

    /**
     * Test producePartB().
     */
    it('producePartB', () => {
      builder.producePartB();

      expect(mockAddPart).toBeCalledTimes(1);
      expect(mockAddPart).toBeCalledWith('PartB');
    });

    /**
     * Test producePartC().
     */
    it('producePartC', () => {
      builder.producePartC();

      expect(mockAddPart).toBeCalledTimes(1);
      expect(mockAddPart).toBeCalledWith('PartC');
    });
  });

  /**
   * Test getProduct().
   */
  it('getProduct', () => {
    const mockReset = jest.spyOn(builder, 'reset');

    expect(builder.getProduct()).toBeInstanceOf(Product1);
    expect(mockReset).toBeCalledTimes(1);
  });
});
