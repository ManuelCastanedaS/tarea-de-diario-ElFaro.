setInterval(() => {
    let fecha = new Date();
    let diaSemana = document.getElementById("diaSemana");
    let dia = document.getElementById("dia");
    let year = document.getElementById("year");
    let mes = document.getElementById("mes");
    let hora = document.getElementById("horas");
    let minutos = document.getElementById("minutos");
    let segundos = document.getElementById("segundos");
    let meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "octubre", "noviembre", "diciembre"];
    let dias = ["Domingo", "Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado"]
    let diaNuevo;
    if (fecha.getHours() < 10) {
        diaNuevo = `0${fecha.getHours()}`
    } else {
        diaNuevo = `${fecha.getHours()}`
    }
    if (fecha.getMinutes() < 10) {
        minutoNuevo = `0${fecha.getMinutes()}`
    } else {
        minutoNuevo = `${fecha.getMinutes()}`
    }
    if (fecha.getSeconds() < 10) {
        segundoNuevo = `0${fecha.getSeconds()}`
    } else {
        segundoNuevo = `${fecha.getSeconds()}`
    }
    
    diaSemana.textContent = `${dias[fecha.getUTCDay()]}`
    year.textContent = `${fecha.getFullYear()}`
    dia.textContent= `${fecha.getUTCDate()}`
    mes.textContent = `${meses[fecha.getMonth()]}`
    hora.textContent = diaNuevo
    minutos.textContent = minutoNuevo
    segundos.textContent = segundoNuevo

}, 1000);


