import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoItemListaComponent } from './tipo-item-lista.component';

describe('TipoItemListaComponent', () => {
  let component: TipoItemListaComponent;
  let fixture: ComponentFixture<TipoItemListaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TipoItemListaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TipoItemListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
