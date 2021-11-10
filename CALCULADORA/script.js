var visor = window.document.getElementById("visor")
n1 = ''
n2 = ''
operacao = ''

// Salva os valores nas devidas variáveis ao mesmo tempo que mostra no visor.
function valor(num){
    if(operacao == ''){
        n1 += num
        visor.innerHTML = `${n1}`
    }
    else{
        n2 += num
        visor.innerHTML = `${n1} ${operacao} ${n2}`
    }
}


// Salva a operação desejada na variável ao mesmo tempo que mostra no visor.
function op(str){
    if(str == "adicao"){
        operacao = '+'
        visor.innerHTML += ' + '
    }
    else if(str == "subtracao"){
        operacao = '-'
        visor.innerHTML += ' - '
    }
    else if(str == "multiplicacao"){
        operacao = '*'
        visor.innerHTML += ' * '
    }
    else if(str == "divisao"){
        operacao = '/'
        visor.innerHTML += ' / '
    }
    else if(str == "limpar"){
        visor.innerHTML = '0'
        n1 = ''
        n2 = ''
        operacao = ''
    }
}


// Calcula e mostra o resultado no Visor.
function resultado(){
    if(operacao == "+"){
        visor.innerHTML = Number(n1) + Number(n2)
        n1 = Number(n1) + Number(n2)
        n2 = ''
        operacao = ''
    }
    else if(operacao == "-"){
        visor.innerHTML = Number(n1) - Number(n2)
        n1 = Number(n1) - Number(n2)
        n2 = ''
        operacao = ''
    }
    else if(operacao == "*"){
        visor.innerHTML = Number(n1) * Number(n2)
        n1 = Number(n1) * Number(n2)
        n2 = ''
        operacao = ''
    }
    else if(operacao == "/"){
        visor.innerHTML = Number(n1) / Number(n2)
        n1 = Number(n1) / Number(n2)
        n2 = ''
        operacao = ''
    }
}

