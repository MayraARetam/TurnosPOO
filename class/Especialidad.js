"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Especialidad = /** @class */ (function () {
    function Especialidad(nombreEspecialidad) {
        this.nombreEspecialidad = nombreEspecialidad;
    }
    Especialidad.prototype.getEspecialidad = function () {
        return this.nombreEspecialidad;
    };
    return Especialidad;
}());
exports.default = Especialidad;
