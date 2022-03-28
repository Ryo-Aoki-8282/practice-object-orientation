import { Butyou } from "../src/syain.js";
import { describe, it } from "@jest/globals";

describe("Butyouクラスのテスト", () => {
  it("基本給の計算を実行する", () => {
    const butyou = new Butyou(100);
    expect(butyou.calcSalary()).toBe(300);
  })
});