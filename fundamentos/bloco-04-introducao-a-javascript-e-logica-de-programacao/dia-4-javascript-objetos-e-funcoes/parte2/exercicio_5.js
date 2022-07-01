//  🚀 5 - Crie uma função que receba um array de inteiros e retorne o inteiro que mais se repete.

function repete(number){

    let maisRepetido = 0;
    let count = 0;

    for(value of number){
        for(value2 of number){
            if(value === number){
                count += 1;
                maisRepetido += number;
            }
        }
    }


}

let number = [2, 3, 2, 5, 8, 2, 3];
repete(number);