import EngineInterface, { EngineType } from './EngineInterface';

export default class SuvEngine implements EngineInterface {
  type: EngineType = EngineType.ICE;
}
