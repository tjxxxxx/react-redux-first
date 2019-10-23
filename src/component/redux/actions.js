import { INCREMENT, DECREMENT } from './action-types';

//包含所有的action creator  创建action的函数

//增加
export const increment = number => ({
  type: INCREMENT,
  data: number
});

export const decrement = number => ({
  type: DECREMENT,
  data: number
});
