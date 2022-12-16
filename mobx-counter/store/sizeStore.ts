import { makeAutoObservable } from 'mobx'

class SizeStore {
  fontSize = 12

  // makeAutoObservable делает все свойства наблюдаемыми по умолчанию
  constructor() {
    makeAutoObservable(this)
  }

  add() {
    if(this.fontSize < 48){
        this.fontSize++;
    }
  }

  sub() {
    if(this.fontSize > 8){
        this.fontSize--;
    }
  }

}

export default new SizeStore()
