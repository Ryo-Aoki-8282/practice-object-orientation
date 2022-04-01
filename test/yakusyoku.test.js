import { Yakusyoku, Syunin, Tanto } from '../src/yakusyoku.js';
import { describe, it } from "@jest/globals";

describe("Yakusyokuクラスのテスト", () => {
  let yakusyoku = new Yakusyoku();
  it("社員のベース給与は基本給と一緒。基本給が100なら給与も100", () => {
    expect(yakusyoku.calculate_salary(100)).toBe(100);
  })

  describe("Tantoクラスのテスト", () => {
    let yakusyoku = new Tanto();
    it("担当は新入社員なので給料は基本給と一緒。基本給が100なら給料も100", () => {
      expect(yakusyoku.calculate_salary(100)).toBe(100);
    });
  
    it("役職が上がると、主任と同じく基本給の2倍+1", () => {
      expect(yakusyoku.up().calculate_salary(100)).toBe(201);
    });
  });

  describe("Syuninクラスのテスト", () => {
    let yakusyoku = new Syunin();
    it('主任の給料は基本給の2倍+1、基本給が100なら給料は201', () => {
      expect(yakusyoku.calculate_salary(100)).toBe(201);
    });
    
    it('降格すると給料は下がります', () => {
      expect(yakusyoku.down().calculate_salary(100)).toBe(100);
    });
  })
});