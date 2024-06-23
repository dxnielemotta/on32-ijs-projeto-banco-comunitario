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
    if (this.saldo < valor) {
      return console.log("Saldo insuficiente");
    }
  }
}
