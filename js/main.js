const btnDropdown = document.querySelector('.js-btn-dropdown');
const dropdown = document.querySelector('.js-dropdown');

function openDropdown(event) {
  event.preventDefault();
  //console.log('ativar')
  dropdown.classList.toggle('active');
}

btnDropdown.addEventListener('click', openDropdown);
dropdown.addEventListener('mouseleave', openDropdown);

const header = document.getElementById('js-header');

function fixedMenu() {
  //console.log('scroll');
  //console.log(window.scrollY);
  if(window.scrollY > 80) {
    header.classList.add('fixed-menu');
  } else {
    header.classList.remove('fixed-menu');
  }
}

document.addEventListener('scroll', fixedMenu);

const btnMenu = document.getElementById('js-btn-menu-mobile');
const overlayMenu = document.querySelector('.js-overlay');

function openMenuMobile() {
  //console.log('ativar')
  document.documentElement.classList.add('menu-opened');
}

function closeMenuMobile() {
  document.documentElement.classList.remove('menu-opened');
  //console.log('fechar')
}

btnMenu.addEventListener('click', openMenuMobile);
overlayMenu.addEventListener('click', closeMenuMobile);

var swiper = new Swiper(".js-slide-review", {
    slidesPerView: 3,
    spaceBetween: 32,
    pagination: {
      el: ".s-review .top .swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      320: {
        slidesPerView: 1.3,
        spaceBetween: 16,
      },
      600: {
        slidesPerView: 2.3,
        spaceBetween: 15,
      },
      1200: {
        slidesPerView: 3,
        spaceBetween: 32,
      }
    }
});


AOS.init({
  duration: 1000,
  once: true
});