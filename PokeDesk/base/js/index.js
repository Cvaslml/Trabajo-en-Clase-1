// URL BASE PARA PETICIONES HTTP
let base_url = "https://pokeapi.co/api/v2/pokemon/";

// Función para cargar información de un pokemon en el DOM de nuestra página.
function cargarPokemon(pokemon) {
    document.getElementById("pokemon_name").innerText = pokemon.name.toUpperCase();
    document.getElementById("pokemon_id").innerText = pokemon.id;
    document.getElementById("pokemon_height").innerText = pokemon.height;
    document.getElementById("pokemon_weight").innerText = pokemon.weight;
    document.getElementById("pokemon_image").src = pokemon.sprites.front_default;
}

// Función para enviar peticiones a la API por el parámetro dado.
function obtenerDatosPokemon(parameter) {
    let url = base_url + parameter;
    
    fetch(url)
        .then((response) => {
            if (!response.ok) {
                throw new Error("Pokemon no encontrado");
            }
            return response.json();
        })
        .then((data) => {
            cargarPokemon(data);
        })
        .catch((error) => {
            alert("Pokemon no encontrado");
            console.error("Error: ", error);
        });
}

// Función para obtener el dato ingresado por el usuario.
function buscarPokemon() {
    let parametro = document.getElementById("pokemon_text").value.trim().toLowerCase();
    if (parametro) {
        obtenerDatosPokemon(parametro);
    } else {
        alert("Ingrese un nombre o ID de Pokémon");
    }
}

// Añadir listener al botón
document.getElementById("buscar").addEventListener("click", buscarPokemon);

// Generar ID de Pokémon aleatorio y obtener sus datos
const randomPokemon = Math.floor(Math.random() * 1025) + 1;
obtenerDatosPokemon(randomPokemon);
