import { Tantou } from "../src/syain.js";
import { describe, it } from "@jest/globals";

describe("Tantouクラスのテスト", () => {
  it("基本給の計算を実行する", () => {
    const tantou = new Tantou();
    expect(tantou.calcSalary(100)).toBe(100);
  })
});