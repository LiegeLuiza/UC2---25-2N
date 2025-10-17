/*let personagemHarry = prompt ("aluno(a) hogwarts:")
switch(personagemHarry){
    case 'hermione':
    console.log("grifinoria")
    console.log("entrou no case1")
    break 

    case 'ana':
    console.log("lufa-lufa")
    console.log("entrou no case2")
break

case 'luna':
    console.log("corvinal")
    console.log("entrou no case3")
    break

    case 'narcisa':
    console.log("sonserina")
    console.log("entrou no case4")
break 

case 'dolores':
    console.log("sonserina")
    connsole.log("entrou no case5")

    default: 
    console.log("aluna nao encontrada")
}

//EXEMPLO 
let condicao1 = false
let condicao2 = true

if(condicao1&& !condicao2){
console.log("executou do if do operador && AND")

}

if(condicao1||condicao2){
    console.log("executou o if do operador ||OR")

}

if(!condicao1){
    console.log("executou o if do operador ! NOT")
}

//EXERCICIO 2

let ensinoMedio = prompt ("voce ja concluiu o ensino medio?").toLowerCase()==='sim'
let idade = Number (prompt ("digite sua idade:"))>=18
let cursandoFaculdade = prompt ("voce ja esta estudando em outra faculdade").toLowerCase()==='sim'
 
if(ensinoMedio&&idade&&!cursandoFaculdade){
    console.log("voce pode estudar na faculdade!")

}else{
    console.log("voce nao pode estudar nessa faculdade")
}*/

//EXERCICIOS DE FIXAÇÃO 

const respostaDoUsuario = prompt ("digite o número que você quer testar")
const numero = Number (respostaDoUsuario)

if (numero%2===0) {
    console.log("passou no teste ")//
}else{
    console.log("nao passou no teste")
}

//exercicios de fixação 
//MERCADO 
let fruta = prompt ("escolha uma fruta")
let preco
switch (fruta) {
  case "laranja":

  preco = 3.5 
  break;

case "maca":
preco = 2.25

break;
case "uva":
    preco = 0.30 
    break
    case "pera":
        preco=5.5
        break; //BREAK PARA O ITEM c.
        default:
            preco=5 
            break;
}
console.log("o preço da fruta", fruta, "é", "RS", preco)
//o codigo serve para mostrar o preço das frutas que o usuario quiser 
//dependendo do que o da fruta que o usuario digitar o preço vai ser impresso no console 


//MENSAGEM SECRETA 
const Numero = Number(prompt("digite o primeiro numero:"))
let mensagem
if(numero>0) {
console.log("esse numero passou no teste!!")
 mensagem = "essa mensagem é secreta!!!"

}
console.log(mensagem) /* antes se eu colocasse um numero menor que zero apareceria como indefined, pq a minha variavel "let mensagem" estava dentro das chaves({}), e assim ela meio que que "some", e no console não vai aparecer, depois eu coloquei o "let mensagem" fora das chaves */



//exercicos de escrita de codigo 
