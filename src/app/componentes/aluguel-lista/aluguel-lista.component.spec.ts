import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AluguelListaComponent } from './aluguel-lista.component';

describe('AluguelListaComponent', () => {
  let component: AluguelListaComponent;
  let fixture: ComponentFixture<AluguelListaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AluguelListaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AluguelListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
