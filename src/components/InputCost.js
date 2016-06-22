import React from 'react';
import { connect } from 'react-redux'

import { changeCost } from '../actions'
class InputCost extends React.Component {
    handleChange(event){
        this.props.onChange(event.target.value);
    }
    render() {
        

        
        return (
            <div>
                <label>{this.props.label}
                    <input type="number"
                           name={this.props.name}
                           value={this.props.value}
                           onChange = {this.handleChange.bind(this)}
                    />
                </label>
            </div>
        )
    }
}


export default InputCost;