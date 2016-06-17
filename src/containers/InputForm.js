import React from 'react';
import InputNumber from '../components/InputNumber';
import CalculateButton from '../components/CalculateButton';

class InputForm extends React.Component {

    render(){

        return (
            <div>
                <form>
                <InputNumber label="Cost" name="cost" value = {this.props.cost} onChange={this.props.onChange}/>
                <InputNumber label="Number Of Passes" name="number" value = {this.props.number} onChange={this.props.onChange}/>
                <InputNumber label="Initial Distance" name="initial" value={this.props.initial} onChange={this.props.onChange}/>
                <InputNumber label="Increment" name="increment" value={this.props.increment} onChange={this.props.onChange}/>
                </form>
            </div>
        )
    }
}

export default InputForm;