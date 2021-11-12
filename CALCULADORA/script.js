var visor = window.document.getElementById("visor")
n1 = ''
n2 = ''
operacao = ''

// Salva os valores nas devidas variáveis ao mesmo tempo que mostra no visor.
function valor(num){
    if(operacao == ""){
        if(num == "."){
            if(n1.indexOf(".") == -1){
                n1 += num
                visor.innerHTML = `${n1}`
            }
        }
        else{
            n1 += num
            visor.innerHTML = `${n1}`
        }
    }
    else{
        if(num == "."){
            if(n2.indexOf(".") == -1){
                n2 += num
                visor.innerHTML = `${n1} ${operacao} ${n2}`
            }
        }
        else{
            n2 += num
            visor.innerHTML = `${n1} ${operacao} ${n2}`
        }
    }
}


// Limpar
function limpar(arg){
    if(arg == "c"){
        visor.innerHTML = 0
        n1 = ''
        n2 = ''
        operacao = ''
    }
    else{
        if(n2){
            var ult = n2.substring(0,n2.length-1)
            n2 = ult
            visor.innerHTML = `${n1} ${operacao} ${n2}`
        }
        else if(operacao){
            operacao = ''
            visor.innerHTML = `${n1} ${operacao} ${n2}`
        }
        else if(n1.length > 1){
            var ult = n1.substring(0,n1.length-1)
            n1 = ult
            visor.innerHTML = `${n1} ${operacao} ${n2}`
        }
        else{
            n1 = ''
            visor.innerHTML = 0
        }
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
