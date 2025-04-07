"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var GestordeArchivos_1 = require("./class/GestordeArchivos");
var helper_1 = require("./helper");
var arregloEspecialidades = [];
var datosEspecialidad = new GestordeArchivos_1.default('./txt/especialidades.txt');
for (var i = 0; i < datosEspecialidad.getArregloString().length; i++) {
    (0, helper_1.cargarEspecialidades)(arregloEspecialidades, datosEspecialidad.getArregloString()[i]);
}
console.log(arregloEspecialidades);
(0, helper_1.crearEspecialidad)(arregloEspecialidades);
console.log(arregloEspecialidades);
