import { Syain } from "../src/syain-strategy.js";
import { Gyoumu, TantouGyoumu, ShuninGyoumu } from "../src/gyoumu.js";
import { describe, it } from "@jest/globals";

describe("Syainクラスのテスト", () => {
  const syain = new Syain();
  it("社員はとりあえず起立します。", () => {
    expect(syain.work()).toBe('社員はとりあえず起立する。');
  });

  it("担当は慌てて起立します。", () => {
    syain.gyoumu = new TantouGyoumu();
    expect(syain.work()).toBe('担当は慌てて起立しました。');
  });
  
  it("主任は素早く起立します。", () => {
    syain.gyoumu = new ShuninGyoumu();
    expect(syain.work()).toBe('主任は素早く起立しました。');
  });
});
