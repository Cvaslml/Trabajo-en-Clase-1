// Base URL
let base_url = "https://api.open-meteo.com/v1/forecast?";
let end_url = "&current=temperature_2m&hourly=temperature_2m&timezone=auto&past_days=3&forecast_days=3";

function mapearDatos(datos) {
    document.getElementById("v_lat").innerText = datos.latitude;
    document.getElementById("v_long").innerText = datos.longitude;
    document.getElementById("v_alt").innerText = datos.elevation;
    document.getElementById("v_zone").innerText = datos.timezone;
    document.getElementById("v_temp").innerText = datos.current.temperature_2m;
    document.getElementById("v_hour").innerText = datos.current.time;

    actualizarGrafico(datos.hourly.time, datos.hourly.temperature_2m);
}

function cargarDatos() {
    let latitude = document.getElementById("latitud").value;
    let longitude = document.getElementById("longitud").value;

    let url = `${base_url}latitude=${latitude}&longitude=${longitude}${end_url}`;

    fetch(url)
        .then((response) => {
            if (!response.ok) {
                throw new Error("Error en la solicitud");
            }
            return response.json();
        })
        .then((data) => {
            mapearDatos(data);
        })
        .catch((error) => {
            console.error("Error", error);
        });
}

// ADD listener
document.getElementById("buscar_datos").addEventListener("click", cargarDatos);

// Función para actualizar el gráfico con datos reales
function actualizarGrafico(labels, data) {
    let ctx = document.getElementById("grafico").getContext("2d");
    
    if (window.myChart) {
        window.myChart.destroy();
    }

    window.myChart = new Chart(ctx, {
        type: "line",
        data: {
            labels: labels,
            datasets: [{
                label: "Temperatura",
                data: data,
                borderWidth: 1,
                borderColor: "blue",
                fill: false
            }]
        },
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: false
                }
            }
        }
    });
}

// Crear un gráfico inicial con datos de prueba
const ctx = document.getElementById("grafico").getContext("2d");
window.myChart = new Chart(ctx, {
    type: "line",
    data: {
        labels: ["2025-03-02T00:00", "2025-03-02T01:00", "2025-03-02T02:00", "2025-03-02T03:00", "2025-03-02T04:00"],
        datasets: [{
            label: "Temperatura",
            data: [20.3, 20.5, 20.3, 20.1, 19.9, 19.7],
            borderWidth: 1,
            borderColor: "red",
            fill: false
        }]
    },
    options: {
        responsive: true,
        scales: {
            y: {
                beginAtZero: false
            }
        }
    }
});
