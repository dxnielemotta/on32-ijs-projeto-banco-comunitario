import { Cliente } from "../cliente/cliente";
import { Conta } from "./conta";

export class ContaPoupanca extends Conta {
  constructor(numeroConta: string, saldo: number, cliente: Cliente) {
    super(numeroConta, saldo, cliente);
  }
}
