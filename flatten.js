'use strict'

/*
  This flatten function takes a multi-dimensional array and returns a flattened
  array. Example: flatten([1, 2, [3], 4]) results in [1, 2, 3, 4]
*/
const flatten = (array) => {
  if (!Array.isArray(array)) {
    throw new Error("Provided input to flatten function must be an array.");
  }

  return array.reduce((a, element)=> {
    if (Array.isArray(element)) {
      return a.concat(flatten(element));
    }
    return a.concat(element);
  }, []);
}

module.exports = flatten
