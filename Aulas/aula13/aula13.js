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


}*/

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



