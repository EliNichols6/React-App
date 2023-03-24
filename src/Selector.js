import React, { Component } from 'react';

import './Selector.css';

class Selector extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedList: '1',
        };
    }

    handleChange = (event) => {
        this.setState({ selectedList: event.target.value });
        this.props.onChange(event.target.value);
    }

    render() {
        return (
            <div className="mb-3">
                <label className="form-label">Select a list:</label>
                <select className="form-select" value={this.state.selectedList} onChange={this.handleChange}>
                    <option value="1">Fruits</option>
                    <option value="2">Vegetables</option>
                </select>
            </div>
        )
    }
}

export default Selector;
