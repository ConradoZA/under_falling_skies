import { MSActions, Sides, Sky, SkyActions } from 'types/setup';

export const Sky1: Readonly<Record<Sides, Sky>> = Object.freeze({
  [Sides.A]: {
    doom: [],
    science: [3, 1, 3, 1],
    grid: [
      [[SkyActions.AAZ, 3], SkyActions.MR, SkyActions.N, SkyActions.MSD, SkyActions.N],
      [SkyActions.N, [SkyActions.AAZ, 6], SkyActions.N, SkyActions.ML, [SkyActions.AAZ, 4]],
      [SkyActions.MR, SkyActions.N, [SkyActions.AAZ, 3], SkyActions.N, SkyActions.ML],
      [SkyActions.N, [SkyActions.AAZ, 5], SkyActions.MSD, [SkyActions.AAZ, 4], SkyActions.N],
    ],
  },
  [Sides.B]: {
    doom: [],
    science: [3, 2, 1, 5],
    grid: [
      [SkyActions.MSD, [SkyActions.AAZ, 5], SkyActions.MSD, SkyActions.N, SkyActions.ML],
      [SkyActions.N, SkyActions.N, [SkyActions.AAZ, 4], SkyActions.MSD, [SkyActions.AAZ, 5]],
      [[SkyActions.AAZ, 4], SkyActions.MSD, SkyActions.N, [SkyActions.AAZ, 6], SkyActions.MSD],
      [SkyActions.MSD, [SkyActions.AAZ, 7], SkyActions.MSD, SkyActions.MSD, SkyActions.N],
    ],
  },
  [Sides.C]: {
    doom: [],
    science: [],
    grid: [],
  },
});

export const Sky2: Readonly<Record<Sides, Sky>> = Object.freeze({
  [Sides.A]: {
    doom: [[MSActions.R, -1], [MSActions.S, 1], [MSActions.N], [MSActions.L]],
    science: [4, 1, 3, 2],
    grid: [
      [SkyActions.N, SkyActions.N, [SkyActions.AAZ, 4], SkyActions.MR, SkyActions.N],
      [[SkyActions.AAZ, 5], SkyActions.N, SkyActions.ML, SkyActions.N, SkyActions.N],
      [SkyActions.N, SkyActions.MSD, SkyActions.MR, SkyActions.N, [SkyActions.AAZ, 6]],
      [SkyActions.MSD, [SkyActions.AAZ, 3], SkyActions.N, [SkyActions.AAZ, 4], SkyActions.MSD],
    ],
  },
  [Sides.B]: {
    doom: [[MSActions.D, 1], [MSActions.N], [MSActions.L]],
    science: [3, 2, 1, 5],
    grid: [
      [[SkyActions.AAZ, 6], SkyActions.N, SkyActions.ML, SkyActions.N, SkyActions.MSD],
      [SkyActions.MSD, [SkyActions.AAZ, 4], [SkyActions.AAZ, 7], SkyActions.MR, SkyActions.N],
      [SkyActions.N, SkyActions.MR, SkyActions.N, SkyActions.MSD, [SkyActions.AAZ, 7]],
      [SkyActions.N, SkyActions.N, SkyActions.MSD, [SkyActions.AAZ, 4], SkyActions.N],
    ],
  },
  [Sides.C]: {
    doom: [],
    science: [],
    grid: [],
  },
});

export const Sky3: Readonly<Record<Sides, Sky>> = Object.freeze({
  [Sides.A]: {
    doom: [[MSActions.S, 1], [MSActions.E, -1], [MSActions.R, -1], [MSActions.N]],
    science: [1, 6, 1, 3],
    grid: [
      [SkyActions.MSD, SkyActions.MR, SkyActions.N, [SkyActions.AAZ, 4], SkyActions.N],
      [SkyActions.N, SkyActions.MSD, SkyActions.N, SkyActions.N, SkyActions.N],
      [[SkyActions.AAZ, 4], [SkyActions.AAZ, 3], SkyActions.N, SkyActions.ML, [SkyActions.AAZ, 2]],
      [SkyActions.MR, SkyActions.N, [SkyActions.AAZ, 6], SkyActions.N, SkyActions.ML],
    ],
  },
  [Sides.B]: {
    doom: [
      [MSActions.E, -3],
      [MSActions.R, -2],
      [MSActions.S, 2],
      [MSActions.R, -1],
    ],
    science: [2, 3, 4, 2],
    grid: [
      [SkyActions.MR, SkyActions.N, [SkyActions.AAZ, 2], SkyActions.N, SkyActions.ML],
      [SkyActions.MSD, SkyActions.MSD, SkyActions.N, SkyActions.ML, [SkyActions.AAZ, 3]],
      [[SkyActions.AAZ, 4], SkyActions.MR, SkyActions.N, [SkyActions.AAZ, 5], SkyActions.N],
      [SkyActions.N, SkyActions.ML, SkyActions.MR, SkyActions.N, SkyActions.MSD],
    ],
  },
  [Sides.C]: {
    doom: [],
    science: [],
    grid: [],
  },
});

export const Sky4: Readonly<Record<Sides, Sky>> = Object.freeze({
  [Sides.A]: {
    doom: [[MSActions.S, 1], [MSActions.E, -2], [MSActions.S, 1], [MSActions.N]],
    science: [5, 1, 3, 11],
    grid: [
      [SkyActions.N, SkyActions.N, SkyActions.N, SkyActions.MR, SkyActions.N],
      [SkyActions.N, SkyActions.ML, SkyActions.MR, SkyActions.N, SkyActions.N],
      [SkyActions.MSD, SkyActions.N, [SkyActions.AAZ, 1], SkyActions.N, SkyActions.N],
      [[SkyActions.AAZ, 2], SkyActions.N, SkyActions.ML, SkyActions.N, [SkyActions.AAZ, 4]],
    ],
  },
  [Sides.B]: {
    doom: [[MSActions.E, -1], [MSActions.S, 2], [MSActions.E, -2], [MSActions.D]],
    science: [3, 5, 1, 12],
    grid: [
      [SkyActions.N, [SkyActions.AAZ, 1], SkyActions.N, SkyActions.N, SkyActions.N],
      [SkyActions.N, SkyActions.N, SkyActions.ML, SkyActions.MR, SkyActions.N],
      [SkyActions.MR, SkyActions.N, SkyActions.N, SkyActions.N, [SkyActions.AAZ, 2]],
      [SkyActions.N, SkyActions.ML, [SkyActions.AAZ, 3], SkyActions.MSD, SkyActions.N],
    ],
  },
  [Sides.C]: {
    doom: [],
    science: [],
    grid: [],
  },
});
