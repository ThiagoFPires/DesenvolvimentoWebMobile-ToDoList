import { Component } from '@angular/core';
import { MatListModule } from '@angular/material/list'
import { MatCheckboxModule } from '@angular/material/checkbox'
import { CommonModule } from '@angular/common'

@Component({
  selector: 'app-tasklist',
  standalone: true,
  imports: [CommonModule, MatCheckboxModule, MatListModule],
  templateUrl: './tasklist.component.html',
  styleUrl: './tasklist.component.css'
})
export class TasklistComponent {
  tarefas = [
    { descricao: 'Estudar Angular', concluida: false},
    { descricao: 'Criar lista', concluida: true},
    { descricao: 'Teste', concluida: true}
    
  ];

}
