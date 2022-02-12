//HEADER
// 통합검색 창 설정
const searchEl = document.querySelector('.search');
const searchInputEl = searchEl.querySelector('input');

searchEl.addEventListener('click', function () {
  searchInputEl.focus();
});

searchInputEl.addEventListener('focus', function() {
  searchEl.classList.add('focused');
  searchInputEl.setAttribute('placeholder', '통합검색');
});

searchInputEl.addEventListener('blur', function() {
  searchEl.classList.remove('focused');
  searchInputEl.setAttribute('placeholder', '');
});

// 뱃지 설정
//_.throttle(함수, 시간ms) : 화면제어 이벤트 시, 실행되는 횟수 제한함 (lodash.js 함수)
//gsap.to(요소, 지속시간s, 옵션) : JS 애니메이션 효과 (gsap.js)
const badgeEl = document.querySelector('header .badges');
const toTopEl = document.querySelector('#to-top');
window.addEventListener('scroll', _.throttle(function(){
  if (window.scrollY > 500){
    //보이기→숨기기
    gsap.to(badgeEl, 0.6, {
      opacity: 0,
      display: 'none'
    });
    //숨기기→보이기
    gsap.to(toTopEl, 0.2, {
      x: 0
    });
  } else{
    //보이기→숨기기
    gsap.to(badgeEl, 0.6, {
      opacity: 1,
      display: 'block'
    });
    //숨기기→보이기
    gsap.to(toTopEl, 0.2, {
      x: 100
    });
  }
}, 300));

toTopEl.addEventListener('click', function(){
  gsap.to(window, .7, {
    scrollTo: 0
  })
})


//VISUAL
const fadeEls = document.querySelectorAll('.visual .fade-in');
fadeEls.forEach(function(fadeEl, index){
  gsap.to(fadeEl, 1, {
    delay: (index + 1) * 0.7,
    opacity: 1
  });
});

new Swiper('.notice-line .swiper', {
  direction: 'vertical',
  autoplay: true,
  loop: true,
});

new Swiper('.promotion .swiper', {
  direction: 'horizontal',
  slidesPerView: 3,
  spaceBetween: 10,
  centeredSlides: true,
  loop: true,
  autoplay: {
    delay: 5000,
  },
  pagination: {
    el: '.promotion .swiper-pagination',
    clickable: true,
  },
  navigation: {
    prevEl: '.promotion .swiper-prev',
    nextEl: '.promotion .swiper-next',
  }
});

const promotionEl = document.querySelector('.promotion');
const promotionToggleBtn = document.querySelector('.toggle-promotion')

let isHidePromotion = false;
promotionToggleBtn.addEventListener('click', function(){
  isHidePromotion = !isHidePromotion
  if (isHidePromotion) {
    promotionEl.classList.add('hide');
  } else{
    promotionEl.classList.remove('hide');
  }
});

// Youtube__cover

function random(min, max) {
 return parseFloat((Math.random() * (max - min) + min).toFixed(2))
}

// 부유하는(떠 다니는) 요소를 만드는 함수
function floatingObject(selector, delay, size) {
  gsap.to(selector, random(1.5, 2.5),
    {
      delay: random(0, delay), // 얼마나 늦게 애니메이션을 시작할 것인지 지연 시간을 설정.
      y: size, // `transform: translateY(수치);`와 같음. 수직으로 얼마나 움직일지 설정.
      repeat: -1, // 몇 번 반복하는지를 설정, `-1`은 무한 반복.
      yoyo: true, // 한번 재생된 애니메이션을 다시 뒤로 재생.
      ease: Power1.easeInOut // Easing 함수 적용.
    }
  )
}
floatingObject('.floating1', 1, 15)
floatingObject('.floating2', .5, 15)
floatingObject('.floating3', 1.5, 20)

// SCROLL MAGIC OPTION
const spyEls = document.querySelectorAll('section.scroll-spy');
spyEls.forEach(function(spyEl){
  new ScrollMagic
    .Scene({
      triggerElement: spyEl, //감시 요소 : spyEl
      trggerHook: 0.8,  //감 위치 : 뷰포트의 위에서부터 80% 부근
    })
    .setClassToggle(spyEl, 'show')
    .addTo(new ScrollMagic.Controller());
});

//AWARDS

new Swiper('.awards .swiper', {
  direction: 'horizontal',
  autoplay: true,
  loop: true,
  spaceBetween: 30,
  slidesPerView: 5,
  navigation: {
    prevEl: '.awards .swiper-prev',
    nextEl: '.awards .swiper-next'
  }
})

//FOOTER
const thisYear = document.querySelector('.this-year');
thisYear.textContent = new Date().getFullYear();