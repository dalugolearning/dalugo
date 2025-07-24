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

const cardButtonNext = document.getElementById('next');
const cardButtonPrev = document.getElementById('prev');
const cardItem = document.querySelector('.card-item');
const cardItem2 = document.querySelector('.card-item2');
const cardItem3 = document.querySelector('.card-item3');
const cardItems = [cardItem, cardItem2, cardItem3];
const computedStyle1 = getComputedStyle(cardItem);
const cardIndex1 = computedStyle1.zIndex
const computedStyle2 = getComputedStyle(cardItem2)
const cardIndex2 = computedStyle2.zIndex
const computedStyle3 = getComputedStyle(cardItem3)
const cardIndex3 = computedStyle3.zIndex
// console.log(Number(computedStyle.zIndex) + 1);
console.log(cardIndex1, cardIndex2, cardIndex3)

function cardNext() {
    cardItems.forEach(card => {
        let currentIndex = getComputedStyle(card).zIndex;
        if (currentIndex == cardIndex1) {
            card.style.zIndex = cardIndex3;
        } else if (currentIndex == cardIndex2) {
            card.style.zIndex = cardIndex1;
        } else if (currentIndex == cardIndex3) {
            card.style.zIndex = cardIndex2;
        }
    });
}
