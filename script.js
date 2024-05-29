document.addEventListener('DOMContentLoaded', function () {
  var dropdowns = document.querySelectorAll('.dropdown');

  dropdowns.forEach(function (dropdown) {
    var dropdownContent = dropdown.querySelector('.dropdown-content');
    var isOpen = false; // Variável para controlar o estado do menu

    dropdown.addEventListener('mouseenter', function () {
      dropdownContent.style.display = 'block';
    });

    dropdown.addEventListener('mouseleave', function () {
      // Apenas oculta o menu se não estiver aberto
      if (!isOpen) {
        dropdownContent.style.display = 'none';
      }
    });

    // Adiciona manipuladores de eventos para itens de menu
    var menuItems = dropdownContent.querySelectorAll('a');
    menuItems.forEach(function (menuItem) {
      menuItem.addEventListener('click', function () {
        isOpen = !isOpen; // Alterna o estado do menu
        dropdownContent.style.display = isOpen ? 'block' : 'none'; // Alterna a visibilidade do menu
      });
    });
  });
});

document.addEventListener('DOMContentLoaded', function () {
  var dropdowns = document.querySelectorAll('.dropdown-submenu');

  dropdowns.forEach(function (dropdown) {
    var dropdownContent = dropdown.querySelector('.dropdown-submenu-content');
    var isOpen = false; // Variável para controlar o estado do menu

    dropdown.addEventListener('mouseenter', function () {
      dropdownContent.style.display = 'block';
    });

    dropdown.addEventListener('mouseleave', function () {
      // Apenas oculta o menu se não estiver aberto
      if (!isOpen) {
        dropdownContent.style.display = 'none';
      }
    });

    // Adiciona manipuladores de eventos para itens de menu
    var menuItems = dropdownContent.querySelectorAll('a');
    menuItems.forEach(function (menuItem) {
      menuItem.addEventListener('click', function () {
        isOpen = !isOpen; // Alterna o estado do menu
        dropdownContent.style.display = isOpen ? 'block' : 'none'; // Alterna a visibilidade do menu
      });
    });
  });
});

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
