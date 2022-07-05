function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
};

createDaysOfTheWeek();

// Escreva seu código abaixo.

/* 1- Crie um calendário dinamicamente.
  O array decemberDaysList contém os dois últimos dias de novembro e os dias do mês de dezembro. Sua função deve criar dinamicamente cada dia do calendário e os adicionar dentro da tag <ul>.

  Note que os dias 29 e 30 de novembro estão no array, pois representam respectivamente Domingo e Segunda-feira

  A tag <ul> deve conter o id 'days'; 
    
  Os dias devem estar contidos em uma tag <li>, e todos devem ter a classe day. Ex: <li class="day">3</li> 

  Os dias 24, 25 e 31 são feriados e, além da classe day, devem conter também a classe holiday. Ex: <li class="day holiday">24</li> 

  Os dias 4, 11, 18 e 25 são sextas-feiras. Eles devem conter a classe day e a classe friday. Ex: <li class="day friday">4</li> 
*/

let decemberDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
let ulList = document.getElementById('days');

for (let day of decemberDaysList) {
  let dayList = document.createElement('li');
  dayList.innerText = day;
  dayList.className = 'day';
  if (dayList.innerText === '24' || dayList.innerText === '25' || dayList.innerText === '31') {
    dayList.classList.add('holiday');
  }
  if (dayList.innerText === '4' || dayList.innerText === '11' || dayList.innerText === '18' || dayList.innerText === '25') {
    dayList.classList.add('friday');
  }
  ulList.appendChild(dayList);
}

/* 2-  Implemente uma função que crie dinamicamente um botão com o nome "Feriados". 

  Sua função deve receber um parâmetro com a string 'Feriados' 

  Adicione a este botão a ID "btn-holiday" 

  Adicione este botão como filho/filha da tag <div> com classe "buttons-container" 
*/

function createHolidayButton(buttonName) {
  let buttonContainer = document.querySelector('.buttons-container');
  let newButton = document.createElement('button');
  newButton.id = 'btn-holiday';
  newButton.innerHTML = buttonName;
  
  buttonContainer.appendChild(newButton);
}

createHolidayButton('Feriados');

/* 3- Implemente uma função que muda a cor de fundo dos dias que possuem a classe "holiday". 

  Adicione ao botão "Feriados" um evento de "click" que altere a cor de fundo dos dias que possuem a classe "holiday"
   👀 É interessante que esse botão possua também a lógica inversa. Ao ser clicado novamente, ele retorna à configuração inicial com a cor "rgb(238,238,238)".
*/
function displayHolidays() {

  let holidayDays = document.getElementsByClassName('holiday');
  let btnHoliday = document.getElementById('btn-holiday');
  let backgroundColor = 'rgb(238,238,238)';
  let newColor = 'white';

  btnHoliday.addEventListener('click', function(){
    
    for (let i = 0; i < holidayDays.length; i += 1) {
      if (holidayDays[i].style.backgroundColor === newColor) {
        holidayDays[i].style.backgroundColor = backgroundColor;
      } else {
        holidayDays[i].style.backgroundColor = newColor;
      }
    }
  });
}

displayHolidays();

/* 4- Implemente uma função que crie dinamicamente um botão com o nome    "Sexta-feira". Sua função deve receber como parâmetro a string      "Sexta-feira".
  Adicione a esse botão o ID "btn-friday"; 
  Adicione esse botão como filho/filha da tag <div> com classe "buttons-container". 
  */


function createFridayButton(buttonName) {
  let buttonContainer = document.querySelector('.buttons-container');
  let newButton = document.createElement('button');
  newButton.id = 'btn-friday';
  newButton.innerHTML = buttonName;
  
  buttonContainer.appendChild(newButton);
}

createFridayButton('Sexta-feira');