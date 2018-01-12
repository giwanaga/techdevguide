const print = word => console.log(word)
const overwriteB = map => {
  if (map["a"]) map["b"] = map["a"]
  return map
}
const removeC = map => {
  delete map["c"]
  return map
}
//sort is to be implemented.
const sort = map => map
const mapShare = map => sort(overwriteB(removeC(map)))

const main = () => {
  var map1 = {"a":"aaa", "b":"bbb", "c":"ccc"}
  var map2 = {"b":"xyz", "c":"ccc"}
  var map3 = {"a":"aaa", "c":"meh", "d":"hi"}
  print(mapShare(map1))  //expected: {"a":"aaa", "b":"aaa"}
  print(mapShare(map2))  //expected: {"b":"xyz"}
  print(mapShare(map3))  //expected: {"a":"aaa", "b":"aaa", "d":"hi"} -> WRONG ORDER!
}

main()
