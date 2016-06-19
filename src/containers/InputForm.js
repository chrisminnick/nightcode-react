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
                <InputCost label="Cost" name="cost" value = {this.props.cost} onChange={this.props.onChange}/>
                <InputNumber label="Number Of Passes" name="number" value = {this.props.number} onChange={this.props.onChange}/>
                <InputInitial label="Initial Distance" name="initial" value={this.props.initial} onChange={this.props.onChange}/>
                <InputIncrement label="Increment" name="increment" value={this.props.increment} onChange={this.props.onChange}/>
                </form>
            </div>
        )
    }
}

export default InputForm;