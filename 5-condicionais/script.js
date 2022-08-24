var person = {
  name: 'Moisés',
  age: 18,//-->Alterar o valor 
}

function checkAge (list){
  console.log('A sua idade é: ' + list.age)
  if (list.age >= 18){
    console.log('Você é maior de idade')
  }else{
    console.log('Você é menor de idade')
  }
}

checkAge(person)