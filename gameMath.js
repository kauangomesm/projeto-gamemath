let acertos = 0
let question = 1
for(let c = 0; c < 10; c++){
    let op = parseInt(Math.random() * 7)
    let pergunta = ''
    let n1 = 0
    let n2 = 0
    let soma = 0
    switch (op) {
        case 0:
             n1 = parseInt(Math.random() * 10)
             n2 = parseInt(Math.random() * 10)
             soma = (n1+n2)
            pergunta = (`questão ${question}: quanto e ${n1} + ${n2}`)
            break;
        
        case 1:
             n1 = parseInt(Math.random() * 10)
             n2 = parseInt(Math.random() * 10)
             soma = (n1-n2)
            pergunta = (`questão ${question}: quanto e ${n1} - ${n2}`)
            break;
        case 2:
             n1 = parseInt(Math.random() * 10)
             n2 = parseInt(Math.random() * 10)
             soma = (n1*n2)
            pergunta = (`questão ${question}: quanto e ${n1} x ${n2}`)
            break;
        case 3:
             while(n1<n2 || n1%n2 != 0 || n1===n2 || n2===1){
                n1 = parseInt(Math.random() * 100)
                n2 = parseInt(Math.random() * 100)
             }
             soma = n1/n2
             pergunta = (`questão ${question}: quanto e ${n1} / ${n2}`) 
             break
        case 4:
            while(n1 === 0 || n1 === 1 || n2 === 0 || n2 === 1){
            n1 = parseInt(Math.random() * 10)
            n2 = parseInt(Math.random() * 3)
            }
            soma = n1**n2
             pergunta = (`questão ${question}: quanto e ${n1}^${n2}`)
             break
        case 5:
            while(parseInt(soma) != soma || n1 === 0 || n1 === 1){
                n1 = parseInt(Math.random() * 100)
                n2 = parseInt(Math.random() * 2)
                if(n2 === 0){
                    soma = Math.pow(n1, 0.5)
                    pergunta = (`questão ${question}: quanto e  2√${n1}`)
                }
                else{
                    soma = Math.pow(n1, 1/3)
                    pergunta = (`questão ${question}: quanto e  3√${n1}`)
                }
            }
            break
        case 6:
            n1 = parseInt(Math.random() * 7)
            n2 = n1
            if (n1 === 0 || n1 === 1){
                soma = 1
                pergunta = (`questão ${question}: quanto e ${n1}!`)
            }
            else{
                for(let g = 1; g < n1; g++){
                    n2 *= g
                }
                soma = n2
                console.log(soma)
                pergunta = (`questão ${question}: quanto e ${n1}!`)
            }
            break
    }
    let resposta = prompt(pergunta)
    if (resposta != soma){
        alert('Que pena vc errou')
        break
    }
    else{
        acertos++
    }
    question++
}
alert('Acabou')
if(acertos === 10){
    alert(`vc acertou ${acertos} questoes: Parece que temos um 'Jenio' aqui parece ate que e o Jordan`)
}
else if(acertos >=5){
    alert(`vc acertou ${acertos} questoes: Não e um jenio mas da para o gasto`)
}
else if(acertos != 0){
    alert(`vc acertou ${acertos} questoes: precisa estudar mais `)
}
else{
    alert(`vc acertou ${acertos} questoes: So digo uma coisa E BOMBA!!!`)
}