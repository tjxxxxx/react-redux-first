import React from 'react';
import { connect } from 'react-redux';
import { increment, decrement } from '../component/redux/actions';
import Counter from '../component/redux/counter';
export default connect(
  state => ({ count: state }),
  { increment, decrement }
)(Counter);
