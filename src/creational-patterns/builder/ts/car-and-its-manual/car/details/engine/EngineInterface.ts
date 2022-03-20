export enum EngineType {
  ICE,
  ICE_TURBO,
  ELECTRIC,
}

export default interface EngineInterface {
  type: EngineType;
}
