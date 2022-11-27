import { makeAutoObservable } from 'mobx';

export default class Counter {
  value = 0;

  constructor() {
    makeAutoObservable(this);
  }

  increment() {
    this.value++;
  }
}
