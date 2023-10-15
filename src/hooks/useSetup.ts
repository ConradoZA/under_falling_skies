import { BaseTile, BaseType, City, CityName, SkyTile, SkyType } from 'objects';
import { Damage, Difficulty, Energy } from 'types/setup';
import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';

/* ----> Types Definition <---- */
export interface GameSetupStore {
  difficulty: Difficulty;
  setDifficulty: (num: Difficulty) => void;
  city: City;
  setCity: (cityName: CityName) => void;
  energy: Energy;
  addEnergy: (gain: Energy) => void;
  consumeEnergy: (loss: Energy) => void;
  damage: Damage;
  addDamage: (amount: Damage) => void;
  researchArray: Array<number>;
  researchStep: number;
  advanceResearch: () => void;
  recedeResearch: () => void;
  lastStep: number;
  sky1?: SkyTile;
  sky2?: SkyTile;
  sky3?: SkyTile;
  sky4?: SkyTile;
  setSky?: (side: SkyType, tile: number) => void;
  base1?: BaseTile;
  base2?: BaseTile;
  setBase?: (side: BaseType, tile: number) => void;
}

/* ----> Slices Hooks <---- */
export const useSetup = create<GameSetupStore>()(
  immer((set, get) => ({
    // State
    difficulty: 1,
    city: new City('Roswell'),
    energy: 2,
    damage: 0,
    researchArray: [],
    researchStep: 0,
    lastStep: Infinity,
    // sky1:,
    // sky2:,
    // sky3:,
    // sky4:,
    // base1:,
    // base2:,
    // Actions
    setDifficulty: (num) => set((state) => (state.difficulty = num)),
    setCity: (cityName) =>
      set((state) => {
        if (get().city.name !== cityName) state.city = new City(cityName);
      }),
    addEnergy: (gain) =>
      set((state) => {
        get().energy + gain <= 7 ? (state.energy += gain) : (state.energy = 7);
      }),
    consumeEnergy: (loss) =>
      set((state) => {
        get().energy - loss >= 0 ? (state.energy -= loss) : (state.energy = 0);
      }),
    addDamage: (amount) =>
      set((state) => {
        get().damage + amount >= 7 ? (state.damage = 7) : (state.damage += amount);
      }),
    advanceResearch: () => set((state) => (state.researchStep += 1)),
    recedeResearch: () =>
      set((state) => {
        if (get().researchStep > 0) state.researchStep -= 1;
      }),
    // setSky: (side, tile) => set((state) => {}),
    // setBase: (side, tile) => set((state) => {}),
  })),
);
