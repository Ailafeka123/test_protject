// 載入網頁使用的loading
// 導入物件
const loading = document.getElementById('loading');
const loading_button = document.getElementById('loading_button');
const loading_small_affect =document.getElementById('loading_small_affect');
// 測試用loading關閉紐
loading_button.addEventListener('click', ()=>{
    console.log('display = none');
    loading.style.display = 'none';
    clearInterval(loading_set);
})

function loading_small_animation(){
    let i1 = Math.random()*100 +"px";
    let i2 = Math.random()*100 +'px';
    console.log(`loading_small_affect.top:`+loading_small_affect.style.top);
    loading_small_affect.style.top -= i1;
    console.log(`loading_small_affect.top:`+loading_small_affect.style.top);
}
const loading_set = setInterval(loading_small_animation,1000);

// loading完成的關閉
// window.addEventListener('load',()=>{
//     loading.style.display = 'none';
//     clearInterval(loading_set);
// })