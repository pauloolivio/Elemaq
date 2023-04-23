let titulo = document.querySelector('h1')
let instrucoes = document.querySelector('#instrucoes')
let aviso = document.querySelector('#aviso')
let progresso = document.querySelector('#progresso')
let pontos = 0 // pontos para o placar
let placar = 0 // placar

// AUDIO
let somAcerto = document.querySelector('#somAcerto')
let somErro = document.querySelector('#somErro')
let somAplausos = document.querySelector('#somAplausos')

// PERGUNTA
let numQuestao = document.querySelector('#numQuestao')
let imgQuestao = document.querySelector('.imagemDaQuestao img') // ADICIONE
let imgQuestao2 = document.querySelector('.imagemDaQuestao2 img') // ADICIONE

let pergunta = document.querySelector('#pergunta')

// ALTERNATIVAS
let a = document.querySelector('#a')
let b = document.querySelector('#b')

// article com a class questoes
let articleQuestoes = document.querySelector('.questoes')
    // ol li com as alternativas
let alternativas = document.querySelector('#alternativas')

const q0 = {
    numQuestao: 0,
    imagem: '0.png', // ADICIONE
    imagem2: '2.png', // ADICIONE
    pergunta: "Pergunta",
    alternativaA: "Alternativa A",
    alternativaB: "Alternativa B",
    correta: "0",
}
const q1 = {
    numQuestao: 1,
    imagem: '0.png', // ADICIONE
    imagem2: '2.png', // ADICIONE
    pergunta: "FDASDASDA",
    alternativaA: "Risco",
    alternativaB: "Perigo",
    correta: "Perigo",
}
const q2 = {
    numQuestao: 2,
    imagem: '0.png', // ADICIONE
    imagem2: '2.png', // ADICIONE
    pergunta: "Qual é a capital do Brasil?",
    alternativaA: "Rio de Janeiro",
    alternativaB: "Brasília",
    correta: "Brasília",
}
const q3 = {
    numQuestao: 3,
    imagem: '0.png', // ADICIONE
    imagem2: '2.png', // ADICIONE
    pergunta: "Qual é a capital do Brasil?",
    alternativaA: "Rio de Janeiro",
    alternativaB: "Brasília",
    correta: "Brasília",
}
const q4 = {
    numQuestao: 4,
    imagem: '0.png', // ADICIONE
    imagem2: '2.png', // ADICIONE
    pergunta: "Qual é a capital do Brasil?",
    alternativaA: "Rio de Janeiro",
    alternativaB: "Brasília",
    correta: "Brasília",
}
const q5 = {
    numQuestao: 5,
    imagem: '0.png', // ADICIONE
    imagem2: '2.png', // ADICIONE
    pergunta: "Qual é a capital do Brasil?",
    alternativaA: "Rio de Janeiro",
    alternativaB: "Brasília",
    correta: "Brasília",
}
const q6 = {
    numQuestao: 6,
    imagem: '0.png', // ADICIONE
    imagem2: '2.png', // ADICIONE
    pergunta: "Qual é a capital do Brasil?",
    alternativaA: "Rio de Janeiro",
    alternativaB: "Brasília",
    correta: "Brasília",
}
const q7 = {
    numQuestao: 7,
    imagem: '0.png', // ADICIONE
    imagem2: '2.png', // ADICIONE
    pergunta: "Qual é a capital do Brasil?",
    alternativaA: "Rio de Janeiro",
    alternativaB: "Brasília",
    correta: "Brasília",
}
const q8 = {
    numQuestao: 8,
    imagem: '0.png', // ADICIONE
    imagem2: '2.png', // ADICIONE
    pergunta: "Qual é a capital do Brasil?",
    alternativaA: "Rio de Janeiro",
    alternativaB: "Brasília",
    correta: "Brasília",
}
const q9 = {
    numQuestao: 9,
    imagem: '0.png', // ADICIONE
    imagem2: '2.png', // ADICIONE
    pergunta: "Qual é a capital do Brasil?",
    alternativaA: "Rio de Janeiro",
    alternativaB: "Brasília",
    correta: "Brasília",
}
const q10 = {
    numQuestao: 10,
    imagem: '0.png', // ADICIONE
    imagem2: '2.png', // ADICIONE
    pergunta: "Qual é a capital do Brasil?",
    alternativaA: "Rio de Janeiro",
    alternativaB: "Brasília",
    correta: "Brasília",
}

// CONSTANTE COM UM ARRAY DE OBJETOS COM TODAS AS QUESTOES
const questoes = [q0, q1, q2, q3, q4, q5, q6, q7, q8, q9, q10]

let numero = document.querySelector('#numero')
let total = document.querySelector('#total')

numero.textContent = q1.numQuestao

let totalDeQuestoes = (questoes.length) - 1
console.log("Total de questões " + totalDeQuestoes)
total.textContent = totalDeQuestoes

// MONTAR A 1a QUESTAO COMPLETA, para iniciar o Quiz
numQuestao.textContent = q1.numQuestao
pergunta.textContent = q1.pergunta
imgQuestao.setAttribute('src', 'images/' + q1.imagem) // ADICIONE
imgQuestao2.setAttribute('src', 'images/' + q1.imagem2) // ADICIONE
a.textContent = q1.alternativaA
b.textContent = q1.alternativaB

// CONFIGURAR O VALUE INICIAL DA 1a QUESTAO COMPLETA
a.setAttribute('value', '1A')
b.setAttribute('value', '1B')

// PARA MONTAR AS PROXIMAS QUESTOES
function proximaQuestao(nQuestao) {
    numero.textContent = nQuestao
    numQuestao.textContent = questoes[nQuestao].numQuestao
    imgQuestao.setAttribute('src', 'images/' + questoes[nQuestao].imagem) // ADICIONE
    imgQuestao2.setAttribute('src', 'images/' + questoes[nQuestao].imagem2) // ADICIONE
    pergunta.textContent = questoes[nQuestao].pergunta
    a.textContent = questoes[nQuestao].alternativaA
    b.textContent = questoes[nQuestao].alternativaB
    a.setAttribute('value', nQuestao + 'A')
    b.setAttribute('value', nQuestao + 'B')
    progresso.value = parseInt(progresso.value) + 1
        //console.log(progresso.value)
}

// VERIFICAR DUPLO CLICK NAS ALTERNATIVAS
alternativas.addEventListener('dblclick', () => {
    //console.log('Duplo clique')
    pontos -= 10 // tirar 10 pontos em caso de duplo click
    if (numQuestao.value == 10 && pontos == 110) { pontos = 100 }
})

function bloquearAlternativas() {
    alternativas.classList.add('bloqueado')
}

function desbloquearAlternativas() {
    alternativas.classList.remove('bloqueado')
}

function piscarNoAcerto() {
    articleQuestoes.classList.remove('errou')
    articleQuestoes.classList.add('acertou')
}

function piscarNoErro() {
    articleQuestoes.classList.remove('acertou')
    articleQuestoes.classList.add('errou')
}

function tirarPiscar() {
    articleQuestoes.classList.remove('acertou')
    articleQuestoes.classList.remove('errou')
}

function verificarSeAcertou(nQuestao, resposta) {

    let numeroDaQuestao = nQuestao.value
    console.log("Questão " + numeroDaQuestao)

    let respostaEscolhida = resposta.textContent
        //console.log("RespU " + respostaEscolhida)

    let certa = questoes[numeroDaQuestao].correta
        //console.log("RespC " + certa)

    if (respostaEscolhida == certa) {
        //console.log("Acertou")
        //respostaEsta.textContent = "Correta 😊"
        piscarNoAcerto()
        somAcerto.play()
        pontos += 10 // pontos = pontos + 10
        if (nQuestao.value == 1 && pontos == 20) { pontos = 10 }
    } else {
        //console.log("Errou!")
        //respostaEsta.textContent = "Errada 😢"
        piscarNoErro()
        somErro.play()
    }
    setTimeout(() => {
        tirarPiscar()
    }, 150);

    // atualizar placar
    placar = pontos
    instrucoes.textContent = "Pontos " + placar

    // bloquear a escolha de opcoes
    bloquearAlternativas()

    setTimeout(function() {

        proxima = numeroDaQuestao + 1

        if (proxima > totalDeQuestoes) {
            console.log('Fim do Jogo!')
            fimDoJogo()
        } else {
            proximaQuestao(proxima)
        }
    }, 150)
    desbloquearAlternativas()
}

function fimDoJogo() {

    somAplausos.play()

    let s = 's'
    pontos == 0 ? s = '' : s = s
    instrucoes.textContent = "Fim de Jogo! Você conseguiu " + pontos + " ponto" + s

    instrucoes.classList.add('placar')

    // OCULTAR O ARTICLE DA QUESTAO
    articleQuestoes.style.display = 'none'

    setTimeout(function() {
        pontos = 0 // zerar placar
            //location.reload();
        instrucoes.classList.remove('placar')
            // REINICIAR O JOGO
        articleQuestoes.style.display = 'block'
        proximaQuestao(1)
        instrucoes.textContent = 'Leia a questão e clique na resposta correta'
    }, 8000)

}