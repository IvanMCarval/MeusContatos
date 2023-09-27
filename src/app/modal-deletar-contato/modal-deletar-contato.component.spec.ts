import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalDeletarContatoComponent } from './modal-deletar-contato.component';

describe('ModalDeletarContatoComponent', () => {
  let component: ModalDeletarContatoComponent;
  let fixture: ComponentFixture<ModalDeletarContatoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModalDeletarContatoComponent]
    });
    fixture = TestBed.createComponent(ModalDeletarContatoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
