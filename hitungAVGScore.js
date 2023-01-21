function hitungAvgScore(data) {
    let max= -Infinity
    let min= Infinity

    for (let i = 1; i < data.length; i++) {
        let total = 0
        let counter =0
        let perData = data[i];
        // console.log(perData);
        for (let j = 0; j < perData.length; j++) {
            if (typeof perData[j] === "number"){
                total +=perData[j]
                counter++
            }
        }

        // console.log(total,counter);
        total /= counter
        // console.log(total)
        if(total>max){
            max=total
        }
        if(total<min){
            min=total
        }
    }


    return [min, max]
  }
  
  let data1 = [
    ["LC1", "LC2", "LC3", "Final-Project", "Kelas"],
    [14970, 14950, 14985, 15004, "Arsenic"],
    [14860, 14769, 14890, 15050, "Barium"],
    [14780, 15010, 15002, 14630, "Carbon"],
    [14880, 14940, 14780, 15085, "Densensity"],
  ];
  
  let data2 = [
    ["LC1", "LC2", "LC3", "Final-Project", "Kelas"],
    [1400, 1450, 1461, 1477, "Alpha"],
    [1860, 1880, 1670, 1550, "Beta"],
    [1780, 1610, 1702, 1630, "Charlie"],
    [1880, 1940, 1780, 1885, "Delta"],
  ];
  
  let data3 = [
    ["LC1", "LC2", "LC3", "Final-Project", "Kelas"],
    [150, 151, 160, 300, "Javascript"],
    [400, 359, 339, 440, "CSS"],
    [145, 141, 150, 170, "DOM"],
    [540, 659, 879, 700, "HTML "],
  ];
  
  console.log(hitungAvgScore(data1));
  // [ 14855.5, 14977.25 ] avg terkecil dan avg terbesar
  
  console.log(hitungAvgScore(data2));
  // [ 1447, 1871.25 ]
  
  console.log(hitungAvgScore(data3));
  // [ 151.5, 694.5 ]