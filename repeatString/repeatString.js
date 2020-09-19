const repeatString = function (inputString, repeatNum) {
  if (repeatNum < 0) return 'ERROR';
  let output = '';
  for (let x = 0; x < repeatNum; x += 1) {
    output += inputString;
  }
  return output;
};

module.exports = repeatString;
