const menuButton = document.querySelector('.button');
const navList = document.getElementById('navlist');

menuButton.addEventListener('click', () => {
    const buttonActive = menuButton.getAttribute('aria-expanded');
    if (buttonActive === 'false') {
        menuButton.setAttribute('aria-expanded', 'true');
        navList.classList.add('open');
        document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
    } else {
        menuButton.setAttribute('aria-expanded', 'false');
        navList.classList.remove('open');
        document.body.style.backgroundColor = "hsl(36, 100%, 99%)";
    }
})

