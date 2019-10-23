import React, { Component } from 'react';

export default class News extends Component {
  state = {
    newsArr: ['new1', 'new2', 'new3']
  };
  render() {
    return (
      <div>
        <ul>
          {this.state.newsArr.map((news, index) => {
            return <li key={index}>{news}</li>;
          })}
        </ul>
      </div>
    );
  }
}
