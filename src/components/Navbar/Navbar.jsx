import React, { Component } from 'react'

export default class Navbar extends Component {


    render(){
        return (
            <div className="navbar">
                <div className="container">
                    <span className="title">PATH SENSE</span>
                    <div className='links'>
                        <span>Algorithms</span>
                        <span>Clear Board</span>
                        <span>Clear path</span>
                        <button>Visualise !</button>
                    </div>
                </div>
            </div>
        )
    }
}