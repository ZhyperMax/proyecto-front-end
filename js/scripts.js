document.getElementById("contactForm").addEventListener("submit", function (event) {
    event.preventDefault();

    // Obtener los valores del formulario
    var nombre = document.getElementById("nombre").value;
    var email = document.getElementById("email").value;
    var mensaje = document.getElementById("mensaje").value;
    var suscripcion = document.getElementById("suscripcion").checked ? "Sí" : "No";
    var tema = document.getElementById("tema").value;

    // Verificar que todos los campos estén completados
    if (nombre === "" || email === "" || mensaje === "" || tema === "" || suscripcion === "") {
        alert("Por favor complete todos los campos del formulario.");
        return;
    }

    // Crear el contenido para el nuevo archivo HTML
    var newHtmlContent = `
    <!DOCTYPE html>
    <html lang="es">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Datos del Formulario</title>
    </head>
    <body>
        <h2>Datos enviados</h2>
        <p><strong>Nombre:</strong> ${nombre}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Mensaje:</strong> ${mensaje}</p>
        <p><strong>Suscripción al boletín:</strong> ${suscripcion}</p>
        <p><strong>Tema de interés:</strong> ${tema}</p>
    </body>
    </html>
`;

    // Resetear el formulario
    document.getElementById("nombre").value = "";
    document.getElementById("email").value = "";
    document.getElementById("mensaje").value = "";
    document.getElementById("suscripcion").checked = false;
    document.getElementById("tema").value = "general";

    // Mensaje de confirmacion
    alert("¡Formulario enviado exitosamente!");

    // Abrir una nueva ventana con los datos
    var newWindow = window.open();
    newWindow.document.write(newHtmlContent);
    newWindow.document.close();
    
});

//Fin del formulario de contacto






