// Seleciona todos os elementos li com a classe "dropdown"
var dropdowns = document.querySelectorAll('.dropdown');

// Itera sobre cada dropdown
dropdowns.forEach(function (dropdown) {
  // Seleciona o dropdown-content associado a este dropdown
  var dropdownContent = dropdown.querySelector('.dropdown-content');

  // Adiciona um evento de clique a cada dropdown
  dropdown.addEventListener('click', function (event) {
    // Verifica se o dropdown-content está visível
    if (dropdownContent.style.display === 'none' || dropdownContent.style.display === '') {
      // Se estiver oculto, mostra-o
      dropdownContent.style.display = 'block';
    } else {
      // Se estiver visível, oculta-o
      dropdownContent.style.display = 'none';
    }

    // Evita que o clique no dropdown siga o link padrão apenas se o alvo do clique não for um link
    if (!event.target.closest('a')) {
      event.preventDefault();
    }
  });
});


