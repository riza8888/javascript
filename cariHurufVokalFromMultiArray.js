function vocalSeeker(board) {
    // Write your code here
    let hurufVokal = "aAiIuUeEoO"
    let count =0
    let foundVokal= ""
  
    for (let i = 0; i < board.length; i++) {
        let arr = board[i];
        // console.log(arr);
        
        for(let hitungan=0; hitungan<arr.length;hitungan++){
            let perIndexArray= arr[hitungan];
            for (let j = 0; j < hurufVokal.length; j++) {
                let perVokal = hurufVokal[j];
                // console.log(perIndexArray, perVokal, perIndexArray === perVokal);
                if (perIndexArray === perVokal){
                    count++
                    foundVokal += perIndexArray
                }
                
            }
       
            // if (flag){ foundVokal += perIndexArray}
        }
        
    }

    return `vokal ditemukan ${count} dan kumpulan vokal adalah ${foundVokal}`


  }


  console.log(vocalSeeker([["*","*","*",10],["*","*",-5,-10,"*",100],["a","A","o","b"]]));

// vokal ditemukan 3 dan kumpulan vokal adalah aAo


