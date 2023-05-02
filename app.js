let listaNoticias = [];


const noticias = {
    imagen: "",
    titulo: "",
    subtitulo: "",
    informacion: ""
}

let editando = false;

const formulario = document.querySelector("#agregarNoticias");
const imagenMostrar = document.querySelector("#imagen");
const tituloMostrar = document.querySelector("#titulo");
const subtituloMostrar = document.querySelector("#subtitulo");
const informacionMostrar = document.querySelector("#informacion");

formulario.addEventListener("submit", validarFormulario);

function validarFormulario(e){
    e.preventDefault();

    if(imagenMostrar.value === "" || tituloMostrar.value === "" || subtituloMostrar.value === "" || informacionMostrar.value === ""){
        alert("Todos los campos deben ser llenados");
        return;
    }
    if(editando){
        //editarNoticia();
        editando = false;
    }else{
        objFormulario.imagen = Date.now();
        objFormulario.titulo = tituloMostrar.value;
        objFormulario.subtitulo = subtituloMostrar.value;
        objFormulario.informacion = informacionMostrar.value;

        agregarNoticia();
    }
}

function agregarNoticia(){
    listaNoticias.push({...objFormulario});
    
    
    mostrarNoticia();

    formulario.reset();

    limpiarObjeto();
}
function limpiarObjeto(){
    objFormulario.imagen = "";
    objFormulario.tutulo = "";
    objFormulario.subtitulo = "";
    objFormulario.informacion = "";

}
function mostrarNoticia(){

    limpiarHTML();

    const divNoticia = document.querySelector(".div-noticias");

    listaNoticias.forEach(noticia => {
        const {titulo, subtitulo, informacion} = noticia;
        const parrafo = document.createElement("p");
        parrafo.textContent = `${titulo} - ${subtitulo} - ${informacion} -`;
        parrafo.dataset.imagen = imagen;

        const editarBoton = document.createElement("button");
        //editarBoton.onclick = () => cargarNoticia(noticia);
        editarBoton.textContent = "Editar";
        editarBoton.classList.add("btn", "btn-editar");
        parrafo.append(editarButton);

        const eliminarBoton = document.createElement("button");
        //eliminarBoton.onclick = () => eliminarrNoticia(imagen);
        eliminarBoton.textContent = "Eliminar";
        eliminarBoton.classList.add("btn", "btn-eliminar");
        parrafo.append(eliminarBoton);

        const hr = document.createElement("hr");

        divNoticia.appendChild(parrafo);
        divNoticia.appendChild(hr);
    })
}

function limpiarHTML(){
    const divNoticia = document.querySelector(".div-noticia");
    while(divNoticia.firstChild){
        divNoticia.removeChild(divNoticia.firstChild);
    }
}