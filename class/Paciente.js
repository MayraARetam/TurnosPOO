"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Paciente = /** @class */ (function () {
    function Paciente(nombre, dni, telefono, obraSocial) {
        this.nombre = nombre;
        this.dni = dni;
        this.telefono = telefono;
        this.obraSocial = obraSocial;
    }
    Paciente.prototype.getNombre = function () {
        return this.nombre;
    };
    Paciente.prototype.getDni = function () {
        return this.dni;
    };
    Paciente.prototype.getTelefono = function () {
        return this.telefono;
    };
    Paciente.prototype.getObraSocial = function () {
        return this.obraSocial;
    };
    Paciente.prototype.setTelefono = function (nuevoTelefono) {
        this.telefono = nuevoTelefono;
    };
    Paciente.prototype.setObraSocial = function (nuevaOS) {
        this.obraSocial = nuevaOS;
    };
    return Paciente;
}());
exports.default = Paciente;
