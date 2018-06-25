function produceDrivingRange(blockRange) {
    return function (start, finish) {

      let startNum = start.replace(/\D/g,'');
      let finishNum = finish.replace(/\D/g,'');
      let distance = blockRange - (Math.abs(finishNum - startNum));

      return (0 > distance) ? `${(Math.abs(distance))} blocks out of range` : `within range by ${(Math.abs(blockRange - distance))}`;
    };
};

function produceTipCalculator(tip_decimal) {
    return function (farePrice) {
      return (farePrice * tip_decimal);
    };
};


function createDriver () {
  let driverID = 0;

  return class {
    constructor(name){
      this.name = name;
      this.id = ++driverID;
    };
  };
};
