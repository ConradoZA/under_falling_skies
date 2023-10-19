export type Difficulty = 0 | 1 | 2 | 3 | 4;

export enum Sides {
  A = 'A',
  B = 'B',
  C = 'C',
}

export enum ShipTypes {
  R = 'Red',
  W = 'White',
  O = 'Orange',
}

export enum CityNames {
  ROSWELL = 'ROSWELL',
  WASHINGTON = 'WASHINGTON',
  NEW_YORK = 'NEW_YORK',
}

// Acciones que se pueden hacer en el doom track.
export enum DoomActions {
  E = 'Excavator',
  R = 'Research',
  S = 'Ship',
  D = 'Damage Base',
  N = 'Nothing',
  L = 'Lose the Game',
}

// Acciones que se pueden hacer en el cielo
export enum SkyActions {
  N = 'Nothing',
  MR = 'Move Right',
  ML = 'Move Left',
  MSD = 'Move modership 1 row down',
  AAZ = 'Anti-Air Zone',
}

// Acciones que se pueden hacer en la base
export enum BaseActions {
  AA = 'Anti-Air',
  T = 'Tunnel',
  E = 'Energy',
  F = 'Fighter',
  R = 'Research',
  AI = 'Robot',
}

export interface City {
  science: number[];
  base1: Sides;
  base2: Sides;
  name: unknown;
  ability?: unknown;
}

export interface DoomTile {
  action: DoomActions;
  amount?: number;
}

export interface SkyTile {
  action: SkyActions;
  aaForce?: number;
  line: number;
  descendNumber?: number;
  isOccupied?: boolean;
  shipOccupying?: ShipTypes;
  isConquered?: boolean;
}

export interface Sky {
  doom: DoomTile[];
  science: number[];
  horizon: SkyTile[];
}

export interface BaseTile {
  action: BaseActions;
  consumption: number;
  size: number;
  part?: number;
  diceMod?: number;
  isActive?: boolean;
  columnOccupied?: boolean;
  tileOccupied?: boolean;
}

export interface Base {
  halfDamage: number;
  halfEnergy: number;
  starterEnergy: number;
  underground: BaseTile[];
}

export interface CompleteBase extends Base {
  totalDamage: number;
  actualDamage: number;
  totalEnergy: number;
  actualEnergy: number;
  depthExcavated: number;
}
