var gerar = window.document.getElementById("gerar")
gerar.addEventListener("click",tabuada)
var res = window.document.getElementById("res")

function tabuada(){
    var num = window.document.getElementById("num").value
    res.innerHTML = ""
    if(num.length >= 1){
        res.innerHTML = `<strong>Tabuada do ${num}</strong><br>`
        c = 1
        while(c<10){
            res.innerHTML += `${num} X ${c} = ${Number(num)*c}<br>`
            c++
        }
    }
    else{
        window.alert("Por favor digite algo no campo.")
    }
}

