var iterations = 20;
var initialDistance = 1000;
var increment = 100;
var totalDistance = 0;
var dailyDistance = [];
var price = 50;

for (var i=0; i < iterations; i++){
    dailyDistance[i] = initialDistance + (i * increment);
    totalDistance += dailyDistance[i];
    let day = i + 1;
    pricePerKm = ((price / totalDistance)*1000).toFixed(2);
    console.log ("Day "+ day + ": " + dailyDistance[i]);
    console.log ("Total so far: " + totalDistance);
    console.log ("Price Per Kilometer: $" + pricePerKm + "\n");

}

console.log ("total: " + totalDistance);

