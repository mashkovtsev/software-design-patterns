import Car from './car/Car';
import SportEngine from './car/details/engine/SportEngine';
import SuvEngine from './car/details/engine/SuvEngine';
import Manual from './car/Manual';
import CarApplication from './index';

jest.mock('./car/Car');
jest.mock('./car/Manual');

describe('client code', () => {
  const app = new CarApplication();

  it('makeSportCarProduct', () => {
    const result = app.makeSportCarProduct();
    const [car, manual] = result;

    expect(result).toStrictEqual([expect.any(Car), expect.any(Manual)]);

    expect(car.setSeats).toBeCalledWith(2);
    expect(car.setEngine).toBeCalledWith(new SportEngine());
    expect(car.setGps).toBeCalledWith(false);

    expect(manual.setSeats).toBeCalledWith(2);
    expect(manual.setEngine).toBeCalledWith(new SportEngine());
    expect(manual.setGps).toBeCalledWith(false);
  });

  it('makeSuvCarProduct', () => {
    const result = app.makeSuvCarProduct();
    const [car, manual] = result;

    expect(result).toStrictEqual([expect.any(Car), expect.any(Manual)]);

    expect(car.setSeats).toBeCalledWith(4);
    expect(car.setEngine).toBeCalledWith(new SuvEngine());
    expect(car.setGps).toBeCalledWith(true);

    expect(manual.setSeats).toBeCalledWith(4);
    expect(manual.setEngine).toBeCalledWith(new SuvEngine());
    expect(manual.setGps).toBeCalledWith(true);
  });
});
