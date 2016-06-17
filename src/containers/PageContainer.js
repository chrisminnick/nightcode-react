import React from 'react';
import InputForm from './InputForm';
import OutputTable from './OutputTable';

class PageContainer extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            cost:50,
            number:20,
            initial:1000,
            increment:100
        };
        this.inputChangeHandler = this.inputChangeHandler.bind(this);
    }

    inputChangeHandler (name,value) {
    this.setState({ [name]: value });
        console.log(name + ":" + value)
    }


    render() {
        return(
            <div>
                <InputForm 
                    cost = {this.state.cost} 
                    number = {this.state.number}  
                    initial = {this.state.initial} 
                    increment = {this.state.increment}
                    onChange = {this.inputChangeHandler} />
                <OutputTable 
                    cost = {this.state.cost}
                    number = {this.state.number}
                    initial = {this.state.initial}
                    increment = {this.state.increment} />
            </div>
        )
    }
}

export default PageContainer;