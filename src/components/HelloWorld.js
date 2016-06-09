import React from 'react';

class HelloWorld extends React.Component{
    render(){
        return (
            <h1>Hello, {this.props.text}!
                Would you like some {this.props.otherthings}?</h1>
        );
    };
}

export default HelloWorld;