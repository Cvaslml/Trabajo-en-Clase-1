let listaPalabras = ["perro", "gato", "elefante", "jirafa", "mono", "gallina", "tigre", "oso", "leon", "serpiente"];
let palabraSecreta;
let intentosRestantes = 6;
let letrasUsadas = [];
document.getElementById("jugar").disabled = false;
document.getElementById("validar").disabled = true;
document.getElementById("reiniciar").disabled = true;

//Función para obtener la palabra según los aciertos del usuario
function obtenerPalabra() {
    let palabra = "";
    for (let letra of palabraSecreta) {
        if (letrasUsadas.includes(letra)) {
            palabra += letra + " ";
        } else {
            palabra += "_ ";
        }
    }
    return palabra.trim();
}

//Función para iniciar el juego
function jugar() {
    intentosRestantes = 6;
    letrasUsadas = [];
    palabraSecreta = listaPalabras[Math.floor(Math.random() * listaPalabras.length)];
    document.getElementById("intentosRestantes").textContent = intentosRestantes;
    document.getElementById("letrasUsadas").textContent = "";
    document.getElementById("palabra").textContent = obtenerPalabra();
    document.getElementById("jugar").disabled = true;
    document.getElementById("validar").disabled = false;
    document.getElementById("reiniciar").disabled = false;
}   

//Función para reiniciar el juego
function reiniciar() {
    document.getElementById("jugar").disabled = false;
    document.getElementById("validar").disabled = true;
    document.getElementById("reiniciar").disabled = true;
    document.getElementById("palabra").textContent = "";
    document.getElementById("intentosRestantes").textContent = "6";
    document.getElementById("letrasUsadas").textContent = "";
    document.getElementById("letra").value = "";
}

//Función para validar la letra ingresada por el usuario
function validarLetra() {
    let letra = document.getElementById("letra").value.toLowerCase();
    document.getElementById("letra").value = "";

    if (!letra.match(/[a-z]/) || letra.length !== 1) {
        alert("Ingrese una letra válida");
        return;
    }
    
    if (letrasUsadas.includes(letra)) {
        alert("La letra ya ha sido usada");
        return;
    }
    
    letrasUsadas.push(letra);
    document.getElementById("letrasUsadas").textContent = letrasUsadas.join(", ");

    if (!palabraSecreta.includes(letra)) {
        intentosRestantes--;
        document.getElementById("intentosRestantes").textContent = intentosRestantes;
    }

    document.getElementById("palabra").textContent = obtenerPalabra();

    if (intentosRestantes === 0) {
        alert("¡Has perdido! La palabra era " + palabraSecreta);
        document.getElementById("validar").disabled = true;
    }

    if (!document.getElementById("palabra").textContent.includes("_")) {
        alert("¡Felicidades! Has adivinado la palabra");
        document.getElementById("validar").disabled = true;
    }
}

//Agregar el evento click a los botones
document.getElementById("jugar").addEventListener("click", jugar);
document.getElementById("validar").addEventListener("click", validarLetra);
document.getElementById("reiniciar").addEventListener("click", reiniciar);

