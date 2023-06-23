for(let c = 0; c < 3; c++){
    // let op = parseInt(Math.random() * 7)
    let op = 3
    let pergunta = ''
    let n1 = 0
    let n2 = 0
    let soma = 0
    switch (op) {
        case 0:
             n1 = parseInt(Math.random() * 10)
             n2 = parseInt(Math.random() * 10)
             soma = (n1+n2)
            pergunta = (`quanto e ${n1} + ${n2}`)
            break;
        
        case 1:
             n1 = parseInt(Math.random() * 10)
             n2 = parseInt(Math.random() * 10)
             soma = (n1-n2)
            pergunta = (`quanto e ${n1} - ${n2}`)
            break;
        case 2:
             n1 = parseInt(Math.random() * 10)
             n2 = parseInt(Math.random() * 10)
             soma = (n1*n2)
            pergunta = (`quanto e ${n1} x ${n2}`)
            break;
        case 3:
             while(n1<n2 || n1%n2 != 0 || n1===n2 || n2===1){
                n1 = parseInt(Math.random() * 100)
                n2 = parseInt(Math.random() * 100)
             }
             soma = n1/n2
            //  alert(soma)
             pergunta = (`quanto e ${n1} / ${n2}`)       
    }
    let resposta = prompt(pergunta)
    if (resposta != soma){
        alert('Que pena vc errou')
        break
    }


}



//Crie um jogo matematico em javascript que que gera contas aleatórios para que o usuario responda, com operadores aleatorios (+ - x ÷ * √ !) e que quando o usuario responder 10 contas em seguida apareça uma mensagem ma tela dizendo que ele e um "jenio" igual o Jordan, e se ele errar alguma conta apareça que ele e um jenio ingual o careca do oliver