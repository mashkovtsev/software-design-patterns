import AbstractDoorInterface from './AbstractDoorInterface';

export default class PlasticDoor implements AbstractDoorInterface {
  /**
   * @inheritDoc
   */
  action(): string {
    return 'I am a plastic door.';
  }
}
