// 載入網頁使用的loading
// 導入物件
const loading = document.getElementById('loading');
const loading_button = document.getElementById('loading_button');

// 測試用loading關閉紐
loading_button.addEventListener('click', ()=>{
    console.log('display = none');
    loading.style.display = 'none';
})