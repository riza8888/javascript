/*splitting()
Untuk memisahkan nama hero dan tipenya, implementasikan function splitting() yang telah diberikan di mana hasil dari function tersebut adalah array satu dimensi.
[‘Razor-Ranged’, ‘Meepo-Melee’, ‘Invoker-Ranged’]



Jika input adalah string kosong ('') maka return array kosong

[
  [ <daftar_hero_dengan_tipe_ranged> ],
  [ <daftar_hero_dengan_tipe_melee> ]
]


*/

function splitting(input) {
    let array = [];
    let temp = "";
    for (let i = 0; i <= input.length; i++) {
      let perStr = input[i];
      //  console.log(perStr);
  
      if (perStr === "," || perStr === undefined) {
        array.push(temp);
        temp = "";
      } else if (perStr !== ",") {
        temp += perStr;
      }
    }
    console.log(array);
  
    return array;
  }
  
  function meleeRangedGrouping(str) {
    let output = [];
    let data = splitting(str);
    // console.log(data);
    let array1 = [];
    let penampung = "";
    
  
    let range = [];
    let melee = []
    let temp = ""
    for (let j = 0; j < data.length; j++) {
      let perArr = data[j];
      //  console.log(perArr);
      for (let k = 0; k < perArr.length; k++) {
        let char = perArr[k];
  
      //  console.log(char);
        if (char === "-") {
          if (perArr[k + 1] === "R") {
            range.push(temp)
            temp = ""
            break
          } else if (perArr[k+1]=== "M"){
            melee.push(temp)
            temp = ""
            break
          }
        } else {
          temp += char
  
        }
  
        // console.log(array1[index], "====", index, k, array1 === "R");
        // console.log(index);
      }
    }
    // console.log(range)
    // console.log(melee);
    output.push(range, melee)
    return output;
  }
  // console.log(output);
  
  // console.log(
  //   meleeRangedGrouping(
  //     "Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged"
  //   )
  // );
  // output [ [ 'Razor', 'Invoker', 'Sniper' ], [ 'Meepo', 'Axe' ] ]
  
  console.log(meleeRangedGrouping("Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged"));
  // [ [ 'Drow Ranger', 'Chen', 'Dazzle', 'Io' ], [] ]
  