export class Syain {
  constructor(baseSalary) {
    this.baseSalary = baseSalary;
  }
  kiritu() {
    return "起立しました";
  };
  calcSalary(baseSalary) {
    // 基本給の処理をいれる
  };
}

export class Tantou extends Syain {
  kiritu() {
    return "担当は起立しました";
  };
  calcSalary() {
    return this.baseSalary;
  };
}

export class Syunin extends Syain {
  kiritu() {
    return "主任は起立しました";
  };
  calcSalary() {
    return this.baseSalary * 2 + 1;
  };
}

export class Butyou extends Syain {
  kiritu() {
    return "部長は起立しました。";
  };
  calcSalary() {
    return this.baseSalary * 3;
  };
}

export class Torishimariyaku extends Syain {
  kiritu() {
    return "ふんぞり返って立ち上がりました。";
  };
  calcSalary() {
    return this.baseSalary * 4 + 2;
  };
}