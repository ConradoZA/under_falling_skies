import { useTranslate } from 'hooks/useTranslate';
import { City, CityNames, Sides } from 'types/setup';

// eslint-disable-next-line react-hooks/rules-of-hooks
const cities = useTranslate((state) => state.getSection)(import.meta.env.VITE_LANG, 'cities');

export const CitiesA: Readonly<Record<CityNames, City>> = Object.freeze({
  [CityNames.ROSWELL]: {
    science: [0],
    base1: Sides.A,
    base2: Sides.B,
    name: cities.names.roswell,
  },
  [CityNames.WASHINGTON]: {
    science: [0, 6],
    base1: Sides.B,
    base2: Sides.C,
    name: cities.names.washington,
    ability: cities.abilities.washington_1,
  },
  [CityNames.NEW_YORK]: {
    science: [0, 2],
    base1: Sides.C,
    base2: Sides.A,
    name: cities.names.new_york,
    ability: cities.abilities.new_york_1,
  },
});

export const CitiesB: Readonly<Record<string, City>> = Object.freeze({
  [CityNames.ROSWELL]: {
    science: [0],
    base1: Sides.A,
    base2: Sides.B,
    name: cities.names.roswell,
    ability: cities.abilities.roswell_2,
  },
  [CityNames.WASHINGTON]: {
    science: [0, 6],
    base1: Sides.B,
    base2: Sides.C,
    name: cities.names.washington,
    ability: cities.abilities.washington_2,
  },
  [CityNames.NEW_YORK]: {
    science: [0, 3],
    base1: Sides.C,
    base2: Sides.A,
    name: cities.names.new_york,
    ability: cities.abilities.new_york_2,
  },
});
