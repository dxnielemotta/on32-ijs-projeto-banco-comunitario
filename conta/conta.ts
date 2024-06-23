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
    if (this.saldo < valor) {
      console.log("Saldo insuficiente");
    }

    this.saldo -= valor;
  }

  transferir(valor: number, contaDestino: ContaInterface): void {
    if (this.saldo < valor) {
      console.log("Saldo insuficiente");
    }

    this.saldo -= valor;
    contaDestino.saldo += valor;
  }
}
