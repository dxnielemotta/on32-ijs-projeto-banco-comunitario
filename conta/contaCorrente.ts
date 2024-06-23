import { Cliente } from "../cliente/cliente";
import { Conta } from "./conta";
import { ContaInterface } from "./contaInterface";

export class ContaCorrente extends Conta {
  constructor(numeroConta: string, saldo: number, cliente: Cliente) {
    super(numeroConta, saldo, cliente);
  }

  sacar(valor: number): void {
    this.verificaSaldoSuficiente(valor);
    this.saldo -= valor;
  }

  transferir(valor: number, contaDestino: ContaInterface): void {
    this.verificaSaldoSuficiente(valor);
    this.saldo -= valor;
    contaDestino.saldo += valor;
  }

  protected verificaSaldoSuficiente(valor: number): void {
    if (this.saldo + 100 < valor) {
      console.log("Limite de cheque especial insuficiente");
      return;
    }
  }
}
