// este exemplo seleciona o titulo h1 com a função queryselector
/* 
const myHeading = document.querySelector("h1");
myHeading.textContent = "Olá, Mundo!"
*/

// este exemplo seleciona um dos elementos de lista e muda o nome dele
/*  
document.querySelector("li.list03").textContent = "Im the third";
*/


// este exemplo abaixo serve apenas para fazer um prompt de digitação e validação
/*
let nome = prompt('Digite um nome:');
if (nome == "Carlos") {
    alert(`Bem vindo ${nome}`); 
} else {
    alert(`Você Não é o usuário dessa máquina. Inicie com o Superuser!`)
}
*/


// este exemplo coloca o operador 'não é igual' representado por !==
/*
let nome = prompt('Digite um nome:');
if (nome !== "Carlos") {
    alert(`Bem vindo ${nome}`); 
} else {
    alert(`Você é o usuário dessa máquina. Inicie com o Superuser!`)
}
*/


// este exemplo cria uma função de multiplicação. A estrutura é: 
/*
function multiply(num1, num2) { //invoca a seleção de função, nomeia a função, passa o que terá de argumentos
    let result = num1 * num2; // mostra como os argumentos irão interagir entre si
    return result // retorna o resultado
}

console.log(multiply(9,7)+multiply(9,5)) //aqui usa a função console.log com a função nova dentro dele para que o resultado seja exibido dentro do console
*/

//usa o evento de click para dar um alert
/*
document.querySelector("html").addEventListener("click", function() {
    alert("ai, pare de me cutucar!");
})
*/


//usa o evento click mas muda a forma de escrever a função:
/*
document.querySelector("html").addEventListener("click", ()=> {
    alert("ai, pare de me cutucar!");
})
*/


// essa função troca a imagem do site para outra imagem armazenada no diretório:
/*
const myImage = document.querySelector("img")

myImage.onclick = ()=> {
    const mySrc = myImage.getAttribute("src")
    if (mySrc === "Imagens/Mozilla_Firefox_logo_2013.jpg") {
        myImage.setAttribute("src", "Imagens/Mozilla_Firefox_logo_2.jpg")
    } else {
        myImage.setAttribute("src", "Imagens/Mozilla_Firefox_logo_2013.jpg")
    }
}
*/

const myImage = document.querySelector("img")

myImage.onclick = ()=> {
    const mySrc = myImage.getAttribute("src")
    if (mySrc === "Imagens/Mozilla_Firefox_logo_2013.jpg") {
        myImage.setAttribute("src", "Imagens/Mozilla_Firefox_logo_2.jpg")
    } else {
        myImage.setAttribute("src", "Imagens/Mozilla_Firefox_logo_2013.jpg")
    }
}

// essa função troca o cabeçalho do título para um personalizado com o nome do usuário
// ao clicar no botão, é possível definir um novo nome de usuário

/*
let myButton = document.querySelector("button")
let myHeading = document.querySelector("h1")

function setUserName() {
    const myName = prompt("Por favor, digite o seu nome");
    localStorage.setItem("name", myName);
    myHeading.textContent = `Bem vindo, ${myName}`;
}

if (!localStorage.getItem("name")) {
    setUserName();
} else {
    const storedName = localStorage.getItem("name");
    myHeading.textContent = `Bem vindo, ${storedName}`;
}

myButton.onclick = () => {
    setUserName()
}
*/

let myButton = document.querySelector("button")
let myHeading = document.querySelector("h1")

function setUserName() {
    const name = prompt('Digite seu nome:')
    if(!name) {
        setUserName()
    } else {
        localStorage.setItem("name", name)
        myHeading.textContent = `Olá, ${name}`
    }
}

if (!localStorage.getItem("name")) {
    setUserName()
} else {
    const storedName = localStorage.getItem("name")
    myHeading.textContent = `Bem vindo novamente, ${storedName}`
}

myButton.onclick = () => {
    setUserName()
}