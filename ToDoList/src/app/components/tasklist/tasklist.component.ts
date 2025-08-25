import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { Tarefa } from '../../../type';

@Component({
  selector: 'app-tasklist',
  standalone: true,
  imports: [CommonModule, FormsModule, MatCheckboxModule, MatIconModule],
  templateUrl: './tasklist.component.html',
  styleUrls: ['./tasklist.component.css']
})
export class TasklistComponent {
  listaInterna: Tarefa[] = [];

  @Output() toggleConcluidaEvent = new EventEmitter<number>();
  @Output() removerTarefaEvent = new EventEmitter<number>();

  logTarefas(tarefas: Tarefa[]) {
    this.listaInterna = [...tarefas];
    console.log('Lista recebida no filho:', this.listaInterna);
  }

  toggleConcluida(id: number) {
    this.toggleConcluidaEvent.emit(id);
  }

  removerTarefa(id: number) {
    this.removerTarefaEvent.emit(id);
  }

  // Função para limpar a lista
  limparLista() {
    console.log('Lista limpa no componente filho');
    this.listaInterna = [];
  }
}
