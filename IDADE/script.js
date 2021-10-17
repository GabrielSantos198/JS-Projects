var botao = window.document.querySelector("input#verificar")
botao.addEventListener("click",func)
var resultado = window.document.querySelector("div#res")

function func(){
    var cnasc = window.document.querySelector("input#nasc")
    var cgenero = window.document.getElementsByName("sexo")
    var data = new Date()
    var idade = data.getFullYear()-parseInt(cnasc.value)
    var img = window.document.createElement("img")
    if(cnasc.value){
        if(cgenero[0].checked || cgenero[1].checked){
            if (cgenero[0].checked){
                res.innerHTML = `Detectamos um Homem com ${idade} anos de idade.`
                if(idade <= 10){
                    img.setAttribute("src","imgs/foto-bebe-m.png")
                }
                else if(idade <= 21){
                    img.setAttribute("src","imgs/foto-jovem-m.png")
                }
                else if(idade <= 50){
                    img.setAttribute("src","imgs/foto-adulto-m.png")
                }
                else{
                    img.setAttribute("src","imgs/foto-idoso-m.png")
                }
                res.appendChild(img)
            }
            else{
                res.innerHTML = `Detectamos uma Mulher com ${idade} anos de idade.`
                if(idade <= 10){
                    img.setAttribute("src","imgs/foto-bebe-f.png")
                }
                else if(idade <= 21){
                    img.setAttribute("src","imgs/foto-jovem-f.png")
                }
                else if(idade <= 50){
                    img.setAttribute("src","imgs/foto-adulto-f.png")
                }
                else{
                    img.setAttribute("src","imgs/foto-idoso-f.png")
                }
                res.appendChild(img)
            }
        }
        else{
            res.innerHTML = "Escolha um gênero."
        }
    }
    else{
        res.innerHTML = "Digite um ano de nascimento"
    }
}

