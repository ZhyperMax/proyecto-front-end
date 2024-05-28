document.getElementById('boton').addEventListener('click', function() {
    var email = document.getElementById('email').value;
    if (email) {
        alert('Gracias por suscribirte');
    } else {
        alert('Por favor, introduce tu correo electrónico');
    }
});