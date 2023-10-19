import { Base, BaseActions, Sides } from './types';

export const Base1: Readonly<Record<Sides, Base>> = Object.freeze({
  [Sides.A]: {
    halfDamage: 4,
    halfEnergy: 4,
    starterEnergy: 2,
    underground: [
      {
        action: BaseActions.AA,
        consumption: 0,
        size: 1,
      },
      {
        action: BaseActions.AA,
        consumption: 0,
        size: 1,
      },
      {
        action: BaseActions.AA,
        consumption: 0,
        size: 1,
      },
      {
        action: BaseActions.AA,
        consumption: 0,
        size: 1,
      },
      {
        action: BaseActions.AA,
        consumption: 0,
        size: 1,
      },
      {
        action: BaseActions.F,
        consumption: 1,
        size: 1,
        diceMod: -1,
      },
      {
        action: BaseActions.R,
        consumption: 2,
        size: 1,
      },
      {
        action: BaseActions.T,
        consumption: 0,
        size: 1,
      },
      {
        action: BaseActions.E,
        consumption: 0,
        size: 2,
        part: 1,
        diceMod: -3,
      },
      {
        action: BaseActions.E,
        consumption: 0,
        size: 2,
        part: 2,
        diceMod: -3,
      },
      {
        action: BaseActions.T,
        consumption: 0,
        size: 1,
      },
      {
        action: BaseActions.R,
        consumption: 1,
        size: 1,
        diceMod: -1,
      },
      {
        action: BaseActions.F,
        consumption: 2,
        size: 2,
        part: 1,
      },
      {
        action: BaseActions.F,
        consumption: 2,
        size: 2,
        part: 2,
      },
      {
        action: BaseActions.E,
        consumption: 0,
        size: 1,
      },
    ],
  } as Base,
  [Sides.B]: {
    halfDamage: 3,
    halfEnergy: 4,
    starterEnergy: 3,
    underground: [
      {
        action: BaseActions.AA,
        consumption: 0,
        size: 1,
      },
      {
        action: BaseActions.AA,
        consumption: 0,
        size: 1,
      },
      {
        action: BaseActions.AA,
        consumption: 0,
        size: 1,
      },
      {
        action: BaseActions.AA,
        consumption: 0,
        size: 1,
      },
      {
        action: BaseActions.AA,
        consumption: 0,
        size: 1,
      },
      {
        action: BaseActions.F,
        consumption: 2,
        size: 1,
      },
      {
        action: BaseActions.E,
        consumption: 0,
        size: 1,
        diceMod: -1,
      },
      {
        action: BaseActions.F,
        consumption: 0,
        size: 1,
        diceMod: -2,
      },
      {
        action: BaseActions.F,
        consumption: 0,
        size: 1,
        diceMod: -1,
      },
      {
        action: BaseActions.T,
        consumption: 0,
        size: 1,
      },
      {
        action: BaseActions.R,
        consumption: 2,
        size: 1,
        diceMod: +1,
      },
      {
        action: BaseActions.E,
        consumption: 0,
        size: 1,
        diceMod: -1,
      },
      {
        action: BaseActions.T,
        consumption: 0,
        size: 1,
      },
      {
        action: BaseActions.AI,
        consumption: 2,
        size: 1,
      },
      {
        action: BaseActions.R,
        consumption: 1,
        size: 1,
      },
    ],
  } as Base,
  [Sides.C]: {
    halfDamage: 4,
    halfEnergy: 4,
    starterEnergy: 2,
    underground: [
      {
        action: BaseActions.AA,
        consumption: 0,
        size: 1,
      },
      {
        action: BaseActions.AA,
        consumption: 0,
        size: 1,
      },
      {
        action: BaseActions.AA,
        consumption: 0,
        size: 1,
      },
      {
        action: BaseActions.AA,
        consumption: 0,
        size: 1,
      },
      {
        action: BaseActions.AA,
        consumption: 0,
        size: 1,
      },
      {
        action: BaseActions.AI,
        consumption: 1,
        size: 1,
        diceMod: -1,
      },
      {
        action: BaseActions.F,
        consumption: 3,
        size: 1,
      },
      {
        action: BaseActions.E,
        consumption: 0,
        size: 2,
        part: 1,
      },
      {
        action: BaseActions.E,
        consumption: 0,
        size: 2,
        part: 2,
      },
      {
        action: BaseActions.T,
        consumption: 0,
        size: 1,
      },
      {
        action: BaseActions.E,
        consumption: 0,
        size: 1,
        diceMod: -1,
      },
      {
        action: BaseActions.R,
        consumption: 1,
        size: 1,
      },
      {
        action: BaseActions.R,
        consumption: 2,
        size: 1,
        diceMod: +1,
      },
      {
        action: BaseActions.AI,
        consumption: 0,
        size: 1,
        diceMod: -1,
      },
      {
        action: BaseActions.T,
        consumption: 0,
        size: 1,
      },
    ],
  } as Base,
});

export const Base2: Readonly<Record<Sides, Base>> = Object.freeze({
  [Sides.A]: {
    halfDamage: 3,
    halfEnergy: 4,
    starterEnergy: 0,
    underground: [
      {
        action: BaseActions.F,
        consumption: 0,
        size: 1,
        diceMod: -1,
      },
      {
        action: BaseActions.T,
        consumption: 0,
        size: 1,
      },
      {
        action: BaseActions.R,
        consumption: 1,
        size: 1,
      },
      {
        action: BaseActions.F,
        consumption: 1,
        size: 2,
        part: 1,
      },
      {
        action: BaseActions.F,
        consumption: 1,
        size: 2,
        part: 2,
      },
      {
        action: BaseActions.AI,
        consumption: 2,
        size: 1,
      },
      {
        action: BaseActions.T,
        consumption: 0,
        size: 1,
      },
      {
        action: BaseActions.F,
        consumption: 2,
        size: 1,
        diceMod: +1,
      },
      {
        action: BaseActions.R,
        consumption: 1,
        size: 1,
        diceMod: +1,
      },
      {
        action: BaseActions.E,
        consumption: 0,
        size: 1,
      },
      {
        action: BaseActions.R,
        consumption: 4,
        size: 2,
        part: 1,
        diceMod: +3,
      },
      {
        action: BaseActions.R,
        consumption: 4,
        size: 2,
        part: 2,
        diceMod: +3,
      },
      {
        action: BaseActions.E,
        consumption: 0,
        size: 1,
        diceMod: +1,
      },
      {
        action: BaseActions.T,
        consumption: 0,
        size: 1,
      },
      {
        action: BaseActions.T,
        consumption: 0,
        size: 1,
      },
    ],
  } as Base,
  [Sides.B]: {
    halfDamage: 4,
    halfEnergy: 3,
    starterEnergy: 0,
    underground: [
      {
        action: BaseActions.R,
        consumption: 0,
        size: 1,
        diceMod: -1,
      },
      {
        action: BaseActions.T,
        consumption: 0,
        size: 1,
      },
      {
        action: BaseActions.R,
        consumption: 2,
        size: 2,
        part: 1,
      },
      {
        action: BaseActions.R,
        consumption: 2,
        size: 2,
        part: 2,
      },
      {
        action: BaseActions.F,
        consumption: 2,
        size: 1,
      },
      {
        action: BaseActions.R,
        consumption: 1,
        size: 1,
      },
      {
        action: BaseActions.T,
        consumption: 0,
        size: 1,
      },
      {
        action: BaseActions.F,
        consumption: 1,
        size: 1,
      },
      {
        action: BaseActions.E,
        consumption: 0,
        size: 1,
        diceMod: +1,
      },
      {
        action: BaseActions.F,
        consumption: 2,
        size: 1,
        diceMod: +1,
      },
      {
        action: BaseActions.T,
        consumption: 0,
        size: 1,
      },
      {
        action: BaseActions.R,
        consumption: 2,
        size: 3,
        part: 1,
      },
      {
        action: BaseActions.R,
        consumption: 2,
        size: 3,
        part: 2,
      },
      {
        action: BaseActions.R,
        consumption: 2,
        size: 3,
        part: 3,
      },
      {
        action: BaseActions.T,
        consumption: 0,
        size: 1,
      },
    ],
  } as Base,
  [Sides.C]: {
    halfDamage: 4,
    halfEnergy: 5,
    starterEnergy: 0,
    underground: [
      {
        action: BaseActions.R,
        consumption: 5,
        size: 3,
      },
      {
        action: BaseActions.R,
        consumption: 5,
        size: 3,
      },
      {
        action: BaseActions.R,
        consumption: 5,
        size: 3,
      },
      {
        action: BaseActions.T,
        consumption: 0,
        size: 1,
      },
      {
        action: BaseActions.F,
        consumption: 0,
        size: 1,
        diceMod: -1,
      },
      {
        action: BaseActions.AI,
        consumption: 1,
        size: 1,
      },
      {
        action: BaseActions.F,
        consumption: 2,
        size: 1,
        diceMod: +2,
      },
      {
        action: BaseActions.AI,
        consumption: 0,
        size: 1,
      },
      {
        action: BaseActions.T,
        consumption: 0,
        size: 1,
      },
      {
        action: BaseActions.E,
        consumption: 0,
        size: 1,
      },
      {
        action: BaseActions.T,
        consumption: 0,
        size: 1,
      },
      {
        action: BaseActions.F,
        consumption: 1,
        size: 1,
        diceMod: +3,
      },
      {
        action: BaseActions.R,
        consumption: 0,
        size: 2,
        part: 1,
      },
      {
        action: BaseActions.R,
        consumption: 0,
        size: 2,
        part: 2,
      },
      {
        action: BaseActions.T,
        consumption: 0,
        size: 1,
      },
    ],
  } as Base,
});
