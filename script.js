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
    cardImage.forEach(img => {
        img.classList.add('active', active);
        cardImage2.forEach(img2 => img2.classList.remove('active'));
    })
}

function cardSlide2(active = true) {
    cardImage2.forEach(img => {
        img.classList.add('active', active);
        cardImage.forEach(img2 => img2.classList.remove('active'));
    });
}

const cardButtonNext = document.getElementById('next');
const cardButtonPrev = document.getElementById('prev');
const cardItem = document.querySelector('.card-item');
const cardItem2 = document.querySelector('.card-item2');
const cardItem3 = document.querySelector('.card-item3');
let cardItems = [cardItem, cardItem2, cardItem3];
const cardContent = document.querySelector('.card-content');
const cardContent2 = document.querySelector('.card-content2');
const cardContent3 = document.querySelector('.card-content3');
let cardContents = [cardContent, cardContent2, cardContent3];

function cardNext(active = true) {
    if (active) {
        cardItems.forEach(card => {
            let currentIndex = getComputedStyle(card).zIndex;
            if (currentIndex == 10) {
                card.style.transition = 'all 1.5s ease';
                card.style.animation = 'none';
                card.offsetHeight; // buat restart animasi
                card.style.animation = 'stackCard 1s ease';
                setTimeout(() => {
                    card.style.zIndex = Number(currentIndex) - 2;
                }, 200);
            } else if (currentIndex == 9) {
                card.style.zIndex = Number(currentIndex) + 1;
            } else if (currentIndex == 8) {
                card.style.zIndex = Number(currentIndex) + 1;
            }
        });
        cardContents.forEach(konten => {
                let kontenIndex = getComputedStyle(konten).zIndex;
                if (kontenIndex == 10) {
                    konten.style.zIndex = Number(kontenIndex) - 2;
                } else if (kontenIndex == 9) {
                    konten.style.zIndex = Number(kontenIndex) + 1;
                } else if (kontenIndex == 8) {
                    konten.style.zIndex = Number(kontenIndex) + 1;
                }
            });
    }
}

function cardPrev(active = true) {
    if (active) {
        cardItems.forEach(card => {
            let currentIndex = getComputedStyle(card).zIndex;
            if (currentIndex === '10') {
                card.style.zIndex = Number(currentIndex) - 1;
            } else if (currentIndex === '9') {
                card.style.zIndex = Number(currentIndex) - 1;
            } else if (currentIndex === '8') {
                card.style.transition = 'all 1.5s ease';
                card.style.animation = 'none';
                card.offsetHeight; // buat restart animasi
                card.style.animation = 'stackCard2 1s ease';
                setTimeout(() => {
                    card.style.zIndex = Number(currentIndex) + 2;
                }, 500);
            }
        });
        cardContents.forEach(konten => {
                let kontenIndex = getComputedStyle(konten).zIndex;
                console.log(kontenIndex)
                if (kontenIndex == 10) {
                    konten.style.zIndex = Number(kontenIndex) - 1;
                } else if (kontenIndex == 9) {
                    konten.style.zIndex = Number(kontenIndex) - 1;
                } else if (kontenIndex == 8) {
                    konten.style.zIndex = Number(kontenIndex) + 2;
                }
            });
    }

}
