import React from 'react';

class InputNumber extends React.Component {
    handleChange(event){
        this.props.onChange(this.props.name,event.target.value);
    }
    
    render() {
        return (
            <div>
                <label>{this.props.label} 
                <input type="number"
                       name={this.props.name} 
                       onChange={this.handleChange.bind(this)} 
                       value={this.props.value}/>
                </label>
            </div>
        )
    }
}

export default InputNumber;