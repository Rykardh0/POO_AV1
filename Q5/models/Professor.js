const Pessoa = require('./Pessoa');

class Professor extends Pessoa{
    constructor(nome,idade,disciplina){
        super(nome,idade);
        this.disciplina=disciplina;
    }
    lancarNota(estudante,nota){
        estudante.adicionarNota(nota);
        return `Prof. ${this.nome} lançou nota ${nota} para ${estudante.nome}`
    }
}
module.exports = Professor;