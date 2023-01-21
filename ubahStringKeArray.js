
let input = "2341;3429;864;1309;1276"

function manualSplit(input) {

  let result = []
  let temp = ""
  for (let i = 0; i < input.length; i++) {
    if (input[i] !== ";") {
      temp += input[i]
    }
    if (input[i] === ";" || i === input.length - 1) {
      result.push(temp)
      // console.log(temp)
      temp = ""
    }

  }
  return result
}

let plat = manualSplit(input)
console.log(plat);

