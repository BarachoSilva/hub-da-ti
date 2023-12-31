document.addEventListener('DOMContentLoaded', function () {
    const menuBtn = document.getElementById('menuBtn');
    const nav = document.querySelector('.nav');

    menuBtn.addEventListener('click', function () {
        nav.style.display = nav.style.display === 'flex' ? 'none' : 'flex';
    });

    // Feche o menu ao clicar em um item de navegação
    const navLinks = document.querySelectorAll('.ul a');
    navLinks.forEach(link => {
        link.addEventListener('click', function () {
            nav.style.display = 'none';
        });
    });

    // Feche o menu ao clicar fora dele
    document.addEventListener('click', function (event) {
        if (!event.target.closest('.header')) {
            nav.style.display = 'none';
        }
    });
});