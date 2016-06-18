import React from 'react';

class TotalOutput extends React.Component {
    render() {
        
        return (
            <div>Total Km: {this.props.total}</div>
        )
    }
}

export default TotalOutput;