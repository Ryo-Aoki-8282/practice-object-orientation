import { Torishimariyaku } from "../src/syain.js";
import { describe, it } from "@jest/globals";

describe("Torishimariyakuクラスのテスト", () => {
  it("基本給の計算を実行する", () => {
    const torishimariyaku = new Torishimariyaku();
    expect(torishimariyaku.calcSalary(100)).toBe(402);
  })
});