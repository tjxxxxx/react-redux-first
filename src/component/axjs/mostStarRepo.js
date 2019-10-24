import React, { Component } from 'react';
import axios from 'axios';

export default class MostStarRepo extends Component {
  state = {
    repoName: '',
    repoUrl: ''
  };
  componentDidMount() {
    //使用axios,发送ajax请求
    const url = `https://api.github.com/search/repositories?q=r&sort=starts`;
    axios.get(url).then(response => {
      const result = response.data;
      console.log(result);
      //得到数据
      const { name, html_url } = result.items[0];
      //更新状态
      this.setState({ repoName: name, repoUrl: html_url });
    });
  }

  render() {
    const { repoName, repoUrl } = this.state;
    if (!repoName) {
      return <h2>Loading...</h2>;
    } else {
      return (
        <h2>
          Most star repo is <a href={repoUrl}>{repoName}</a>
        </h2>
      );
    }
    return <div></div>;
  }
}
