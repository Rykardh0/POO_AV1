class Pessoa{
    constructor(nome,idade){
        this.nome=nome;
        this.idade=idade;
    }
    apresentar(){
        return `${this.nome}, ${this.idade} anos`
    }
}
module.exports = Pessoa;