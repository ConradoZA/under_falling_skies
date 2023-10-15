import { MSActions, Sides } from 'types/setup';
import { Sky2, Sky3, Sky4 } from './Sky';

/* TRACK DE DESGRACIAS */
const track: (number | MSActions)[][] = [];
let trackPosition: number = 0;

// Partes
const part4: (number | MSActions)[][] = [];
const part3: (number | MSActions)[][] = [];
const part2: (number | MSActions)[][] = [];

/**
 * Añade el doom track de la loseta seleccionada.
 *
 * @param num Posición de la loseta, del 2 al 4, de más baja a más alta (el 1 no tiene "doom track")
 * @param side Lado A o B
 */
export function addSkyTrack(num: number, side: Sides): void {
  if (![2, 3, 4].includes(num)) throw new Error('Invalid number');
  switch (num) {
    case 2:
      part2.unshift(...Sky2[side].doom);
      break;
    case 3:
      part3.unshift(...Sky3[side].doom);
      break;
    case 4:
      part4.unshift(...Sky4[side].doom);
      break;

    default:
      break;
  }
  checkAndUnite();
}

/**
 * Chequea que todas las partes existen y las mete en orden.
 * Si no, no hace nada.
 */
function checkAndUnite(): void {
  if (part2.length > 0 && part3.length > 0 && part4.length > 0) {
    track.push(...part4);
    track.push(...part3);
    track.push(...part2);
  }
}

/**
 * La nave nodriza desciende y esto es lo que ocurre...
 *
 * @returns La acción a ser ejecutada este turno.
 */
function advanceMotherShip(): (number | MSActions)[] {
  trackPosition++;
  return track[trackPosition];
}
