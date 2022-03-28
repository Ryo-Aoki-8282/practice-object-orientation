import { SyainFactory } from "../src/syain_factory.js"
import { Tantou, Butyou, Syunin, Torishimariyaku } from "../src/syain.js"
import { describe, it } from "@jest/globals";

describe("syain_factoryのテスト", () => {
  let syain_factory = new SyainFactory();
  it("Tantoオブジェクトを生成しているかどうかをチェックする", () => {
    expect(syain_factory.create("Tantou", 200)).toBeInstanceOf(Tantou);
  });

  it("Syuninオブジェクトを生成しているかどうかをチェックする", () => {
    expect(syain_factory.create("Syunin", 200)).toBeInstanceOf(Syunin);
  });

  it("Butyouオブジェクトを生成しているかどうかをチェックする", () => {
    expect(syain_factory.create("Butyou", 200)).toBeInstanceOf(Butyou);
  });

  it("Torishimariyakuオブジェクトを生成しているかどうかをチェックする", () => {
    expect(syain_factory.create("Torishimariyaku", 200)).toBeInstanceOf(Torishimariyaku);
  });
});