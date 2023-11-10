function mostrarTexto() {
    var textoEscondido = document.getElementById('texto-escondido');
    if (textoEscondido.style.display === 'none') {
        textoEscondido.style.display = 'inline';
    } else {
        textoEscondido.style.display = 'none';
    }
}
