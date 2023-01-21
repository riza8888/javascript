/*
============================
Gotta Group Them All
============================
[INSTRUCTIONS]
Terdapat fungsi gottaGroupEmAll yang menerima satu parameter berupa array of object, pada tiap object terdapat 3 key yaitu name, status dan type,
fungsi ini akan mengeluarkan output berupa object dan mengelompokkan tiap pokemon sesuai dengan typenya, untuk lebih jelasnya silahkan lihat contoh dibawah ini.
[EXAMPLE]
input: [
  {
    name: 'Beedrill',
    status: { attack: 72, hp: 73, defense: 75 },
    type: 'Flying'
  },
  {
    name: 'Gliscor',
    status: { attack: 70, hp: 95, defense: 85 },
    type: 'Flying'
  },
  {
    name: 'Caterpie',
    status: { attack: 30, hp: 45, defense: 55 },
    type: 'Bug'
  }
]
proses: mengelompokkan berdasarkan type dan juga mencari pokemon dengan overall status terbaik di tiap kategorinya
output: 
{
  Flying: {
    list: [ 'Beedrill', 'Gliscor' ],
    bestStatus: { name: 'Beedrill', overallStat: 220 } //overall stat di dapat dari menjumlahkan attack hp dan defense pokemon
  },
  Bug: {
    list: [ 'Caterpie' ],
    bestStatus: { name: 'Caterpie', overallStat: 130 }
  }
}
[RULE]
- DILARANG MENGGUNAKAN FUNGSI ES6 map, reduce, filter
- DILARANG MENGGUNAKAN FOR IN DAN FOR OF
*/
function gottaGroupEmAll(pokemonList) {
    // proses
    let obj = {} // penampung obj untuk result
    for(let i = 0; i < pokemonList.length; i++){ //akses perPokemon
      let perPokemon = pokemonList[i] // tampung perPokemon
      // console.log(perPokemon);
      let typePokemon = perPokemon.type //ini untuk mengetahui type pokemon dari msg" obj
      let statusPokemon = perPokemon.status // untuk mengambil status didalam obj perPokemon
      let totalStatus = statusPokemon.attack + statusPokemon.hp + statusPokemon.defense // dilakukan concat untuk mencari total statusnya atau bisa menggunakan for in
      // let total = 0
      // for(let key in statusPokemon){
      //   total += statusPokemon[key]
      // }
      if(obj[typePokemon] === undefined){ // kondisi ini untuk membuat property di obj sesuai dengan type pokemon yang ada
        obj[typePokemon]= { // ini template dari value property type ditiap objnya karena propertynya statis
          List : [],
          bestStatus: {
            name: "",
            overallStatus: 0
          }
        }
      }
      obj[typePokemon].List.push(perPokemon.name) // ini mengisi nama pokemon sesuai dengan type pokemon kedalam objnya dgn cara dipush
      if(obj[typePokemon].bestStatus.overallStatus < totalStatus){ // lalu kondisi ini untuk mencari status terbesar pokemon
        obj[typePokemon].bestStatus.name = perPokemon.name // ketika bertemu dengan status yang lebih besar namanya diganti
        obj[typePokemon].bestStatus.overallStatus = totalStatus // sama namun statusnya ini yang diganti
      }
    }

    return obj
  }
  let pokemonList = [
  {
    name: 'Charizard',
    status: { attack: 84, hp: 78, defense: 78 },
    type: 'Flying'
  },
  {
    name: 'Talonflame',
    status: { attack: 81, hp: 78, defense: 71 },
    type: 'Flying'
  },
  {
    name: 'Gengar',
    status: { attack: 65, hp: 60, defense: 60 },
    type: 'Ghost'
  },
  {
    name: 'Grimer',
    status: { attack: 80, hp: 80, defense: 50 },
    type: 'Poison'
  },
  {
    name: 'Arbok',
    status: { attack: 95, hp: 60, defense: 69 },
    type: 'Poison'
  }
  ]
  console.log(gottaGroupEmAll(pokemonList))
  //output:
  // {
  //   Flying: {
  //     list: [ 'Charizard', 'Talonflame' ],
  //     bestStatus: { name: 'Charizard', overallStat: 240 }
  //   },
  //   Ghost: {
  //     list: [ 'Gengar' ],
  //     bestStatus: { name: 'Gengar', overallStat: 185 }
  //   },
  //   Poison: {
  //     list: [ 'Grimer', 'Arbok' ],
  //     bestStatus: { name: 'Arbok', overallStat: 224 }
  //   }
  // }
  let pokemonList2 = [
  {
    name: 'Beedrill',
    status: { attack: 72, hp: 73, defense: 75 },
    type: 'Flying'
  },
  {
    name: 'Gliscor',
    status: { attack: 70, hp: 95, defense: 85 },
    type: 'Flying'
  },
  {
    name: 'Caterpie',
    status: { attack: 30, hp: 45, defense: 55 },
    type: 'Bug'
  }
  ]
  console.log(gottaGroupEmAll(pokemonList2))
  //output: 
  // {
  //   Flying: {
  //     list: [ 'Beedrill', 'Gliscor' ],
  //     bestStatus: { name: 'Beedrill', overallStat: 220 }
  //   },
  //   Bug: {
  //     list: [ 'Caterpie' ],
  //     bestStatus: { name: 'Caterpie', overallStat: 130 }
  //   }
  // }