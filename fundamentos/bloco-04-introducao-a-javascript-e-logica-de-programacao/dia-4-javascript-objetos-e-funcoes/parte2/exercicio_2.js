//  2 - Crie uma função que receba um array de inteiros e retorne o índice do maior valor.

function maiorValorIndice(arr){

let maiorIndice = arr[0];

    for(i in arr){
        if(arr[i] > maiorIndice){
            maiorIndice = i;
        }
    }
    return maiorIndice;
}


let arr = [2, 3, 6, 7, 10, 1];
maiorValorIndice(arr);