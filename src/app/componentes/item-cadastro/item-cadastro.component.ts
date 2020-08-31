import { TipoItem } from './../tipo-item-lista/tipoItem';
import { Observable } from 'rxjs';
import { Item } from './../item-lista/item';
import { MessageService } from 'primeng/api';
import { ActivatedRoute, Params } from '@angular/router';
import { DigivoxapiService } from './../../servicos/digivoxapi.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-item-cadastro',
  templateUrl: './item-cadastro.component.html',
  styleUrls: ['./item-cadastro.component.css']
})
export class ItemCadastroComponent implements OnInit {

  item: Item;
  id: number;
  statusBotao: string;
  tipos: TipoItem[];
  tipoSelecionado: TipoItem;

  constructor(private servico: DigivoxapiService, private activeRouter: ActivatedRoute, private messageService: MessageService) {
    this.item = new Item();  
    this.statusBotao = "Cadastrar";
    this.tipos = [];
   }

  ngOnInit(): void {
    
    this.carregarTipoItem();


    let params : Observable<Params> = this.activeRouter.params
    params.subscribe(urlParams => {
      this.id = urlParams['id'];
      if(this.id){
        this.statusBotao = "Atualizar"
        this.servico.buscarItensById(this.id).subscribe(
          resposta => {
            this.item = resposta;            
          },erroResposta => this.item = new Item() 
        )
      }else{

      }
     
    })

    
  }

  cadastrarItem(){    
    this.item.tipoItem = this.tipoSelecionado;
    this.servico.salvarItem(this.item).subscribe(
      resposta => {
        this.item = resposta;
        this.messageService.add({severity:'success', summary: 'Item Cadastrado/Atualizado', detail: 'Item Cadastrado/Atualizado com Sucesso!'});
      }
    )    
  }

  carregarTipoItem(){
    this.servico.buscarTipoItem().subscribe(
      resposta => this.tipos = resposta
      );

  }

}
