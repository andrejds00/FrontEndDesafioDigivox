import { Item } from './../item-lista/item';
import { Cliente } from './../clientes/clientes';
export class Reserva{
    id: BigInteger;
    cliente: Cliente;
    item: Item;
    dataCadastro: string;
    dataReserva: string;
    observacao: string;
    status: string;
}