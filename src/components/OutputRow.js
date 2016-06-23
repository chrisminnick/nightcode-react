import React from 'react';

function OutputRow(props) {
        return(
            <tr>
                <td>
                    {props.day}
                </td>
                <td>
                    {props.distance}
                </td>
                <td>
                    {props.priceperkm}
                </td>
                <td>
                    {props.daytotal}
                </td>
            </tr>
        );
}
export default OutputRow;
