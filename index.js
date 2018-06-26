function produceDrivingRange(range){
  return function withinRange(start, end) {
    let newStart = start;
    let newEnd = end;
    let distance = range - (newEnd.slice(0,2) - newStart.slice(0,2))
    if ( distance < 0 ){
      return `${-distance} blocks out of range`;
    }
    else if ( distance > 0 ) {
      return `within range by ${distance}`;
    }
  }
}

function produceTipCalculator(percentage){
  return function tipOnFare(fare) {
    return fare * percentage;
  }
}
