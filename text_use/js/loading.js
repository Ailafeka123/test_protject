// 等待所有內容載入完成後執行
const loading_screen =  document.getElementById('loading-screen');
window.addEventListener('load', function() {
    loading_screen.style.opacity = 0;
});
loading_screen.addEventListener('transitionend',function(){
    loading_screen.style.display = 'none';
})

  
  