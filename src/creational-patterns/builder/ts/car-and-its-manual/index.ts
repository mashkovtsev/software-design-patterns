import CarBuilder from './builder/CarBuilder';
import CarManualBuilder from './builder/CarManualBuilder';
import Car from './car/Car';
import Manual from './car/Manual';
import Director from './director/Director';

export default class CarApplication {
  /**
   * Makes a product - a sports car.
   */
  public makeSportCarProduct(): [Car, Manual] {
    const carBuilder = new CarBuilder();
    Director.constructSportsCar(carBuilder);

    const manualBuilder = new CarManualBuilder();
    Director.constructSportsCar(manualBuilder);

    return [carBuilder.getResult(), manualBuilder.getResult()];
  }

  /**
   * Makes a product - an SUV car.
   */
  public makeSuvCarProduct(): [Car, Manual] {
    const carBuilder = new CarBuilder();
    Director.constructSuvCar(carBuilder);

    const manualBuilder = new CarManualBuilder();
    Director.constructSuvCar(manualBuilder);

    return [carBuilder.getResult(), manualBuilder.getResult()];
  }
}
