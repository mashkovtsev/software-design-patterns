import ProductInterface from './ProductInterface';

export default class ProductOne implements ProductInterface {
  /**
   * @inheritDoc
   */
  action(): string {
    return 'sparkle';
  }
}
