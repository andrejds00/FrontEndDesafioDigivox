import { Aluguel } from './../componentes/aluguel-lista/aluguel';
import { Item } from './../componentes/item-lista/item';
import { TipoItem } from './../componentes/tipo-item-lista/tipoItem';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cliente } from '../componentes/clientes/clientes';
import { Reserva } from '../componentes/reserva-lista/reserva';


@Injectable({
  providedIn: 'root'
})
export class DigivoxapiService {

  base = "http://localhost:8090/api";

  constructor(private http: HttpClient) { }

  buscarClientes() : Observable<Cliente[]>{
    
    return this.http.get<Cliente[]>(`${this.base}/cliente`);    
  }

  buscarClienteById(id: number) : Observable<any>{
    return this.http.get<any>(`${this.base}/cliente/${id}`);
  }

  salvarCliente(cliente: Cliente) : Observable<Cliente>{
    console.log(cliente);
    return this.http.post<Cliente>(`${this.base}/cliente`,cliente);
  }

  deleteCliente(cliente: Cliente) : Observable<any>{
    return this.http.delete<any>(`${this.base}/cliente/${cliente.id}`);
  }


  salvarTipoItem(tipo: TipoItem) : Observable<TipoItem>{    
    return this.http.post<TipoItem>(`${this.base}/tipoitem`,tipo);
  }

  buscarTipoItem() : Observable<TipoItem[]>{
    return this.http.get<TipoItem[]>(`${this.base}/tipoitem`);    
  }

  buscarTipoItemById(id: number) : Observable<any>{
    return this.http.get<any>(`${this.base}/tipoitem/${id}`);
  }

  deleteTipo(tipo: TipoItem) : Observable<any>{
    console.log(tipo);
    return this.http.delete<any>(`${this.base}/tipoitem/${tipo.id}`);
  }

  buscarItens() : Observable<Item[]>{
    
    return this.http.get<Item[]>(`${this.base}/item`);    
  }

  buscarItensById(id: number) : Observable<any>{
    return this.http.get<any>(`${this.base}/item/${id}`);
  }

  salvarItem(item: Item) : Observable<Item>{
    console.log(item);
    return this.http.post<Item>(`${this.base}/item`,item);
  }

  deleteItem(item: Item) : Observable<any>{
    
    return this.http.delete<any>(`${this.base}/item/${item.id}`);
  }

  buscarAlugueis() : Observable<Aluguel[]>{
    
    return this.http.get<Aluguel[]>(`${this.base}/aluguel`);    
  }
  buscarAlugueisAtivos() : Observable<Aluguel[]>{
    
    return this.http.get<Aluguel[]>(`${this.base}/aluguelativos`);    
  }
  buscarAlugueisDevolvidos() : Observable<Aluguel[]>{
    
    return this.http.get<Aluguel[]>(`${this.base}/alugueldevolvidos`);    
  }

  salvarAluguel(aluguel: Aluguel) : Observable<Aluguel>{
    console.log(aluguel);
    return this.http.post<Aluguel>(`${this.base}/aluguel`,aluguel);
  }

  atualizarAluguel(aluguel: Aluguel) : Observable<Aluguel>{
    console.log(aluguel);
    return this.http.put<Aluguel>(`${this.base}/aluguel`,aluguel);
  }

  buscarReservas() : Observable<Reserva[]>{
    
    return this.http.get<Reserva[]>(`${this.base}/reserva`);    
  }

  buscarReservaById(id: number) : Observable<any>{
    
    return this.http.get<any>(`${this.base}/reserva/${id}`);
  }

  salvarReservas(reserva: Reserva) : Observable<Reserva>{
    console.log(reserva);
    return this.http.post<Reserva>(`${this.base}/reserva`,reserva);
  }

  deleteReserva(reserva: Reserva) : Observable<any>{
    
    return this.http.delete<any>(`${this.base}/reserva/${reserva.id}`);
  }

  buscarDevolucoesSemana() : Observable<Aluguel[]>{
    
    return this.http.get<Aluguel[]>(`${this.base}/aluguel-devolucao-semana`);    
  }

  buscarAlugueisSemana() : Observable<Aluguel[]>{
    
    return this.http.get<Aluguel[]>(`${this.base}/aluguel-alugueis-semana`);    
  }
}
