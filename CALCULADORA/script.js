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


// Limpar
function limpar(arg){
    if(arg == "ce"){
        visor.innerHTML = 0
        n1 = ''
        n2 = ''
        operacao = ''
    }
}


// Salva a operação desejada(+-/*) na variável, Mostra o resultado da operação no visor.
function resultado_operacao(arg){
    if(arg != '='){
        if(operacao == ''){
            operacao = arg
            visor.innerHTML += ` ${arg} `
        }
    }
    else{
        if(operacao == '+'){
            result = Number(n1) + Number(n2)
            visor.innerHTML = result
            n1 = String(result)
        }
        else if(operacao == '-'){
            result = Number(n1) - Number(n2)
            visor.innerHTML = result
            n1 = String(result)
        }
        else if(operacao == '*'){
            result = Number(n1) * Number(n2)
            visor.innerHTML = result
            n1 = String(result)
        }
        else if(operacao == '/'){
            result = Number(n1) / Number(n2)
            visor.innerHTML = result
            n1 = String(result)
        }
        n2 = ''
        operacao = ''
    }
}
