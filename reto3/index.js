const texto = document.getElementById('texto');
const numberTabla = document.getElementById('tabla');
const verT = document.getElementById('btnVer');
const nombreTabla = document.getElementById('nomTabla')
const salida = document.getElementById('tablaMultiplicar');
const botones = document.getElementById('botones');
const message = document.getElementById('message');
const salirB = document.getElementById('btnSalir');

function ver(event) {
    event.preventDefault();
    let tabla = parseInt(numberTabla.value);
    nombreTabla.textContent = `Tabla del ${tabla}`
    salida.style.display = 'block';

    salida.textContent = '';

    for (let i = 1; i <= 10; i ++) {
        resultado = tabla * i;
        salida.innerHTML += `${tabla} X ${i} = ${resultado}<br>`;
    }
    texto.style.display = 'none';
    numberTabla.style.display = 'none';
    verT.style.display = 'none';
    botones.style.display = 'flex';
    numberTabla.value = '';
}

function volver (event) {
    event.preventDefault();

    nombreTabla.textContent = '';
    salida.style.display = 'none';
    texto.style.display = 'block';
    numberTabla.style.display = 'block';
    verT.style.display = 'block';
    botones.style.display = 'none';
    salida.textContent = '';
    message.textContent = '';
    salirB.style.display = 'block';
}

function salir(event) {
    event.preventDefault();

    nombreTabla.textContent = '';
    salida.style.display = 'none';
    salida.textContent = '';
    salirB.style.display = 'none';
    message.textContent = 'Gracias por usar nuestra página, vuelva pronto.';
}