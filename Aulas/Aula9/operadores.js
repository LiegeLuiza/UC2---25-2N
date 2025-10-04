const interruptor1 = true
const interruptor2 = true 

let resultado=interruptor1&&interruptor2
console.log(resultado)
 
//exercicio, && E EEEEE
let a = true 
let b = false 
let c = true 
 resultado=a&&b
console.log(resultado)
resultado=b&&c
console.log(resultado)
resultado=a&&c
console.log(resultado)
resultado=a&&b&&c
console.log(resultado)

//exercicio 2, teste operador ||, OUUU
resultado = interruptor1 || interruptor1
console.log(resultado)

a=true
b=false 
c=true 
resultado=a||b
console.log(resultado)
resultado=b||c
console.log(resultado)
resultado=a||c
console.log(resultado)
resultado=a||b||c 
console.log(resultado)

//NÃOOOO !!!! EXCLAMAÇAOOOO, se colocar antes da variavel booleana ela vai INVERTER!!!!!!
// sem a exclamação é true e com é false 
resultado = !interruptor1
console.log(resultado)



