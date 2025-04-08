"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Medico = /** @class */ (function () {
    function Medico(nombre, matricula, especialidad) {
        this.nombre = nombre;
        this.matricula = matricula;
        this.especialidad = especialidad;
    }
    Medico.prototype.getNombre = function () {
        return this.nombre;
    };
    Medico.prototype.getMatricula = function () {
        return this.matricula;
    };
    Medico.prototype.getEspecialidad = function () {
        return this.especialidad;
    };
    return Medico;
}());
exports.default = Medico;
