import Creator from './Creator';
import ProductInterface from './ProductInterface';
import ProductOne from './ProductOne';

export default class CreatorOne extends Creator {
  /**
   * @inheritDoc
   */
  protected factoryMethod(): ProductInterface {
    return new ProductOne();
  }
}
