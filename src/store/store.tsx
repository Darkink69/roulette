import { makeAutoObservable } from "mobx";

class Store {
  // steps = JSON.parse(localStorage.getItem("crocks") || "{}").steps || 0;
  coins = 394;
  tonBalance = 0;
  user: any;

  constructor() {
    makeAutoObservable(this);
  }

  // setSteps(steps: number) {
  //   this.steps = steps;
  // }

  setTons(tons: number) {
    this.tonBalance = Number("0." + String(tons).substring(0, 2));
  }

  setCoins(coins: number) {
    this.coins = coins;
  }

  setUser(user: any) {
    this.user = user;
  }
}

export default new Store();
