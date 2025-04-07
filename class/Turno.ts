import Paciente from "./Paciente";
import Medico from "./Medico";

export default class Turno {
    private horario : number;
    private fecha : number;
    private paciente : Paciente;
    private medico : Medico;

    constructor(horario:number, fecha:number, paciente:Paciente, medico:Medico){
        this.horario = horario;
        this.fecha = fecha;
        this.paciente = paciente;
        this.medico = medico;
    }

    public getHorario(): number{
        return this.horario;
    }

    public setHorario(nuevoHorario: number): void{
        this.horario = nuevoHorario;
    }

    public getFecha(): number{
        return this.fecha;
    }

    public setFecha(nuevoDia: number): void{
        this.fecha = nuevoDia;
    }

    public getPaciente(): Paciente{
        return this.paciente;
    }

    public getMedico(): Medico{
        return this.medico;
    }

    public setMedico(nuevoMedico: Medico): void{
        this.medico = nuevoMedico;
    }

}