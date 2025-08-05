function datosForm() {
    const formulario = document.getElementById('form');
    const name = document.getElementById('name');
    const age = document.getElementById('age');
    const isInvited = document.querySelectorAll('input[name="isInvited"');
    let invitation;
    const message = document.getElementById('salida');

    for (const radio of isInvited) {
        if (radio.checked) {
            invitation = (radio.value === 'si');
            // console.log(invitation);
            break;
        }
    }

    let nameInput = name.value;
    let ageInput = parseInt(age.value);

    if (ageInput < 18) {
        salida.textContent = `Lo sentimos ${nameInput}, no puede ingresar por ser menor de 18 años.`;
    } else if (invitation === false) {
        salida.textContent = `Lo sentimos ${nameInput}, requiere una invitación para poder ingresar.`
    } else if (ageInput < 18 && invitation === false) {
        salida.textContent = `Lo sentimos ${name}, requiere ser mayor de 18 años y tener una invitación para poder ingresar`
    } else {
        const message = `Bienvenid@ ${nameInput}!, puedes ingresar.`;
        salida.textContent = message;

        name.value = '';
        age.value = '';
    }
}