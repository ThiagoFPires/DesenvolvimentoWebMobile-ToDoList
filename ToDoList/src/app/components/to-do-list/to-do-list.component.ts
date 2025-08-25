import { Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';

import { FooterActionBarComponent } from '../footer-action-bar/footer-action-bar.component';
import { TasklistComponent } from '../tasklist/tasklist.component';
import { Tarefa } from '../../../type';

@Component({
  selector: 'app-to-do-list',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    FooterActionBarComponent,
    TasklistComponent
  ],
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.css']
})
export class ToDoListComponent {
  novaTarefa: string = '';
  tarefas: Tarefa[] = [];
  private proximoId: number = 1;

  @ViewChild('tasklistRef') tasklist!: TasklistComponent;

  adicionarTarefa() {
    if (!this.novaTarefa.trim()) return;

    const tarefa: Tarefa = {
      id: this.proximoId++,
      nome: this.novaTarefa.trim(),
      concluida: false
    };

    this.tarefas.push(tarefa);
    this.novaTarefa = '';
    this.atualizarFilho();
  }

  toggleConcluida(id: number) {
    const tarefa = this.tarefas.find(t => t.id === id);
    if (tarefa) tarefa.concluida = !tarefa.concluida;
    this.atualizarFilho();
  }

  removerTarefa(id: number) {
    this.tarefas = this.tarefas.filter(t => t.id !== id);
    this.atualizarFilho();
  }

  // Atualiza o filho
  private atualizarFilho() {
    if (this.tasklist) this.tasklist.logTarefas(this.tarefas);
  }

  limparLista() {
    console.log('Evento recebido do footer: limpar lista');
    this.tarefas = [];
    if (this.tasklist) this.tasklist.limparLista();
  }


  // Evento do footer: limpar apenas concluídas
  limparConcluidas() {
    console.log('Evento recebido do footer: limpar concluídas');
    this.tarefas = this.tarefas.filter(t => !t.concluida);
    if (this.tasklist) this.tasklist.logTarefas(this.tarefas);
  }

  salvar() {
    console.log('Lista salva:', this.tarefas);
    alert('Lista de tarefas salva no console!');
  }
}
