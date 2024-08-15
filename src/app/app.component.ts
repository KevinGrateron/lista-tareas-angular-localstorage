import { Component, inject, OnInit } from '@angular/core';
// import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TareasService } from './services/tareas.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  
  listTareas:string[] = [];
  nuevaTarea: string = "";

  private tareaService = inject(TareasService);

  ngOnInit(): void {
      this.listTareas = this.tareaService.getTareas();
  }

  eliminarTarea(index:number){
    this.tareaService.eliminarTarea(index);
    this.listTareas = this.tareaService.getTareas();
  }
  agregarTarea(){
    this.tareaService.agregarTarea(this.nuevaTarea);
    this.nuevaTarea = "";
    this.listTareas = this.tareaService.getTareas();
  }


}
