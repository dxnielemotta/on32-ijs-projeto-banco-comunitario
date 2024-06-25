import { Cliente } from "../cliente/cliente";
import { Conta } from "./conta";
import { ContaInterface } from "./contaInterface";

export class ContaCorrente extends Conta {
  private _limiteChequeEspecial: number = 100;
  constructor(numeroConta: string, saldo: number, cliente: Cliente) {
    super(numeroConta, saldo, cliente);
    if (cliente.rendaSalarial < 500) {
      throw new Error(
        "Cliente não preenche os requisitos para criação de conta-corrente."
      );
    }

    console.log(`Conta-corrente criada. Saldo atual: ${this.saldo}`);
  }

  sacar(valor: number): void {
    this.verificaSaldoSuficiente(valor);
    this.saldo -= valor;
    console.log(`Saque realizado! Saldo após saque: ${this.saldo}`);
  }

  transferir(valor: number, contaDestino: ContaInterface): void {
    this.verificaSaldoSuficiente(valor);
    this.saldo -= valor;
    contaDestino.saldo += valor;

    console.log(
      `Transferência realizada. Saldo da conta atual após transferência: ${this.saldo}`
    );
  }

  protected verificaSaldoSuficiente(valor: number): void {
    if (this.saldo + this._limiteChequeEspecial < valor) {
      throw new Error("Limite de cheque especial insuficiente");
    }
  }
}
