// 9- Utilizando o array criado no exercício anterior imprima o resultado da divisão de cada um dos elementos por 2.

let numbers = [];

for(i = 0; i <= 25; i += 1){
    numbers.push(i) / 2;
    
}

for(i = 0; i < numbers.length; i += 1){
    console.log(numbers[i] / 2);
}