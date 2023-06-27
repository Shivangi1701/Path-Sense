import React, {Component} from 'react';

import './Node.css';

export default class Node extends Component {
  render() {
    const {isStart, isFinish, isVisited } = this.props;
    const extraClassName = isFinish
      ? 'node-finish'
      : isStart
      ? 'node-start'
      : isVisited
      ? 'node-visited'
      : '';

    return (
      <div className={`node ${extraClassName}`}></div>
    );
  }
}
