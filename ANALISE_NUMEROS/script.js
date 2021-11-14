var botao_adicionar = window.document.getElementById("adicionar")
botao_adicionar.addEventListener("click", func_adicionar)

var res = window.document.getElementById("res")

var lista_numeros = []
function func_adicionar(){
    var numero = window.document.getElementById("numero")

    // Se tiver valor no input executa esse bloco.
    if(numero.value){
        // Se o número não existir no array executa esse bloco.
        if(lista_numeros.indexOf(numero.value) == -1){
            // Se o numero digitado estiver entre 1 e 100.
            if(numero.value <= 100 && numero.value >= 1){
                lista_numeros.push(Number(numero.value))
                numero.value = ""
                res.innerHTML = ""
                for(var c in lista_numeros){
                    res.innerHTML += `${lista_numeros[c]} cadastrado.<br>`
                }
                // Criar botão HTML com JS.
                var elemento = window.document.createElement("button")
                elemento.addEventListener("click", verificar)
                elemento.innerHTML = "Verificar"
                elemento.id = "verificar"
                res.appendChild(elemento)
            }
            // Se não tiver.
            else{
                alert("Digite um número entre 1 e 100.")
            }
        }
        // Se existir executa esse bloco.
        else{
            alert("Opps, Número já existente. Digite outro.")
        }
    }
    // Se não tiver valor no input executa esse bloco.
    else{
        alert("Digite algum valor")
    }
}


function verificar(){
    res.innerHTML += `<p>Ao todo, temos ${lista_numeros.length} números cadastrados.</p>`
    var soma = 0
    for(var c in lista_numeros){
        soma += lista_numeros[c]
    }
    res.innerHTML += `<p>Somando todos os valores, temos ${soma}.</p>`
    var media = soma/lista_numeros.length
    res.innerHTML += `<p>A média dos valores digitados é ${media.toFixed(1)}.</p>`

    var maior = 0
    var menor = 100
    for(var c in lista_numeros){
        if(lista_numeros[c] > maior){
            maior = lista_numeros[c]
        }
        if(lista_numeros[c] < menor){
            menor = lista_numeros[c]
        }
    }
    res.innerHTML += `<p>O maior número cadastrado foi o ${maior}.</p>`
    res.innerHTML += `<p>O menor número cadastrado foi o ${menor}.</p>`
}

