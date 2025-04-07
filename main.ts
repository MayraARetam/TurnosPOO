import Especialidad from "./class/Especialidad";
import GestorDeArchivos from "./class/GestordeArchivos";
import { cargarEspecialidades, crearEspecialidad} from "./helper"


let arregloEspecialidades: Array<Especialidad> = [];

let datosEspecialidad : GestorDeArchivos = new GestorDeArchivos('./txt/especialidades.txt');


for(let i: number = 0; i<datosEspecialidad.getArregloString().length; i++){
    cargarEspecialidades(arregloEspecialidades, datosEspecialidad.getArregloString()[i]);
}

console.log(arregloEspecialidades);

crearEspecialidad(arregloEspecialidades);

console.log(arregloEspecialidades);

