/* ================================= */
/* ABAS DA JORNADA */
/* ================================= */

function mostrarAba(aba) {

    // Pega todas as abas
    const abas = document.querySelectorAll(".aba-conteudo");


    // Esconde todas as abas
    abas.forEach(function(elemento) {

        elemento.classList.remove("ativa");

    });


    // Procura a aba que foi clicada
    const abaSelecionada = document.getElementById(aba);


    // Mostra a aba selecionada
    if (abaSelecionada) {

        abaSelecionada.classList.add("ativa");

    }

}



/* ================================= */
/* MENU MOBILE */
/* ================================= */

const btnMenu = document.getElementById("btn-menu");

const menuMobile = document.getElementById("menu-mobile");



/* ABRIR / FECHAR MENU */

btnMenu.addEventListener("click", function() {

    menuMobile.classList.toggle("ativo");


    // Verifica se o menu está aberto
    const menuAberto = menuMobile.classList.contains("ativo");


    // Atualiza o atributo aria
    btnMenu.setAttribute("aria-expanded", menuAberto);


    // Troca o símbolo do botão
    if (menuAberto) {

        btnMenu.textContent = "✕";

    } else {

        btnMenu.textContent = "☰";

    }

});



/* ================================= */
/* FECHAR MENU AO CLICAR EM UMA OPÇÃO */
/* ================================= */

const linksMenu = document.querySelectorAll(".menu-mobile a");


linksMenu.forEach(function(link) {

    link.addEventListener("click", function() {

        menuMobile.classList.remove("ativo");

        btnMenu.setAttribute("aria-expanded", "false");

        btnMenu.textContent = "☰";

    });

});