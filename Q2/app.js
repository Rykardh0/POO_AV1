class ContaBancaria {
    #saldo=0;
    constructor (titular,conta){
        this.titular=titular;
        this.conta=conta;
    }

    saldo(){
        return this.#saldo;
    }

    depositar(valor){
        if(valor>0){
            this.#saldo=this.#saldo+valor;
            return"Depósito de R$ "+valor.toFixed(2)+" realizado!"
        }else{
            return"❌ Valor inválido para depósito"
        }
    }

    sacar(valor){
        if(valor<=this.#saldo){
            this.#saldo=this.#saldo-valor;
            return"Saque de R$ "+valor.toFixed(2)+" realizado!"
        }else{
            return "❌ Saldo insuficiente para sacar R$ "+valor.toFixed(2)
        }
    }

    extrato(){
        return "Titular: "+this.titular+
                            "| Conta: "+this.conta+
                            "| Saldo: R$ "+this.saldo().toFixed(2)
                
    }
}
const a = new ContaBancaria("Ricardo Henrique",2510138)
console.log(a.depositar(1000))
console.log(a.sacar(350))
console.log(a.sacar(800))
console.log(a.extrato())