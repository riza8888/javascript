function sittingArrangement(person, column) {
    if (column === 0) {
      return `Invalid number`
    }
    let output = []
    let temp = []
    let count = 0
    for (let i = 0; i < person.length / column; i++) { // i<2.5. 5
      for (let j = 0; j < column; j++) { // j<2
  
        if (person[count] !== undefined) {
          temp.push(person[count])
        } else if (person[count] === undefined) {
          temp.push("kursi kosong")
  
        }
  
        count++
  
      }
  
      output.push(temp)
      temp = []
    }
  
    return output
  }
  
  
  
  console.log(sittingArrangement(["Juli", "Nisa", "Desi", "Ulfa", "Puji"], 2));
  
  
  
  
  
  
  /*output
  
   [ [ 'Juli', 'Nisa' ], [ 'Desi', 'Ulfa' ], [ 'Puji', 'Kursi Kosong' ] ]
  
   */
  
   console.log(sittingArrangement(["Lukman", "Adam", "Dimas", "Hansin", "Orion" ],4));
  
   /*
  
  [
    [ 'Lukman', 'Adam', 'Dimas', 'Hansin' ],
    [ 'Orion', 'Kursi Kosong', 'Kursi Kosong', 'Kursi Kosong' ]
  ]
  
  STDOUT
  
   */
  