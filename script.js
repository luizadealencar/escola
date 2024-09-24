
function setActiveSection() {
  const sections = document.querySelectorAll(".prog-box");
  sections.forEach((section) => {
    const bounding = section.getBoundingClientRect();
    if (
      bounding.top >= 0 &&
      bounding.bottom <=
      (window.innerHeight || document.documentElement.clientHeight)
    ) {
      section.classList.add("active-section");
    } else {
      section.classList.remove("active-section");
    }
  });
}

window.addEventListener("scroll", setActiveSection);
window.addEventListener("load", setActiveSection);

document.addEventListener('DOMContentLoaded', function () {
  var dropdowns = document.querySelectorAll('.dropdown');
  var submenus = document.querySelectorAll('.dropdown-submenu');

  // Função para alternar a visibilidade do conteúdo do submenu
  function toggleSubmenuContent(submenu) {
    var submenuContent = submenu.querySelector('.dropdown-submenu-content');
    submenu.isOpen = !submenu.isOpen;
    submenuContent.style.display = submenu.isOpen ? 'block' : 'none';
  }

  // Função para fechar todos os dropdowns
  function closeAllDropdowns() {
    dropdowns.forEach(function (dropdown) {
      dropdown.isOpen = false;
      var dropdownContent = dropdown.querySelector('.dropdown-content');
      dropdownContent.style.display = 'none';
    });
  }

  // Ouvinte de eventos para o documento inteiro
  document.addEventListener('click', function (event) {
    // Verifica se o clique ocorreu dentro de um dropdown ou submenu
    var isDropdownOrSubmenu = event.target.closest('.dropdown') || event.target.closest('.dropdown-submenu');

    // Se o clique não foi dentro de um dropdown ou submenu, fecha todos os dropdowns
    if (!isDropdownOrSubmenu) {
      closeAllDropdowns();
      // Aqui você pode adicionar a lógica para exibir o ícone do hambúrguer
      // Por exemplo, se o ícone tiver a classe "hamburger-icon":
      document.querySelector('.hamburger-icon').style.display = 'block';
    }
  });

  // ... (restante do código anterior)
});


document.addEventListener('DOMContentLoaded', function () {
  var dropdowns = document.querySelectorAll('.dropdown');

  dropdowns.forEach(function (dropdown) {
    var dropdownContent = dropdown.querySelector('.dropdown-content');
    var isOpen = false; // Flag to track dropdown state

    // Toggle dropdown visibility on click
    dropdown.addEventListener('click', function () {
      isOpen = !isOpen; // Toggle the isOpen flag
      dropdownContent.style.display = isOpen ? 'block' : 'none';
    });
  });
});


document.addEventListener('DOMContentLoaded', function () {
  var dropdowns = document.querySelectorAll('.dropdown');
  var submenus = document.querySelectorAll('.dropdown-submenu');

  // Função para alternar a visibilidade do conteúdo do submenu
  function toggleSubmenuContent(submenu) {
    var submenuContent = submenu.querySelector('.dropdown-submenu-content');
    submenu.isOpen = !submenu.isOpen;
    submenuContent.style.display = submenu.isOpen ? 'block' : 'none';
  }

  // Para cada dropdown
  dropdowns.forEach(function (dropdown) {
    var dropdownContent = dropdown.querySelector('.dropdown-content');
    dropdown.isOpen = false;

    // Toggle dropdown visibility on click
    dropdown.addEventListener('click', function () {
      dropdown.isOpen = !dropdown.isOpen;
      dropdownContent.style.display = dropdown.isOpen ? 'block' : 'none';
    });
  });

  // Para cada submenu
  submenus.forEach(function (submenu) {
    submenu.isOpen = false;

    // Toggle submenu content visibility on click
    submenu.addEventListener('click', function (event) {
      event.stopPropagation(); // Impede a propagação do evento
      toggleSubmenuContent(submenu);
    });
  });
});

