import { Component } from '@angular/core';
import { ToDoListComponent } from './components/to-do-list/to-do-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ToDoListComponent],
  template: `<div class="app-container">
               <app-to-do-list></app-to-do-list>
             </div>`,
})
export class AppComponent {}
