const repeatString = function(str, repeat) {
  let newStr = "";
  if (repeat < 0) {
    return "ERROR";
  }
  for (let i = 0; i < repeat; i++) {
    newStr += str;
  }
  return newStr;
}

module.exports = repeatString
