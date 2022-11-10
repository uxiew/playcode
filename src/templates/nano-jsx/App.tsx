import  { Component, Fragment } from 'nano-jsx';

export default class Counter extends Component {
  value = 0;

  changeValue(newValue: number) {
    this.value += newValue;
    this.update();
  }

  render() {
    return (
      <Fragment>
        <div>Counter: {this.value}</div>
        <button onClick={() => this.changeValue(1)}>Increment</button>
        <button onClick={() => this.changeValue(-1)}>Decrement</button>
      </Fragment>
    );
  }
}