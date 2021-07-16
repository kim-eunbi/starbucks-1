
/* 스크롤 이벤트 헤더 badges  */
const badgeEl = document.querySelector('header .badges');
const toTopEl = document.querySelector('#to-top');

window .addEventListener('scroll', _.throttle(function () {
  console.log(window.scrollY);
  if (window.scrollY > 500) {
    //배지 숨기기
    //gsap.to(요소, 지속시간, 옵션);
    gsap.to(badgeEl, .6, {
      opacity: 0,
      display: 'none'
    });
    //상단으로올리는 버튼 보이기
    gsap.to(toTopEl, .2, {
      x: 0
    });
  }else {
    //배지 보이기
    gsap.to(badgeEl, .6, {
      opacity: 1,
      display: 'block'
    });
    //상단으로 올리는 버튼 숨기기
    gsap.to(toTopEl, .2, {
      x: 100
    });
  }
}, 300));
// _.throttle(함수, 시간) 메소드 


//상단으로 0.7초만에 올라가는 처리
toTopEl.addEventListener('click', function () {
  gsap.to(window, .7, {
    scrollTo: 0
  });
});




/* 메인 음식사진 애니메이션 fade-in  */
const fadeEls = document.querySelectorAll('.visual .fade-in');
//비쥬얼에 있는 페이드인을 모두 찾아서 fadeEls에 담겟다. 
fadeEls.forEach(function (fadeEl, index) {
  gsap.to(fadeEl, 1, {
    delay: (index + 1) * .7, //0.7 , 1.4 , 2.1, 2.7 
    opacity: 1
  });
});



/* SWIPER  */
//new Swiper(선택자, 옵션)
new Swiper('.notice-line .swiper-container', {
  direction: 'vertical',//수직방향
  autoplay: true, //자동재생여부
  loop: true //반복재생여부 
});

new Swiper('.promotion .swiper-container', {
  slidesPerView: 3, //한번에 보여줄 슬라이드 개수
  spaceBetween: 10, //슬라이드 사이 여백
  centeredSlides: true, //1번 슬라이드가 가운데 보이기
  loop: true,
  // autoplay: {
  //   delay: 5000
  // 
  pagination: {
    el: '.promotion .swiper-pagination', //페이지 번호 요소 선택자
    clickable: true //사용자의 페이지 번호 요소 제어
  },
  navigation: {
    prevEl: '.promotion .swiper-prev',
    nextEl: '.promotion .swiper-next'
  }
});
new Swiper('.awards .swiper-container', {
  autoplay: true,
  loop: true,
  spaceBetween: 30,
  slidesPerView: 5,
  navigation: {
    prevEl:'.awards .swiper-prev',
    nextEl:'.awards .swiper-next'
  }
});


/* 스타벅스 프로모션 숨김 보임 처리 */
const promotionEl = document.querySelector('.promotion');
const promotionToggleBtn = document.querySelector('.toggle-promotion');
let isHidePromotion = false;
promotionToggleBtn.addEventListener('click', function () {
  isHidePromotion = !isHidePromotion 
  //false를 반대의 값인 트루가 이즈하이드프로모션으로 들어가라. 
  if (isHidePromotion) {
    // 트루일때
    // 숨김 처리!
    promotionEl.classList.add('hide');
  }else{
    // 펄스일때
    // 보임 처리!
    promotionEl.classList.remove('hide');
  }
});



/* 동영상 앞에 둥둥 떠다니는 애니메니션 처리 */

// 범위 랜덤 함수(소수점 2자리까지)
function random(min, max) {
  // `.toFixed()`를 통해 반환된 문자 데이터를,
  // `parseFloat()`을 통해 소수점을 가지는 숫자 데이터로 변환
  return parseFloat((Math.random() * (max - min) + min).toFixed(2))
}
function floatingObject(selector, delay, size) {
  // gsap.to(요소, 시간, 옵션);
  gsap.to(
    selector, //선택자
    random(1.5, 2.5), //애니메이션 동작 시간 
      { //옵션 
      y: size,
      repeat: -1,
      yoyo: true,  //위에서 내려온것을 다시 위로 올리는 표현 
      ease: Power1.easeInOut,
      delay: random(0, delay) //몇초뒤에 실행하겠다. 
    }
  
  );
}

floatingObject('.floating1', 1, 15);

floatingObject('.floating2', .5, 15);

floatingObject('.floating3', 1.5, 20);


const spyEls = document.querySelectorAll('section.scroll-spy');
spyEls.forEach(function (spyEl) {
  new ScrollMagic
    .Scene({
      triggerElement: spyEl, //보여짐 여부를 감시할 요소를 지정
      triggerHook: .8
    })
    .setClassToggle(spyEl, 'show')
    .addTo(new ScrollMagic.Controller());
});




