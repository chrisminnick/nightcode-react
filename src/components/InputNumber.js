import React from 'react';
import { connect } from 'react-redux'

import { changeNumber } from '../actions'
class InputNumber extends React.Component {

    render(dispatch) {

        return (
            <div>
                <label>{this.props.label} 
                <input ref={node => {this.input = node;}}
                       type="number"
                       name={this.props.name}
                       value={this.props.value}
                       onChange = {() => {
                       this.props.dispatch(
                            changeNumber(this.input.value)
                            )
                            }}
                />
                </label>
            </div>
        )
    }
}


export default connect()(InputNumber);