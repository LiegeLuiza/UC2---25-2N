const nome = " Liege Luiza Camargo " 
const idade = 17 

/*const frase =" o meu nome é " + nome + " e minha idade " + idade 

console.log(frase);
console.log(typeof frase)

//aspas simples 
const frase2 = 'o meu nome é ' + nome + 'e minha idade é' + idade 
console.log(frase2)
console.log(typeof frase2)

//template 
const frase3 = `o meu nome é ${nome} e minha idade é ${idade}`
console.log(frase3)
console.log(typeof frase3)*/

/*EXERCICIOS 
  nome = prompt ("insira seu nome:")
const corfav = prompt ("qual sua cor favorita?")
const  frase = "o meu nome é " + nome + "e minha cor favorita é " + corfav
 
console.log(frase)
console.log(typeof frase)

//aspas simples 
const frase2 = ' o meu nome é ' + nome + 'e minha cor favorita é' + corfav
console.log(frase2)
console.log(typeof frase2)
  
//template 
const frase3 = `o meu nome é ${nome} e minha cor favorita é ${corfav}`
console.log(frase3)
console.log(typeof frase3)*/

console.log(nome.length)
//TO LOCAL E LOWER CASE 
const fraseMaiuscula = "oiEEE"
const fraseMinuscula = fraseMaiuscula.toLocaleLowerCase()
console.log(fraseMaiuscula, fraseMinuscula)
//TO UPPER CASE METODO
const fraseUpper = fraseMaiuscula.toUpperCase()
console.log(fraseMaiuscula, fraseUpper)

console.log(nome.trim()) //tirar espaço, muito usado para emails

//protótipo strings 
const fraseCenoura = "hoje comi cenoura, adoro cenoura"
console.log (fraseCenoura.includes("cenoura"))
console.log(fraseCenoura.includes("batata"))

const novaFrase = fraseCenoura.replaceAll("cenoura", "batata") //esse replaceALL serve para inverter
console.log(novaFrase)





























