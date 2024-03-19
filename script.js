
function exibirResultado(tag, texto) {
    var campo = document.querySelector(tag);
    campo.innerHTML = texto;
}
// criar função para botão criptografar
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
// criar função para descritografar
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
// criar função para botão copiarResultado
function copiarResultado() {
    var textoResultado = document.getElementById('texto').textContent;

    if (textoResultado) {
        var textArea = document.createElement('textarea');
        textArea.value = textoResultado;
        textArea.style.position = 'fixed';
        document.body.appendChild(textArea);
    
     // Seleciona o conteúdo do textarea
    textArea.select();
    // Executa o comando de cópia
    try {
        document.execCommand('copy');
        console.log('Texto copiado: ' + textoResultado);
    } catch (err) {
        console.error('Erro ao copiar texto: ', err);
    }
    // Remove o textarea do corpo do documento
        document.body.removeChild(textArea);

        document.getElementById('texto').innerHTML = '';

        location.reload(); 
        } else {
        console.log('Nenhum texto para copiar.');
        }
}
// chamar uma função quando evento for criado ao clicar botão
document.getElementById('botaoCriptografar').addEventListener('click', criptografar);
document.getElementById('botaoDescriptografar').addEventListener('click', descriptografar);
document.getElementById('botaoCopiar').addEventListener('click', copiarResultado);



