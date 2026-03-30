const AlunoFanese = require('./models/AlunoFanese.js')

const a = new AlunoFanese('Ricardo Henrique',18,2510138,'Sistemas')
console.log(a.apresentar())
console.log(a.estudar('POO'))
console.log(a.statusCompleto())