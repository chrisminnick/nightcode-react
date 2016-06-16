import React from 'react';

class InputNumber extends React.Component {
    
    render() {
        return (
            <div>
                <label>{this.props.label} 
                <input type="number" name={this.props.name} />
                </label>
            </div>
        )
    }
}

export default InputNumber;