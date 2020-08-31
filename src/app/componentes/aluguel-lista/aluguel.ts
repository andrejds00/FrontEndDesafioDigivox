import { Item } from './../item-lista/item';
import { Cliente } from '../clientes/clientes';

export class Aluguel{
    id: BigInteger;
    cliente: Cliente;
    item: Item;
    dataAluguel: string;
    dataDevolucao: string;
    valorSeguro: number;
    observacao: string;
    status: string;
}