/*
====================================================
 Pantalla Federal
 script.js
 Versión 0.4 - Datos
====================================================
*/

async function cargarMenu() {

    const respuesta = await fetch("datos/menu.json");

    const menu = await respuesta.json();

    const contenido = document.getElementById("contenido");

    const contenedor = document.createElement("div");

    contenedor.className = "menu";

    menu.forEach(item => {

        const tarjeta = document.createElement("div");

        tarjeta.className = "card";

        tarjeta.innerHTML = `
            <div class="icono">${item.icono}</div>
            <h2>${item.titulo}</h2>
            <p>${item.texto}</p>
        `;

        contenedor.appendChild(tarjeta);

    });

    contenido.appendChild(contenedor);

}

cargarMenu();
