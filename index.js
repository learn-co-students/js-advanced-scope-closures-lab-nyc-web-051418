function produceDrivingRange(blockRange) {
  return function (b1, b2) {
    let range = Math.abs(parseInt(b1.split("th")[0])-parseInt(b2.split("th")[0]))
    if (range >= blockRange) {
      return `${range - blockRange} blocks out of range`;
    } else {
      return `within range by ${blockRange - range}`;
    }
  }
};

function produceTipCalculator(tip) {
  return function (amount) {
    return amount * tip
  }
};

function createDriver() {
      let i = 0
      return class {
        constructor(name) {
        this.name = name
        this.id = i++
        }
    }
}
