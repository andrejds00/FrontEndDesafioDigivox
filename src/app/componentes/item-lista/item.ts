import { TipoItem } from './../tipo-item-lista/tipoItem';
export class Item{
    id: BigInteger;
    descricao: string;
    valor: number;
    tipoItem: TipoItem;
    status: string;
}