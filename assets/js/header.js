const header_cancel_mark= document.querySelector('.header_cancel_mark');
const nav= document.querySelector('.main-header header nav');
const header_bars= document.querySelector('.header_bars');


header_bars.addEventListener('click', function(){
    nav.classList.add('show');
});

header_cancel_mark.addEventListener('click', function(){
    nav.classList.remove('show');
});

const modal_cancel= document.querySelector('.modal-cancel');
const search_modal= document.querySelector('.search-modal');
const header_search= document.querySelector('.header-right .search');

modal_cancel.addEventListener('click', function(){
    search_modal.classList.remove('active');
});
header_search.addEventListener('click', function(){
    search_modal.classList.add('active');
});