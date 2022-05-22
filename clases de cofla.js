const obtenerInformacion = (materia)=>{
    const materias ={
        fisica: ["Hernandes","pedro","roberta","cofla",],
        matematicas:  ["Fernandez","pedro","roberta","cofla","pepita"],
        quimica:  ["Rodriguez","pedro","cofla","pepita"],
        programacion:  ["Gonzalez","roberta","cofla","pepita"], 


    }
    if (materias[materia] !== undefined){
        return [materias[materia],materia,materias];
    } else {
        return materias;
    }
}
const mostrarInformacion = (materia)=>{ 
    let informacion = obtenerInformacion(materia);

if (informacion !== false){ 
    let profesor = informacion[0][0];
    alumnos = informacion[0];
    alumnos.shift();
    document.write(`El profesodor de <b>${informacion[1]}</b>: es <b style="color:red">${profesor}</b><br> 
    los alumnos son_ <b style="color:blue"<}>${alumnos}</b><br><br>`);
}
}
const cantidadDeClases =(alumno)=>{
    let informacion = obtenerInformacion();
    let clasesPresentes = [];
    let cantidadTotal = 0;
    for (info in informacion){
        if(informacion[info].includes(alumno)){
            cantidadTotal++;
            clasesPresentes.push(info + " ");
        }
    } 
    return `<b style="color:blue">${alumno}</b> esta en ${cantidadtotal} clases</b><br>
    Esta cursando las clases: <b>${clasesPresentes}</b><br><br>
    `;
}
mostrarInformacion("fisica");
mostrarInformacion("matematicas");
mostrarInformacion("quimica");
mostrarInformacion("programacion");
document.write(cantidadDeClases("cofla"));