import BuilderInterface from '../builder/BuilderInterface';

export default class Director {
  /**
   * Director constructor.
   */
  constructor(
    private readonly builder: BuilderInterface,
  ) {
  }

  /**
   * Builds a simple Product.
   */
  public buildMinimalViableProduct(): void {
    this.builder.producePartA();
  }

  /**
   * Builds a full parts Product.
   */
  public buildFullFeaturedProduct(): void {
    this.builder.producePartA();
    this.builder.producePartB();
    this.builder.producePartC();
  }
}
