const imgs = document.querySelectorAll('[rwd_method="img"]');

function imgs_add(){
    imgs.forEach(element => {
    let img_width = element.naturalWidth;
    let img_height = element.naturalHeight;
    if(img_height <= img_width){
        element.classList.add('img_height');
    }else{
        element.classList.add(`img_width`);
    };
    });
};

function imgs_remove(){
    imgs.forEach(element => {
        if(element.classList.contains('img_height')){
            element.classList.remove('img_height');
        }
        if(element.classList.contains('img_width')){
            element.classList.remove('img_width');
        }
    })
};
function window_width(){
    if(innerWidth<552){
        imgs_remove();
    }else{
        imgs_add();
    }
};
// 初次載入判斷
window.addEventListener('load',window_width);
// 寬度變更判斷
window.addEventListener('resize',window_width)