// 2 - Desenvolva uma HOF que retorna o resultado de um sorteio. Esta HOF irá gerar um número aleatório entre 1 e 5 recebendo como parâmetros o número apostado e uma função que checa se o número apostado é igual ao número sorteado. O retorno da sua HOF deve ser uma string (Ex: "Tente novamente" ou "Parabéns você ganhou").

//hof retorna o resultado entre numeros aleatórios de 1 a 5

//hof recebe o numero apostado como parametro e uma função que checa se o numero apostado é igual ao sorteado

// se o numero apostado certo retorna "Parabéns você ganhou!"
// se o numero apostado errado retorna "Tente novamente"

const betVerify = (number, wonNumber) => {
  return (number === wonNumber) ? "Congratulations you won" : "Try again";
};

const betNumbers = (number, cb) => {
  const wonNumber = Math.floor(Math.random() * 6);
  console.log(wonNumber);
  console.log(cb(number, wonNumber));
};

betNumbers(5, betVerify);