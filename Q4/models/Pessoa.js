class Pessoa{
    constructor(nome,idade){
            this.nome=nome;
            this.idade=idade;
    }
    apresentar(){
        return "Sou "+this.nome+ 
                ", "+this.idade+" anos."
    }
    ehMaiorDeIdade(){
        if(this.idade>=18){
            return true
        }else{
            return false
        }
    }
}

module.exports = Pessoa;