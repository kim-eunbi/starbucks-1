const searchEl = document.querySelector('.search');
/* 서치라는 아이를 찾아서 searchEl에 담는다. */
const searchInputEl =searchEl. querySelector('input');
/* searcgEl에 담긴것들 중에 input을 찾아서 searchInputEl에 담는다. */

searchEl.addEventListener('click',function () {
  //logic..   
  searchInputEl.focus();
});
/* 돋보기부분 클릭 시 통합검색이 나오면서 입력창이 생성  */
searchInputEl.addEventListener('focus', function () {
  searchEl.classList.add('focused');
  searchInputEl.setAttribute('placeholder', '통합검색');
});
/* 바깥부분 클릭 시 통합검색은 없어지고 빈문자열이 나오고 다시 원래 상태로 돌아간다. */
searchInputEl.addEventListener('blur', function () {
  searchEl.classList.remove('focused');
  searchInputEl.setAttribute('placeholder', '');
});


const thisYear = document.querySelector('.this-year');
thisYear.textContent = new Date().getFullYear(); //2021이라는 숫자가 나온다. 
//디스이어라는 클래스에 textContent 즉 디스이어의 글자 스타일에 현재 년도가 찍힌다. 