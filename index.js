const produceDrivingRange=(function (range) {
  return function (a,b) {
    const distance =parseInt(b.slice(0,-2)) - parseInt(a.slice(0,-2));
    if (distance>range){
      return `${distance-range} blocks out of range`
    }
    else{
      return `within range by ${range-distance}`
    }
  }

})

const produceTipCalculator=(function (tip) {
  return function (amount) {
    return amount * tip
  }
})
