// 2- Agora, desenvolva um algoritmo que é capaz de inverter uma palavra. Por exemplo, a palavra "banana" seria invertida para "ananab".

let word = 'tryber';
let reverseWord = '';

for (let i = word.length - 1; i >= 0; i -= 1){
    reverseWord += word[i];
}

//for (let i = 0; i < word.length; i += 1){
//    reverseWord += word[i];
//}

console.log(reverseWord);