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

//Crie uma função que obtenha o valor da chave de acordo com o seu índice no objeto.

const getValueByNumber = (obj, index) => Object.values(obj)[index];

console.log(getValueByNumber(lesson3, 0));


//Crie uma função que verifique se o par (chave / valor) existe na função. Essa função deve possuir três parâmetros, sendo eles: o objeto, o nome da chave e o valor da chave. 

const verifyPair = (obj, key, value) => {
  
  const arrObj = Object.entries(obj);
  let isEqual = false;

  for(let i=0; i < arrObj.length; i+=1){
    if(arrObj[i][0] === key && arrObj[i][1] === value) 
    isEqual = true;
  }
  return isEqual;
}

console.log(verifyPair(lesson3, 'professor', 'Maria Clara'));

//   for (let index in arrObj) {
//     if (arrObj[index][0] === key && arrObj[index][1] === value) console.log(arrObj[index][0]);
//   }
// }