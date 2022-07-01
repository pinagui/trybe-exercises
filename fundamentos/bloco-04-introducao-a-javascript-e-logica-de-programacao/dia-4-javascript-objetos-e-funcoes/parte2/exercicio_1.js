//  1 - Crie uma função que receba uma string e retorne true se for um palíndromo, ou false, se não for.

function verificaPalindrome(str){

let palindromo = '';

    for(let i = str.length - 1; i >= 0; i -= 1){
        palindromo += str[i];
    }

    if(str === palindromo){
        return true;
    }else{
        return false;
    }

}

let str = 'arara';
verificaPalindrome(str);