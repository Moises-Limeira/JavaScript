var person = {
  name: 'Moisés',
  age: 17
}

// Função Pura 
function anosMaiorIdade (person) {
  return 18 - person.age
}

// Função impura
function adicionarIdade (person) {
  person.age = person.age + 1
}

// Método Impuro 
adicionarIdade(person)

var anos = anosMaiorIdade(person)
console.log(anos)