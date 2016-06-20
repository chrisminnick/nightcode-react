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
                <InputCost label="Cost" name="cost" value = {this.props.cost}/>
                <InputNumber label="Number Of Passes" name="number" value = {this.props.number}/>
                <InputInitial label="Initial Distance" name="initial" value={this.props.initial}/>
                <InputIncrement label="Increment" name="increment" value={this.props.increment}/>
                </form>
            </div>
        )
    }
}

export default InputForm;