const encode = (encode) => {

  let encodePhrase = [];

  for (let letter of encode) {
    if (letter === 'a') {
      encodePhrase += '1';
    } else if (letter === 'e') {
      encodePhrase += '2';
    } else if (letter === 'i') {
      encodePhrase += '3';
    } else if (letter === 'o') {
      encodePhrase += '4';
    } else if (letter === 'u') {
      encodePhrase += '5';
    } else {
      encodePhrase += letter;
    }
  }
  return encodePhrase;
}

const decode = (decode) => {

  let decodePhrase = [];

  for(let number of decode){
    if(number === '1'){
      decodePhrase += 'a';
    } else if (number === '2'){
      decodePhrase += 'e';
    } else if (number === '3'){
      decodePhrase += 'i';
    } else if (number === '4'){
      decodePhrase += 'o';
    } else if (number === '5'){
      decodePhrase += 'u';
    } else {
      decodePhrase += number;
    }
  }
  return decodePhrase;
}

module.exports = {encode, decode}; 