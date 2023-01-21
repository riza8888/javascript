function splitJobCharacters(str) {
    let sudahSplitJob= []
    let temp = ""
    for (let i = 0; i <= str.length; i++) {
     //    console.log(str[i]);
      let perStr =str[i]
    //   console.log(perStr);
        if(perStr !== "-" && perStr !== ","  && perStr !== undefined){
            temp += perStr
        } else {
            sudahSplitJob.push(temp)
            temp = ""
        }
    }

    // console.log(sudahSplitJob);
    return sudahSplitJob
  }
  
  function reverseJobCharacters(arr) {
    // console.log(arr);
    let newArr= []
    for (let i = 0; i < arr.length; i++) {
        // console.log(arr[i], i); 
        let perhuruf = arr[i]
        if (i%2 ===0 ){
            newArr.push(perhuruf)
        } 
        if (i%2 !== 0){
            // console.log(perhuruf);
            let kebalik = ""
            for (let j = perhuruf.length -1; j >= 0; j--) {
                // console.log(perhuruf[j]);
                kebalik += perhuruf [j]     
            }
        //    console.log(kebalik);
            newArr.push(kebalik)   
        }

    }
    //  console.log(newArr);
    return newArr   
  }
  
  function decryptJobCharacters(arr) {
    // console.log(arr);
    let kamus = "zabcdefghijklmnopqrstuvwxyz"
    let newArr= []
   
    for (let i = 0; i < arr.length; i++) {
        let perhuruf = arr[i]
        // let hurufSama = false
        let jobPosition = ""
        if (i%2 ===0 ){
            newArr.push(perhuruf)
        } 
        if (i%2 !== 0){
            // console.log(perhuruf.length);
            for (let j = 0; j < perhuruf.length; j++) {
                // console.log(perhuruf[j]);
                for (let k = 0; k < kamus.length; k++) {
                    // console.log(kamus[k]);
                    if (perhuruf[j]=== kamus[k]){
                        jobPosition+=kamus[k-1]
                        
                    } 
                    
                }
    
            }
            newArr.push(jobPosition)
        }
        
    }
    // console.log(newArr);
   return newArr
}
  
  function makingDreamTeam(arr) {
    // console.log(arr);
    let susunan = []
    let pasangan=[]
    let count=0
    for (let i = 0; i < arr.length; i+=2) {
    //     console.log(arr[i], arr[i+1], "===");
        pasangan.push(arr[i], arr[i+1])
        susunan.push(pasangan)
        pasangan=[]
        
    }
    // for (let i = 0; i <arr.length/2; i++) {
    //   let perArr= arr[i]
    //   let pasangan = []
    //   for (let j = 0; j < 2; j++) {
    //     // console.log(arr[j]);
    //     pasangan.push(arr[count])
    //     count++
    //   }
    //  //   console.log(pasangan);
    //     susunan.push(pasangan)
       
        
    // }
    // console.log(susunan);
    return susunan

  }
  
  
  function startUpMatchMaking(str) {
    // let reverse = reverseJobCharacters(splitJobCharacters(str))
    let decrypt= decryptJobCharacters(reverseJobCharacters(splitJobCharacters(str)))
    let dreamTeam =makingDreamTeam(decrypt)

    if(dreamTeam.length <3){
        return "Minimum 3 members in the team"
    }
    // console.log(dreamTeam);
         let hustler=0
        let hipster=0
        let hacker =0
    for (let i = 0; i < dreamTeam.length; i++) {
        // console.log(dreamTeam[i][1]);
      
        if(dreamTeam[i][1]=== "hustler"){
            hustler++
        }
        if(dreamTeam[i][1]=== "hipster"){
            hipster++
        }
        if(dreamTeam[i][1]=== "hacker"){
            hacker++
        }
        

    }
    // console.log(hustler, hipster, hacker);
    if(hustler<1 || hipster <1 || hacker<1){
        return "The job composition in the team is not suitable"
    }


    return "Match your Dream Start-Up Team" 
  }
  
  console.log(startUpMatchMaking('idaz-sfmutvi,anggara-sfutqji,fika-sfldbi'))
  // Match your Dream Start-Up Team
//   console.log(startUpMatchMaking('eko-sfldbi,fajrin-sfmutvi,abdullah-sfutqji,anggara-sfutqji'))
//   // Match your Dream Start-Up Team
//   console.log(startUpMatchMaking('abdullah-sfldbi,fajrin-sfmutvi,samir-sfldbi,eko-sfmutvi,basil-sfmutvi'))
//   // The job composition in the team is not suitable
//   console.log(startUpMatchMaking('samir-sfmutvi,basil-sfutqji,eko-sfmutvi'))
//   // The job composition in the team is not suitable
//   console.log(startUpMatchMaking('samir-sfmutvi,basil-sfutqji'))
  // Minimum 3 members in the team