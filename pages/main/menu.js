const btnMenu = document.querySelector('.trigger');
const menu = document.querySelector('.header');
const toggleMenu = function() {
    openMobileMenu();
}

btnMenu.addEventListener('click', function(e) {
    e.stopPropagation();
    toggleMenu();
});

document.addEventListener('click', function(e) {
    const target = e.target;
    const its_menu = target == menu || menu.contains(target);
    const its_btnMenu = target == btnMenu;
    const menu_is_active = menu.classList.contains('show');

    if (!its_menu && !its_btnMenu && menu_is_active) {
        toggleMenu();
    }
});

function openMobileMenu() {
    document.querySelector(".header").classList.toggle("show");
}