function graduates(students) {
    let output = {}
      for (let i = 0; i < students.length; i++) {
          let perData = students[i];
          let perMurid = perData.name
          let perScore=perData.score
          // console.log(perScore);
          let perkelas = perData.class
          if (!output[perkelas]){
              output[perkelas] = []
          }
          let obj ={name: perMurid, score: perScore}
          if (perScore>75){
              output[perkelas].push(obj)
          }
          
  
          
      }
  
    return output
  }
  
  console.log(graduates([
      { name: "Alexander", score: 100, class: "foxes" },
      { name: "Alisa", score: 76, class: "wolves" },
      { name: "Vladimir", score: 92, class: "foxes" },
      { name: "Albert", score: 71, class: "wolves" },
      { name: "Viktor", score: 80, class: "tigers" },
    ]));
  
  
  /*
  {
      foxes: [
        { name: 'Alexander', score: 100 },
        { name: 'Vladimir', score: 92 }
      ],
      wolves: [ { name: 'Alisa', score: 76 } ],
      tigers: [ { name: 'Viktor', score: 80 } ]
    }
  */
  