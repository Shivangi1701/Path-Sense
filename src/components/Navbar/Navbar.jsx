import React, { Component } from 'react';
import "./Navbar.scss";

export default class Navbar extends Component {

    render(){
        return (
            <div className="navbar">
                <div className="container">
                    <span className="title">PATH SENSE</span>
                    <button>Visualise!</button>
                </div>
            </div>
        )
    }
}