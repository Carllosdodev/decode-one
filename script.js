
function exibirResultado(tag, texto) {
    var campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

function criptografar() {
    var textoEntrada = document.getElementById("campoTexto").value;
    var resultadoCripto = textoEntrada.replace(/e/g, "enter").replace(/i/g, "imes").replace(/a/g, "ai").replace(/o/g, "ober").replace(/u/g,"ufat");

    if (textoEntrada == 0) {
        let textoIndicacao = "Nenhuma mensagem encontrada"
        let textoIndicacao2 = "Digite um texto que você deseja criptografar ou descriptografar"
        exibirResultado('#texto', resultadoCripto);
        exibirResultado('#texto2', textoIndicacao2);
        imagem('none');
        document.getElementById('botaoCopiar').style.display = 'none';
    } else {
        exibirResultado('#texto', resultadoCripto);
        exibirResultado('#texto2', "" );
        imagem('block')
        document.getElementById('botaoCopiar').style.display = 'block';
    }
    limparCampo();
}

function descriptografar() {
    var textoEntrada = document.getElementById('campoTexto').value;
    var resultadoDescripto = textoEntrada.replace(/enter/g, "e").replace(/imes/g, "i").replace(/ai/g, "a").replace(/ober/g, "o").replace(/ufat/g, "u");
    if (textoEntrada == '') {
        var textoIndicacao = "Nenhuma mensagem encontrada";
        var textoIndicacao2 = "Digite um texto que você deseja criptografar ou descriptografar.";
        exibirResultado('#texto', textoIndicacao);
        exibirResultado('#texto2', textoIndicacao2);
        imagem('block');
        document.getElementById('botaoCopiar').style.display = 'block';
    } else {
        exibirResultado('#texto', resultadoDescripto);
        exibirResultado('#texto2', "");
        imagem('none');
        document.getElementById('botaoCopiar').style.display = 'none';
        
    }

    limparCampo();
}

function limparCampo() {
    var texto = document.getElementById('campoTexto');
    texto.value = '';
}

function copiarResultado() {
    var textoResultado = document.getElementById('texto').textContent;

    if (textoResultado) {
        var textArea = document.createElement('textarea');
        textArea.value = textoResultado;
        textArea.style.position = 'fixed';
        document.body.appendChild(textArea);
    

    textArea.select();
    
    try {
        document.execCommand('copy');
        console.log('Texto copiado: ' + textoResultado);
    } catch (err) {
        console.error('Erro ao copiar texto: ', err);
    }

        document.body.removeChild(textArea);

        document.getElementById('texto').innerHTML = '';

        location.reload(); 
        } else {
        console.log('Nenhum texto para copiar.');
        }
}

document.getElementById('botaoCriptografar').addEventListener('click', criptografar);
document.getElementById('botaoDescriptografar').addEventListener('click', descriptografar);
document.getElementById('botaoCopiar').addEventListener('click', copiarResultado);
document.getElementById('limparCampo').addEventListener('click', limparCampo);