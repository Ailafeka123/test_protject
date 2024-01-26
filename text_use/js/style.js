const menu_button = document.querySelectorAll('[rwd_method="menu_button"]');
// const menu_button_target = document.querySelectorAll();
function menu_width_control(){
    menu_button.forEach(element=>{
        var target_id = element.getAttribute('rwd_method_target');
        var target_list = document.querySelector(`${target_id}`);
        console.log(target_id);
        console.log(target_list);
        if (innerWidth > 768){
            element.style.display = 'none';
            element.classList.remove('active');
            target_list.classList.remove('menu_active');
        }else{
            element.style.display = 'block';
        }
    })
};

function menu_button_control(e){
    var menu_button_target = e.currentTarget;
    console.log(`點擊${menu_button_target}`);
    var target_id = menu_button_target.getAttribute('rwd_method_target');
    var target_list = document.querySelector(`${target_id}`);
    if(menu_button_target.classList.contains('active')){
        menu_button_target.classList.remove('active');
        target_list.classList.remove('menu_active');
        console.log('關閉 active');
    }else{
        menu_button_target.classList.add('active');
        target_list.classList.add('menu_active');
        console.log('開啟 active');
    }
};

addEventListener('load',menu_width_control);
addEventListener('resize',menu_width_control);
menu_button.forEach(function(element){
    element.addEventListener('click',menu_button_control);
});
// menu_button.addEventListener('transitionend',)
// addEventListener()