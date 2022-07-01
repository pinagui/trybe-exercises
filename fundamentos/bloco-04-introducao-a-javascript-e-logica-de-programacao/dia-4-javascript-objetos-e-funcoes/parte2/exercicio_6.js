//  6 - Crie uma função que receba um número natural (número inteiro não negativo) N e retorne o somatório de todos os números de 1 até N.

function sumNumber(number){
    if(number < 0){
        return('número inválido'); 
    }

    let sumOfNumber = 0;

    for(let i = 0; i <= number; i += 1){
        sumOfNumber += i;
    }
    return sumOfNumber;
}


let number = -5;
sumNumber(number);