"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cargarEspecialidades = cargarEspecialidades;
exports.crearEspecialidad = crearEspecialidad;
var Especialidad_1 = require("./class/Especialidad");
var ReadlineSync = require("readline-sync");
function cargarEspecialidades(arr, especialidad) {
    var nuevaEspecialidad = new Especialidad_1.default(especialidad);
    arr.push(nuevaEspecialidad);
    return arr;
}
function crearEspecialidad(arr) {
    var nuevoEspecialista = ReadlineSync.question("Ingrese el nombre de la nueva especialidad: ");
    var newEspecialidad = new Especialidad_1.default(nuevoEspecialista);
    arr.push(newEspecialidad);
    return newEspecialidad;
}
