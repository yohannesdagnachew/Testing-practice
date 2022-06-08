function reverse(reverseString) {
    const myArray = reverseString.split("");
    const reverseArray = myArray.reverse()
    const joinArray = reverseArray.join("");
    return joinArray
  }

  module.exports = reverse;