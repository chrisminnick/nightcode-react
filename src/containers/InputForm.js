import React from 'react';
import InputCost from '../components/InputCost';
import InputInitial from '../components/InputInitial';
import InputNumber from '../components/InputNumber';
import InputIncrement from '../components/InputIncrement';

class InputForm extends React.Component {

    render(){

        return (
            <div>
                <form>
                <InputCost label="Cost" name="cost" value = {this.props.cost} onChange={this.props.onCostChange} />
                <InputNumber label="Number Of Passes" name="number" value = {this.props.number} onChange={this.props.onNumberChange} />
                <InputInitial label="Initial Distance" name="initial" value={this.props.initial} onChange={this.props.onInitialChange} />
                <InputIncrement label="Increment" name="increment" value={this.props.increment} onChange={this.props.onIncrementChange} />
                </form>
            </div>
        )
    }
}

export default InputForm;