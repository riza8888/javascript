

function susunPesan(arr) {
    let output = ``
       for (let i = 0; i < arr.length; i++) {
        // console.log(arr[i], "===");
       for (let j = 0; j < arr.length-1; j++) {
       console.log(arr[j],arr[j+1]);
          //  if(arr[j][1]>arr[j+1][1]){
          //    let temp= arr[j]
          //    arr[j] = arr[j+1]
          //    arr[j+1] = temp
          // }
         
       }
    
       output+=`${arr[i][0]} `
       // console.log(arr);
     }
   
     return output
   }
   
   
   console.log(susunPesan([
     ['granat', 3],
     ['musuh', 1],
     ['membawa', 2],
   ]));
   
   // console.log(susunPesan([
   //   ["besok", 4],
   //   ["kita", 1],
   //   ["akan", 2],
   //   ["menyerang", 3],
   //   ["pagi", 5]
   // ]));
   //kita akan menyerang besok pagi 
   