import Creator from './Creator';
import ProductInterface from './ProductInterface';
import ProductTwo from './ProductTwo';

export default class CreatorTwo extends Creator {
  /**
   * @inheritDoc
   */
  protected factoryMethod(): ProductInterface {
    return new ProductTwo();
  }
}
