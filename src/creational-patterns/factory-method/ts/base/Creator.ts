import ProductInterface from './ProductInterface';

export default abstract class Creator {
  /**
   * Factory Method.
   *
   * Creates a Product.
   */
  protected abstract factoryMethod(): ProductInterface;

  /**
   * Some operations on the Product.
   */
  public someOperation(): string {
    const product = this.factoryMethod();

    return `${product.constructor.name} can ${product.action()}`;
  }
}
