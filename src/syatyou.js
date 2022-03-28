import { SyainFactory } from "./syain_factory.js";

let syainFactory = new SyainFactory()
let positionNames = ["Tantou", "Syunin", "Butyou", "Torishimariyaku"]
for (const positionName of positionNames) {
  let syain = syainFactory.create(positionName, 100)
  console.log(syain.kiritu());
  console.log(syain.calcSalary());
}