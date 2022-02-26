import Product1 from '../product/Product1';
import BuilderInterface from './BuilderInterface';

export default class Builder1 implements BuilderInterface {
  /**
   * Product instance.
   */
  private product: Product1 = new Product1();

  /**
   * Clean up product.
   */
  public reset(): void {
    this.product = new Product1();
  }

  /**
   * @inheritDoc
   */
  public producePartA(): void {
    this.product.addPart('PartA');
  }

  /**
   * @inheritDoc
   */
  public producePartB(): void {
    this.product.addPart('PartB');
  }

  /**
   * @inheritDoc
   */
  public producePartC(): void {
    this.product.addPart('PartC');
  }

  /**
   * Gets a Product1.
   */
  public getProduct(): Product1 {
    const result = this.product;

    this.reset();

    return result;
  }
}
