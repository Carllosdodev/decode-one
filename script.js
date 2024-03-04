//constantes
// Função para criptografar o texto
function criptografar() {
    // Selecione o texto de entrada e saída
    var textoEntrada = document.getElementById("inputTexto").value;
    var textoSaida = document.getElementById("outputTexto");

    // Implemente sua lógica de criptografia aqui
    // Por exemplo:
    // var textoCriptografado = ...;

    // Atualize o texto de saída com o texto criptografado
    // textoSaida.value = textoCriptografado;
}

// Função para descriptografar o texto
function descriptografar() {
    // Selecione o texto de entrada e saída
    var textoSaida = document.getElementById("outputTexto").value;
    var textoEntrada = document.getElementById("inputTexto");

    
    // Implemente sua lógica de descriptografia aqui
    // Por exemplo:
    // var textoDescriptografado = ...;

    // Atualize o texto de entrada com o texto descriptografado
    // textoEntrada.value = textoDescriptografado;
}

// Função para copiar o texto de saída para a área de transferência
function copiar() {
    // Selecione o texto de saída
    var textoSaida = document.getElementById("outputTexto");
    
    // Verifique se há conteúdo no texto de saída
    if (textoSaida.value.length > 0) {
        // Seleciona o texto de saída
        textoSaida.select();
        // Copie o texto selecionado para a área de transferência
        document.execCommand("copy");

        // Exiba uma mensagem de "Copiado" usando um modal
        var modal = document.getElementById("modal");
        modal.style.display = "block";

        // Oculta o modal após alguns segundos (opcional)
        setTimeout(function() {
            modal.style.display = "none";
        }, 2000);
    }
}

// Função para fechar o modal
function fecharModal() {
    var modal = document.getElementById("modal");
    modal.style.display = "none";
}

// Adiciona um ouvinte de evento ao botão de copiar
document.getElementById("botton_copiar").addEventListener("click", copiar);



