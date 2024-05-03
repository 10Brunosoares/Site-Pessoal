// armazenando as URLs do links da rede social em uma variavel
const url_instagram = "https://www.instagram.com/10brunosoares?igsh=MXFweHhqeHc5c3M1Nw==";
const url_github = "https://github.com/10Brunosoares";
const url_linkedin = "https://www.linkedin.com/in/bruno-oliveira-soares-231552163/";

// armazenando os botões das redes sociais em uma variavel
const bts_instagram = document.getElementById('bt_instagram');
const bts_github = document.getElementById('bt_github');
const bts_linkedin = document.getElementById('bt_linkedin');


// criando as funções que abre a pagina em uma nova guia quando clica
bts_instagram.addEventListener('click', function() {
    // Abrindo a URL quando o botão é clicado
    window.open(url_instagram, '_blank');
});

bts_github.addEventListener('click', function() {
    // Abrindo a URL quando o botão é clicado
    window.open(url_github, '_blank');
});

bts_linkedin.addEventListener('click', function() {
    // Abrindo a URL quando o botão é clicado
    window.open(url_linkedin, '_blank');
});

