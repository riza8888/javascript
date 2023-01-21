function boxOfAlphabet(row, col) {

    let alphabet= "abcdefghijklmnopqrstuvwxyz"
    // let arr = []
    let output = []
    // let str= ""
    let index=0
    for (let i = 0; i < row; i++) {
        let temp =[]
        for (let j = 0; j < col; j++) {//1 <2
            temp.push(alphabet[index]) //indexnya nambah 1 tiap loop
            // console.log(index, alphabet[index]);
            index++ //2=c
            if (index === alphabet.length){
                index=0
            }
            
        }
        // console.log(temp);
        output.push(temp)
        
    }
    return output

 }

 console.log(boxOfAlphabet(2, 2))

  /**
  * [
  *  [`a`,],
  *  []
  * ]
  */
 console.log(boxOfAlphabet(3, 4))
 
 /**
  *  [
  *   ['a', 'b', 'c', 'd'],
  *   ['e', 'f', 'g', 'h'],
  *   ['i', 'j', 'k', 'l'],
  * ]
  */
 
 console.log(boxOfAlphabet(6, 5))
 
 /**
  * [
  *   ['a', 'b', 'c', 'd', 'e'],
  *   ['f', 'g', 'h', 'i', 'j'],
  *   ['k', 'l', 'm', 'n', 'o'],
  *   ['p', 'q', 'r', 's', 't'],
  *   ['u', 'v', 'w', 'x', 'y'],
  *   ['z', 'a', 'b', 'c', 'd']
  * ]
  */
 