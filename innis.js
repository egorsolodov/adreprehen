const continuousAxis = 'xAxis';  // Example dynamic key
const oldContinuousAxisChannelDef = { scale: 'linear', range: [0, 100] };  // Example value

const newObject = {
    [continuousAxis]: oldContinuousAxisChannelDef,
};

console.log(newObject); 
// Output: { xAxis: { scale: 'linear', range: [0, 100] } }
