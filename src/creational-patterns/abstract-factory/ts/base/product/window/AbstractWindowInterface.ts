import AbstractDoorInterface from '../door/AbstractDoorInterface';

/**
 * Abstract window product.
 */
export default interface AbstractWindowInterface {
  /**
   * Window action.
   */
  action(): string;

  /**
   * Collaborate action window with door.
   */
  actionWithDoor(door: AbstractDoorInterface): string;
}
