function verificarAprobacion(calificacion, asistencias) {
    if (asistencias >= 80) {
        if (calificacion >= 5) { 
            return "Aprobado";
        } else {
            return "Reprobado";
        }
    } 
}
let calificacion = parseFloat(prompt("Ingrese la calificación del alumno: "));
let asistencias = parseFloat(prompt("Ingrese el porcentaje de asistencias del alumno: "));

let resultado = verificarAprobacion(calificacion, asistencias);
alert("El alumno ha "+resultado);