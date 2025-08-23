import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FooterActionBarComponent } from '../footer-action-bar/footer-action-bar.component';
import { TasklistComponent } from '../tasklist/tasklist.component';

@Component({
  selector: 'app-to-do-list',
  standalone: true,
  imports: [CommonModule, FormsModule, MatInputModule, MatButtonModule, FooterActionBarComponent, TasklistComponent],
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.css']
})
export class ToDoListComponent {
  novaTarefa: string = '';

  adicionarTarefa() {
    if (this.novaTarefa.trim()) {
      console.log('Tarefa adicionada:', this.novaTarefa);
      this.novaTarefa = '';
    }
  }
}
