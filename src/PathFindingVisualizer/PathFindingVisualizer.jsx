import React, { Component } from 'react';
import "./PathFindingVisualizer.css";
import Node from "./Node/Node";

export default class PathFindingVisualizer extends Component {
    constructor(props){
        super(props);
        this.state = {
            nodes: [],
        };
    }

    componentDidMount() {
        const nodes = [];
        for(let row = 0; row < 15; row++){
            const currentRow = [];
            for(let col = 0; col < 50; col++){
                currentRow.push([]);
            }
            nodes.push(currentRow);
        }
        this.setState({nodes});
    }

    render() {
        const {nodes} = this.state;
        console.log({nodes});

        return(
            <div className='grid'>
                {nodes.map((row, rowIdx) => {
                    return <div>
                        {row.map((node, nodeIdx) => <Node></Node>)}
                    </div>
                })}
            </div>
        )
    }
}