const professor = {
nome: "lucas",
idade: 33,
email: "lucas.g.f.alves@gmail.com"

}
console.log(professor.nome)
console.log(professor["idade"])
console.log(professor.email)


const laptop = {
tela: 15, //virgula para separar as propriedades 
processador: "ryzen",
marca: "lenovo",
modelo: "K14" //a ultima n precisa por virgula 
}

console.log("marca:", laptop.marca)

//EXERCICIO 
const filme = {
direção: "James wan",
nome: "invocação do mal 1 ", 
ano: "2013",
listaElenco: ["vera farmiga", "patrick wilson"],
jaAssistiu: "sim"
}
//notacao de ponto 
console.log(filme.direção)
console.log(filme.nome)
console.log(filme.ano)
console.log(filme["listaElenco"])
console.log(filme["jaAssistiu"])

//EXERCICIO NUM 2 
const pessoa = {
nome: "valentina loca",
idade: "17",
gostoMusical: "metal"

}

console.log("o nome da pessoa é", pessoa.nome, "ela tem", pessoa.idade, "e gosta muito de", pessoa.gostoMusical)


//EXEMPLO ARRAY DE OBJETOS 
const professores = [
{nome: "lucas", modulo:2},
{nome: "dal", modulo:1},
{nome: "valter", modulo:1}

]
console.log("o professor", professores[0].nome, "deu o modulo", professores[0].modulo)

//EXERCICIO 3 
 filme = {
    direção: "James wan",
    nome: "invocação do mal 1 ", 
    ano: "2013",
    listaElenco: ["xuxa", "patrick wilson"],
    listaPersonagens: ["lorrayne", "ed warren"],
    jaAssistiu: "sim"


    }
    //notacao de ponto 
    console.log(filme.direção)
    console.log(filme.nome)
    console.log(filme.ano)
    console.log(filme["listaElenco"])
    console.log(filme.listaElenco=[0], listaPersonagens=[0])
    console.log(filme["jaAssistiu"])
    




