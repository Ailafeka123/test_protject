const scroll = document.querySelectorAll('[rwd_method="scroll"]');


function scroll_function(){
    if(innerWidth<552){
        scroll.forEach(element => {
            const scroll_div = element.querySelectorAll('div.flex_1');
            scroll_div.forEach(element=>{
                element.classList.add('scroll_width');
            })
            const scroll_width = scroll_div.length*100;
            element.classList.add('scroll_box');
            element.style.width = scroll_width+'%';
        });

        // scroll_div.forEach(element => {
        //     element.classList.add('scroll_width');
        // });
    }else {
        scroll.forEach(element => {
            const scroll_div = element.querySelectorAll('div.flex_1');
            scroll_div.forEach(element=>{
                element.classList.remove('scroll_width');
            })
            element.classList.remove('scroll_box');
            element.style.width = '';
            element.style.transform = 'translateX(0)';
        });


        // scroll.forEach(element => {
        //     element.classList.remove('scroll_box');
        //     element.style.width = '';
        //     element.style.transform = 'translateX(0)';
        // });

        // scroll_div.forEach(element => {
        //     element.classList.remove('scroll_width');
        // });
    }
}
// resize 設定間隔時間觸發 避免觸發過多
let time_scroll ;
let resize_scroll = function(){
    clearTimeout(time_scroll);
    time_scroll = setTimeout(scroll_function,100);
}

window.addEventListener('load',scroll_function);
window.addEventListener('resize',resize_scroll);



// 滑動功能設定
let x_start = 0;
let x_move  = 0;
let x_end = 0;
let x_lastmove = 0;
let scroll_width =0;
function m_start(e){
    if(innerWidth < 552){
        x_start = e.touches[0].clientX;
        // 抓取當前目標的寬度 移動的上限會是圖片寬度(預設0.8)*(圖片數量-1)
        let e_innerwith = e.target.closest('[rwd_method="scroll"]').style.width;
        // 當有多個rwd_method = scroll 去捕捉translateX
        let x_lastmove_test =e.target.closest('[rwd_method="scroll"]').style.transform;
        x_lastmove_test =x_lastmove_test.match(/translateX\(([-\d.]+)px\)/);
        // 進行同步
        if(x_lastmove_test){
            x_lastmove =parseInt(x_lastmove_test[1]);
        }else{
            x_lastmove = 0;
        }
        // x_lastmove =x_lastmove_test;
        e_innerwith =parseInt(e_innerwith);
        e_innerwith = e_innerwith/100 -1;
        // 計算移動上限
        scroll_width = window.innerWidth*0.8*e_innerwith;
    }
}
function m_ing(e){
    if(innerWidth < 552){
        // 移動中的座標觸發
        x_move = e.touches[0].clientX;
        // 計算位移多少，由於是要去移動x軸的，根據預設值要倒過來
        x_end = -(x_start - x_move);
        // 超出上限與下限時不可移動
        if(-(x_end + x_lastmove)<scroll_width && -(x_end + x_lastmove) >0){
            e.target.closest('[rwd_method="scroll"]').style.transform =`translateX(${x_end + x_lastmove}px)`;
        }
        
    
    }  
}
function m_end(e){
    if(innerWidth < 552){
        x_lastmove +=x_end;
        // 避免超出上限與下限
        if(-x_lastmove >scroll_width){
            x_lastmove = -scroll_width;
        }else if(x_lastmove > 0){
            x_lastmove = 0;
        }
    }
}
scroll.forEach(e =>{
    e.addEventListener('touchstart',m_start);
    e.addEventListener('touchmove',m_ing);
    e.addEventListener('touchend',m_end);
})

