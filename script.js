        const kontenNavbar2 = document.querySelector('.kontenNavbar2');
        const hamburgerMenu = document.getElementById('hamburgerMenu');
        const kontenHome = document.getElementById('home');
        const kontenAbout = document.getElementById('about');
        const kontenContact = document.getElementById('contact');
        const visiMisi = document.getElementById('visiMisi');
        const cardImage = document.getElementById('cardImage');
        const cardImage2 = document.getElementById('cardImage2');

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
                cardImage.style.animation = 'cardSlide 5s ease';
                cardImage.style.transform = 'rotate(10deg)';
                cardImage.style.zIndex = '0';
                cardImage.style.left = '11%';
                // Ensure cardSlide2 is not active
                cardSlide2(false);
            } else {
                cardImage.style.animation = '';
                cardImage.style.transform = '';
                cardImage.style.zIndex = '';
                cardImage.style.left = '';
                cardImage.style.transition = 'all 0.5s ease';
            }
        }

        function cardSlide2(active = true) {
            if (active) {
                cardImage2.style.animation = 'cardSlide2 5s ease';
                cardImage2.style.transform = 'rotate(0deg)';
                cardImage2.style.zIndex = '1';
                cardImage2.style.left = '9%';
                cardImage.style.zIndex = '2';
                // Ensure cardSlide is not active
                cardSlide(false);
            } else {
                cardImage2.style.animation = '';
                cardImage2.style.transform = '';
                cardImage2.style.zIndex = '';
                cardImage2.style.left = '';
                cardImage2.style.transition = 'all 0.5s ease';
            }
        }
