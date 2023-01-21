function filterByElement(filter, data) {
    let output = {
      generation: '',
      owners: [],
      pokemon: [],
      element: []
    };
    //your code here
    // console.log(data.element);
    // console.log(filter);
  
    for (let i = 0; i < data.element.length; i++) {
      let perData = data.element[i];
      let penampung = ""
      output.generation=data.generation
      for (let j = 0; j < perData.length; j++) {
       
        // console.log(perData[j]);
        if(perData[j] !== "-"){
          penampung+= perData[j]
        
        } else{
          if(penampung===filter){
            output.owners.push(data.owners[i]);
            output.pokemon.push(data.pokemon[i]);
            output.element.push(data.element[i]);
          }
          // console.log(penampung);
          penampung=""
         
        }
      }
      // console.log(penampung, "===");
      if(penampung===filter){
        output.owners.push(data.owners[i]);
        output.pokemon.push(data.pokemon[i]);
        output.element.push(data.element[i]);
      }
  
    }
  
  
    return output
  }
  
  function findPokemon(element, data) {
    if(!element || typeof data !== "object"){
      return `Input Invalid`
    }
   
    let elementData = filterByElement(element, data)
     // console.log(elementData);
     if(elementData.owners.length ===0){
      return `Pokemon not found`
    }
    let hasil =[]
  
    for (let i = 0; i < elementData.element.length; i++) {
      // console.log(elementData.element[i]);
     hasil.push([elementData.generation, elementData.owners[i], elementData.pokemon[i], elementData.element[i]]);
      
    }
  
    return hasil
  }
  
  
  
  const rawDatas = {
    generation: 'Generation I',
    owners: [
      'Ash Kecthup',
      'Misty',
      'Brock',
      'Professor Oak'
    ],        
    pokemon: [
      'Charizard',
      'Wigglepuff',
      'Ninetails',
      'Pidgeot'
    ],
    element: [
      'Fire-Flying',
      'Normal-Fairy',
      'Fire',
      'Normal-Flying'
    ]
  };
  
  // console.log(filterByElement('Fire', rawDatas));
  // console.log(filterByElement('Normal', rawDatas));
  // console.log(filterByElement('Flying', rawDatas));
  /*
  let output = {
      generation: 'Generation I',
      owners: ["Ash Ketcup", "Brock"],
      pokemon: ["Charizard", "Ninetails"],
      element: ["Fire-Flying", "Fire"]
    };
  */
  
  // console.log(findPokemon("Fire", rawDatas));
  /*
  [
    [ "Generation I", "Ash Kecthup", "Charizard", "Fire-Flying" ],
    [ "Generation I", "Brock", "Ninetails", "Fire" ]
  ]
  */
  
  console.log(findPokemon("Flying", rawDatas));
  /*
  [
    [ "Generation I", "Ash Kecthup", "Charizard", "Fire-Flying" ],
     [ "Generation I", "Professor Oak", "Pidgeot", "Normal-Flying" ]
  ]
  */
  
  // console.log(findPokemon("Poison", rawDatas));
  // 'Pokemon not found'
  
  // console.log(findPokemon("", rawDatas));
  // 'input invalid'
  
  console.log(findPokemon());
  // 'input invalid'
  
  
  
  /*
  Release 1 - filterByElement
  Function ini berfungsi untuk memfilter elemen array pada objek yang didalamnya terdapat elemen yang nilainya sama dengan input string yang diberikan.
  
  Function ini menerima 2 parameter input yaitu:
  
  filter berupa string
  data berupa object
  Function filterByContent memiliki output berupa object.
  
  Contoh:
  
  function filterByelement(filter, data) {
    let output = {
      generation: '',
      owners: [],
      pokemon: [],
      element: []
    };
    // write your code here
  }
  
  const rawDatas = {
    generation: 'Generation I',
    owners: [
      'Ash Kecthup',
      'Misty',
      'Brock',
      'Professor Oak'
    ],        
    pokemon: [
      'Charizard',
      'Wigglepuff',
      'Ninetails',
      'Pidgeot'
    ],
    element: [
      'Fire-Flying',
      'Normal-Fairy',
      'Fire',
      'Normal-Flying'
    ]
  };
  
  console.log(filterByElement('Fire', rawDatas));
  /*
  let output = {
      generation: 'Generation I',
      owners: ["Ash Ketcup", "Brock"],
      pokemon: ["Charizard", "Ninetails"],
      element: ["Fire-Flying", "Fire"]
    };
  */
  
  // console.log(filterbyElement('Normal', rawDatas));
  /*
  let output = {
      generation: 'Generation I',
      owners: ["Misty", "Professor Oak"],
      pokemon: ["Wigglepuff", "Pidgeot"],
      element: ["Normal-Fairy", "Normal-Flying"]
    };
  */
  
  // console.log(filterbyElement('Poison', rawDatas));
  /*
  let output = {
      generation: 'Generation I',
      owners: [],
      pokemon: [],
      element: []
    };
  */
  
  /*
  Release 2 - findPokemon
  Function ini merupakan function utama dimana disinilah function-function sebelumnya dipanggil dan digunakan.
  
  Function ini menerima 2 parameter input yaitu:
  
  element berupa string
  data berupa object
  Function findPokemon memiliki output berupa array multi dimensi.
  
  Jika,
  
  hasil dari function filterByElement, untuk property pokemon berupa array kosong
  maka kembalikan output berupa 'pokemon not found'
  
  Jika,
  
  parameter input pokemon berupa string kosong
  parameter input pokemon dan data berupa undefined
  maka kembalikan output berupa 'input invalid'.
  */