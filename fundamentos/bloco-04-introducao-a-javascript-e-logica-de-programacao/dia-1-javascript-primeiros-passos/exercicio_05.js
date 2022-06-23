// 5- 🚀 Faça um programa que defina três constantes com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false, caso contrário. Se algum ângulo for inválido o programa deve retornar uma mensagem de erro.

//Para os ângulos serem de um triângulo válido, a soma dos três devem ser 180 graus.

//Um ângulo será considerado inválido se não tiver um valor positivo.

const anguloA = 60;
const anguloB = 60;
const anguloC = 60;
const somaDosAngulos = anguloA + anguloB + anguloC;
const angulosPositivos = anguloA > 0 && anguloB > 0 && anguloC > 0;

if (angulosPositivos){
    if (somaDosAngulos === 180){
    console.log(true);
}else{
    console.log(false);
}
}else{
    console.log("Erro: ângulo inválido");
}