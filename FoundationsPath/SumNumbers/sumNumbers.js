const getNum = str => {
  if (str.length <= 0) return ""
  if (str.charAt(0).isFinite) return str.charAt(0) + getNum(str.substring(num.length))
  return getNum(str.substring(num.length))
}
const makeNumArray = str => {
  var tmpNum = ""
  var tmpArr = []
  for (var i=0; i < str.length; i++) {
    if ("0123456789".indexOf(str.charAt(i)) >= 0) {
      tmpNum += str.charAt(i)
    } else {
      if (tmpNum !== "") tmpArr.push(tmpNum)
      tmpNum = ""
    }
  }
  if (tmpNum !== "") tmpArr.push(tmpNum)
  return tmpArr
}

const sumNumbers = str => makeNumArray(str).reduce(((sum, num) => sum + parseInt(num)), 0)
const print = word => console.log(word)

const main = () => {
  print(sumNumbers("abc123xyz")) //expected: 123
  print(sumNumbers("aa11b33"))   //expected: 44
  print(sumNumbers("7 11"))      //expected: 18
}


main()
