function mostrarTexto() {
    var textoEscondido = document.getElementById('texto-escondido');

    if (textoEscondido.style.display === 'inline') {
        textoEscondido.style.display = 'none';
    } else {
        textoEscondido.style.display = 'inline';
    }

}

function mostrarTexto() {
    var textoEscondido = document.getElementById('texto-escondido1');
    if (textoEscondido.style.display === 'none') {
        textoEscondido.style.display = 'inline';
    } else {
        textoEscondido.style.display = 'none';
    }
}