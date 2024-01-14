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

const scroll_div = document.getElementById('scroll_div');
const back_arrow = document.getElementById('back_arrow');
const forward_arrow = document.getElementById('forward_arrow');
const arrow = document.getElementsByClassName('arrow');
const scroll_img = document.getElementById('scroll_img');
// 利用selectorAll 捕捉全部img 並計算數量
const img_total_number = scroll_img.querySelectorAll('img').length;
// 初始頁面計算物件
var img_number = 0;
//定時滑動秒數
const scroll_time = 5000;

// 定時自動滑動功能 暫定5秒
function time_scroll_start(){
    time_scroll = setInterval(function(){
        img_number = (img_number + 1) % img_total_number;
        // console.log(img_number);
        arrow_control();
    },scroll_time);
}
// 清除功能
function time_scroll_stop(){
    clearInterval(time_scroll);
};
// 進入頁面時自動開始
time_scroll_start();

// 箭頭出現與消失
scroll_div.addEventListener('mouseenter',function(){
    Array.from(arrow).forEach( function(element){
        element.style.opacity= '1';
    });
    time_scroll_stop();
});

scroll_div.addEventListener('mouseleave',function(){
    Array.from(arrow).forEach( function(element){
        element.style.opacity= '0';
        });
// 非電腦的，不用再次觸發 因為會改用滑動那邊觸發 以避免同時會有兩個觸發。
        if(window.innerWidth >= 992){
            time_scroll_start();
        }
});
// 基本切換功能
const arrow_control = function(){
    img_number =(img_number < 0) ? img_number+img_total_number : img_number;
    img_number_v = -img_number*100 + '%'
    scroll_img.style.transform = `translateX(${img_number_v})`;
}
// 前後移動的方法區分
const back_img = function(){
    img_number = (img_number -1) % img_total_number;
    arrow_control();
};
const forward_img = function(){
    img_number = (img_number + 1) % img_total_number;
    arrow_control();
}

back_arrow.addEventListener('click',back_img);
forward_arrow.addEventListener('click',forward_img);
// 計算倫撥div的大小
const img_width = window.innerWidth*0.8;


// 滑動功能
let moveX_start = 0;
let moveX_end = 0;
let move_persent = 0;
let move_act = 0;

function move_start(e){
    moveX_start = e.touches[0].clientX;
    time_scroll_stop();
};
function move_end(e){

    moveX_end = e.touches[0].clientX;
    move_persent = ((moveX_end - moveX_start)/img_width )
    move_act = (move_persent - img_number)*100;
    if(move_act < 0){
        scroll_img.style.transform =`translateX(${move_act}%)`;
    }
    
};
function move_action(){

    if(move_persent > 0.2){
        back_img();
    }else if (move_persent <(-0.2)){
        forward_img();
    }else arrow_control();
    moveX_start = 0;
    moveX_end = 0;
    move_act = 0;
    time_scroll_start();
};

scroll_div.addEventListener('touchstart',move_start);
scroll_div.addEventListener('touchmove',move_end);
scroll_div.addEventListener('touchend',move_action);

//  物品內容的item 
const con_box = document.getElementById('con_box');
const menu = document.querySelector('[data-method = "menu"]');
// 監聽器
menu.addEventListener('click',function(e){
    const menu_test = menu.querySelectorAll('.menu_test');
    const con_box_shopping_div = con_box.querySelectorAll('.shopping_div');
    const menu_target = e.target;
    // console.log(menu_target);
    console.log(menu_target);

    
    menu_test.forEach( me =>{
         me.classList.remove('useing');
    });
    menu_target.classList.add('useing');
    const e_id = menu_target.getAttribute('data-id');
    console.log(e_id);
    const e_shop = document.querySelector(`.shopping_div[data-id="${e_id}"]`);
    // console.log(e_shop);
    con_box_shopping_div.forEach(sh =>{
        // console.log(sh);
        sh.removeAttribute('id');
        sh.classList.add(`d_n`);
    });
    e_shop.classList.remove('d_n');
    e_shop.setAttribute('id','shopping_div');

})




const shopping_div = document.getElementById('shopping_div');
shopping_div.addEventListener('wheel',function(e){
    let scroll_x_width = Math.round(shopping_div.scrollWidth-shopping_div.clientWidth);
    const x_wheel = Math.max(-1,Math.min(1, (e.deltaY || -e.wheelDelta || e.detail)));

    if(Math.ceil(shopping_div.scrollLeft) == scroll_x_width && x_wheel == 1){
        // 計算有沒有到底部
    }else if (Math.ceil(shopping_div.scrollLeft) == 0 && x_wheel == -1){
        // 計算有沒有到頂部
    }
    else{
        e.preventDefault();
        shopping_div.scrollLeft += x_wheel *40 ;
    };
});
