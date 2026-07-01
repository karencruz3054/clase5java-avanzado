/**
 * Programar un contador de caracteres para un textarea
 */
const cajaDeTexto = document.getElementById('miTexto');
        const elContador = document.getElementById('contador');

        cajaDeTexto.addEventListener('input', function(){
            let cantidadDeLetras = cajaDeTexto.value.length;
            elContador.innerText = cantidadDeLetras;
        })