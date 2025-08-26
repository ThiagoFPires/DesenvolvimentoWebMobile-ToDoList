import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-footer-action-bar',
  standalone: true,
  imports: [CommonModule, MatButtonModule],
  templateUrl: './footer-action-bar.component.html',
  styleUrls: ['./footer-action-bar.component.css']
})
export class FooterActionBarComponent {
  @Output() limparListaEvent = new EventEmitter<void>();
  @Output() limparConcluidasEvent = new EventEmitter<void>();
  @Output() salvarEvent = new EventEmitter<void>();

  clickLimparLista() {
    console.log('Botão Limpar Lista clicado no footer');
    this.limparListaEvent.emit();
  }

  clickLimparConcluidas() {
    console.log('Botão Limpar Concluídas clicado no footer');
    this.limparConcluidasEvent.emit();
  }

  clickSalvar() {
    console.log('Botão Salvar clicado no footer');
    this.salvarEvent.emit();
  }
}
