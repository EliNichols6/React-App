import React, { Component } from 'react';

import './MyList.css';

class MyList extends Component {
    constructor(props) {
        super(props)

        this.state = {
            list1: ["1. Apple", "2. Banana", "3. Orange"],
            list2: ["1. Carrot", "2. Broccoli", "3. Bell Pepper"],
        };
    }

    render() {
        const selectedList = this.props.selectedList === '1' ? this.state.list1 : this.state.list2;

        return (
            <ol className="list-group">
                {selectedList.map((item) => {
                    return <li key={item} className="list-group-item">{item}</li>
                })}
            </ol>
        )
    }
}

export default MyList;
