const person= {
    name: 'Isis',
    age: 30,
    weight: 72.5,
    isAdmin: true
}

console.log(`${person.name} tem ${person.age} anos.`)
console.log(`${person.name} pesa ${person.weight}Kg.`)

if (person.isAdmin == true) {
    console.log(`${person.name} é Admin.`)
}