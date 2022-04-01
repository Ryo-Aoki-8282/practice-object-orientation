import { Syain } from "../src/syain-state.js";
import { Tanto, Syunin } from "../src/yakusyoku.js"
import { describe, it } from "@jest/globals";

describe("Syainクラスのテスト", () => {
  const syain = new Syain();
  it("社員の給料は基本給と一緒。基本給が100なので給料は100", () => {
    expect(syain.calculate_salary(100)).toBe(100);
  });
});

describe("役職が担当の場合", () => {
  const syain = new Syain();
  syain.yakusyoku = new Tanto();

  it('役職が担当だと、給料は基本給と一緒', () => {
    expect(syain.calculate_salary(100)).toBe(100);
  });

  it('昇進すると給料が主任と同じになる', () => {
    expect(syain.up().calculate_salary(100)).toBe(201);
  })
})

describe("役職が主任の場合", () => {
  const syain = new Syain();
  syain.yakusyoku = new Syunin();

  it('役職が主任だと、給料は基本給の2倍+1', () => {
    expect(syain.calculate_salary(100)).toBe(201);
  });

  it('降格すると給料が担当と一緒になる', () => {
    expect(syain.down().calculate_salary(100)).toBe(100);
  })
})
