export class Yakusyoku {
  calculate_salary(kihonkyu) {
    return kihonkyu
  };
  up(){

  };
  down(){

  };
};

export class Tanto extends Yakusyoku {
  up() {
    return new Syunin()
  }
};

export class Syunin extends Yakusyoku {
  calculate_salary(kihonkyu) {
    return kihonkyu * 2 + 1;
  };

  down() {
    return new Tanto();
  }
}