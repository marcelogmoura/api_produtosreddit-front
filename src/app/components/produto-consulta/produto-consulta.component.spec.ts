import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdutoConsultaComponent } from './produto-consulta.component';

describe('ProdutoConsultaComponent', () => {
  let component: ProdutoConsultaComponent;
  let fixture: ComponentFixture<ProdutoConsultaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProdutoConsultaComponent]
    });
    fixture = TestBed.createComponent(ProdutoConsultaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
