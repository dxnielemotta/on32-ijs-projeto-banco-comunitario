import { clienteInterface } from "./clienteInterface";

export class Cliente implements clienteInterface {
  constructor(
    public nomeCompleto: string,
    public id: string,
    public endereco: string,
    public telefone: string,
    public rendaSalarial: number
  ) {}
}
