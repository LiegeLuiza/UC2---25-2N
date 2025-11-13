//interpretação de código 
//o que vai ser impresso no console

const filme = {
nome: "auto da compadecida",
ano: 2000,
elenco:[
"matheus Nachtergaele", "selton mello", "denise fraga", "virginia cavendish"
],
transmissoesHoje: [
{canal: "telecine", horario: "21h"},
{canal: "canal brasil", horario: "19"}, 
{canal: "globo", horario: "14H"}
]
}
console.log(filme.elenco[0])
//vai ser impresso matheus 
console.log(filme.elenco[filme.elenco.length -1])
//vai ser impresso o virginia 
console.log(filme.transmissoesHoje[2])
//vai ser impresso o horario da globo

// EXERCICIO DE FIXAÇÃO 2 
const cachorro = {
    nome: "juca", 
    idade: 3, 
    raca: "SRD"
}
const gato = {...cachorro, nome: "Juba"}
const tartaruga = {... gato, nome: gato.nome.replaceAll("a", "o")
}

console.log(cachorro)
//vai ser impresso o nome juba
console.log(gato)
//vai ser impresso juba
console.log(tartaruga)
//

//EXERCICIO FIXAÇÃO 3 
function minhaFuncao(objeto, propriedade){
    return  objeto [propriedade]
}
const pessoa = {
    nome: "caio",
    idade: 23,
    backender: false

}
console.log(minhaFuncao(pessoa, "backender"))
console.log(minhaFuncao(pessoa, altura))
//vai ser impresso false 

//EXERCICIOS DE FIXAÇÃO 4 
const nome = {... []

}

