'use strict'

/*
  This flatten function takes a multi-dimensional array and returns a flattened
  array. Example: flatten([1, 2, [3], 4]) results in [1, 2, 3, 4]
*/
const flatten = (array) => {
  return array.reduce((a, element)=> {
    return a.concat(element);
  }, []);
}


// test
// flatten([1, 2, [3], 4]) === [1, 2, 3, 4]


module.exports = flatten
