import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TelaPrincipalComponent } from './tela-principal.component';

describe('TelaPrincipalComponent', () => {
  let component: TelaPrincipalComponent;
  let fixture: ComponentFixture<TelaPrincipalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TelaPrincipalComponent]
    });
    fixture = TestBed.createComponent(TelaPrincipalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
