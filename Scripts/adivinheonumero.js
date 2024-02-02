var numeroAleatorio = Math.floor(Math.random() * 100) + 1

var palpites = document.querySelector(".palpites")
var ultimoResultado = document.querySelector(".ultimoResultado")
var baixoOuAlto = document.querySelector(".baixoOuAlto")

var envioDePalpite = document.querySelector(".envioDePalpite")
var campoDePalpite = document.querySelector(".campoDePalpite")

var contagemDePalpites = 1
var botaoDeReinicio

function conferirPalpite() {
    var palpiteUsuario = Number(campoDePalpite.value)
    if (contagemDePalpites === 1) {
        palpites.textContent = "Palpites anteriores: "
    }
    palpites.textContent +=  palpiteUsuario + " "

    if (palpiteUsuario === numeroAleatorio) {
        ultimoResultado.textContent = "Parabens! Você acertou!"
        ultimoResultado.style.backkgroundColor = "green"
        baixoOuAlto.textContent = ""
        configFimDeJogo()
    } else if (contagemDePalpites === 10) {
        ultimoResultado.textContent = "Fim de jogo, você perdeu!"
        baixoOuAlto.textContent = ""
        configFimDeJogo()
    } else {
        ultimoResultado.textContent = "Errado!"
        ultimoResultado.style.backkgroundColor = "red"
        if (palpiteUsuario > numeroAleatorio) {
            if((palpiteUsuario - numeroAleatorio) <= 5) {
                ultimoResultado.textContent = "Muito quente!!"
                baixoOuAlto.textContent =  "Um pouquinho menos pra acertar!!"
            } else if ((palpiteUsuario - numeroAleatorio) <= 10) {
                ultimoResultado.textContent = "Quente!"
                baixoOuAlto.textContent = "Um numero um pouco menor pra acertar!"
            } else if ((palpiteUsuario - numeroAleatorio) <=20) {
                ultimoResultado.textContent = "Morno."
                baixoOuAlto.textContent = "Um palpite ainda distante. Tente um valor menor"
            } else {
                ultimoResultado.textContent = "Frio . . ."
                baixoOuAlto.textContent = "Passou tãããão longe.... Tente um mais baixo"
            }
        } else {
            if((numeroAleatorio - palpiteUsuario) <= 5) {
                ultimoResultado.textContent = "Muito quente!!"
                baixoOuAlto.textContent =  "Um pouquinho mais pra acertar!!"
            } else if ((numeroAleatorio - palpiteUsuario) <= 10) {
                ultimoResultado.textContent = "Quente!"
                baixoOuAlto.textContent = "Um numero um pouco maior pra acertar!"
            } else if ((numeroAleatorio - palpiteUsuario) <=20) {
                ultimoResultado.textContent = "Morno."
                baixoOuAlto.textContent = "Um palpite ainda distante. Tente um valor maior"
            } else {
                ultimoResultado.textContent = "Frio . . ."
                baixoOuAlto.textContent = "Passou tãããão longe.... Tente um mais alto"
            }
        }
    }

    contagemDePalpites++
    campoDePalpite.value = ""
    campoDePalpite.focus()
}
envioDePalpite.addEventListener("click", conferirPalpite)

function configFimDeJogo() {
    campoDePalpite.disabled = true;
    envioDePalpite.disabled = true;
    botaoDeReinicio = document.createElement("button");
    botaoDeReinicio.textContent = "Iniciar novo jogo";
    document.body.appendChild(botaoDeReinicio);
    botaoDeReinicio.addEventListener("click", reiniciarJogo);
  }

function reiniciarJogo() {
    contagemDePalpites = 1;

    var reiniciarJogo = document.querySelectorAll(".resultado p");
    for (var i = 0; i < reiniciarJogo.length; i++) {
        reiniciarJogo[i].textContent = "";
    }

    botaoDeReinicio.parentNode.removeChild(botaoDeReinicio);

    campoDePalpite.disabled = false;
    envioDePalpite.disabled = false;
    campoDePalpite.value = "";
    campoDePalpite.focus();

    ultimoResultado.style.backgroundColor = "white";

    numeroAleatorio = Math.floor(Math.random() * 100) + 1;
}