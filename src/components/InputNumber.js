import React from 'react';

class InputNumber extends React.Component {
    constructor(props){
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(event){
        this.props.onChange(this.props.name,event.target.value);
    }
    
    render() {
        return (
            <div>
                <label>{this.props.label} 
                <input type="number"
                       name={this.props.name} 
                       onChange={this.handleChange}
                       value={this.props.value}/>
                </label>
            </div>
        )
    }
}

export default InputNumber;