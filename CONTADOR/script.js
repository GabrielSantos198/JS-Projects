let iniciar = window.document.querySelector("input#iniciar")
iniciar.addEventListener("click",contador)

function contador(){
    // Get Elements HTML
    let inicio = parseInt(window.document.querySelector("input#inicio").value)
    let fim = parseInt(window.document.querySelector("input#fim").value)
    let passo = parseInt(window.document.querySelector("input#passo").value)
    let res = window.document.getElementById("res")
    res.innerHTML = "Contando:<br>"
    // Values 0 to 1
    if(inicio == 0){
        inicio = 1
        res.innerHTML += " 0 👉"
    }
    else if(fim == 0){
        fim = 1
    }
    else if(passo == 0){
        window.alert("Passo inválido. Considerando 1")
        passo = 1
    }
    // Logic
    if(inicio && fim && passo){
        // For normal
        if(inicio < fim){
            for(var i=inicio; i<=fim; i+=passo){
                res.innerHTML += i
                if(i<fim){
                    res.innerHTML += " 👉 "
                }
                else{
                    res.innerHTML += " 🏴 "
                }
            }
        }
        // For Reverse
        else{
            for(var i=inicio; i>=fim; i-=passo){
                res.innerHTML += i
                if(i>fim){
                    res.innerHTML += " 👉 "
                }
                else{
                    res.innerHTML += " 🏴 "
                }
            }
        }
    }
    else{
       res.innerHTML = "Por favor preencha todos os campos." 
    }
}

