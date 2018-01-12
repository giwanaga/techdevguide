const canBalance = array => {
  var point = getHalfPoint(array)
  var leftArray = array.slice(0, point + 1)
  var rightArray = array.slice(point + 1, array.length)
  return sumArray(leftArray) === sumArray(rightArray)
}
const getHalfPoint = array => {
  var target = sumArray(array) / 2
  for (var i = 0; i < array.length; i++) {
    if (target <  array[i]) return (i - 1)
    if (target == array[i]) return i
    target -= array[i]
  }
  return -1
}
const sumArray = array => array.reduce(((sum, num) => sum + num), 0)
const print = word => console.log(word)

const main = () => {
  print(canBalance([1, 1, 1, 2, 1]))  //expected: true
  print(canBalance([2, 1, 1, 2, 1]))  //expected: false
  print(canBalance([10, 10]))         //expected: true
}

main()
