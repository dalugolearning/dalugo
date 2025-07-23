const kontenNavbar2 = document.querySelector('.kontenNavbar2');
const hamburgerMenu = document.getElementById('hamburgerMenu');
const kontenHome = document.getElementById('home');
const kontenAbout = document.getElementById('about');
const kontenContact = document.getElementById('contact');
const visiMisi = document.getElementById('visiMisi');
const cardImage = document.querySelectorAll('.card-image');
const cardImage2 = document.querySelectorAll('.card-image2');

function toggleHamburger(active) {
    hamburgerMenu.classList.toggle('active', active);
    kontenNavbar2.classList.toggle('active', active);
}

function showSection(section) {
    [kontenHome, kontenAbout, visiMisi].forEach(el => el.classList.remove('active'));
    if (section) section.classList.add('active');
    toggleHamburger(false);
}

function showHome() { showSection(kontenHome); }
function showAbout() { showSection(kontenAbout); }
function showVisiMisi() { showSection(visiMisi); }
function closeVisiMisi() { showSection(kontenAbout); }
function showContact() { console.log(kontenContact); }

function cardSlide(active = true) {
    if (active) {
        cardImage.forEach(img => {
            img.style.animation = 'cardSlide 2.5s ease';
            img.style.transform = 'rotate(10deg)';
            img.style.zIndex = '0';
            img.style.left = '10%';
            img.style.top = '9%';
        })
        cardSlide2(false);
    } else {
        cardImage.forEach(img => {
            img.style.animation = '';
            img.style.transform = '';
            img.style.zIndex = '';
            img.style.left = '';
            img.style.top = '50%';
            img.style.transition = 'all 1s ease';
        });
    }
}

function cardSlide2(active = true) {
    if (active) {
        cardImage2.forEach(img => {
            img.style.animation = 'cardSlide2 2.5s ease';
            img.style.transform = 'rotate(0deg)';
            img.style.zIndex = '1';
            img.style.top = '9%';
            img.style.left = '7.5%';
        });
        // Ensure cardSlide is not active
        cardSlide(false);
    } else {
        cardImage2.forEach(img => {
            img.style.animation = '';
            img.style.transform = '';
            img.style.zIndex = '';
            img.style.left = '';
            img.style.top = '50%';
            img.style.transition = 'all 1s ease';
        });
    }
}

const carouselItem = document.querySelectorAll('.card-container');
function nextCarousel() {
    
}