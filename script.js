var dropdowns = document.querySelectorAll('.dropdown');

dropdowns.forEach(function (dropdown) {
  var dropdownContent = dropdown.querySelector('.dropdown-content');
  var dropdownContent = dropdown.querySelector('.dropdown-content dropdown-submenu-content');

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