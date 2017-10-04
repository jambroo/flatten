'use strict'

// function
const flatten = (array) => {
  return array.reduce((a, element)=> {
    console.log({a,element})
    return a.concat(element)}, []);
}



// test
// flatten([1, 2, [3], 4]) === [1, 2, 3, 4]

console.log(flatten([1, 2, [3], 4]));
