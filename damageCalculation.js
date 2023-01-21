
function attack(damage) {
    return damage - 2
   }
   
   function damageCalculation(numberOfAttacks, damagePerAttack) {
   
    let sisaDamage= attack(damagePerAttack)
    // console.log(sisaDamage);
    let output = sisaDamage *numberOfAttacks
  
  
    return output
   }
  
  
   console.log(damageCalculation(3, 10));
   // output 207
  // penjelasan 10-2  sama dengan 8, terus kali 3
  
  