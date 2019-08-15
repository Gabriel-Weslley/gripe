// A partir do vetor contido no arquivo data.json e utilizando os métodos de array (map, reduce, filter e find)
const data = require("./data.js");
// 1. Crie uma variável que contenha todas as idades (age) dos usuário - map
//const age = data.map(data => `${data.age}`);
//console.table(age);
//const novoPassageiros = passageiros.map(passageiro => {
   // return `${passageiro.nome} tem ${2019 - passageiro.dataNascimento} anos
// 2. Crie uma variáveis que tenha apenas os usuários do sexo feminino e com mais de 18 anos - reduce
const mulher = data.filter(data => { return `${data.gender.includes('female')} && ${data.age >= 18}`});
console.table(mulher);
// 3. Crie uma variável que procura por um usuário que more na cidade chamada Monroe - find
// 4. Multiplique a idade de todos usuários por dois e depois realize um filtro nos usuários que possuem no máximo 50 anos



//console.table(data);