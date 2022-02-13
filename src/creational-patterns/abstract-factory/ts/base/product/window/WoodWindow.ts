import AbstractDoorInterface from '../door/AbstractDoorInterface';
import AbstractWindowInterface from './AbstractWindowInterface';

export default class WoodWindow implements AbstractWindowInterface {
  /**
   * @inheritDoc
   */
  action(): string {
    return 'I am a wood window.';
  }

  /**
   * @inheritDoc
   */
  actionWithDoor(door: AbstractDoorInterface): string {
    return `Collaborate wood: ${this.constructor.name} + ${door.constructor.name}.`;
  }
}
