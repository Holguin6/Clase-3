function verificarAprobacion(calificacion, asistencias, Total_clases) {
    var porcentaje = (asistencias / Total_clases) * 100;

    if (porcentaje >= 80) {
        if (calificacion >= 3) { 
            return "Aprobado";
        } else {
            return "Reprobado";
        }
    } else {
        return "Reprobado por inasistencias";
    }
}

let calificacion = parseFloat(prompt("Ingrese la calificación del alumno: "));
let asistencias = parseFloat(prompt("Ingrese el porcentaje de asistencias del alumno: "));
let Total_clases = parseFloat(prompt("Ingrese el número total de clases: "));

let resultado = verificarAprobacion(calificacion, asistencias, Total_clases);
alert("El alumno ha " + resultado);