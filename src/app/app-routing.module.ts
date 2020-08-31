import { ReservaCadastroComponent } from './componentes/reserva-cadastro/reserva-cadastro.component';
import { ReservaListaComponent } from './componentes/reserva-lista/reserva-lista.component';
import { AluguelCadastroComponent } from './componentes/aluguel-cadastro/aluguel-cadastro.component';
import { AluguelListaComponent } from './componentes/aluguel-lista/aluguel-lista.component';
import { ItemListaComponent } from './componentes/item-lista/item-lista.component';
import { ItemCadastroComponent } from './componentes/item-cadastro/item-cadastro.component';
import { TipoItemListaComponent } from './componentes/tipo-item-lista/tipo-item-lista.component';
import { ClientesComponent } from './componentes/clientes/clientes.component';
import { HomeComponent } from './componentes/home/home.component';
import { LayoutComponent } from './layout/layout.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClientesCadastroComponent } from './componentes/clientes-cadastro/clientes-cadastro.component';
import { TipoItemCadastroComponent } from './componentes/tipo-item-cadastro/tipo-item-cadastro.component';


const routes: Routes = [
  {path:'', component: LayoutComponent, children: [
    {path:'home', component: HomeComponent},
    {path:'clientes', component: ClientesComponent},
    {path:'clientes-cadastro', component: ClientesCadastroComponent},
    {path:'clientes-cadastro/:id', component: ClientesCadastroComponent},
    {path:'tipo-item-lista', component: TipoItemListaComponent},
    {path:'tipo-item-cadastro', component: TipoItemCadastroComponent},
    {path:'tipo-item-cadastro/:id', component: TipoItemCadastroComponent},
    {path:'item-lista', component: ItemListaComponent},
    {path:'item-cadastro', component: ItemCadastroComponent},
    {path:'item-cadastro/:id', component: ItemCadastroComponent},
    {path:'aluguel-lista', component: AluguelListaComponent},
    {path:'aluguel-cadastro', component: AluguelCadastroComponent},
    {path:'aluguel-cadastro/:id', component: AluguelCadastroComponent},
    {path:'reserva-lista', component: ReservaListaComponent},
    {path:'reserva-cadastro', component: ReservaCadastroComponent},
    {path:'reserva-cadastro/:id', component: ReservaCadastroComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
