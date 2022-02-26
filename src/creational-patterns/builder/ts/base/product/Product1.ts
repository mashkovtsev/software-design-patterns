export default class Product1 {
  private parts: string[] = [];

  /**
   * Adds a new part of Product1.
   */
  public addPart(part: string): Product1 {
    this.parts.push(part);

    return this;
  }

  /**
   * Gets all the parts.
   */
  public getParts(): string[] {
    return this.parts;
  }
}
