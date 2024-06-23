import { Cliente } from "./cliente/cliente";
import { ContaCorrente } from "./conta/contaCorrente";
import { ContaPoupanca } from "./conta/contaPoupanca";

const ana = new Cliente(
  "Ana Santos",
  "123",
  "Avenida Brasil",
  "71992345478",
  500
);

const marcos = new Cliente(
  "Marcos Santana",
  "345",
  "Rua Carlos Gomes",
  "7190327642",
  2000
);

try {
  const cc = new ContaCorrente("001", 0, ana);

  cc.depositar(200);

  cc.sacar(100);

  const cp = new ContaPoupanca("543", 100, marcos);

  cc.transferir(20, cp);
} catch (error) {
  console.log(error);
}
