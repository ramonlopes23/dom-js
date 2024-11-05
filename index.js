
//selecionando elementos
const titulo = document.getElementById('titulo');
const texto = document.querySelector('.texto');
const botao = document.getElementById('botao');

//selecionando elementos inexistentes
const texto1 = document.querySelector('texto1');
const botao1 = document.querySelector('botao1');
console.log(texto1,botao1);


botao.addEventListener('click',()=>{
    alert("Sou um evento externo")
})

//manipulando conteudos e estilos
//alterar o conteudo textual
titulo.textContent = 'Aula com DOM em JS';

texto.innerHTML = "Texto adicionado pelo JS";

//alterando estilos

titulo.style.color = "red";

texto.style.fontSize = "20px";

const novoParagrafo = document.createElement('p')

//adicionando conteudo no novo elemento
novoParagrafo.textContent = "Meu novo paragrafo"

//adicionando um novo elemento no body
document.body.appendChild(novoParagrafo)

const div = document.getElementsByClassName('textoinicio')
console.log(div)

div.appendChild(novoParagrafo)

//alterando um elemento