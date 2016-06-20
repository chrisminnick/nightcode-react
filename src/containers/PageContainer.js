import React from 'react';
import { connect } from 'react-redux'
import {changeCost,changeNumber,changeInitial,changeIncrement} from '../actions'
import InputForm from './InputForm';
import OutputTable from './OutputTable';

class PageContainer extends React.Component {
    render() {
        const store = this.context;
        return(
            <div>
                <InputForm 
                    cost = {this.props.cost}
                    number = {this.props.number}
                    initial = {this.props.initial}
                    increment = {this.props.increment}
                    />
                <OutputTable
                    cost = {this.props.cost}
                    number = {this.props.number}
                    initial = {this.props.initial}
                    increment = {this.props.increment} />
            </div>
        )
    }
}

function mapStateToProps(state){
    return {...state}
}



export default connect(
    mapStateToProps)(PageContainer);