import React, { Component } from 'react';
import CommentList from '../comment-list/comment-list';
import { CommentAdd } from '../comment-add';
import { PubSub } from 'pubsub-js';
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: [
        { username: 'Tom', content: 'React is Good' },
        { username: 'Jack', content: 'React is Hard' }
      ]
    };
  }
  componentDidMount() {
    PubSub.subscribe('deleteComment', (msg, index) => {
      const { comments } = this.state;
      comments.splice(index, 1);
      this.setState({ comments });
    });
  }
  //添加评论
  addComment = comment => {
    const { comments } = this.state;
    comments.unshift(comment);
    this.setState({ comments });
  };
  // deleteComment = index => {
  //   const { comments } = this.state;
  //   comments.splice(index, 1);
  //   this.setState({ comments });
  // };
  render() {
    const { comments } = this.state;
    return (
      <div>
        <div className='container'>
          <div className='row'>
            <div>
              <h1>Send your Comment</h1>
            </div>
          </div>
        </div>
        <div className='container'>
          <div className='row'>
            <CommentAdd addComment={this.addComment}></CommentAdd>
            <CommentList comments={comments}></CommentList>
          </div>
        </div>
      </div>
    );
  }
}
