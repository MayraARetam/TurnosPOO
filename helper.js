"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cargarEspecialidades = cargarEspecialidades;
exports.crearEspecialidad = crearEspecialidad;
exports.borrarEspecialidad = borrarEspecialidad;
exports.cargarMedicos = cargarMedicos;
exports.crearMedico = crearMedico;
exports.borrarMedico = borrarMedico;
exports.cargarPaciente = cargarPaciente;
var Especialidad_1 = require("./class/Especialidad");
var Medico_1 = require("./class/Medico");
var Paciente_1 = require("./class/Paciente");
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
function borrarEspecialidad(arr, especialidad) {
    for (var i = 0; i < arr.length; i++) {
        if (especialidad == arr[i].getEspecialidad()) {
            arr.splice(i, 1);
        }
    }
}
function cargarMedicos(arr, especialidad, medico) {
    var datos = medico.split(",");
    var nombre = datos[0];
    var matricula = Number(datos[1]);
    var nuevoMedico = new Medico_1.default(nombre, matricula, especialidad);
    arr.push(nuevoMedico);
    return arr;
}
function crearMedico(arr) {
    var nombre = ReadlineSync.question("Ingrese su nombre y apellido: ");
    var matricula = Number(ReadlineSync.question("Ingrese su número de matrícula: "));
    var especialidad = ReadlineSync.question("Ingrese el nombre de su especialidad: ");
    var newMedico = new Medico_1.default(nombre, matricula, especialidad);
    arr.push(newMedico);
    return arr;
}
function borrarMedico(arr) {
    var nroMatricula = Number(ReadlineSync.question("Ingrese el nro de matricula del médico a eliminar: "));
    for (var i = 0; i < arr.length; i++) {
        if (nroMatricula == arr[i].getMatricula()) {
            arr.splice(i, 1);
        }
    }
}
;
//-------------------------------------------------------------------------------
// FUNCIONES DE CLASE PACIENTE 
function cargarPaciente(arr, paciente) {
    var datos = paciente.split(",");
    var nombre = datos[0];
    var dni = Number(datos[1]);
    var telefono = Number(datos[2]);
    var obraSocial = datos[3];
    var nuevoPaciente = new Paciente_1.default(nombre, dni, telefono, obraSocial);
    arr.push(nuevoPaciente);
    return arr;
}
;
