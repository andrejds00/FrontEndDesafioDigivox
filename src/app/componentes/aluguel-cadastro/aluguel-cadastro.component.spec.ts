import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AluguelCadastroComponent } from './aluguel-cadastro.component';

describe('AluguelCadastroComponent', () => {
  let component: AluguelCadastroComponent;
  let fixture: ComponentFixture<AluguelCadastroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AluguelCadastroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AluguelCadastroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
