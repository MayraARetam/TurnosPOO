import Especialidad from "./class/Especialidad";
import Medico from "./class/Medico";
import GestorDeArchivos from "./class/GestordeArchivos";
import { cargarEspecialidades, crearEspecialidad, borrarEspecialidad, cargarMedicos, crearMedico, borrarMedico, cargarPaciente} from "./helper";
import Paciente from "./class/Paciente";


let arregloEspecialidades: Array<Especialidad> = [];

let datosEspecialidad : GestorDeArchivos = new GestorDeArchivos('./txt/especialidades.txt');


for(let i: number = 0; i<datosEspecialidad.getArregloString().length; i++){
    cargarEspecialidades(arregloEspecialidades, datosEspecialidad.getArregloString()[i]);
}

//console.log(arregloEspecialidades);

//crearEspecialidad(arregloEspecialidades);

//borrarEspecialidad(arregloEspecialidades, "Cardiologo");

//console.log(arregloEspecialidades);

//----------------------------------------------------------------------
//MEDICOS

let arregloMedicos : Array<Medico> = [];

let datosMedicos : GestorDeArchivos = new GestorDeArchivos('./txt/medicos.txt');

for (let i : number= 0; i< datosMedicos.getArregloString().length; i++){
    cargarMedicos(arregloMedicos,arregloEspecialidades[4],datosMedicos.getArregloString()[i]);
}
console.log(arregloMedicos);

for(let i: number= 0; i < arregloMedicos.length; i ++){
    console.log(`El medico ${arregloMedicos[i].getNombre()} tiene la especialidad ${arregloEspecialidades[i].getEspecialidad()}`)
}
//crearMedico(arregloMedicos);

//console.log(arregloMedicos);

//borrarMedico(arregloMedicos);

//console.log(arregloMedicos);

//------------------------------------------------------------------
// PACIENTES

let arregloPacientes : Array<Paciente> = [];

let datosPacientes : GestorDeArchivos = new GestorDeArchivos('./txt/paciente.txt');

for(let i : number = 0; i < datosPacientes.getArregloString().length; i++){
    cargarPaciente(arregloPacientes,datosPacientes.getArregloString()[i]);
}

console.log(arregloPacientes);






