import { Component, Inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-modal-deletar-contato',
  templateUrl: './modal-deletar-contato.component.html',
  styleUrls: ['./modal-deletar-contato.component.css'],
})
export class ModalDeletarContatoComponent {
  constructor(public dialogRef: MatDialogRef<ModalDeletarContatoComponent>, @Inject(MAT_DIALOG_DATA) public data: any) {}

  confirmDelete(): void {
    this.dialogRef.close(true)
  }

  closeModal(): void {
    this.dialogRef.close(false)
  }
}
