import Especialidad from "./Especialidad";

export default class Medico{
    private nombre : string;
    private matricula : number;
    private especialidad : Especialidad;


    constructor(nombre : string, matricula : number, especialidad : Especialidad){
        this.nombre = nombre;
        this.matricula = matricula;
        this.especialidad = especialidad;
    }

    public getNombre() : string {
        return this.nombre;
    }

    public getMatricula() : number {
        return this.matricula;
    }

    public getEspecialidad() : Especialidad {
        return this.especialidad;
    }
}