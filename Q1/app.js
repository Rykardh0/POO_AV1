class Aluno {
    constructor(nome,matricula,idade,curso){
        this.nome=nome;
        this.matricula=matricula;
        this.idade=idade;
        this.curso=curso;
    }
    apresentar(){
        return(console.log("Eu sou "+this.nome,
                            "matricula "+this.matricula, 
                            "tenho "+this.idade,
                            "anos e curso "+this.curso+"."))
    }
    situacao(){
            if(this.idade>=18){
                return(console.log("Maior de idade"))
            }else{
                return(console.log("Menor de idade")) 
            }
    }
}

const a = new Aluno("Ricardo Henrique",2510138,18,"Sistemas")
a.apresentar();
a.situacao();