import { DigivoxapiService } from './servicos/digivoxapi.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {ToastModule} from 'primeng/toast';
import {ListboxModule} from 'primeng/listbox';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './template/navbar/navbar.component';
import { SidebarComponent } from './template/sidebar/sidebar.component';
import { LayoutComponent } from './layout/layout.component';
import { HomeComponent } from './componentes/home/home.component';
import { ClientesComponent } from './componentes/clientes/clientes.component';
import {TableModule} from 'primeng/table';
import {InputTextModule} from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';
import { ClientesCadastroComponent } from './componentes/clientes-cadastro/clientes-cadastro.component';
import { MessageService, ConfirmationService } from 'primeng/api';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import { TipoItemListaComponent } from './componentes/tipo-item-lista/tipo-item-lista.component';
import { TipoItemCadastroComponent } from './componentes/tipo-item-cadastro/tipo-item-cadastro.component';
import { ItemCadastroComponent } from './componentes/item-cadastro/item-cadastro.component';
import { ItemListaComponent } from './componentes/item-lista/item-lista.component';
import {MultiSelectModule} from 'primeng/multiselect';
import { AluguelListaComponent } from './componentes/aluguel-lista/aluguel-lista.component';
import { AluguelCadastroComponent } from './componentes/aluguel-cadastro/aluguel-cadastro.component';
import {DataViewModule} from 'primeng/dataview';
import {CardModule} from 'primeng/card';
import {CalendarModule} from 'primeng/calendar';
import { DatePipe } from '@angular/common';
import {DialogModule} from 'primeng/dialog';
import {ChartModule} from 'primeng/chart';
import { ReservaListaComponent } from './componentes/reserva-lista/reserva-lista.component';
import { ReservaCadastroComponent } from './componentes/reserva-cadastro/reserva-cadastro.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidebarComponent,
    LayoutComponent,
    HomeComponent,
    ClientesComponent,
    ClientesCadastroComponent,
    TipoItemListaComponent,
    TipoItemCadastroComponent,
    ItemCadastroComponent,
    ItemListaComponent,
    AluguelListaComponent,
    AluguelCadastroComponent,
    ReservaListaComponent,
    ReservaCadastroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    TableModule,
    InputTextModule,
    ButtonModule,
    FormsModule,
    BrowserAnimationsModule,
    ToastModule,
    ConfirmDialogModule,
    ListboxModule,
    MultiSelectModule,
    DataViewModule,
    CardModule,
    CalendarModule,
    DialogModule,
    ChartModule
  ],
  providers: [DigivoxapiService,MessageService, ConfirmationService,DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
