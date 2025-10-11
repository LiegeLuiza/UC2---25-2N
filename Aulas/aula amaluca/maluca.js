const acessorios=Number(prompt ("de uma nota para o numero de acessorios:"))
const numeroCor=Number(prompt ("de uma nota para o numero de cores:"))
const fatorBrilho =Number(prompt ("de uma nota para o fator brilho:"))

const pontuacao=(acessorios*5)+(numeroCor*3)+(fatorBrilho*10)
const metaPontuacao=80

let pontuacaoAtingida = pontuacao>=metaPontuacao//esse >= significa mais igual
console.log("voce atingiu a pontuação?", pontuacaoAtingida)
if (pontuacaoAtingida===true) {
    console.log("aprovado", pontuacao)
} else console.log("voce foi reprovado", metaPontuacao-pontuacao)

//ATIVIDADE 2 
const descricao = prompt ("Uma frase descrevendo os looks:")
const corPrincipal = prompt ("a cor destaque do look:")
tamanhoDescricao=descricao.length
let temTamanhoAdequado = true>=20 










