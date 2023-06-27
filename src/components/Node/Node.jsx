import React, {Component} from 'react';

import './Node.css';

export default class Node extends Component {
  
  render() {
    const {
      col,
      isStart, 
      isFinish, 
      isWall,
      onMouseDown,
      onMouseEnter,
      onMouseUp,
      row,
    } = this.props;
    const extraClassName = isFinish
      ? 'node-finish'
      : isStart
      ? 'node-start'
      : isWall
      ? 'node-wall'
      : '';

    return (
      <div 
        id={`node-${row}-${col}`} // so that we can get it by document.getElementById also can use react ref
        className={`node ${extraClassName}`}
        onMouseDown={() => onMouseDown(row, col)} // just press not release
        onMouseEnter={() => onMouseEnter(row, col)} // hovering above 
        onMouseUp={() => onMouseUp()} // when you release
      ></div>
    );
  }
}
