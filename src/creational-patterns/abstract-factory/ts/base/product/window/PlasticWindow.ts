import AbstractDoorInterface from '../door/AbstractDoorInterface';
import AbstractWindowInterface from './AbstractWindowInterface';

export default class PlasticWindow implements AbstractWindowInterface {
  /**
   * @inheritDoc
   */
  action(): string {
    return 'I am a plastic window.';
  }

  /**
   * @inheritDoc
   */
  actionWithDoor(door: AbstractDoorInterface): string {
    return `Collaborate plastic: ${this.constructor.name} + ${door.constructor.name}.`;
  }
}
