
document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('.formcontato__form');
    const btnEnviar = document.querySelector('.formcontato__botao');

    btnEnviar.addEventListener('click', function(event) {
        event.preventDefault(); // Evita que o formulário seja enviado normalmente

        // Coletando os valores dos campos
        const nome = document.getElementById('nome').value;
        const email = document.getElementById('email').value;
        const assunto = document.getElementById('assunto').value;
        const mensagem = document.getElementById('mensagem').value;

        // Criando um objeto com os dados do formulário
        const dadosFormulario = {
            nome: nome,
            email: email,
            assunto: assunto,
            mensagem: mensagem
        };

        // Convertendo para JSON
        const dadosJSON = JSON.stringify(dadosFormulario, null, 2);

        // Simulando o salvamento em um arquivo (no console por simplicidade)
        console.log('Dados do formulário:', dadosJSON);

        // Aqui você poderia enviar os dados para um servidor backend para salvar em um arquivo real
        // Exemplo: enviarDadosParaServidor(dadosFormulario);

        // Limpar os campos após o envio
        form.reset();
    });
});