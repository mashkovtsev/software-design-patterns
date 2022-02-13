import PlasticDoor from '../product/door/PlasticDoor';
import PlasticWindow from '../product/window/PlasticWindow';
import AbstractFactoryInterface from './AbstractFactoryInterface';

export default class PlasticProductFactory implements AbstractFactoryInterface {
  /**
   * @inheritDoc
   */
  createDoor(): PlasticDoor {
    return new PlasticDoor();
  }

  /**
   * @inheritDoc
   */
  createWindow(): PlasticWindow {
    return new PlasticWindow();
  }
}
