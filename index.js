produceDrivingRange = (num) => {
  return function(num1,num2){
    value = parseInt(num2.slice(0,2) - parseInt(num1.slice(0,2)))
    difference = value-num; 
    if (difference > 0) {
      return `${difference} blocks out of range`
    } else {
      return `within range by ${Math.abs(difference)}`
    }
  }
  // debugger
}

produceTipCalculator = (percentDecimal) => {
  return function(tip) {
    return percentDecimal*tip
  }
}