// 6- Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado";

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let cont = 0;

for(i = 0; i < numbers.length; i += 1){
    if(numbers[i] % 2 !== 0){
        cont += 1;
    }
}


if(cont === 0){
    console.log("Nenhum valor ímpar encontrado");
}else{
    console.log(cont);
}
