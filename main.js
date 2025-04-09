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
(0, helper_1.borrarEspecialidad)(arregloEspecialidades, "Cardiologo");
console.log(arregloEspecialidades);
//----------------------------------------------------------------------
//MEDICOS
var arregloMedicos = [];
var datosMedicos = new GestordeArchivos_1.default('./txt/medicos.txt');
for (var i = 0; i < datosMedicos.getArregloString().length; i++) {
    (0, helper_1.cargarMedicos)(arregloMedicos, arregloEspecialidades[4], datosMedicos.getArregloString()[i]);
}
console.log(arregloMedicos);
for (var i = 0; i < arregloMedicos.length; i++) {
    console.log("El medico ".concat(arregloMedicos[i].getNombre(), " tiene la especialidad ").concat(arregloEspecialidades[i].getEspecialidad()));
}
(0, helper_1.crearMedico)(arregloMedicos);
console.log(arregloMedicos);
