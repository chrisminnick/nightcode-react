import React from 'react';

class InputCost extends React.Component {
    handleChange(event){
        this.props.onChange(this.props.name,this.input.value);
    }

    render() {
        return (
            <div>
                <label>{this.props.label}
                    <input ref={node => {this.input = node;}}
                           type="number"
                           name={this.props.name}
                           onChange={this.handleChange.bind(this)}
                           value={this.props.value}/>
                </label>
            </div>
        )
    }
}

export default InputCost;