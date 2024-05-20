document.addEventListener('DOMContentLoaded', function () {
  var dropdowns = document.querySelectorAll('.dropdown');

  dropdowns.forEach(function (dropdown) {
    var dropdownContent = dropdown.querySelector('.dropdown-content');

    dropdown.addEventListener('click', function (event) {
      if (dropdownContent.style.display === 'none' || dropdownContent.style.display === '') {
        dropdownContent.style.display = 'block';
      } else {
        dropdownContent.style.display = 'none';
      }

      if (!event.target.closest('a')) {
        event.preventDefault();
      }
    });

    var submenus = dropdown.querySelectorAll('.dropdown-submenu');

    submenus.forEach(function (submenu) {
      var submenuContent = submenu.querySelector('.dropdown-submenu-content');

      submenu.addEventListener('click', function (event) {
        if (submenuContent.style.display === 'none' || submenuContent.style.display === '') {
          submenuContent.style.display = 'block';
        } else {
          submenuContent.style.display = 'none';
        }

        // Stop the click event from propagating to parent elements
        event.stopPropagation();
        
        if (!event.target.closest('a')) {
          event.preventDefault();
        }
      });
    });
  });
});


function setActiveSection() {
  const sections = document.querySelectorAll(".syntax, .example, .reads");
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