import React, { Component } from 'react';
import './Container.css';
import MyList from './MyList.js';
import Selector from './Selector';

class Container extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            myName: "Bob",
            selectedList: '1',
        };
    }

    handleListChange = (listNumber) => {
        this.setState({ selectedList: listNumber });
    }

    render() {
        return (
            <div className="container mt-5 container-bg">
                <h2>These are my favorite fruits and vegetables:</h2>

                <Selector onChange={this.handleListChange} />
                <MyList selectedList={this.state.selectedList} />

            </div>
        )
    }
}

export default Container;
