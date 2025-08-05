const userInput = document.getElementById('user');
userInput.value = 'Username';
const login = document.getElementById('form');
const pinAcceso = document.getElementById('pin');
const waitMessage = document.getElementById('wait');

function ingresar(event) {

    // login.addEventListener('submit', function (event) {
        event.preventDefault();

        let user = userInput.value;
        // console.log(user);
        let pin = parseInt(pinAcceso.value);
        // console.log(pin);
        let accesoConcedido = false;

        if (user === 'Username' && pin === 1234) {
            accesoConcedido = true
            waitMessage.textContent = `¡Bienvenid@ ${user}! Puede ingresar. Redirigiendo...`;
        } else {
            waitMessage.textContent = 'Usuario o contraseña incorrectos, intente de nuevo.';
        }

        if (accesoConcedido) {
            setTimeout(() => {
                window.location.href = '../pages/saldo.html';
            }, 1500);
        }
    //  })

}