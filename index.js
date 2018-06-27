function produceDrivingRange(blockRange) {
  return function(startingAddress, endingAddress){
    let start = parseInt(startingAddress);
    let end = parseInt(endingAddress);
    let distance = Math.abs(end-start);
    let difference = blockRange - distance;

    if (difference > 0){
      return `within range by ${difference}`
    }
    else {
      return `${Math.abs(difference)} blocks out of range`
    }
  }
}

function produceTipCalculator(percentage) {
  return function(fare){
    return fare * percentage;
  }
}
