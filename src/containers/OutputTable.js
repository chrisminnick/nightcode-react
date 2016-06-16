import React from 'react';
import OutputRow from '../components/OutputRow';

class OutputTable extends React.Component{
    render(){
        return (
            <div>
                <p>Here are the results!</p>
                <table>
                    <tr><th>visit #</th>
                        <th>distance</th>
                        <th>$ per km</th>
                    </tr>

                    <OutputRow />
                    <OutputRow />
                    <OutputRow />
                    <OutputRow />
                    
                </table>

            </div>
        )
    }
}

export default OutputTable;