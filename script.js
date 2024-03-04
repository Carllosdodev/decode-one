//constantes
function exibirResultado(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
   
   
}
// Função para criptografar o texto
function criptografar() {
    // Selecione o texto de entrada e saída
    let textoEntrada = document.getElementById("campoTexto").value;
    let resultadoCripto = textoEntrada.replace(/e/g, "enter").replace(/i/g, "imes").replace(/a/g, "ai").replace(/o/g, "ober").replace(/u/g, "ufat");
    
    if (textoEntrada == 0) {
        let textoIndicacao = "Nenhuma mensagem encontrada";
        let textoIndicacao2 = "Digite um texto que você deseja criptografar ou descriptografar.";
        exibirResultado('#campoTexto', textoIndicacao);
        exibirResultado('#campoTexto2', textoIndicacao2);
        imagem('block');
        document.getElementById('bottonCopiar').style.display = 'none';
    } else {
        exibirResultado('#campoTexto', resultadoCripto );
        exibirResultado('#campoTexto2', "");
        imagem('none');
        document.getElementById('bottonCopiar').style.display = 'block';

    }
    limparCampo();
}
    
    
    // funcao para descripografar o texto
    function descriptografar() {
        var textoEntrada = document.getElementById('campoTexto2').value;
        var resultadoCripto = textoEntrada.replace(/enter/g, "e").replace(/imes/g, "i").replace(/ai/g, "a").replace(/ober/g, "o").replace(/ufat/g, "u");
        if(textoEntrada == 0) {
            var textoIndicacao = "Nenhuma mensagem encontrada";
            var textoIndicacao2 = "Digite um texto que você deseja criptografar ou descriptografar.";
            exibirResultado('#campoTexto', textoIndicacao);
            exibirResultado('#campoTexto2', textoIndicacao2);
            imagem('block');
            document.getElementById('bottonCopiar').style.display = 'none';
        } else {
            exibirResultado('#campoTexto', resultadoCripto );
            exibirResultado('#campoTexto2', "");
            imagem('none');
            document.getElementById('bottonCopiar').style.display = 'block';
        }

        limparCampo();
    }

    function limparCampo() {
        var  texto = document.getElementById('campoTexto');
        texto.value = '';
    }

    function imagem(display) {
        document.getElementById('decodificadorImg').style.display = display;
    }
    function copiar () {
        var textoResultado = document.getElementById('texto2').textContent;

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
                console.error('Erro ao copiar texto: ', err );
            }

            document.body.removeChild(textArea);

            documento.getElementById('texto').innerHTML = '';

            document.getElementById('bottonCopiar').style.display = 'none';

            location.reload();
        } else {
            console.log('Nenhum texto para copiar.');
        }
    }

document.getElementById('bottonCriptografar').addEventListener('click', criptografar);
document.getElementById('bottonDescriptografar').addEventListener('click', descriptografar);
document.getElementById('bottonCopiar').addEventListener('click', copiar);


