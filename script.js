// variaveis js

document.addEventListener('DOMContentLoaded', function () {
    var campoTexto = document.getElementById('inputTexto');
    var bottonCriptografar = document.getElementById('');
    var bottonDescriptografar = document.getElementById('');
    var textoSaida = document.getElementById('');
    var bottonCopiar = document.getElementById('');
    var modal = document.getElementById('');
    var closeButton = document.getElementsByClassName('close')[0];
    var conteudoTextoSaida =  document.querySelector('.');
    var conteudoTextoEntrada = document.querySelector('.');

    // Função para evitar que utilize acentos e caracteres especiais na criptografia e descriptografia

    function validarTexto(campoTexto) {
        campoTexto.addEventListener('input', function (event) {
            let valorAntigo = campoTexto.value;
            let valorNovo = valorAntigo.toLowerCase().replace(/[^\w\s]/gi, '');
            if (valorAntigo !== valorNovo) {
                campoTexto.value = valorNovo;

            }
        });
    }

    let meuTexto = document.getElementById('InputTexto');
    validarTexto(meuTexto);

    bottonCriptografar.addEventListener('click', function () {
        if (!this.disable) {

        }
    })
} );

// PAREI EM BOOTTONCRIPTOGRAFAR








