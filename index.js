function produceDrivingRange(blockRange) {
  return function(a, b) {
    let iA = parseInt(a.slice(0, 2), 10);
    let iB = parseInt(b.slice(0, 2), 10);
    if (iB - iA <= blockRange) {
      return 'within range by ' + (blockRange - (iB - iA)).toString(10);
    } else {
      return (iB - (iA + blockRange)).toString(10) + ' blocks out of range';
    }
  };
}

function produceTipCalculator(percent) {
  return function(fare) {
    return fare * percent;
  };
}

function createDriver() {
  let driverId = 0;
  return class Driver {
    constructor(name) {
      this.id = ++driverId;
      this.name = name;
    }
  };
}