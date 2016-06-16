import React from 'react';
import InputNumber from '../components/InputNumber';
import CalculateButton from '../components/CalculateButton';

class InputForm extends React.Component {

    render(){

        return (
            <div>
                <form>
                <InputNumber label="Cost" name="cost" />
                <InputNumber label="Number Of Passes" name="numberofpasses" />
                <InputNumber label="Initial Distance" name="initialdistance" />
                <InputNumber label="Increment" name="increment" />
                <CalculateButton />
                </form>
            </div>
        )
    }
}

export default InputForm;