const print = word => console.log(word)
const removeStringOnce = (base, remove) => {
  return base.replace(remove, "")
}
const withoutString = (base, remove) => {
  if (base.indexOf(remove) < 0) return base
  return withoutString(base.replace(remove, ""), remove)
}

const main = () => {
  print(withoutString("Hello there", "llo"))
  print(withoutString("Hello there", "e"))
  print(withoutString("Hello there", "x"))
}

main()
