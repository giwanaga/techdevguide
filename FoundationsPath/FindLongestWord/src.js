const print = (word) => console.log(word)

const main = () => {
  var s = "abppplee"
  var d = ["able", "ale", "apple", "bale", "kangaroo"]
  
  var ans = d.reduce((
              (cur, word) => {
                return ((cur.length <= word.length) && (isValid(s, word))) ? word : cur
              }
            ), "")

  print(ans)
}

const isValid = (s, word) => {
  if (s.length < word.length) { return false }
  if (word.length <= 0) { return true }

  if (s.substring(0,1) === word.substring(0,1)) {
    return isValid(s.substring(1), word.substring(1))
  } else {
    return isValid(s.substring(1), word)
  }
}

main()

