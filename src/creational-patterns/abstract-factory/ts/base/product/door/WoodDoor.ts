import AbstractDoorInterface from './AbstractDoorInterface';

export default class WoodDoor implements AbstractDoorInterface {
  /**
   * @inheritDoc
   */
  action(): string {
    return 'I am a wood door.';
  }
}
