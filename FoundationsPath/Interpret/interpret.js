const print = word => console.log(word)

const functor = (operators, operands) => {
  var functions = []
  if (operators.length !== operands.length) return functions
  for (var i = 0; i < operators.length; i++) {
    functions.push(generateFunction(operators[i], operands[i]))
  }
  return functions
}
const generateFunction = (operator, operand) => {
  switch (operator) {
    case "+":
      return (n => n + operand)
    case "-":
      return (n => n - operand )
    case "*":
      return (n => n * operand)
    default:
      return (n => n)
      //throw new Error("invalid operator")
  }
}
const interpret = (base, operators, operands) => {
  return functor(operators, operands).reduce(((b,f) => f(b)), base)
}

const main = () => {
  test1 = interpret(1, ["+"], [1])         //expected: 2
  test2 = interpret(4, ["-"], [2])         //expected: 2
  test3 = interpret(1, ["+", "*"], [1, 3]) //expected: 6
  
  tests = [test1, test2, test3]
  tests.map(t => print(t))
}
main()
