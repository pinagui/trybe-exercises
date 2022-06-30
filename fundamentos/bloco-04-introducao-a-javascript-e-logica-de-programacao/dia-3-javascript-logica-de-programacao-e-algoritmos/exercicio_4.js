// 4- Um número primo é um número inteiro maior do que 1 que possui somente dois divisores, ou seja, é divisível por 1 e por ele mesmo. Sabendo disso, escreva um algoritmo que retorne o maior número primo entre 2 e 50.

let numPrimo = 0;

for (let i = 2; i < 50; i += 1) {
    if (i % 2 != 0 && i % 3 != 0 && i % 4 != 0 && i % 5 != 0 && i % 6 != 0 && i % 7 != 0 && i % 8 != 0 && i % 9 != 0){
        numPrimo = i;
    }
}

console.log(numPrimo);