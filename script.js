/*
====================================================
 Pantalla Federal
 script.js
 Versión 0.5 - Provincias por regiones
====================================================
*/


const botonProvincias = document.getElementById("btnProvincias");


botonProvincias.addEventListener("click", mostrarProvincias);



async function mostrarProvincias() {


    const contenido = document.getElementById("contenido");


    contenido.innerHTML = "";


    const titulo = document.createElement("h2");

    titulo.textContent = "Explorar provincias";

    contenido.appendChild(titulo);



    const respuesta = await fetch("datos/provincias.json");


    const provincias = await respuesta.json();



    const grupos = [

        {
            nombre: "Norte",
            regiones: ["noa", "nea"]
        },

        {
            nombre: "Centro",
            regiones: ["centro", "amba"]
        },

        {
            nombre: "Cuyo",
            regiones: ["cuyo"]
        },

        {
            nombre: "Patagonia",
            regiones: ["patagonia"]
        }

    ];



    grupos.forEach(grupo => {


        const tituloRegion = document.createElement("h3");

        tituloRegion.textContent = grupo.nombre;

        contenido.appendChild(tituloRegion);



        const caja = document.createElement("div");

        caja.className = "menu";



        provincias.forEach(provincia => {


            if (grupo.regiones.includes(provincia.region)) {


                const tarjeta = document.createElement("div");


                tarjeta.className = "card";


                tarjeta.innerHTML = `

                    <div class="icono">🇦🇷</div>

                    <h3>${provincia.nombre}</h3>

                    <p>
                    Capital: ${provincia.capital}
                    </p>

                `;


                caja.appendChild(tarjeta);


            }


        });



        contenido.appendChild(caja);


    });


}
