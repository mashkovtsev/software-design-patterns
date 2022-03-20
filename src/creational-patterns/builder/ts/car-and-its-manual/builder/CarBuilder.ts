import Car from '../car/Car';
import EngineInterface from '../car/details/engine/EngineInterface';
import BuilderInterface from './BuilderInterface';

export default class CarBuilder implements BuilderInterface {
  /**
   * Car instance.
   */
  private car: Car = new Car();

  /**
   * @inheritDoc
   */
  public reset(): void {
    this.car = new Car();
  }

  /**
   * @inheritDoc
   */
  public setSeats(seats: number): void {
    this.car.setSeats(seats);
  }

  /**
   * @inheritDoc
   */
  public setEngine(engine: EngineInterface): void {
    this.car.setEngine(engine);
  }

  /**
   * @inheritDoc
   */
  public setGps(gps = true): void {
    this.car.setGps(gps);
  }

  /**
   * Gets a result.
   */
  public getResult(): Car {
    return this.car;
  }
}
