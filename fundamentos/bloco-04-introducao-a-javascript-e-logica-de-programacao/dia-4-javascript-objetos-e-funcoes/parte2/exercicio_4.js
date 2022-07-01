//  4 - Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres.

function maiorNome(nomes){

    let maiorNome = '';

    for(let maior of nomes){
        if(maior.length > maiorNome.length){
            maiorNome = maior;
        }
    }
    return maiorNome;
}


let nomes = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];
maiorNome(nomes);