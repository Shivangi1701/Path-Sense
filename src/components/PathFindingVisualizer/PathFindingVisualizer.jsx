import React, { Component } from "react";
import "./PathFindingVisualizer.css";
import Node from "../Node/Node";

export default class PathFindingVisualizer extends Component {
  // js class that extends Component
  constructor(props) {
    super(props); // it initializes state of the component
    this.state = {
      // by assigning initial value to the
      nodes: [], // nodes property
    };
  }

  componentDidMount() {
    // lifecycle method  called after component is rendered to DOM
    const nodes = []; // 2D array
    for (let row = 0; row < 20; row++) {
      const currentRow = [];
      for (let col = 0; col < 50; col++) {
        const currentNode = { // new object is created representing single node 
          col, // properties such as col row
          row,
          isStart: row === 10 && col === 5, // indicating if node is a start node
          isFinish: row === 10 && col === 45, // indicating if node is a finish node
        };
        currentRow.push(currentNode); // obj pushed into row array
      }
      nodes.push(currentRow); // rows pushed to 2D array
    }
    this.setState({ nodes }); // nodes array is set as the new state of component
  }

  render() {
    const { nodes } = this.state; // extract nodes array from component's state
    console.log({ nodes });

    return (
      <div className="grid">
        {nodes.map((row, rowIdx) => {
          // map over each row in node & then over each node
          return (
            <div key={rowIdx}>
              {row.map((node, nodeIdx) => {
                const { isStart, isFinish } = node;
                return (
                    <Node 
                        key={nodeIdx}
                        isStart={isStart} // extract isStart & isFinsh properties of a node
                        isFinish={isFinish}
                        test={"foo"}
                    ></Node>
                );
              })}
            </div>
          );
        })}
      </div>
    );
  }
}
