import React from 'react';
import OutputRow from '../components/OutputRow';

class OutputTable extends React.Component{

    render(){
        var dailyDistance = [];
        var totalDistance = 0;
        var pricePerKm = [0];

        for (var i=0; i < this.props.number; i++){
            dailyDistance[i] = this.props.initial + (i * this.props.increment);
            totalDistance += dailyDistance[i];
            let day = i + 1;
            pricePerKm[i] = ((this.props.cost / totalDistance)*1000).toFixed(2);
        }

        const dataRows = dailyDistance.map(function(distance,daynumber) {
            return (
                <OutputRow day = {daynumber+1} distance = {distance} priceperkm = {pricePerKm[daynumber]} key={daynumber}/>
            )
        });

        return (
            <div>
                <p>Here are the results!</p>
                <table>
                    <tbody>
                    <tr><th>visit #</th>
                        <th>distance</th>
                        <th>$ per km</th>
                    </tr>

                    {dataRows}
                    </tbody>
                </table>

            </div>
        )
    }
}

export default OutputTable;