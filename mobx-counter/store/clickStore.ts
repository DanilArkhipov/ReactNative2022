import { makeAutoObservable } from 'mobx'

class ClickStore {
  clickCounter = 0

  // makeAutoObservable делает все свойства наблюдаемыми по умолчанию
  constructor() {
    makeAutoObservable(this)
  }

  addClick() {
    this.clickCounter ++;
  }

}

export default new ClickStore()