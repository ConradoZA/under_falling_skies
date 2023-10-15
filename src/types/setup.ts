export type Difficulty = 0 | 1 | 2 | 3 | 4;

export type Energy = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7;

export type Damage = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7;

export enum Sides {
  A = 'A',
  B = 'B',
  C = 'C',
}

export enum CityNames {
  ROSWELL = 'ROSWELL',
  WASHINGTON = 'WASHINGTON',
  NEW_YORK = 'NEW_YORK',
}

// Acciones que se pueden hacer en el doom track.
export enum MSActions {
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

export interface City {
  science: number[];
  base1: Sides;
  base2: Sides;
  name: unknown;
  ability?: unknown;
}

export interface Sky {
  doom: (MSActions | number)[][];
  science: number[];
  grid: (SkyActions | (number | SkyActions.AAZ)[])[][];
}
