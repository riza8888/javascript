function urutkanAbjad(str) {
    let alphabet = "abcdefghijklmnopqrstuvwxyz"
    // you can only write your code here!
    let output =""
    for (let i = 0; i < alphabet.length; i++) {
      let abjad = alphabet[i];
      // console.log(abjad);
      for (let j = 0; j < str.length; j++) {
        let perStr = str[j];
        // console.log(perStr,abjad,perStr === abjad);
        if(perStr === abjad){
          output +=perStr
  
        }
        
      }
      
    }
    return output
  
  }
  
  
  console.log(urutkanAbjad("hello"));
  //ehllo
  