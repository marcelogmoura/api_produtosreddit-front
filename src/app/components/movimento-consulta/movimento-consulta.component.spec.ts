import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovimentoConsultaComponent } from './movimento-consulta.component';

describe('MovimentoConsultaComponent', () => {
  let component: MovimentoConsultaComponent;
  let fixture: ComponentFixture<MovimentoConsultaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MovimentoConsultaComponent]
    });
    fixture = TestBed.createComponent(MovimentoConsultaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
