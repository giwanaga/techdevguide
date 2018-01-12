const print = (word) => console.log(word)
const max = nums => nums.reduce((cur, num) => ((cur < num) ? num : cur), 0)
const spans = nums => nums.map(n => nums.lastIndexOf(n) - nums.indexOf(n) + 1)
const maxSpan = (nums) => max(spans(nums))

const main = () => {
  var test1 = [1,2,1,1,3]
  var test2 = [1,4,2,1,4,1,4,]
  var test3 = [1,4,2,1,4,4,4,]
  
  print(maxSpan(test1))
  print(maxSpan(test2))
  print(maxSpan(test3))
}

main()

