// function person () {
//   console.log('Bom dia')
// }
// person()


// function person (name) {
//   console.log('Bom dia, ' + name)
// }
// person('Moisés')
// person('nome2')
// person('nome3')
// person()//Undefined


// function person (name = 'Moisés') {
//   console.log('Bom dia, ' + name)
// }
// person()


function person (name = 'Moisés') {
  return 'Bom dia, ' + name
}

// console.log(person())//OU-->

var bomDia = person('Olá')
console.log(bomDia)