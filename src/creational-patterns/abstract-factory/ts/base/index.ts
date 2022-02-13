import AbstractFactoryInterface from './factory/AbstractFactoryInterface';

type ResultType = {
  door: string;
  window: string;
  collaboration: string;
};

export function clientCode(factory: AbstractFactoryInterface): ResultType {
  const door = factory.createDoor();
  const window = factory.createWindow();

  return {
    door: door.action(),
    window: window.action(),
    collaboration: window.actionWithDoor(door),
  };
}
