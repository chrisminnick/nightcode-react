import React from 'react';
import { changeNumber } from '../actions'
class InputNumber extends React.Component {

    render() {
        const store = this.context.store;

        return (
            <div>
                <label>{this.props.label} 
                <input ref={node => {this.input = node;}}
                       type="number"
                       name="number"
                       value={this.props.value}
                       onChange = {() => {
                       store.dispatch(
                            changeNumber(this.input.value)
                            //this doesn't work, because the ref
                            // doesn't get a value until after the
                            // component is rendered. But, how else
                            // to do this?
                            )
                            }}
                />
                </label>
            </div>
        )
    }
}

InputNumber.contextTypes = {
    store: React.PropTypes.object
};

export default InputNumber;