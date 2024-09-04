/**
 * Alterna a exibição do menu suspenso ao clicar no botão correspondente.
 * @param {Event} event - O evento de clique no botão.
 * @param {string} dropdownId - O ID do menu suspenso a ser alternado.
 */
function toggleDropdown(event, dropdownId) {
    event.stopPropagation(); // Impede que o clique no botão feche o menu se for clicado fora

    // Fecha todos os menus suspensos, exceto o que foi clicado
    const dropdowns = document.querySelectorAll('.dropdown-content');
    dropdowns.forEach(dropdown => {
        if (dropdown.id !== dropdownId) {
            dropdown.classList.remove('show');
        }
    });

    // Alterna a visibilidade do menu suspenso clicado
    const dropdown = document.getElementById(dropdownId);
    dropdown.classList.toggle('show');
}

// Fecha todos os menus suspensos ao clicar fora deles
document.addEventListener('click', function() {
    const dropdowns = document.querySelectorAll('.dropdown-content');
    dropdowns.forEach(dropdown => {
        if (dropdown.classList.contains('show')) {
            dropdown.classList.remove('show');
        }
    });
});

// Seleciona todos os botões
const buttons = document.querySelectorAll('.atividade, .tecnico, .extra');

// Adiciona o evento de clique a cada botão
buttons.forEach(button => {
    button.addEventListener('click', function(event) {
        event.stopPropagation(); // Impede a propagação do clique para o documento
        
        // Remove a classe 'active' de todos os botões
        buttons.forEach(btn => btn.classList.remove('active'));
        
        // Adiciona a classe 'active' ao botão clicado
        button.classList.add('active');
    });
});

// Adiciona o evento de clique ao documento para resetar a cor de todos os botões
document.addEventListener('click', function() {
    // Remove a classe 'active' de todos os botões
    buttons.forEach(button => button.classList.remove('active'));
});


// link para redes sociais e demais
function Insta(){
    window.open("https://www.instagram.com/theo_.fersus/");
}
function Github(){
    window.open("https://github.com/TheoFernandess");
}