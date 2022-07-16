
// 🚀 Altere as variáveis para respeitarem o escopo em que foram declaradas.

// Modifique a estrutura da função para que ela seja uma arrow function;
// Modifique as variáveis para que respeitem o escopo onde estão declaradas;
// Modifique as concatenações para template literals.

// function testingScope(escopo) {
//   if (escopo === true) {
//     var ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
//     ifScope = ifScope + ' ótimo, fui utilizada no escopo !';
//     console.log(ifScope);
//   } else {
//     var elseScope = 'Não devo ser utilizada fora meu escopo (else)';
//     console.log(elseScope);
//   }
//   console.log(ifScope + ' o que estou fazendo aqui ? :O'); // Se necessário esta linha pode ser removida.
// }

// testingScope(true);

const testingScope = (escopo) => {
  if (escopo === true) {
    let ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
    ifScope = `${ifScope} ótimo, fui utilizada no escopo !`;
    console.log(ifScope);
  } else {
    const elseScope = 'Não devo ser utilizada fora meu escopo (else)';
    console.log(elseScope);
  }
}

testingScope(true);



// 🚀 Crie uma função que retorne um array em ordem crescente.

// Crie uma função que faça com que o array oddsAndEvens fique na ordem crescente;
// Utilize o console.log e template literals para retornar a frase: 'Os números 2,3,4,7,10,13 se encontram ordenados de forma crescente!'.

//     Utilize template literals para que a chamada console.log(<seu código>oddsAndEvens<seu código>); retorne a frase "Os números 2,3,4,7,10,13 se encontram ordenados de forma crescente!".

// Bônus (opcional): tente fazer o mesmo exercício utilizando o método array.sort(). Spoiler: É possível realizar uma função que ordene qualquer array de números. 

const oddsAndEvens = [13, 3, 4, 10, 7, 2];
oddsAndEvens.sort((a, b) => a - b);

console.log(`Os números ${oddsAndEvens} se encontram ordenados de forma crescente!`);

// Abaixo, você verá algumas especificações de algoritmos para desenvolver. É fundamental que você utilize o que aprendeu sobre let, const, arrow functions, template literals e ternary operator.

// Crie uma função que receba um número e retorne seu fatorial.

// Na matemática, o fatorial de um número inteiro e positivo N, representado por N!, é o produto de todos os seus antecessores até o número um. Exemplo: 4! = 4 * 3 * 2 * 1 = 24.
// Bônus (opcional): tente fazer o mesmo exercício de forma recursiva. Spoiler: É possível resolver com uma linha usando ternary operator.


const fatorial = (numb) => {

  let resultado = '1';

  for (let i = 2; i <= numb; i += 1) {
    resultado *= i;
  }
  return resultado;
}

console.log(fatorial(4));

// Crie uma função que receba uma frase e retorne a maior palavra.

const longestWord = (str) => {
  const separaPalavras = str.split(' ');
  let maiorPalavra = '';

  for (let palavra of separaPalavras) {
    if (palavra.length > maiorPalavra.length) {
      maiorPalavra = palavra;
    }
  }
  return maiorPalavra;
}

longestWord('Antônio foi no banheiro e não sabemos o que aconteceu')

/*

    🚀 Crie uma página com um contador de cliques

Sua página deve conter:

    Um botão ao qual será associado um event listener;
    Uma variável clickCount no arquivo JavaScript que acumule o número de clicks no botão;
    Um campo no HTML que vá atualizando a quantidade de clicks no botão conforme a variável clickCount é atualizada.

*/

const btn = document.createElement('button');
document.body.appendChild(btn);
btn.innerText = 'CLICK ME'
btn.className = ('btn');


const paragraph = document.createElement('p');
document.body.appendChild(paragraph);
paragraph.innerText = 'Clicke no botão';

let clickCount = 0;

btn.addEventListener('click', (event) => {
  clickCount += 1;

  if (clickCount === 1) {
    paragraph.innerText = `O foi clickado ${clickCount} vez`;
  }else{
    paragraph.innerText = `O botão já foi clickado ${clickCount} vezes`;
  }
});





