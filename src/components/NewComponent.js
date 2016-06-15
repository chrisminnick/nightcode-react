import React from 'react';
import {connect} from 'react-redux';

class NewComponent extends React.Component {
    
    render(){
        return (<div>test {this.props.test}</div>);
    }
}

function mapStateToProps(state){
    return {test:state.test}
}

export default connect(mapStateToProps)(NewComponent);