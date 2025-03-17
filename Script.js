document.addEventListener('DOMContentLoaded', function() {
    const toggler = document.querySelector('.navbar-toggler');
    const menu = document.querySelector('.navbar-menu');
    const dropdowns = document.querySelectorAll('.dropdown');

    toggler.addEventListener('click', function() {
        menu.classList.toggle('show');
    });

    dropdowns.forEach(function(dropdown) {
        dropdown.addEventListener('click', function(event) {
            if (event.target.classList.contains('nav-link')) {
                dropdown.classList.toggle('show');
            }
        });
    });
});