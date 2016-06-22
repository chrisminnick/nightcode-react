import React from 'react';
import { connect } from 'react-redux'

import { changeInitial } from '../actions'
class InputInitial extends React.Component {
    handleChange(event){
        this.props.onChange(event.target.value);
    }
    render() {

        return (
            <div>
                <label>{this.props.label}
                    <input ref={node => {this.input = node;}}
                           type="number"
                           name={this.props.name}
                           value={this.props.value}
                           onChange = {this.handleChange.bind(this)}
                    />
                </label>
            </div>
        )
    }
}


export default InputInitial;