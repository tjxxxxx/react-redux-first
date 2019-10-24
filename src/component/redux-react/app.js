import React, { Component } from 'react';

export default class App extends Component {
  state = {
    count: 0
  };
  increment = () => {
    //得到选择的增量
    const number = this.select.value * 1;
    const count = this.state.count + number;
    this.setState({ count });
  };
  decrease = () => {
    const number = this.select.value * 1;
    if (this.state.count - number <= 0) {
      const count = 0;
      this.setState({ count });
    } else {
      const count = this.state.count - number;
      this.setState({ count });
    }
  };
  incrementIfOdd = () => {
    const number = this.select.value * 1;
    const count = this.state.count;
    //判断满足条件才更新
    if (count % 2 === 1) {
      this.setState({ count: count + number });
    }
  };
  incrementAsync = () => {
    const number = this.select.value * 1;
    const count = this.state.count + number;
    //启动延时定时器
    setTimeout(() => {
      this.setState({ count: count + number });
    }, 1000);
  };
  render() {
    const { count } = this.state;
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
