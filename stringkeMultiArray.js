
function ladder(word) {
    let output = []
    let temp=[]
    for (let i =0; i <word.length; i++ ){

        for (let j= 0 ; j< word.length-i ; j++){
            temp.push(word[j]) 
          
            
        }
        
        output.push(temp)
       
        temp= []
    }
   
    return output

}


console.log(ladder("hacktiv8"))

  

// [
//   [
//     'h', 'a', 'c',
//     'k', 't', 'i',
//     'v', '8'
//   ],
//   [
//     'h', 'a', 'c',
//     'k', 't', 'i',
//     'v'
//   ],
//   [ 'h', 'a', 'c', 'k', 't', 'i' ],
//   [ 'h', 'a', 'c', 'k', 't' ],
//   [ 'h', 'a', 'c', 'k' ],
//   [ 'h', 'a', 'c' ],
//   [ 'h', 'a' ],
//   [ 'h' ]
// ]

