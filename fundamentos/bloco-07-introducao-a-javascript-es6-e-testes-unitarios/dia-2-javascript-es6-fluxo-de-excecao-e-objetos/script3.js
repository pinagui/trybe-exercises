const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

/* Crie uma função para adicionar o turno da noite na lesson2. Essa função deve possuir três parâmetros, sendo eles: o objeto a ser modificado, a chave que deverá ser adicionada e o valor dela. */

 const addNewKey = (obj, key, value) => {
   obj.key = value;
 };

 addNewKey(lesson2, 'turno', 'noite');
 console.log(lesson2);




//Crie uma função para listar as keys de um objeto. Essa função deve receber um objeto como parâmetro.

const listKeys = (obj) => Object.keys(obj);

console.log(listKeys(lesson2));


//Crie uma função para mostrar o tamanho de um objeto. Essa função deve receber um objeto como parâmetro. 

const lengthObj = (obj) => Object.keys(obj).length;

console.log(lengthObj(lesson2));

//Crie uma função para listar os valores de um objeto. Essa função deve receber um objeto como parâmetro.

const valueObj = (obj) => Object.values(obj);

console.log(valueObj(lesson2));

//Crie um objeto de nome allLessons, que deve agrupar todas as aulas através do Object.assign. Cada chave desse novo objeto será uma aula, sendo essas chaves: lesson1, lesson2 e lesson3.

const allLessons = ({}, {lesson1, lesson2, lesson3});

console.log(allLessons);

//Usando o objeto criado no exercício anteiror, crie uma função que retorne o número total de estudantes em todas as aulas.

// const studentLesson1 = allLessons.lesson1.numeroEstudantes;
// const studentLesson2 = allLessons.lesson2.numeroEstudantes;
// const studentLesson3 = allLessons.lesson3.numeroEstudantes;

// const totalStudents = () => (`${studentLesson1 + studentLesson2 + studentLesson3}`)

// console.log(totalStudents());

const totalStudents = (obj) => {
  let students = 0;

  for(let i of Object.keys(obj)){
    
    students += obj[i].numeroEstudantes;

  }
  console.log(`${students} alunos no total de todas as aulas!`);

}

totalStudents(allLessons);