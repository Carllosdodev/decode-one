function criptografar(texto) {
    return texto.replace(/e/g, 'enter')
                .replace(/i/g, 'imes')
                .replace(/a/g, 'ai')
                .replace(/o/g, 'ober')
                .replace(/u/g, 'ufat');
}

function descriptografar(texto) {
    return texto.replace(/enter/g, 'e')
                .replace(/imes/g, 'i')
                .replace(/ai/g, 'a')
                .replace(/ober/g, 'o')
                .replace(/ufat/g, 'u');
}

function limparCampo() {
    document.getElementById('campoTexto').value = '';
    document.getElementById('texto').innerText = '';
    document.getElementById('imagemPerson').src = './assets/High quality products 1 1.svg';
}

document.getElementById('botaoCriptografar').addEventListener('click', function() {
    var textoOriginal = document.getElementById('campoTexto').value;
    var textoCriptografado = criptografar(textoOriginal);
    document.getElementById('texto').innerText = textoCriptografado;
    document.getElementById('texto2').innerText = '';
    document.getElementById('imagemPerson').style.display = 'none';
});

document.getElementById('botaoDescriptografar').addEventListener('click', function() {
    var textoCriptografado = document.getElementById('campoTexto').value;
    var textoDescriptografado = descriptografar(textoCriptografado);
    document.getElementById('texto').innerText = textoDescriptografado;
    document.getElementById('texto2').innerText = '';
    document.getElementById('imagemPerson').style.display = 'block';
});

document.getElementById('botaoCopiar').addEventListener('click', function() {
    var textoResultado = document.getElementById('texto').innerText;
    navigator.clipboard.writeText(textoResultado).then(function() {
        
    }, function(err) {
        console.error('Erro ao copiar texto: ', err);
    });
});

document.querySelector('button[onclick="limparCampo()"]').addEventListener('click', limparCampo);
