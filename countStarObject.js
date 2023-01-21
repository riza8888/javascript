function countStars(stars) {
  
    let output= {
      '*****': 0,
      '****': 0,
      '***': 0,
      '**': 0,
      '*': 0,
    }
    let bintang5=0
    let bintang4=0
    let bintang3=0
    let bintang2=0
    let bintang1=0
   
    
  
    // console.log(output["*****"]);
    for (let i = 0; i < stars.length; i++) {
      // console.log(stars[i]);
      let count=0
      let perArr=stars[i]
      for (let j = 0; j < perArr.length; j++) {
        // console.log(perArr[j]);
        if(perArr[j] === '*'){
          count++
        }
      }
      console.log(count);
      if (count === 5){
        output["*****"]+=1
      } else if (count === 4){
        output["****"]+=1
      }else if (count === 3){
        output["***"]+=1
      }else if (count === 2){
        output["**"]+=1
      }else if (count === 1){
        output["*"]+=1
      }
      
    }
  
    return output
  }
  
  console.log(
    countStars([
      ['*', '*', '*', ' ', ' '],
      ['*', '*', '*', '*', ' '],
      ['*', '*', '*', ' ', ' '],
      ['*', '*', '*', '*', '*'],
      ['*', '*', ' ', ' ', ' '],
      ['*', '*', '*', ' ', ' '],
      ['*', '*', '*', '*', ' '],
      ['*', '*', ' ', ' ', ' '],
      ['*', '*', '*', ' ', ' '],
      ['*', '*', ' ', ' ', ' '],
      ['*', '*', '*', '*', '*'],
      ['*', '*', '*', '*', ' ']
    ])
  )
  
  /*
  {
    '*****': 2,
    '****': 3,
    '***': 4,
    '**': 3,
    '*': 0,
  } */