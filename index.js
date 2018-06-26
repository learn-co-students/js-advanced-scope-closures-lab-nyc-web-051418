function produceDrivingRange(blockRange) {
  return function(startingBlock, endingBlock) {

    let start = parseInt(startingBlock);
    let end =  parseInt(endingBlock);
    let distance = Math.abs(end-start);
    let blockDist = blockRange - distance;
    if (blockDist > 0) {
      return `within range by ${blockDist}`
    }
    else {
      return `${Math.abs(blockDist)} blocks out of range`
    }
  };
}


function produceTipCalculator(percent) {
  return function(tip) {
    return percent*tip;
  }
}
