var ventana = document.getElementById("ventana");
var imagen = document.querySelectorAll('.imagen');
var Img = document.getElementById("img01");

function esDispositivoMovil() {
    return window.innerWidth <= 768;
}

if (!esDispositivoMovil()) {
    for (let i = 0; i < imagen.length; i++) {
        let img = imagen[i];
        img.onclick = function() {
            ventana.style.display = "block";
            Img.src = this.src;
        }
    }

    var span = document.getElementsByClassName("cierre")[0];

    span.onclick = function() {
        ventana.style.display = "none";
    }
}
