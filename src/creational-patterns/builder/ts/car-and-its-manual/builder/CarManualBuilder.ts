import EngineInterface from '../car/details/engine/EngineInterface';
import Manual from '../car/Manual';
import BuilderInterface from './BuilderInterface';

export default class CarManualBuilder implements BuilderInterface {
  /**
   * Manual instance.
   */
  private manual: Manual = new Manual();

  /**
   * @inheritDoc
   */
  public reset(): void {
    this.manual = new Manual();
  }

  /**
   * @inheritDoc
   */
  public setSeats(seats: number): void {
    this.manual.setSeats(seats);
  }

  /**
   * @inheritDoc
   */
  public setEngine(engine: EngineInterface): void {
    this.manual.setEngine(engine);
  }

  /**
   * @inheritDoc
   */
  public setGps(gps = true): void {
    this.manual.setGps(gps);
  }

  /**
   * Gets a result.
   */
  public getResult(): Manual {
    return this.manual;
  }
}
