import { Syunin } from "../src/syain.js";
import { describe, it } from "@jest/globals";

describe("Syuninクラスのテスト", () => {
  it("基本給の計算を実行する", () => {
    const syunin = new Syunin(100);
    expect(syunin.calcSalary()).toBe(201);
  })
});