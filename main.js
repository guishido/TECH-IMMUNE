function mostrarTexto() {
    var textoEscondido = document.getElementById('texto-escondido');

    if (textoEscondido.style.display === 'inline') {
        textoEscondido.style.display = 'none';
    } else {
        textoEscondido.style.display = 'inline';
    }

}