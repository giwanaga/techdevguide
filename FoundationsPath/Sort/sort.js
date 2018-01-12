const print = word => console.log(word)

const asc = array => [].slice.call(array).sort((x, y) => x > y)
const dedupe = array => {
  var cur = ""
  var deduped = []
  for (var i = 0; i < array.length; i++) {
    if (array[i] !== cur) {
      deduped.push(array[i])
      cur = array[i]
    }
  }
  return deduped
}
const sort = array => dedupe(asc(array))

const main = () => {
  var test1 = []                 //expected: []
  var test2 = [1]                //expected: 1
  var test3 = [1,1]              //expected: 1
  var test4 = [1,3,2,4,3,3,1,2]  //expected: 1,2,3,4

  var tests = [test1, test2, test3, test4]
  tests.map(d => print(sort(d)))
}

main()
