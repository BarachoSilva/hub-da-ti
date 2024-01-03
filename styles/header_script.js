function clickMenu() {
    var nav = document.querySelector('.nav');
    if (nav.style.display === 'block' || nav.style.display === '') {
        nav.style.display = 'none';
    } else {
        nav.style.display = 'block';
    }
}
