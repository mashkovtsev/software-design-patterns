import AbstractDoorInterface from '../product/door/AbstractDoorInterface';
import AbstractWindowInterface from '../product/window/AbstractWindowInterface';

export default interface AbstractFactoryInterface {
  /**
   * Creates a door.
   */
  createDoor(): AbstractDoorInterface

  /**
   * Creates a window.
   */
  createWindow(): AbstractWindowInterface
}
