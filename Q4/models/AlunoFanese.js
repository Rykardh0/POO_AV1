const Pessoa = require('./Pessoa.js');

class AlunoFanese extends Pessoa{
    constructor(nome,idade,matricula,curso){
        super(nome,idade);
        this.matricula=matricula;
        this.curso=curso;
    }
    estudar(disciplina){
        return this.nome+" (mat: "+this.matricula+") está estudando "+disciplina
    }
    statusCompleto(){
        var age='';
        if(this.ehMaiorDeIdade()===true){
            age="Sim";
        }else{
            age="Não";
            }
        return this.apresentar()+" Curso: "+this.curso+". Maior de idade: "+age
    }
}
type="module",
module.exports = AlunoFanese;