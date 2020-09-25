const sumAll = function(min, max) {
  // Validatation
  if (min < 0 || max < 0) return 'ERROR';
  if (typeof min !== 'number' || typeof max !== 'number') return 'ERROR';

  //
  if (min > max) {
    const temp = min;
    min = max;
    max = temp;
  }
  let sum = 0;
  for (let counter = min; counter <= max; counter += 1) {
    sum += counter;
  }
  return sum;
};

module.exports = sumAll;
