function verificarAprobacion(calificacion, asistencias, totalClases) {
    var porcentajeAsistencias = (asistencias/totalClases)*100;

    if (porcentajeAsistencias >= 80) {
        if (calificacion >= 3) { 
            return "Aprobado";
        } else {
            return "Reprobado";
        }
    } 
}
let calificacion = parseFloat(prompt("Ingrese la calificación del alumno: "));
let asistencias = parseFloat(prompt("Ingrese el porcentaje de asistencias del alumno: "));
let totalClases = parseFloat(prompt("Ingrese el numero total de clases: "));

let resultado = verificarAprobacion(calificacion, asistencias, totalClases);
alert("El alumno ha "+resultado);