// 1 - Crie uma função que retorne um objeto no formato { nomeCompleto, email } representando uma nova pessoa contratada. Passe sua função como parâmetro da HOF newEmployees para criar cada pessoa contratada em seu respectivo id. A sua função deve receber como parâmetro o nome completo da pessoa funcionária e a partir dele gerar automaticamente um email no formato nome_da_pessoa@trybe.com.

const newEmployer = (name) => {
  return {nomecompleto: `${name}`, email: `${name.replace(/ /g, "_").toLowerCase()}@trybe.com`}
};

const newEmployees = (cb) => {
  const employees = {
    
    id1: cb('Pedro Guerra'),
    id2: cb('Luiza Drumond'),
    id3: cb('Carla Paiva Santos'),
  }
  return employees;
};

console.log(newEmployees(newEmployer));