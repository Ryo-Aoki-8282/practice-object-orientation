import { Gyoumu } from "./gyoumu.js"

export class Syain {
  constructor() {
    this.gyoumu = new Gyoumu();
  }
  work() {
    return this.gyoumu.standup();
  }
}