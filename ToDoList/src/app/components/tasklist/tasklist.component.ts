import { Component, EventEmitter, Output, OnInit } from '@angular/core';
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
export class TasklistComponent implements OnInit {
  listaInterna: Tarefa[] = [];

  @Output() toggleConcluidaEvent = new EventEmitter<number>();
  @Output() removerTarefaEvent = new EventEmitter<number>();

  ngOnInit(): void {
    const listaSalva = localStorage.getItem('tarefas');
    if (listaSalva) {
      this.listaInterna = JSON.parse(listaSalva);
    }
  }

  logTarefas(tarefas: Tarefa[]) {
    tarefas.forEach(nova => {
      const existe = this.listaInterna.find(t => t.id === nova.id);
      if (!existe) {
        this.listaInterna.push({ ...nova, concluida: false });
      }
    });
    this.salvarNoLocalStorage();
    console.log('Lista atualizada no filho:', this.listaInterna);
  }

  toggleConcluida(id: number) {
    const tarefa = this.listaInterna.find(t => t.id === id);
    if (tarefa) {
      tarefa.concluida = !tarefa.concluida;
      this.salvarNoLocalStorage();
      this.toggleConcluidaEvent.emit(id);
    }
  }

  removerTarefa(id: number) {
    this.listaInterna = this.listaInterna.filter(t => t.id !== id);
    this.salvarNoLocalStorage();
    this.removerTarefaEvent.emit(id);
  }

  limparLista() {
    console.log('Lista limpa no componente filho');
    this.listaInterna = [];
    localStorage.removeItem('tarefas');
  }

  onCheckboxChange(tarefa: Tarefa) {
    tarefa.concluida = !tarefa.concluida;
    this.salvarNoLocalStorage();
    this.toggleConcluidaEvent.emit(tarefa.id);
  }

  private salvarNoLocalStorage() {
    localStorage.setItem('tarefas', JSON.stringify(this.listaInterna));
  }
}
