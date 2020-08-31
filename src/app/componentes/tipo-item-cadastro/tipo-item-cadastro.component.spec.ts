import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoItemCadastroComponent } from './tipo-item-cadastro.component';

describe('TipoItemCadastroComponent', () => {
  let component: TipoItemCadastroComponent;
  let fixture: ComponentFixture<TipoItemCadastroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TipoItemCadastroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TipoItemCadastroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
