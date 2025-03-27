// Função para gerar uma senha aleatória
function gerarSenha(id) {
    const caracteres = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_-+=<>?";
    let senha = "";
    const comprimentoSenha = 16; // Defina o comprimento da senha (16 caracteres)

    for (let i = 0; i < comprimentoSenha; i++) {
        const indiceAleatorio = Math.floor(Math.random() * caracteres.length);
        senha += caracteres.charAt(indiceAleatorio);
    }

    // Exibe a senha gerada no display de acordo com o id
    document.getElementById('generated-password-' + id).textContent = senha;
}
