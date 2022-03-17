import { Butyou } from "../src/syain.js";
import { describe, it } from "@jest/globals";

describe("Butyouクラスのテスト", () => {
  it("基本給の計算を実行する", () => {
    const butyou = new Butyou();
    expect(butyou.calcSalary(100)).toBe(300);
  })
});