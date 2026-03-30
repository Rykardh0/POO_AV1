const Estudante = require('./models/Estudante'); 
const Professor = require('./models/Professor');

const prof = new Professor("Márcio", 35, "POO")
const alun = new Estudante("Ricardo",28,2510138,"Sistemas")

console.log(prof.lancarNota(alun,8))
console.log(prof.lancarNota(alun,7))
console.log(prof.lancarNota(alun,9))

console.log(alun.boletim())