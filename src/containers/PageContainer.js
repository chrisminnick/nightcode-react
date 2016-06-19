import React from 'react';
import { connect } from 'react-redux'
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
function mapDispatchToProps(dispatch) {
    return {
        onInputChange: (name, value) => {
            dispatch({
                type: 'CHANGE_INPUT',
                name,
                value
            })
        }
    };
}


export default connect(
    mapStateToProps,
    mapDispatchToProps)(PageContainer);