import React, { Component } from 'react';

import * as actions from './actions';
export default class App extends Component {
  increment = () => {
    //得到选择的增量
    const number = this.select.value * 1;
    //调用store方法更新状态
    this.props.store.dispatch(actions.increment(number));
  };
  decrease = () => {
    const number = this.select.value * 1;
    this.props.store.dispatch(actions.decrement(number));
  };
  incrementIfOdd = () => {
    const number = this.select.value * 1;
    //得到原本的count状态
    const count = this.props.store.getState();
    //判断满足条件才更新
    if (count % 2 === 1) {
      this.props.store.dispatch(actions.increment(number));
    }
  };
  incrementAsync = () => {
    const number = this.select.value * 1;

    //启动延时定时器
    setTimeout(() => {
      this.props.store.dispatch(actions.increment(number));
    }, 1000);
  };
  render() {
    const count = this.props.store.getState();

    return (
      <div>
        <p>Click {count} itmes</p>
        <div>
          <select
            ref={select => {
              this.select = select;
            }}
          >
            <option value='1'>1</option>
            <option value='2'>2</option>
            <option value='3'>3</option>
          </select>
          &nbsp;
          <button onClick={this.increment}>+</button>&nbsp;
          <button onClick={this.decrease}>-</button>&nbsp;
          <button onClick={this.incrementIfOdd}>Increment if odd</button>
          <button onClick={this.incrementAsync}>Increment async</button>
        </div>
      </div>
    );
  }
}
