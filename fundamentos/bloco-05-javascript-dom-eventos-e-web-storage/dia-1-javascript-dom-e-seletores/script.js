       /*
        Aqui você vai modificar os elementos já existentes utilizando apenas as funções:
        - document.getElementById()
        - document.getElementsByClassName()
        - document.getElementsByTagName()
 1 -Crie uma função que mude o texto na tag <p>-----</p> para uma descrição de como você se vê daqui a 2 anos. (Não gaste tempo pensando no texto e sim realizando o exercício)
 2 -Crie uma função que mude a cor do quadrado amarelo para o verde da Trybe (rgb(76,164,109)).
 3 - Crie uma função que mude a cor do quadrado vermelho para branco.
 4 - Crie uma função que corrija o texto da tag <h1>.
 5 - Crie uma função que modifique todo o texto da tag <p> para maiúsculo.
 6 - Crie uma função que exiba o conteúdo de todas as tags <p> no console.
        */

function mudarParagrafo(){
    document.getElementsByTagName('p')[1].innerText = 'Trabalhando na área como Desenvolvedor Full Stack!';
}
mudarParagrafo();

function blockChangeColorOutside(){
    document.getElementsByClassName('main-content')[0].style.backgroundColor = 'rgb(76,164,109)';
}
blockChangeColorOutside();

function blockChangeColorInside(){
    document.getElementsByClassName('center-content')[0].style.backgroundColor = 'white';
}
blockChangeColorInside();
