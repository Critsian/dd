
function Persona (nombre, edad, genero){
    this.nombre=nombre;
    this.edad=edad;
    this.genero=genero;
}

Persona.prototype.hablar = function(){
    console.log("Hola me llamo " + this.nombre);
}
Persona.prototype.obtDetalles = function(){
    console.log(Persona);
}


function Estudiante (nombre, edad, genero, curso, grupo){
    this.super = Persona;
    this.super(nombre,edad,genero);
    this.grupo=grupo;
    this.curso=curso;
}

Estudiante.prototype = new Persona();
Estudiante.prototype.constructor = Estudiante;

function Profesor (nombre, edad, genero, asignatura, nivel){
    this.super = Persona;
    this.super(nombre,edad,genero);
    this.asignatura=asignatura;
    this.nivel=nivel;
}

Profesor.prototype = new Persona();
Profesor.prototype.constructor = Profesor;


Estudiante.prototype.hablar = function(){
    console.log("hola mi nombre es " + this.nombre);
}

Estudiante.prototype.registrar = function(){
    console.log("Funcion Registro de " + this.nombre);
}

Profesor.prototype.asignar = function(){
    console.log("Asigna el profesor "+this.nombre);
}

const dd = new Estudiante("jose",32,"masculino","b","c");
const ff = new Profesor("alex",40,"masculino","b","c");

console.log(Estudiante);
console.log(Persona);

console.log(dd);
console.log(ff);

dd.hablar();
ff.hablar();
dd.registrar();
ff.asignar();
