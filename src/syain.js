export class Syain {
  kiritu() {
    console.log("起立しました");
  }
  calcSalary(baseSalary) {
    // 基本給の処理をいれる
  }
}

export class Tantou extends Syain {
  kiritu() {
    console.log("担当は起立しました");
  }
  calcSalary(baseSalary) {
    return baseSalary;
  }
}

export class Syunin extends Syain {
  kiritu() {
    console.log("主任は起立しました");
  }
  calcSalary(baseSalary) {
    return baseSalary * 2 + 1;
  }
}

export class Butyou extends Syain {
  kiritu() {
    console.log("部長は起立しました。");
  }
  calcSalary(baseSalary) {
    return baseSalary * 3;
  }
}