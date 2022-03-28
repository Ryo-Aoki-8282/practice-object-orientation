import { Torishimariyaku } from "../src/syain.js";
import { describe, it } from "@jest/globals";

describe("Torishimariyakuクラスのテスト", () => {
  const torishimariyaku = new Torishimariyaku(100);
  it("基本給の計算を実行する", () => {
    expect(torishimariyaku.calcSalary()).toBe(402);
  });

  it("取締役はふんぞり返って立ち上がる", () => {
    expect(torishimariyaku.kiritu()).toBe("ふんぞり返って立ち上がりました。");
  })

});