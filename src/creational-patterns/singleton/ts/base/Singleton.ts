export default class Singleton {
  private static instance?: Singleton;

  /**
   * Singleton private constructor.
   */
  private constructor() {
  }

  /**
   * Create Singleton instance.
   */
  public static getInstance(): Singleton {
    if (!Singleton.instance) {
      Singleton.instance = new Singleton();
    }

    return Singleton.instance;
  }
}
