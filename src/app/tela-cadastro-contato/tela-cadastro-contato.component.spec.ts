import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TelaCadastroContatoComponent } from './tela-cadastro-contato.component';

describe('TelaCadastroContatoComponent', () => {
  let component: TelaCadastroContatoComponent;
  let fixture: ComponentFixture<TelaCadastroContatoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TelaCadastroContatoComponent]
    });
    fixture = TestBed.createComponent(TelaCadastroContatoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
