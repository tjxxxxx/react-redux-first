import React, { Component } from 'react';
import propTypes from 'prop-types';
export default class CommentAdd extends Component {
  static propTypes = {
    addComment: propTypes.func.isRequired
  };
  state = {
    username: '',
    content: ''
  };
  handleSubmit = () => {
    const comment = this.state;
    this.props.addComment(comment);
    this.setState({
      username: '',
      content: ''
    });
  };
  handleNameChange = event => {
    const username = event.target.value;
    this.setState({ username });
  };
  handleContentChange = event => {
    const content = event.target.value;
    this.setState({ content });
  };
  render() {
    const { username, content } = this.state;
    return (
      <div className='col-md-6'>
        <form className='form-horizontal'>
          <div className='form-group'>
            <label>UserName</label>
            <input
              type='text'
              className='form-control'
              value={username}
              onChange={this.handleNameChange}
            ></input>
          </div>
          <div className='form-group'>
            <label>Content</label>
            <textarea
              className='form-control'
              placeholder='print the content'
              value={content}
              onChange={this.handleContentChange}
            ></textarea>
          </div>
          <div className='form-group'>
            <div className='col-sm-offset-2 col-sm-10'>
              <button
                type='button'
                className='btn btn-primary'
                onClick={this.handleSubmit}
              >
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}
