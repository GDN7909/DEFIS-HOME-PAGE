let Nav = document.querySelector('.nav_list');
let openBtn = document.querySelector('.open');
let closeBtn = document.querySelector('.close');


openBtn.addEventListener('click', openNav);

function openNav() {
    Nav.style.display = 'flex';
    openBtn.style.display = 'none';
    closeBtn.style.display = 'inline-block';
    Nav.classList.remove('close-nav');
}

closeBtn.addEventListener('click', closeNav);

function closeNav() {
    Nav.classList.add('close-nav');
    setTimeout(() => {
        nav.style.display = 'none';
    }, 1000);
    closeBtn.style.display = 'none';
    openBtn.style.display = 'inline-block';
}