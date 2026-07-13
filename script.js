/*
====================================================
 Pantalla Federal
 script.js
 Versión 0.5 - Navegación provincias
====================================================
*/


const botonProvincias = document.getElementById("btnProvincias");


botonProvincias.addEventListener("click", cargarProvincias);



async function cargarProvincias() {


    const respuesta = await fetch("datos/provincias.json");

    const provincias = await respuesta.json();


    const contenido = document.getElementById("contenido");


    contenido.innerHTML = "";


    const titulo = document.createElement("h2");

    titulo.textContent = "Explorar provincias";

    contenido.appendChild(titulo);



    const contenedor = document.createElement("div");

    contenedor.className = "menu";



    provincias.forEach(provincia => {


        const tarjeta = document.createElement("div");


        tarjeta.className = "card";


        tarjeta.innerHTML = `

            <div class="icono">🇦🇷</div>

            <h3>${provincia.nombre}</h3>

            <p>
            Capital: ${provincia.capital}
            </p>

        `;


        contenedor.appendChild(tarjeta);


    });



    contenido.appendChild(contenedor);


}
