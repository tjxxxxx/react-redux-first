import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, HashRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import App from './containers/app';
import { createStore } from 'redux';
import { counter } from './component/redux/reducers';
import store from './component/redux/store';
import { Provider } from 'react-redux';
// import App from './component/app/app';
// import App from './component/router/app';
// import MostStarRepo from './component/axjs/mostStarRepo';
// import App from './component/new-search/app';
let root = document.querySelector('#root');
// ReactDOM.render(<MostStarRepo></MostStarRepo>, root);
// ReactDOM.render(<App />, root);
// ReactDOM.render(<App></App>, root);
// ReactDOM.render(
//   <BrowserRouter>
//     <App></App>
//   </BrowserRouter>,
//   document.getElementById('root')
// );
// ReactDOM.render(<App></App>, root);
//生成一个store对象

console.log(store);
// function render() {
//   let root = document.querySelector('#root');
//   ReactDOM.render(<App store={store}></App>, root);
// }
// //初次渲染
// render();
// //订阅监听(store 中状态变化了， 就自动刷新)
// store.subscribe(render);
ReactDOM.render(
  <Provider store={store}>
    <App></App>
  </Provider>,
  root
);
