let saldoDisp = document.getElementById('saldoDisp');
let saldoDispNum = 100000;
const saldoFormato = '$' + saldoDispNum;
saldoDisp.textContent = saldoFormato;
const caja = document.getElementById('retiro');
const botonVolver = document.getElementById('btnVolver');
const botonesCaja = document.getElementById('botones2');
let salidaRetiro = document.getElementById('salida');

function buttonRetirar(event) {
    event.preventDefault();

    caja.style.display = 'block';
}

function retirar() {
    let cantidadRetiro = document.getElementById('cantidad');
    let numeroCantidad = parseInt(cantidadRetiro.value);

    if (numeroCantidad === 0 || numeroCantidad < 10000) {
        salidaRetiro.textContent = 'Lo sentimos, el valor de su retiro debe ser mayor a $10.000'
        actualizar ();
    }
    else if (numeroCantidad <= saldoDispNum) {
        saldoDispNum -= numeroCantidad;
        salidaRetiro.textContent = `Retiro exitoso, su saldo disponible es $${saldoDispNum}`;
        let borrar = parseInt
        cantidadRetiro.value = '';
        botonesCaja.style.display = 'block';
        botonVolver.style.display = 'none';
        actualizar ();
    } else {
        salidaRetiro.textContent = `Saldo insuficiente, su saldo disponible es $${saldoDispNum}`;
        actualizar ();
    }
}

function actualizar() {
    saldoDisp.textContent = '$' + saldoDispNum;
}

function volver() {
    caja.style.display = 'none';
}

function verSaldo() {
    caja.style.display = 'none';
}

function salir() {
    window.location.href = '../pages/index.html';
}