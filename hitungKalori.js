//RELEASE 0 -CONVERT FOOD

// let food = [
//   'Pisang Goreng@200',
//   'Biskuit',
//   'Bubur Ayam@300',
//   'Odading@60',
//  'Bakso@360',
//  'Tahu Goreng@20',
//  'Nasi Padang@190',
//  'Ayam Bakar',
//  'Tempe Goreng@20',
//  'Telur Rebus'
//  ]

function convertFood(foods) {
  let output=[]
  for (let i = 0; i < foods.length; i++) {
    let kata=foods[i]
    let temp=""
    let box=[]
    for (let j = 0; j <= kata.length; j++) {
      let char =kata[j]
      // console.log(char);
      if(char !== "@" && char !== undefined){
        temp+=char
      } else{
        box.push(temp)
        temp=""
      
      }
      
    }
    // console.log(box);
    output.push(box)
   
    
  }

  return output
}

// console.log(convertFood(food));

/* 
 [ 
  ['Pisang Goreng', '200'], 
  ['Biskuit'], 
  ['Bubur Ayam', '300'], 
  ['Odading', '60'], 
  ['Bakso', '360'], 
  ['Tahu Goreng', '20'], 
  ['Nasi Padang', '190'], 
  ['Ayam Bakar'], 
  ['Tempe Goreng', '20'], 
  ['Telur Rebus'] 
  ] 
 */

//RELEASE 1-FILTER FOOD
/* ['Pisang Goreng', '200'] => makanan ini memiliki total kalori '200'. 

['Biskuit'], ⇒ makanan ini tidak memiliki total kalori dikarenakan hanya memiliki satu data didalamnya.
*/

//  const food =  [
//   ['Pisang Goreng', '200'],
//   ['Biskuit'],
//   ['Bubur Ayam', '300'],
//   ['Odading', '60'],
//   ['Bakso', '360'],
//   ['Tahu Goreng', '20'],
//   ['Nasi Padang', '190'],
//   ['Ayam Bakar'],
//   ['Tempe Goreng', '20'],
//   ['Telur Rebus']
//   ]

function filterFoods(foods) {
  let output=[]
  for (let i = 0; i < foods.length; i++) {
    // console.log(foods[i]);
    let perFood =foods[i]
    let temp=[]
    if (perFood.length>=2){
      // console.log(perFood);
        // console.log(Number(perFood[1]));
        temp.push(perFood[0], Number(perFood[1]))
        // console.log(temp);
        output.push(temp)
    }
    
    
  }
  return output
}

// console.log(filterFoods(food));

/*
 [ 
 ['Pisang Goreng', 200],
 ['Bubur Ayam', 300], 
 ['Odading', 60], 
 ['Bakso', 360], 
 ['Tahu Goreng', 20], 
 ['Nasi Padang', 190],
 ['Tempe Goreng', '20'], 
]
*/

//RELEASE 2- STATUS FOOD

/*
Function ini akan menerima satu buah parameter, yaitu foods merupakan array multi dimensi berisi kumpulan makanan yang dimakan,
Function ini akan memberikan kategori untuk setiap foods dengan aturan:
-Jika total kalori makanan melebihi 200 maka food tersebut memiliki status high.
Jika total kalori makanan di antara 90 hingga 200 maka food tersebut memiliki status medium.
- Jika harga makanan dibawah 90 maka food tersebut memiliki status low.
*/

// const food = [
// ['Pisang Goreng', 200],
// ['Bubur Ayam', 300],
// ['Odading', 60],
// ['Bakso', 360],
// ['Tahu Goreng', 20],
// ['Nasi Padang', 190],
// ['Tempe goreng', 20]
// ]

function statusFood(foods) {
  // console.log(foods);
  let output=[]
  for (let i = 0; i < foods.length; i++) {
    let makanan = foods[i]
    let item = makanan[0]
    let kalori=makanan[1]
    let temp=[]
    // console.log(makanan[1]);
    if(kalori > 200){
      temp.push(item, kalori, "high")
    } else if (kalori >=90 && kalori <=200){
      temp.push(item, kalori, "medium")
    } else if (kalori <90){
      temp.push(item, kalori, "low")
    }
    // console.log(temp);
    output.push(temp)
    
    
  }
  return output
}

// console.log(statusFood(food));
/* [
['Pisang Goreng', 200, 'medium'],
['Bubur Ayam', 300, 'high'],
['Odading', 60, 'low'],
['Bakso', 360, 'high'],
['Tahu Goreng', 20, 'low'],
['Nasi Padang', 190, 'medium'], 
['Tempe goreng, 20, 'low']
 ]
*/

//RELEASE 3- STASTISIC FOOD
/*
Function ini akan menerima satu parameter berupa array 2 dimensi kumpulan foods. Function ini akan mengembalikan sebuah object menandakan jumlah food yang memiliki status high, medium dan juga low.

*/

// const food = [
// ['Pisang Goreng', 200, 'medium'],
// ['Bubur Ayam', 300, 'high'],
// ['Odading', 60, 'low'],
// ['Bakso', 360, 'high'],
// ['Tahu Goreng', 20, 'low'],
// ['Nasi Padang', 190, 'medium'],
// ['Tempe goreng', 20, 'low']
// ]

function statisticFood(foods) {
  let output={}
  for (let i = 0; i < foods.length; i++) {
    // console.log(foods[i]);
    let perArr= foods[i]
    // console.log(perArr[2]);
    if (perArr[2]=== "high"){
      if (!output[perArr[2]]) {
        output[perArr[2]]=0
      }
      output[perArr[2]]++
    } else if (perArr[2]=== "medium"){
      if (!output[perArr[2]]) {
        output[perArr[2]]=0
      }
      output[perArr[2]]++
    } else if (perArr[2]=== "low"){
      if (!output[perArr[2]]) {
        output[perArr[2]]=0
      }
      output[perArr[2]]++
    } 

    
  }
  return output
}
// console.log(statisticFood(food));
/*
 {
medium: 2,
high: 2,
low: 3
}
*/

//RELEASE 4 - GENERATE FOOD CALORIE
const food = [
  "Pisang Goreng@200",
  "Biskuit",
  "Bubur Ayam@300",
  "Odading@60",
  "Bakso@360",
  "Tahu Goreng@20",
  "Nasi Padang@190",
  "Ayam Bakar",
  "Tempe Goreng@20",
  "Telur Rebus",
];


function generateFoodCalorie(foods) {
  let convert = convertFood(foods)
  let filter =filterFoods(convert)
  let status = statusFood(filter)
  let statistic= statisticFood(status)

  
  let output={statistic, foods:[]}
  // console.log(status);
  for (let i = 0; i < status.length; i++) {
    // console.log(status[i][0]);
    let food=status[i]
    let name=status[i][0]
    let totalCalorie= status[i][1]
    let keterangan = status[i][0]
    let obj = {name, totalCalorie, status: keterangan}
    output.foods.push(obj)
    
  }

  return output

}

console.log(generateFoodCalorie(food));

/*
  {
  statistic: {medium: 2, high: 2, low: 3 },
  foods: [
  { name: 'Pisang Goreng', totalCalorie: 200, status: 'medium' },
  { name: 'Bubur Ayam', totalCalorie: 300, status: 'high' },
  { name: 'Odading', totalCalorie: 60, status: 'low' },
  { name: 'Bakso', totalCalorie: 360, status: 'high' },
  { name: 'Tahu Goreng', totalCalorie: 20, status: 'low' },
  { name: 'Nasi Padang', totalCalorie: 190, status: 'medium' },
  { name: 'Tempe Goreng', totalCalorie: 20, status: 'low' }
  
  */
