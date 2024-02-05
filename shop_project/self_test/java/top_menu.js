const right_menu = document.getElementById('right_menu');
const menu_button = document.getElementById('menu_button');

// menu_button 動畫控制
const menu_click = function (){
    if (menu_button.classList.contains('active') !== true ){
        menu_button.classList.add('active');
        const aa = right_menu.querySelectorAll('a');
        aa.forEach(element =>{
            element.classList.add('b_n');
        })
        const icon_text =right_menu.querySelectorAll('span.icon_text');
        icon_text.forEach(element => {
            element.classList.add('close');
        });
    }else{
        menu_button.classList.remove('active');
        const aa = right_menu.querySelectorAll('a');
        aa.forEach(element =>{
            element.classList.remove('b_n');
        })
        const icon_text = right_menu.querySelectorAll('span.icon_text');
        icon_text.forEach(element => {
            element.classList.remove('close');
        });
    }
}
const left_menu = document.getElementById('left_menu');
const search_menu = document.getElementById('search_menu');
const search = document.getElementById('search');
const search_button = document.getElementById('search_button');
let search_method = false;

search_button.addEventListener('click',function(){
    search_method = true;
    left_menu.classList.add('display_none');
    menu_button.classList.add('display_none');
    right_menu.classList.add('display_none');
    search_menu.classList.add('width_100','display_flex');
    search.focus();
});
search.addEventListener('focus',function(){
    if (search_method){
        console.log('進入search_box');
        // search_method =false;
    };
})
search.addEventListener('blur',function(){
    console.log('123');
    if (search_method){
        console.log('離開search_box');
        left_menu.classList.remove('display_none');
        menu_button.classList.remove('display_none');
        right_menu.classList.remove('display_none');
        search_menu.classList.remove('width_100','display_flex');
        search_method =false;
    }
})



// 按鈕控制
menu_button.addEventListener('click',menu_click) ;
// 程式
window.onload = () =>{
    // console.log(`爭測螢幕大小${window.innerWidth}` );
    if(window.innerWidth < 992 && !menu_button.classList.contains('active')){
        menu_click();
    };
}
// 偵測網頁寬度控制排版功能(rwd部分)

window.addEventListener('resize',function(){
    if(window.innerWidth >= 992 && menu_button.classList.contains('active')){
        setTimeout( menu_click(),500);
        };
    if(window.innerWidth < 992 && !menu_button.classList.contains('active')){
        setTimeout( menu_click(),500);
    };
});

