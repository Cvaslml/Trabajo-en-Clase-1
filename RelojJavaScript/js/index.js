/* Ejercicio una función que permite mostrar el reloj
en el elemento HTML con id="reloj" al presionar el botón con id="mostrar" */
function reloj() {
    let JustoAhora = new Date()
    let hora = JustoAhora.getHours()
    let minuto = JustoAhora.getMinutes()
    let segundo = JustoAhora.getSeconds()
    document.getElementById("reloj").innerText = hora + " : " + minuto + " : " + segundo
    setTimeout("reloj()",1000)
}

setInterval(reloj,-1000);
// Agregar el evento click al botón
document.getElementById("mostrar").addEventListener("click", reloj);



