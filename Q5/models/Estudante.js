const Pessoa = require('./Pessoa');

class Estudante extends Pessoa{
    #notas = [];
    constructor(nome,idade,matricula,curso){
        super(nome,idade);
        this.matricula=matricula;
        this.curso=curso;
    }
    adicionarNota(nota){
        if(nota>=0 && nota<=10){
            this.#notas.push(nota);
            return `Nota ${nota} adicionada!`
        }else{
            return "❌ Nota inválida! Use um valor entre 0 e 10."
        }
    }
    media(){
        if(this.#notas.length == 0){
            return 0
        }else{
            var soma = 0;
           for(let i=0;i<this.#notas.length; i++){
            soma = soma + this.#notas[i];
           }
           return soma / this.#notas.length;
        }
    }
    situacao(){
        if(this.media() < 5){
            return "Reprovado ❌"
        }else if(this.media() >= 7){
            return "Aprovado ✅"
        }else{
            return "Recuperação ⚠️"
        }
    }
    boletim(){
        return `${this.nome} | Mat: ${this.matricula} | Média: ${this.media().toFixed(2)} | ${this.situacao()}`
    }
}
module.exports = Estudante;
