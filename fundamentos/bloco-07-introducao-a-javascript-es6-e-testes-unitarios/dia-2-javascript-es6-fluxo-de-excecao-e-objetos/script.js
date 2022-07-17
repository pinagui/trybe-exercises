/*
function sum() {
  const value1 = document.getElementById('value1').value;
  const value2 = document.getElementById('value2').value;
  const result = Number(value1) + Number(value2);
  document.getElementById('result').innerHTML = `Resultado: ${result}`;
  document.getElementById('value1').value = ' ';
  document.getElementById('value2').value = ' ';
}
window.onload = () => {
  const button = document.getElementById('button');
  button.addEventListener('click', sum);
}

1 🚀 - Crie erros personalizados.

Tente executar a aplicação com um dos valores em branco. Notou que o retorno não é muito descritivo?

Utilize o throw new Error e o bloco try/catch.

Evite funções que tenham muitas responsabilidades distintas.

Caso a pessoa usuária nao preencha nenhum input, ou preencha apenas um input, lance um erro.

Caso os valores inseridos nos inputs pela pessoa usuária não sejam números, lance um erro. Para isso você pode utilizar a função isNan().

Adicione o texto do erro no parágrafo com id result, para que a pessoa usuária saiba o que aconteceu. Lembre-se de usar erros descritivos!
Utilize o finally para apagar os valores dos inputs ao final do bloco try/catch.
*/

// function sum() {
//   const value1 = document.getElementById('value1').value;
//   const value2 = document.getElementById('value2').value;

//   if(isNaN(value1) === false && isNaN(value2) === false){
    
//     const result = Number(value1) + Number(value2);
//     document.getElementById('result').innerHTML = `Resultado: ${result}`;
//     document.getElementById('value1').value = ' ';
//     document.getElementById('value2').value = ' ';
//   }else{
//     document.getElementById('result').innerHTML = `Porfavor, insira apenas valores numéricos!`;
//     document.getElementById('value1').value = ' ';
//     document.getElementById('value2').value = ' ';
//   }
// }



const verifyIsNaN = (value1, value2) => {

  if(isNaN(value1) === true || isNaN(value2) === true){
    throw new Error ('Porfavor, insira apenas valores numéricos!'); 
  }
  if(value1 === ' ' || value2 === ' ' ){
    throw new Error ('Preencha os campos para realizar a soma');
  }
}

const sum = () => {
  try {

    const value1 = document.getElementById('value1').value;
    const value2 = document.getElementById('value2').value;  
    verifyIsNaN(value1, value2);
    const result = Number(value1) + Number(value2);
    document.getElementById('result').innerHTML = `Resultado: ${result}`; 

  } catch (error) {

    document.getElementById('result').innerHTML = error.message;
    
  } finally {
    document.getElementById('value1').value = ' ';
    document.getElementById('value2').value = ' ';
  }
}


window.onload = () => {
  const button = document.getElementById('button');
  button.addEventListener('click', sum);
}
