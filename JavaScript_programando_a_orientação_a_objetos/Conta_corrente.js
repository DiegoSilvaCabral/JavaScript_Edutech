import { cliente } from "./Cliente.js";

export class conta_corrente {
    static numero_de_contas = 0;

    _cliente;

    /**
     * @param {any} novo_valor
     */
    set cliente(novo_valor) {
        if (novo_valor instanceof cliente) {
            this._cliente = novo_valor;
        }
    }

    get cliente () {
        return this._cliente;
    }

    agencia;

    _saldo;

    get saldo() {
        return this._saldo;
    }

    constructor(agencia, cliente) {
        this.agencia = agencia;
        this.cliente = cliente;
        conta_corrente.numero_de_contas++;
    }

    sacar(valor) {
        if (this.saldo >= valor) {
            this.saldo = this.saldo - valor;
            console.log(`operação concedida\nsaldo atual: ${this.saldo}`);
            return valor;
        } else {
            console.log(`operação recusada, não é permitido sacar um valor maior que seu saldo\nsaldo atual: ${this.saldo}`);
            return;
        }
    }

    depositar(valor) {
        if (valor <= 0) {
            console.log('Operação recusada, o depósito é menor ou igual a zero.');
            return;
        } else {
            this.saldo = this.saldo + valor;
            console.log(`Operação concedida\nsaldo atual: ${this.saldo}`);
            return valor;
        }
    }

    transferir (valor, conta) {
        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);
    }
}