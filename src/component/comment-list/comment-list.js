import React, { Component } from 'react';
import propTypes from 'prop-types';
import CommentItem from '../comment-item/comment-item';
export default class CommentList extends Component {
  //给组件类指定属性
  //等同于CommentList.propTypes
  static propTypes = {
    comments: propTypes.array.isRequired
  };
  render() {
    const { comments } = this.props;
    //计算是否显示
    const display = comments.length === 0 ? 'block' : 'none';
    return (
      <div className='col-md-6'>
        <h3 className='reply'>Reply:</h3>
        <h2 style={{ display }}>Do not have comment</h2>
        <ul className='list-group'>
          {comments.map((comment, index) => {
            return (
              <CommentItem
                comment={comment}
                key={index}
                index={index}
              ></CommentItem>
            );
          })}
        </ul>
      </div>
    );
  }
}
