export default class Paciente {
    private nombre : string;
    private dni : number;
    private telefono : number;
    private obraSocial : string;

    constructor(nombre : string, dni:number, telefono:number, obraSocial:string ){
        this.nombre = nombre;
        this.dni = dni;
        this.telefono = telefono;
        this.obraSocial = obraSocial;
    }

    public getNombre() : string{
        return this.nombre;
    }

    public getDni(): number{
        return this.dni;
    }

    public getTelefono(): number {
        return this.telefono;
    }

    public getObraSocial(): string {
        return this.obraSocial;
    }

    public setTelefono(nuevoTelefono: number) {
        this.telefono = nuevoTelefono;
    }

    public setObraSocial(nuevaOS: string) {
        this.obraSocial = nuevaOS;
    }
}