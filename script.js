//PRIMEIRO EXERCÍCIO//
let instrutores = ["Brendon", "Leandro", "Karynne", "Pedro", "Joy" ]
console.log(instrutores)
//PRIMEIRO EXERCÍCIO//

//SEGUNDO EXERCÍCIO//
instrutores.unshift("Dandara")
console.log(instrutores)
//SEGUNDO EXERCÍCIO//

//TERCEIRO EXERCÍCIO//
instrutores.pop()
console.log(instrutores)
//TERCEIRO EXERCÍCIO//

//QUARTO EXERCÍCIO//
instrutores.push("fulano", "ciclano")
console.log(instrutores)
//QUARTO EXERCÍCIO//

//QUINTO EXERCÍCIO//
instrutores.shift()
console.log(instrutores)
//QUINTO EXERCÍCIO//

//SEXTO EXERCÍCIO//
let numbers = [7,5,6,3,8,9,2,1,4]
numbers.sort()
console.log(numbers)
//SEXTO EXERCÍCIO//

//SETIMO EXERCÍCIO//
let eu = {
    Nome: "Rodrigo",
    Idade: 23,
    Nacionalidade: "Brasileiro"
}
//SETIMO EXERCÍCIO//

//OITAVO EXERCÍCIO//
eu.Estado = "São Paulo"
//OITAVO EXERCÍCIO//

//NONO EXERCÍCIO//
delete eu.Estado
//NONO EXERCÍCIO//

//DÉCIMO EXERCÍCIO//
console.log(eu)
//DÉCIMO EXERCÍCIO//

//DÉCIMO PRIMEIRO EXERCÍCIO//
let cadastro = [
{nome:"Martin L. king Jr.", idade:39, telefone:"98765-4321", amigos:["Malcom X", "Rosa Parks", "Coretta King", "Nelson Mandela"]}, 

{nome:"Yudi", idade:30, telefone:"4002-8922", amigos:["Priscila", "Maisa", "Silvio Santos", "Silvia Abravanel"]},  

{nome:"Karl Marx", idade:64, telefone:"12345-6789", amigos:["Leon Trótski", "Lenin", "Friedrich Engels", "Max Weber"]}, 

{nome:"Jesus", idade:33, telefone:"00000-0000", amigos:["Buda", "Maomé", "Oxalá", "Jah"]},

{nome:"Farrokh Bulsara", idade:"45", telefone:"54321-6789", amigos:["Brian May", "John Deacon", "Roger Taylor", "Mike Grose"]}

]
//DÉCIMO PRIMEIRO EXERCÍCIO//

//DÉCIMO SEGUNDO EXERCÍCIO//
console.log(cadastro[0].amigos[0])
console.log(cadastro[1].amigos[1])
console.log(cadastro[2].amigos[2])
console.log(cadastro[3].amigos[3])
console.log(cadastro[4].amigos[3])
//DÉCIMO SEGUNDO EXERCÍCIO//
