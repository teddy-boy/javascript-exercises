const reverseString = function(str) {
  let reverseStr = "";
  for(let i = str.length - 1; i >= 0; i--) {
    reverseStr += str[i];
  }
  return reverseStr;
}

module.exports = reverseString
