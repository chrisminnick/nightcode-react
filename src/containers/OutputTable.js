import React from 'react';
import OutputRow from '../components/OutputRow';
import TotalOutput from '../components/TotalOutput';

class OutputTable extends React.Component{

    render(){
        var dailyDistance = [];
        var pricePerKm = [];
        var dailyTotal = [];
        var totalDistance = 0;

        for (var i=0; i < this.props.number; i++){
            dailyDistance[i] = this.props.initial + (i * this.props.increment);
            dailyTotal[i] = totalDistance + dailyDistance[i];
            totalDistance += dailyDistance[i];
            pricePerKm[i] = ((this.props.cost / dailyDistance[i])*1000).toFixed(2);
        }

        const dataRows = dailyDistance.map(function(distance,daynumber) {
            return (
                    <OutputRow day = {daynumber+1} 
                               distance = {distance} 
                               daytotal={dailyTotal[daynumber]} 
                               priceperkm = {pricePerKm[daynumber]} 
                               key={daynumber}/>
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
                        <td>total</td>
                    </tr>

                    {dataRows}
                    </tbody>
                </table>
                <TotalOutput total = {totalDistance} />
            </div>
        )
    }
}

export default OutputTable;