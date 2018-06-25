// function produceDrivingRange(blockRange) {
//     return function () {
//
//     }
// }

function produceTipCalculator(tip_decimal) {
    return function (farePrice) {
      return (farePrice * tip_decimal);
    };
};


function createDriver () {
  let driverId = 0

  return class {
    constructor(name){
      this.name = name;
      this.id = ++driverId;
    }
  }
}
