//interpretação de código 
//o que vai ser impresso no console

/*const filme = {
nome: "auto da compadecida",
ano: 2000,
elenco:[
"matheus Nachtergaele", "selton mello", "denise fraga", "virginia cavendish"
],
transmissoesHoje: [
{canal: "telecine", horario: "21h"},
{canal: "canal brasil", horario: "19"}, 
{canal: "globo", horario: "14H"}
]
}
console.log(filme.elenco[0])
//vai ser impresso matheus 
console.log(filme.elenco[filme.elenco.length -1])
//vai ser impresso o virginia 
console.log(filme.transmissoesHoje[2])
//vai ser impresso o horario da globo

// EXERCICIO DE FIXAÇÃO 2 
const cachorro = {
    nome: "juca", 
    idade: 3, 
    raca: "SRD"
}
const gato = {...cachorro, nome: "Juba"}
const tartaruga = {... gato, nome: gato.nome.replaceAll("a", "o")
}

console.log(cachorro)
//vai ser impresso o nome juba
console.log(gato)
//vai ser impresso juba
console.log(tartaruga)
//

//EXERCICIO FIXAÇÃO 3 
function minhaFuncao(objeto, propriedade){
    return  objeto [propriedade]
}
const pessoa = {
    nome: "caio",
    idade: 23,
    backender: false

}
console.log(minhaFuncao(pessoa, "backender"))
console.log(minhaFuncao(pessoa, altura))*/
//vai ser impresso false 

//EXERCICIO HORA DE AVENTURA 

const personagens = [
    {nome:"marceline", 
        idade: 1000,
        estilo: "vampira",
        poderes:["transformação em morcego", "transformação em demonio"]
    }, 
    {nome:"simon",
        idade:43,
        estilo:"mago",
        poderes:["soltar gelo", "inteligencia maxima"]
    },
    {nome:"jake",
        idade:34, 
        estilo:"cachorro",
        poderes: ["elasticidade", "mudar o corpo"]
        
    }/*criando tres objetos, um sobre a marceline, outro sobre o simon e outro sobre o jake*/
]

function adicionarPersonagem(novoNome, novaIdade, novoEstilo, novosPoderes){
    const novoPersonagem = {
        nome: novoNome,
        idade: novaIdade,
        estilo: novoEstilo,
        poderes: novosPoderes
    };/*criando essa função para invocar um personagem, pode ser qualquer personagem*/

    personagens.push(novoPersonagem)
//push é para empurrar algo para dentro do array, no caso vamos colocar um novo personagem dentro do array 
    
}
    adicionarPersonagem("jujuba", 800, "doce", ["Inteligencia maxima", "Atirar doces"])

    function buscarPersonagem(nome){
/*criando função para encontar um personagem pelo nome, o nome esta dentro dos parenteses e isso são os PARAMETROS*/ 
    const encontrado = personagens.find(p => p.nome === nome)
//find é para encontar algo, o "p", personagens, 
    /* se for encontraedo*/ if(encontrado){
        return encontrado;
    }

    /*se nao for encontrado*/ else{
        return `Personagem "${nome}" nao encontrado`;
    }/*cifrão é para buscar o que eu coloquei dentro do variavel "nome", por exemplo*/
}

const nome = prompt("digite um presonagem de hora de aventura")
const resultado = buscarPersonagem(nome)
/*buscar personagem pelo nome*/
console.log(resultado)

const lista = [...personagens]
/*... imprimir itens espalhadamente*/
function listarPersonagens(nome, idade, estilo, poderes){
   return lista;
   /*retornando a lista de personagens*/
}

