const hydrate = (str) => {

  let cupCounter = 0;
  let numbers = str.split("");

  
  for (let number of numbers){
    cupCounter += parseInt(number);
  }

  if

  if(cupCounter === 1) {
    return `${cupCounter} copo de água`;
  } else {
    return `${cupCounter} copos de água`
  }

}

module.exports = hydrate;