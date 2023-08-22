import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovimentoCadastroComponent } from './movimento-cadastro.component';

describe('MovimentoCadastroComponent', () => {
  let component: MovimentoCadastroComponent;
  let fixture: ComponentFixture<MovimentoCadastroComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MovimentoCadastroComponent]
    });
    fixture = TestBed.createComponent(MovimentoCadastroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
