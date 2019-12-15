const ftoc = function(f) {
  let temp = (f - 32) * (5 / 9);
  return Math.round(temp * 10) / 10;
}

const ctof = function(c) {
  let temp = c * (9 / 5) + 32;
  return Math.round(temp * 10) / 10;
}

module.exports = {
  ftoc,
  ctof
}
