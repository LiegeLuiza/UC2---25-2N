/*let array = [11, 15, 18, 14, 12,13]
let pares = 0 
for(let i=0; i<6; i++){
    if(array[i]%2===0) {
        pares+=array[i]
    }
}
console.log("a soma dos numeros pares é " + pares)
USANDO ESSE PARA PERCORRER O INDICE DO ARRAY
*/

//for of 
/*const numeros = [100, 7, 4, 8, 10, 3, 20, 777, 2000]
for (let numero of numeros){
console.log("o numero é:", numero)


}

const palavras = ["oi", "sumido", "tudo", "bem?", "saudades"]
let frase = ""
for (let palavra of palavras){

   frase+= palavra+ " "
}
console.log(frase)



//EXERCICIOS DE FIXAÇÃO 
let valor = 0 
for (let i = 0; i<5; i++){//começa declarando i=0, depois vai somenda de 1 e 1 até chegar em 10 , ex:
//quando i = 0=0=0
//quando i = 0=1=1 
//quando i = 1=1=2
//quando i = 1=2=3
//quando i = 3=3=6
//quando i = 3=4=10
//por isso o resultado é 10


    valor += i //+= é a atribuição da adição
}
console.log(valor)

//EXERCICIO DE FIXAÇÃO 2 
const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
for(let numero of lista){
    if (numero>11){
        console.log(numero)
    }
}
//foi impresso todos os numeros menos o 18 
//o FOR OF não é suficiente, o que é suficiente é usar o FOR 

//EXERCICIOS DE FIXAÇÃO 3 
const quantidadeTotal = Number (prompt("digite a quantidade de linhas:"))
let quantidadeAtual = 0 
while(quantidadeAtual<quantidadeTotal){//é um laço de repetição que executa um bloco de código enquanto uma condição for verdadeira
    let linha = "" //isso serve para criar uma linha "vazia"
    for (let asteriscos=0;/*a repetição começa em 0*/ /*O laço continua enquanto a variável asteriscos for menor que o valor de quantidadeAtual somado a 1.// asteriscos < quantidadeAtual + 1; asteriscos++/*A cada ciclo (ou iteração), a variável asteriscos é aumentada em 1*///){
//linha += "*"/*Dentro de cada ciclo, um asterisco ("*") é adicionado ao final da string armazenada na variável linha. */
/* }
 console.log(linha)
 quantidadeAtual++
}*/

//EXERCICIO DE FIXAÇÃO 4 
const quantidadeBixos = Number(prompt("quantos bichinhos de estimação você tem?"))//passar uma string(PALAVRA") para NUMBER, pq no caso o usuario vai digitar um numero

//let quantidade, a quantidade de bixos que o usuario tem

if /*se for*/ (quantidadeBixos === 0)/*quantidade de bixos for igual a 0*/ {
    console.log("que pena! voce pode adotar um pet!")

} else /*se for maior que 0*/{
    let listaNomes = []; ///lista de array vazia que vai armazenar os nomes que o usuario colocar
    let nome //eu criei essa variavel para adicionar o prompt


    for (let i = 0;/*i=0 iterador, inicio que é o 0*/ 
    i < quantidadeBixos;/*isso significa que Inicia no 0 e depois vai contanto a quantidade de bichos que o usuario digitar*/
     i++/*i++ para quantos numeros eu/usuario quiser, a partir do 0, por exemplo,usuario digitou "6", vai contar "0, 1, 2, 4, 5" */) {

        nome = prompt("digite o nome deles!")
        listaNomes.push(nome) //o .push adiciona o que o usuario digitar dentro do meu array vazio
    }
    console.log("o nome de dos seus bichinhos são:", listaNomes)
}

/*let meuArray= [50, 5, 7, 8, 50]

meuArray.push(50)*/ //exemplo sor lucas
