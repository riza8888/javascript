let input = "2341;3429;864;1309;1276"


function manualSplit(input) {

  let result = []
  let temp = ""
  for (let i = 0; i < input.length; i++) {// BISA <= INPUT.LENGTH
    if (input[i] !== ";") { // BISA TAMBAHANIN && !=UNDEFINED
      temp += input[i]
    }
    if (input[i] === ";" || i === input.length - 1) {
      result.push(temp) //INI BISA DIMASUKIN ELSE
      // console.log(temp)
      temp = ""  //INI BISA DIMASUKIN ELSEX
    }

  }
  return result
}

let plat = manualSplit(input)
// console.log(plat);

function ganjilGenap(plat) {
  // your code here
  let jumlahGenap = 0
  let jumlahGanjil = 0

  for (let j = 0; j < plat.length; j++) {
    if (plat[j] % 2 === 0) {
      jumlahGenap++
    } else {
      jumlahGanjil++
    }
  }

  if (jumlahGanjil <= 0) {
    return `plat genap sebanyak ${jumlahGenap} dan plat ganjil tidak ditemukan`
  } else if (jumlahGenap <= 0) {
    return `plat ganjil sebanyak ${jumlahGanjil} dan plat genap tidak ditemukan`
  } else {
    return `plat genap sebanyak ${jumlahGenap} dan plat ganjil sebanyak ${jumlahGanjil}`
  }

}

console.log(ganjilGenap(plat));
