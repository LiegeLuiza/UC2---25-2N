//ATIVIDADE AVALIATIVA 
//A ESCOLHA DA FERRAMENTA 
//ATRIBUINDO PESOS PARA AS MINHAS VARIAVEIS
const velocidadeMadeira = 20
const velocidadePedra = 40
const velocidadeFerro = 60
const velocidadeDiamante  = 80 
//o que eu vou usar para minerar 
//usando o const e nao o let, pq n vou mudar o valo da minha variavel
const blocoMinerar1 = "minerio de diamante"

//agora vamos imprimir qual a melhor ferramenta para ser usada com base no bloco 
// if, SE 
if(blocoMinerar1 == "minerio de diamante"){
    console.log("use picareta de diamante:velocidade "+ velocidadeDiamante)
//if else para definir a ferramenta ideal

} else if (blocoMinerar1 == "obsidiana"){//se fosse obsidiana
    console.log("picareta de ferro ou pedra é ideal:velocidade" + velocidadeDiamante)

}else if (blocoMinerar1="pedra"){ //se fosse pedraa
    console.log("picareta de ferro ou pedra é o ideal: velocidade"+velocidadeFerro)
}
else{ //SE NAO for nenhum dos citados acima, a mensagem que vai aparecer vai ser essa 
    console.log("qualquer ferramenta funciona, mas a de madeira é a mais simples") 
}
// o else serve para se caso NAO for alguma daquelas ferramentas do if




//DESAFIO 2
const danoEspada = 6 //(dano base)
const forcaEncantamento = 1.5 //(multiplicador),
const armaduraInimiga = 2 //(redução de dano),
let vidaInimiga = 20 //(Creeper

const danoBruto = danoEspada*forcaEncantamento 
//* asterisco, usado na multiplicação, multiplicamos danoEspada vezes forca encantamento, para saber o resultado da variavel "dano bruto"

const danoFinal = danoBruto - armaduraInimiga
// aq subtraimos danoBruto menos ArmaduraInimiga para saber o resultado da variavel "danoFinal"
vidaInimiga -= danoFinal
if (vidaInimiga <= 0) {// <= usado para saber se a vida inimiga estiver menor ou igual a 0
    console.log("o creeper foi derrotado!Voce sobreviveu à explosao!") //SE for verdadeiro vai ser impresso essa mensagem 
}else console.log ("o creeper ainda esta vivo com " + vidaInimiga + " de vida, corra!")
//SE NAO for, vai ser impressa essa




//DESAFIO 3 
//combinações para criar materiais no meu inventario

const temDiamantes = true //mostrar se tem diamantes, true

let nivelMesaCrafting = 2 // mostrando o meu nivel mesa crafting, pois caso for menor que 3 ela nao permite o crafting da picareta de diamante 

const temGravetos = false //essa é pra mostrar se eu tenho gravetos ou nao, pois estrutura condicional que só permite o crafting da picareta de diamante se eu NAO tiver gravetos 

let temFerro = 10 //só consigo criar a picareta de diamantes se o meu valor de ferro for maior que 10 

if(nivelMesaCrafting<3 || !temGravetos&&temDiamantes&&temFerro>=8){
console.log("picareta de diamante criada!Hora de buscar obsidiana!")//isso vai aparecer SE caso todos os recursos acima batam certinho 
} else 
console.log("faltam recursos ou as condições de crafting nao sao atendidas!") 
//isso é SE NAO baterem os recursos
