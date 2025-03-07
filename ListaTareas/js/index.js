let listaTareas = [];

// Función para agregar una tarea a la lista
function agregarTarea() {
    let tareaTexto = document.getElementById("inputTarea").value.trim();
    if (tareaTexto === "") {
        alert("Por favor, ingrese una tarea válida.");
        return;
    }
    
    let tarea = {
        texto: tareaTexto,
        completada: false
    };
    listaTareas.push(tarea);
    document.getElementById("inputTarea").value = "";
    mostrarTareas();
}

// Función para mostrar la lista de tareas
function mostrarTareas() {
    let lista = document.getElementById("listaTareas");
    lista.innerHTML = "";
    
    listaTareas.forEach((tarea, index) => {
        let item = document.createElement("li");
        item.innerText = tarea.texto;
        item.style.textDecoration = tarea.completada ? "line-through" : "none";
        item.addEventListener("click", () => marcarTarea(index));
        lista.appendChild(item);
    });
}

// Función para marcar o desmarcar tareas
function marcarTarea(index) {
    listaTareas[index].completada = !listaTareas[index].completada;
    mostrarTareas();
}

// Agregar el evento click al botón
document.getElementById("btnAgregarTarea").addEventListener("click", agregarTarea);
