const numeroQuestao = document.querySelector("#cabecalho p")
const perguntar = document.querySelector("#form p")
const resposta = document.querySelector("#form #numero")
const telaInicial = document.querySelector("#telainicial")
const tela = document.querySelector("#tela")
const telaFinal = document.querySelector("#telaFinal")
const pTelaFinal = document.querySelector("#telaFinal p")
let questao = 1
let pergunta = ''
let acertos, n1, n2, soma = 0
function comecar(){
    telaInicial.style.display = "none"
    tela.style.display = "flex" 
    jogo()   
}
function jogo(){
    if(questao > 1){
        if(soma !== parseInt(resposta.value)){
            fimDoJogo(acertos)
        }
        else if(questao === 11){
            fimDoJogo(acertos+1)     
        }
        else if(soma === parseInt(resposta.value)){
            acertos++
        }
    }

    n1 = 0
    n2 = 0
    soma = 0
    pergunta = ''
    resposta.value = ''

    let op = parseInt(Math.random() * 7)
    resposta.focus()
    switch (op) {
        case 0:
             n1 = parseInt(Math.random() * 1000)
             n2 = parseInt(Math.random() * 1000)
             soma = (n1+n2)
            pergunta = (`quanto é ${n1} + ${n2}`)
            break;
        
        case 1:
             n1 = parseInt(Math.random() * 1000)
             n2 = parseInt(Math.random() * 1000)
             soma = (n1-n2)
            pergunta = (`quanto é ${n1} - ${n2}`)
            break;
        case 2:
             n1 = parseInt(Math.random() * 100)
             n2 = parseInt(Math.random() * 100)
             soma = (n1*n2)
            pergunta = (`quanto é ${n1} x ${n2}`)
            break;
        case 3:
             while(n1<n2 || n1%n2 != 0 || n1===n2 || n2===1){
                n1 = parseInt(Math.random() * 1000)
                n2 = parseInt(Math.random() * 1000)
             }
             soma = n1/n2
             pergunta = (`quanto é ${n1} ÷ ${n2}`) 
             break
        case 4:
            let potencia = ''
            n1 = parseInt(Math.random() * 8) + 2
            n2 = parseInt(Math.random() * 2)
            if (n2 === 0){
                potencia = '²'
                n2 = 2
            }
            else{
                potencia = '³'
                n2 = 3
            }
            soma = n1**n2
             pergunta = (`quanto é ${n1}${potencia}`)
             
             break
        case 5:
            while(parseInt(soma) != soma || n1 === 0 || n1 === 1){
                n1 = parseInt(Math.random() * 100)
                n2 = parseInt(Math.random() * 2)
                if(n2 === 0){
                    soma = Math.pow(n1, 0.5)
                    pergunta = (`quanto é  ²√${n1}`)
                }
                else{
                    soma = Math.pow(n1, 1/3)
                    pergunta = (`quanto é  ³√${n1}`)
                }
            }
            break
        case 6:
            n1 = parseInt(Math.random() * 7)
            n2 = n1
            if (n1 === 0 || n1 === 1){
                soma = 1
                pergunta = (`quanto é ${n1}!`)
            }
            else{
                for(let g = 1; g < n1; g++){
                    n2 *= g
                }
                soma = n2
                pergunta = (`quanto é ${n1}!`)
            }
            break
    }
    perguntar.textContent = pergunta
    numeroQuestao.textContent = `Questão: ${questao}`
    questao++
}

function fimDoJogo(acertos){
    telaFinal.style.display = "flex"
    tela.style.display = "none" 
    if(acertos === 10){
        pTelaFinal.textContent = (`Você acertou ${acertos} questoes: Parece que temos um "Jenio" deve ser o Jordan`)
    }
    else if(acertos >=7){
        pTelaFinal.textContent = (`Você acertou ${acertos} questoes: Não e um "jenio" mas da para o gasto`)
    }
    else if(acertos >= 4){
        pTelaFinal.textContent = (`Você acertou ${acertos} questoes: Ta na media `)
    }
    else if(acertos >= 1){
        pTelaFinal.textContent = (`Você acertou ${acertos} questoes: O Joel ta te ensinando nada não? `)
    }
    else{
        pTelaFinal.textContent = (`Você não acertou nada: So digo uma coisa É BOMBA!!!`)
    }
}
