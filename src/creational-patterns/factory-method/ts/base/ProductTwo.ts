import ProductInterface from './ProductInterface';

export default class ProductTwo implements ProductInterface {
  /**
   * @inheritDoc
   */
  action(): string {
    return 'fly';
  }
}
