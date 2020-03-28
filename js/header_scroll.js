//htmlのheaderを取得
document.addEventListener('DOMContentLoaded',function(){
    const header = document.getElementByClassName('bl_header');
});

//スクロール量の取得
window.onscroll = function(){
    const scrollTop = document.body.scrollTop;
    if(scrollTop > 540){
        header.classList.add('is-fixed');
    }else if(scrollTop < 80){
        header.classList.remove('is-fixed');
    }
    console.log(scrollTop);
}

