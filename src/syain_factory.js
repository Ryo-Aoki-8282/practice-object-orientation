import { Tantou, Syunin, Butyou, Torishimariyaku, Syain } from "./syain.js";

export class SyainFactory {
  create(type, kihonkyu){
    let syain = null;
    if (type === "Tantou") {
      syain = new Tantou(kihonkyu);
    } else if (type === "Syunin") {
      syain = new Syunin(kihonkyu);
    } else if (type === "Butyou") {
      syain = new Butyou(kihonkyu);
    } else if (type === "Torishimariyaku") {
      syain = new Torishimariyaku(kihonkyu)
    }
    return syain;
  };
}