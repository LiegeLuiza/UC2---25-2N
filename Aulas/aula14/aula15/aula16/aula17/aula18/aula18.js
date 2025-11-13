function pessoaColega(){
const pessoa  = {
nome: "valentina loca" , 
comidaFav:["chocolate", "risoto de queijo", "arroz e feijao com farofa"],
melhorAmigo:{
    nomeMelhorAmg: "liege",
    idade: "17"
}
}
console.log("o nome da pessoa é", pessoa.nome, "e suas comidas favs sao", pessoa.comidaFav,"e sua melhor amiga se chama", pessoa.melhorAmigo.nomeMelhorAmg, "e tem ", pessoa.melhorAmigo.idade, "anos")
}

pessoaColega()


//ATIV HORA DE AVENTURA
const personagens = [
{nome:"marceline",
idade:"mil anos", 
estilo:"vampira",
poderes:["transformação em morcego", "transformação em demonio"]
},
{nome: "simon", 
idade: "47",
estilo: "mago",
poderes: ["gelo", "inteligencia"]
},
{nome:"jake",
idade: "28", 
estilo:"cachorro",
poderes:["elasticidade", "revigoração"]
}]

function adicionarPersonagem (personagem){
personagens.push(personagem)
console.log(`o personagem${personagem.nome} foi adicionado`)

}

const persona={
nome: "princesa  jujuba",
idade: "827",
estilo: "doce",
poderes:["inteligencia maxima", "soltar doces"]

}

adicionarPersonagem(persona)

function buscarPersonagem (nomeBuscado){
   function personagem(perso){
return perso.nomeBuscado.toLowerCase()===nomeBuscado.toLowerCase()

   }
const personagemEncontrado = personagens.find (personagem)
if (personagemEncontrado) {


    
}






}


