let msg = window.document.querySelector("div#msg")
let data = new Date()
let hora = data.getHours()
msg.innerHTML = `Agora são ${hora} horas.`
let img = window.document.getElementById("imagem")
let corpo = window.document.body
if(hora >= 6 && hora <= 11){
    corpo.style.background="#e2cd9f"
    img.src="imgs/manha.jpg"
}
else if(hora >= 12 && hora <= 17){
    corpo.style.background="#b9846f"
    img.src="imgs/tarde.jpg"
}
else{
    corpo.style.background="#515154"
    img.src="imgs/noite.jpg"
}

