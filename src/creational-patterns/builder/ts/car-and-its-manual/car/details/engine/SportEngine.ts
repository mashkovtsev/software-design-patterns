import EngineInterface, { EngineType } from './EngineInterface';

export default class SportEngine implements EngineInterface {
  type: EngineType = EngineType.ICE_TURBO;
}
