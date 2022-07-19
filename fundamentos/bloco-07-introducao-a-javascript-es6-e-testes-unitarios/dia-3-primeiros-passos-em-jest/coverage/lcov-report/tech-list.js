const techList = (techName, name) => {

  if(techName.length === 0) return 'Vazio!';

  let techListObject = [];
  let sortTech = techName.sort();

  for(let technologies of sortTech){
    techListObject.push({tech: technologies, name: name});  
  }
  return techListObject;
} 

module.exports = techList;