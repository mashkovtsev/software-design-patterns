import WoodDoor from '../product/door/WoodDoor';
import WoodWindow from '../product/window/WoodWindow';
import AbstractFactoryInterface from './AbstractFactoryInterface';

export default class WoodProductFactory implements AbstractFactoryInterface {
  /**
   * @inheritDoc
   */
  createDoor(): WoodDoor {
    return new WoodDoor();
  }

  /**
   * @inheritDoc
   */
  createWindow(): WoodWindow {
    return new WoodWindow();
  }
}
