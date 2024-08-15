import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TareasService {

  private localeStorageKey = "Listatareas";

  constructor() { }

  getTareas():string[]{
    return JSON.parse(localStorage.getItem(this.localeStorageKey) as string) || [];
  }

  agregarTarea(tarea: string){
    const tareas = this.getTareas();
    tareas.push(tarea);
    localStorage.setItem(this.localeStorageKey, JSON.stringify(tareas));
  }

  eliminarTarea(index:number){
    const tareas = this.getTareas();
    tareas.splice(index, 1);
    localStorage.setItem(this.localeStorageKey, JSON.stringify(tareas));
  }

}
