export class Gyoumu {
  standup() {
    return '社員はとりあえず起立する。';
  }
}

export class TantouGyoumu extends Gyoumu {
  standup() {
    return '担当は慌てて起立しました。'
  }
}

export class ShuninGyoumu extends Gyoumu {
  standup() {
    return '主任は素早く起立しました。'
  }
}