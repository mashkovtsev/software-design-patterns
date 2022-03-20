import EngineInterface from './details/engine/EngineInterface';

export default class Car {
  private seats?: number;

  private engine?: EngineInterface;

  private gps = false;

  setSeats(value: number) {
    this.seats = value;
  }

  setEngine(type: EngineInterface) {
    this.engine = type;
  }

  setGps(gps = true) {
    this.gps = gps;
  }
}
