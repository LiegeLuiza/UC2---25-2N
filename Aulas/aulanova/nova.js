let i = 0 //COMEÇO //começo de loop sempre utiliza a variavel "i"
while (i<=3){//enquanto a condição que no caso é o i <=9

    console.log("loop:", i++)//incrementa o iterador
}
console.log("chegou ao final do codigo")*/

let estomago = 0 //nosso iterador, começo
while (estomago<=100){ //sem o 
    console.log("quero comer mais coxinhas", estomago)
    estomago=estomago+10
}

//EXERCICIOS 
//while
let numero
let soma = 0
while (numero!==0){
    numero = Number(prompt("insira um numero:"))
    soma+=numero
    
}
console.log(`o resultado é: ${soma}`)

//DO WHILE
let c = 1 
do{
    console.log("o valor de C é:", c)
    c++//incrementador

}while(c<=6)

//FOR  é um jeito mais "simples", diferente do while
for(let i=0 ; i <= 9 ; i++){
console.log("o valor de i é:", i)
}


//exemplo for com array 
let meuArray = [10, 4, 7, 8, 200, 77]
for(let i=0; i<6; i++ ){
    console.log(meuArray[i])
}


//EXERCICIOS FOR 
meuArray = [11, 15, 18, 14, 12, 13]
let maiorNumero=0
for(let i=0; i<6; i++){ //i<6, exemplo "quantas posições eu tenho no meu array"
   if(Array[i]>maiorNumero){
    maiorNumero=Array[i]
   }
}
//ctrl+alt+del gerenciador
//WHILE "enquanto essa condição for verdadeira"