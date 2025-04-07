import Especialidad from "./class/Especialidad";
import * as ReadlineSync from 'readline-sync';

export function cargarEspecialidades(arr:Array<Especialidad>, especialidad: string): Array<Especialidad>{
    let nuevaEspecialidad : Especialidad = new Especialidad(especialidad);
    arr.push(nuevaEspecialidad);
        return arr;
}


export function crearEspecialidad(arr:Array<Especialidad>): Especialidad{
    let nuevoEspecialista: string = ReadlineSync.question("Ingrese el nombre de la nueva especialidad: ");
    let newEspecialidad : Especialidad = new Especialidad(nuevoEspecialista);
    arr.push(newEspecialidad);

    return newEspecialidad;

}