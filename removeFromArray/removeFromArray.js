const removeFromArray = function(inputArray, ...args) {
  const outputArray = [];
  inputArray.forEach((value) => {
    if (args.indexOf(value) === -1) {
      outputArray.push(value);
    }
  });
  return outputArray;
};

module.exports = removeFromArray;
