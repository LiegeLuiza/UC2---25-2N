let condicao1 = true 

if (condicao1){ //if, se sim
    //como o valor da condição é true, o codigo do bloco é executado
    console.log("entrei no if 1")
}
let condicao2 = false  //nao pode usar ela entes de criar ela primeiro
if(condicao2){
    console.log("entrei no if2")
} 
//aparece só como entrei no if 1, pois o entrei no if2 esta como falso 
//se passar todas as condições para falso ele para de rodar 

let num1 = Number(prompt("digite o numero 1")) 
let num2 = Number(prompt("digite o numero 2"))
if(num1!==num2){
    console.log("executou o if")
    console.log("os numeros são iguais")
}
else
{

console.log("executou o else")
console.log("os numeros sao diferentes ")
}*/
//if + else 
/*let condicao1=true
let condicao2=true
let condicao3=true

if(condicao1){
    console.log("entrou no if 1")
}
else if (condicao2){
    console.log("entrou no else if 1")
}
else if(condicao3){
    console.log("entrou no else if 2")
}
    else 
    console.logo("entrou no else")*/

    //atividade 3 criar um programa 
    /*let num1 = Number(prompt("digite o numero 1")) 
    let num2 = Number(prompt("digite o numero 2"))
    const resultado = num1===num2
    if(num1>num2){//comparando se numero 1 é maior que o numero dois 
        console.log("numero 1")//uma condição só é o if
    }
    else if (num1<num2){ // condição composta 
        console.log("numero 1 é menor que o numero 2")
    }
else //
console.log("os numero sao iguais ")
//condicional (aninhada if+else if+else)
//DEFAULT É QUANDO NÃO ENCONTRA NENHUM VALOR 
//BREAK CANCELA O CODIGO, SE ENTROU NO CASE PARA SAIR DO 

let paisOrigem = prompt ("digite o seu pais de origem")
switch(paisOrigem){//variavel que quero testar o igual, usada para comparar se por exemplo "pais de origem, e o case"
case 'Brasil':
    console.log("nacionalidade brasileira")//toLowerCase converte tudo pra minusculo
console.log("entrou no casel")
break

case 'EUA':
    console.log("nacionalidade americana")
    console.log("entrou no case2")
break // break é para sair do codigo switch case
case'India':
console.log("nacionalidade indiana")
console.log("entrou no case3")
break 
default:
console.log("nacionalidade não encontrada")
break
}

//POKEMON 
let pokemon = prompt ("qual seu pokemon inicial?")
switch(pokemon){
case'bulbasaur':
console.log("planta veneno")
console.log("entrou no case1")
break 

case 'charmander':
    console.log("fogo")
    console.log("entrou no case2")
    break

    case 'squirtle'://exemplo: se o usuario colocar 
        console.log("agua")
    console.log("entrou no case3")
    break
    default:
        console.log("pokemon não encontrado")
break
    }




    
