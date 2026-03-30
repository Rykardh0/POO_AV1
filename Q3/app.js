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

const a = new AlunoFanese('Ricardo Henrique',18,2510138,'Sistemas')
console.log(a.apresentar())
console.log(a.estudar('POO'))
console.log(a.statusCompleto())