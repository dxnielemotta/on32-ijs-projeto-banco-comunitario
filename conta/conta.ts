import { clienteInterface } from "../cliente/clienteInterface";
import { ContaInterface } from "./contaInterface";

export class Conta implements ContaInterface {
  constructor(
    public numeroConta: string,
    public saldo: number,
    public cliente: clienteInterface
  ) {}

  depositar(valor: number): void {
    this.saldo += valor;
    console.log(`Depósito realizado! Saldo após depósito: ${this.saldo}`);
  }

  sacar(valor: number): void {
    this.verificaSaldoSuficiente(valor);

    this.saldo -= valor;
    `Saque realizado! Saldo após saque: ${this.saldo}`;
  }

  transferir(valor: number, contaDestino: ContaInterface): void {
    this.verificaSaldoSuficiente(valor);

    this.saldo -= valor;
    contaDestino.saldo += valor;
    `Transferência realizado! Saldo após transferência: ${this.saldo}`;
  }

  protected verificaSaldoSuficiente(valor: number): void {
    if (this.saldo < valor) {
      return console.log("Saldo insuficiente");
    }
  }
}
