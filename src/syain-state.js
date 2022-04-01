import { Yakusyoku, Tanto, Syunin } from "./yakusyoku.js"

export class Syain {
  constructor() {
    this.yakusyoku = new Yakusyoku();
  }
  calculate_salary(kihonkyu) {
    return this.yakusyoku.calculate_salary(kihonkyu);
  }
  up() {
    return this.yakusyoku = this.yakusyoku.up();
  }

  down() {
    return this.yakusyoku = this.yakusyoku.down();
  }

}