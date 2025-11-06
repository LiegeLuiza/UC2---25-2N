//EXEMPLOOO
/*function imprimirOlaMundo () {
    console.log("ola mundo")
}
//invocando a função 
imprimirOlaMundo();

//imprimir a frase no console

//1
function imprimirBemVindoTurma252N (){
console.log("bem vinda turma 25 2N!")
}
imprimirBemVindoTurma252N();
 //invocando o que vai aparecer no console 

 //2
function calcula (num1, num2){
const resultado = num1 + num2
console.log(resultado)
}
calcula(5,5);
//invocando o resultado que vai aparecer no console, num1 =5 num2 =5, resulta= 10

//3
function dobroDeSeis (numero1, numero2){
const resulta = numero1 * numero2
console.log(resulta)
}
dobroDeSeis(2,6)
//invocando dobro de seis, =12 

//EXERCICIO 
function mensagem(nome){
    console.log (`ola ${nome}`)
}
mensagem ("julio")
 mensagem("liege")
  mensagem("valentina")

  //EXERCICIO 
  function numeros(numero1, numero2){
const numero = numero1 + numero2
console.log(`A soma é ${numero}`)

  }
  numeros(2, 5)

  //ESCOPO 
  //escopo global 

  const a = 1 
  function imprimeVariavel(){
    const b = 2 
    console.log("a variavel a:", a)
    console.log("a variavel b:", b)

  }
   imprimeVariavel()
   console.log("a variavel a:", a)//aq esta no global 
   console.log("a variavel b:", b) //b não foi impresso pois estava no escopo local 

   //EXEMPLO RETORNO DE ESCOPO 
   function calcuaArea (altura, largura){
    let area  = altura * largura
    return area 
   }

   let resultadoArea = calcuaArea(2,3)

console.log(calcuaArea(2,3))

//EXERCICIOS 1001
function doisNumeros (nu1, nu2){
    const soma = nu1+nu2
    return soma 
}
const areaCalculada = doisNumeros(5, 5)
console.log(doisNumeros(5, 5))*/
/*ex 2 
let arrayNumeros = [1, 2, 3, 4, 5, 6]
  function divisao (array)/*pode receber QUALQUER tipo de array {
    let novoArray = []
    novoArray.push(array[0] / 2 )
    novoArray.push(array[array.length-1]/2)
    return novoArray//resturn para pegar o que tem dentro do local 

  }
  /*console.log(divisao(arrayNumeros))*/



//exercicio 1 com sintaxe de expressão de função 
/*EXERCICIOS 1001
function doisNumeros (nu1, nu2){
  const soma = nu1+nu2
  return soma 
}
const areaCalculada = doisNumeros(5, 5)
console.log(doisNumeros(5, 5))*/

/*const doisNumeros = function() {
  const nu1=5
  const num2=5
  const resultado =nu1+num2 
console.log(`a soma é ${soma}`)
 }

 //ativ 2 
 const Dobro=()=>{
  let dobroo= 5*5 
  console.log("o dobro sera", dobroo)
 }
*/

//DETERMINE O MONSTRO 
function determinaMonstro (temPeleGelada, transformaComLuaCheia, brilhaAoSol, temSedeDeSangue){
  /*se*/ if (temPeleGelada,brilhaAoSol,temSedeDeSangue) {
    console.log("você é um vampiro!")
  temPeleGelada(); brilhaAoSol(); temSedeDeSangue();
  } else 

  console.log("voce nao é um vampiro!")

  if (transformaComLuaCheia){
  console.log("voce é um lobisomen!")
  transformaComLuaCheia();
}else

console.log("não? entao voce nao é um lobisomen")

   






