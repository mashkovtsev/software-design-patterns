import BuilderInterface from '../builder/BuilderInterface';
import SportEngine from '../car/details/engine/SportEngine';
import SuvEngine from '../car/details/engine/SuvEngine';

export default abstract class Director {
  /**
   * Constructs a sports car.
   */
  public static constructSportsCar(builder: BuilderInterface): void {
    builder.reset();
    builder.setSeats(2);
    builder.setEngine(new SportEngine());
    builder.setGps(false);
  }

  /**
   * Constructs a SUV car.
   */
  public static constructSuvCar(builder: BuilderInterface): void {
    builder.reset();
    builder.setSeats(4);
    builder.setEngine(new SuvEngine());
    builder.setGps(true);
  }
}
