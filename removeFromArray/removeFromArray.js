const removeFromArray = function(arr, ...removeItem) {
  for (let i = 0; i < removeItem.length; i++) {
    let index = arr.indexOf(removeItem[i]);
    if (index == -1) {
      continue;
    } else {
      arr.splice(index, 1);
    }
  }
  return arr;
}

module.exports = removeFromArray
