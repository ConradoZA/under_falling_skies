import { CitiesA, CitiesB } from 'models/City';
import { CityNames, Sides } from 'models/types';
import { Sky1, Sky2, Sky3, Sky4 } from './Sky';

export class ScienceTrack {
  /* TRACK DE INVESTIGACIÓN */
  private track: number[] = [];
  private trackPosition: number = 0;

  // Partes
  private city: number[] = [];
  private part1: number[] = [];
  private part2: number[] = [];
  private part3: number[] = [];
  private part4: number[] = [];

  /**
   * Añade el track inicial de investigación perteneciente a la ciudad elegida.
   *
   * @param city Nombre de la ciudad
   * @param side Lado A o B
   */
  addCityTrack(city: CityNames, side: Sides): void {
    switch (side) {
      case Sides.A:
        this.city.unshift(...CitiesA[city].science);
        break;
      case Sides.B:
        this.city.unshift(...CitiesB[city].science);
        break;

      default:
        break;
    }

    this.checkAndUnite();
  }

  /**
   * Añade el track de investigación de la loseta seleccionada.
   *
   * @param num Posición de la loseta, del 1 al 4, de más baja a más alta
   * @param side Lado A o B
   */
  addSkyTrack(num: number, side: Sides): void {
    if (![1, 2, 3, 4].includes(num)) throw new Error('Invalid number');
    switch (num) {
      case 1:
        this.part1.unshift(...Sky1[side].science);
        break;
      case 2:
        this.part2.unshift(...Sky2[side].science);
        break;
      case 3:
        this.part3.unshift(...Sky3[side].science);
        break;
      case 4:
        this.part4.unshift(...Sky4[side].science);
        break;

      default:
        break;
    }
    this.checkAndUnite();
  }

  /**
   * Comprueba cuantos espacios puedes avanzar con la energía que eliges gastar.
   * No avanzas, simplemente es un check.
   *
   * @param amount Cantidad de energía a invertir para avanzar
   * @returns Cantidad máxima de espacios que se pueden avanzar
   */
  howMuchCanAdvance(amount: number): number {
    let steps = 0;
    let nextStep = 1;
    let cost = this.track[this.trackPosition + nextStep];

    while (cost < amount) {
      steps++;
      nextStep++;
      cost = this.track[this.trackPosition + nextStep];
    }

    return steps;
  }

  /**
   * Avanza el track de investigación.
   *
   * @param amount Cantidad de energía a invertir para avanzar
   */
  advanceTrack(amount: number): void {
    this.trackPosition += this.howMuchCanAdvance(amount);
  }

  /**
   * Chequea que todas las partes existen y las mete en orden.
   * Si no, no hace nada.
   */
  private checkAndUnite(): void {
    if (
      this.city.length > 0 &&
      this.part1.length > 0 &&
      this.part2.length > 0 &&
      this.part3.length > 0 &&
      this.part4.length > 0
    ) {
      this.track.push(...this.city);
      this.track.push(...this.part1);
      this.track.push(...this.part2);
      this.track.push(...this.part3);
      this.track.push(...this.part4);
    }
  }
}
