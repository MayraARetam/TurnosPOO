import Especialidad from "./class/Especialidad";
import Medico from "./class/Medico";
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

export function borrarEspecialidad(arr:Array<Especialidad>,especialidad:string){
    for(let i : number = 0; i<arr.length; i++){
        if(especialidad == arr[i].getEspecialidad()){
            arr.splice(i, 1)
        }
    }
}


export function cargarMedicos(arr:Array<Medico>,especialidad:Especialidad,medico:string): Array<Medico>{
    let datos : string[] = medico.split(",");
    let nombre : string = datos[0];
    let matricula: number = Number(datos[1]);
    
    let nuevoMedico: Medico = new Medico(nombre,matricula,especialidad) ;
    arr.push(nuevoMedico)

    return arr;
}

export function crearMedico(arr: Array<Medico>) {
    let nombre : string = ReadlineSync.question("Ingrese su nombre y apellido: ");
    let matricula : number = Number(ReadlineSync.question("Ingrese su número de matrícula: "));
    let especialidad : Especialidad = ReadlineSync.question("Ingrese el nombre de su especialidad: ");

    let newMedico : Medico = new Medico (nombre, matricula, especialidad);

    arr.push(newMedico);

    return arr;

}