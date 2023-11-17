function validarFormulario() {
    var nombre = document.getElementById('nombre').value;
    var email = document.getElementById('email').value;
    var mensaje = document.getElementById('mensaje').value;

    // Validación básica
    var errorNombre = document.getElementById('errorNombre');
    var errorEmail = document.getElementById('errorEmail');
    var errorMensaje = document.getElementById('errorMensaje');
    var valido = true;

    errorNombre.innerHTML = '';
    errorEmail.innerHTML = '';
    errorMensaje.innerHTML = '';

    if (nombre.trim() === '') {
        errorNombre.innerHTML = 'Campo obligatorio';
        valido = false;
    }

    if (email.trim() === '') {
        errorEmail.innerHTML = 'Campo obligatorio';
        valido = false;
    }

    if (mensaje.trim() === '') {
        errorMensaje.innerHTML = 'Campo obligatorio';
        valido = false;
    }

    // Puedes agregar más validaciones según sea necesario

    if (valido) {
        // Aquí puedes agregar el código para enviar el formulario
        alert('Formulario válido. Enviando datos...');
    } else {
        // Puedes agregar un mensaje o acción adicional en caso de que el formulario no sea válido
        alert('Por favor, completa todos los campos obligatorios.');
    }
}