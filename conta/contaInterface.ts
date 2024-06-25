import { clienteInterface } from "../cliente/clienteInterface";

export interface ContaInterface {
  numeroConta: string;
  saldo: number;
  cliente: clienteInterface;

  depositar(valor: number): void;
  sacar(valor: number): void;
  transferir(valor: number, contaDestino: ContaInterface): void;
}
