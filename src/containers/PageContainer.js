import React from 'react';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../actions'
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
                    onCostChange = {this.props.actions.changeCost}
                    onNumberChange = {this.props.actions.changeNumber}
                    onInitialChange = {this.props.actions.changeInitial}
                    onIncrementChange = {this.props.actions.changeIncrement}
                    
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

function mapDispatchToProps(dispatch){
    return {
        actions: bindActionCreators(actions,dispatch),
        
    }


}

export default connect(
    mapStateToProps,
    mapDispatchToProps)(PageContainer);