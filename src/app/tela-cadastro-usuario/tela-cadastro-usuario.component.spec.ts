import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TelaCadastroUsuarioComponent } from './tela-cadastro-usuario.component';

describe('TelaCadastroUsuarioComponent', () => {
  let component: TelaCadastroUsuarioComponent;
  let fixture: ComponentFixture<TelaCadastroUsuarioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TelaCadastroUsuarioComponent]
    });
    fixture = TestBed.createComponent(TelaCadastroUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
