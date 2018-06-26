function produceDrivingRange(blockRange) {
  return function(startBlock, endBlock) {
    let totalDist = Math.abs(endBlock.split("th")[0] - startBlock.split("th")[0]);
    if (totalDist < blockRange) {
      return `within range by ${blockRange - totalDist}`
    } else {
      return `${totalDist - blockRange} blocks out of range`
    }
  }
}

function produceTipCalculator(tipPercent) {
  return function(fareTotal) {
    return fareTotal * tipPercent;
  }
}

function createDriver() {
  let DriverID = 0;
  return class {
    constructor(name) {
      this.name = name
      this.id = ++DriverID;
    }
  }
}
