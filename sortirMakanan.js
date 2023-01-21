function foodAndDrink(foods) {
    let temp = {}
    for (let i = 0; i < foods.length; i++) {
      let perFood= foods[i];
      let temp1 = perFood.type
      if (temp[temp1] === undefined){
        temp[temp1] = []
    
      }
      temp[temp1].push(perFood.name)
      
    }
    
    
    return temp
    }
    
    let items = [
      {
        name: 'Coca Cola',
        type: 'drink'
      },
      {
        name: 'Nasi Padang',
        type: 'food'
      },
      {
        name: 'Aqua',
        type: 'drink'
      },
      {
        name: 'Karedok',
        type: 'food'
      },
      {
        name: 'Ayam bakar',
        type: 'food'
      },
      {
        name: 'Pocari Sweat',
        type: 'drink'
      }
    ]
    
    console.log(foodAndDrink(items))
    /**
     * {
     *  food: ['Nasi Padang', 'Ayam bakar', 'Karedok'],
     *  drink: ['Coca Cola', 'Aqua', 'Pocari Sweat']
     * }
     */
    
    