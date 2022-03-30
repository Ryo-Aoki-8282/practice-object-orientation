import { Gyoumu, TantouGyoumu, ShuninGyoumu } from "../src/gyoumu.js";
import { describe, it } from "@jest/globals";

describe("Gyoumuクラスのテスト", () => {
  const gyoumu = new Gyoumu();
  it("社員はとりあえず起立します。", () => {
    expect(gyoumu.standup()).toBe('社員はとりあえず起立する。');
  });
});

describe("TantoGyoumuクラスのテスト", () => {
  const gyoumu = new TantouGyoumu();
  it("担当は慌てて起立します。", () => {
    expect(gyoumu.standup()).toBe('担当は慌てて起立しました。');
  });
});

describe("ShuninGyoumuクラスのテスト", () => {
  const gyoumu = new ShuninGyoumu();
  it("主任は素早く起立します。", () => {
    expect(gyoumu.standup()).toBe('主任は素早く起立しました。');
  });
});