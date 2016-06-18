import React from 'react';

class OutputRow extends React.Component {
    render(){
        return(
            <tr>
                <td>
                    {this.props.day}
                </td>
                <td>
                    {this.props.distance}
                </td>
                <td>
                    {this.props.priceperkm}
                </td>
                <td>
                    {this.props.daytotal}
                </td>
            </tr>
        )
    }
}
export default OutputRow;
