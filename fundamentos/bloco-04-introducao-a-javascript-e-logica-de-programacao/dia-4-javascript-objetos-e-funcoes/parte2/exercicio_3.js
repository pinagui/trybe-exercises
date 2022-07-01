function menorIndice(arr){

let menorValor = arr[0]
let menorIndice = 0;

    for(let i in arr){
        if(arr[i] < menorValor){
            menorValor = arr[i];
        }
    }

    for(i = 0; i < arr.length; i += 1){
        if(menorValor === arr[i]){
            menorIndice = i;
        }
    }

    console.log(menorIndice);
}

let arr = [2, -4, 6, 7, 10, 0, -3];
menorIndice(arr);