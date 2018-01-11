/*
Challenge -
A function that given an array of integers,
returns an array of only the even integers.
The function does not use any loops or Array.filter()
*/

// since we weren't allowed to use loops for this challenge
// I chose a recursive approach.

var array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 100, 112, 113]

const filterEvenIntegers = (array) => {
  if (!array.length) {
    return []
  }
  if (array.length === 1) {
    if (array[0] % 2) {
      return []
    } else {
      return array.slice()
    }
  }
  return filterEvenIntegers(array.slice(0, 1)).concat(filterEvenIntegers(array.slice(1)))
}

filterEvenIntegers(array)
// returns [2, 4, 6, 8, 10, 100, 112]