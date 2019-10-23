import React, { Component } from 'react';
import { NavLink, Route } from 'react-router-dom';
import MessageDetail from './message-detail';
export default class Message extends Component {
  state = {
    messages: []
  };

  componentDidMount() {
    setTimeout(() => {
      const messages = [
        { id: 1, title: 'message1' },
        { id: 2, title: 'message2' },
        { id: 3, title: 'message3' },
        { id: 4, title: 'message4' }
      ];
      this.setState({ messages });
    }, 1000);
  }
  showDetail = id => {
    this.props.history.push(`/home/message/messagedetail/${id}`);
  };
  showDetail2 = id => {
    this.props.history.replace(`/home/message/messagedetail/${id}`);
  };
  back = () => {
    this.props.history.goBack();
  };
  forward = () => {
    this.props.history.goForward();
  };
  //通过js进行页面跳转
  reqPage = () => {
    window.location = 'http://www.google.com';
  };

  render() {
    console.log(this.props);
    return (
      // console.log(props)
      <div>
        <ul>
          {this.state.messages.map((m, index) => {
            return (
              <li key={index}>
                <NavLink to={`/home/message/messagedetail/${m.id}`}>
                  {m.title}
                </NavLink>
                &nbsp;&nbsp;
                <button onClick={() => this.showDetail(m.id)}>push Look</button>
                <button onClick={() => this.showDetail2(m.id)}>
                  Replace Look
                </button>
              </li>
            );
          })}
        </ul>
        <p>
          <button onClick={this.back}>Back</button>
          <button onClick={this.forward}>Go</button>
        </p>
        <p>
          <button onClick={this.reqPage}>Direct to google </button>
        </p>
        <Route
          path='/home/message/messagedetail/:id'
          component={MessageDetail}
        ></Route>
      </div>
    );
  }
}
