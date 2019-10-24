import React, { Component } from 'react';
import { render } from 'react-dom';
import { NavLink, Switch, Route, Redirect } from 'react-router-dom';
import Message from './message';
import News from './news';
export default class Home extends Component {
  render() {
    return (
      <div>
        <h2>Home Content</h2>
        <div>
          <ul className='nav nav-tabs'>
            <li>
              <NavLink to='/home/news'>News</NavLink>
            </li>
            &nbsp;&nbsp;
            <li>
              <NavLink to='/home/message'>Message</NavLink>
            </li>
          </ul>
          <div>
            <Switch>
              <Route path='/home/news' component={News}></Route>
              <Route path='/home/message' component={Message}></Route>
              <Redirect to='/home/news'></Redirect>
            </Switch>
          </div>
        </div>
      </div>
    );
  }
}
