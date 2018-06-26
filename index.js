function produceDrivingRange(blocks) {
  return function (blockOne, blockTwo) {
    let start = Number.parseInt(blockOne);
    let end = Number.parseInt(blockTwo);
    let distance = Math.abs(start - end);
    let difference = blocks - distance;

    if (difference > 0) {
      return `within range by ${Math.abs(difference)}`;
    } else {
      return `${Math.abs(difference)} blocks out of range`
    }
  }
}

function produceTipCalculator(percent) {
  return function (fare) {
    return fare * percent;
  }
}

function createDriver() {
  let driverId = 0

  return class {
    constructor(name) {
      this.name = name;
      this.id = ++ driverId;
    }
  }
}
