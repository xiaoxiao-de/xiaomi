// 侧边栏显示隐藏
const down_xm  = document.querySelector('.down_xm');
const down2 = document.querySelector('.down2')
down2.addEventListener('mousemove',()=>{
    down_xm.style.display = 'block';
});
down2.addEventListener('mouseout',()=>{
    down_xm.style.display = 'none';
})
// 返回顶部
const last_li = document.querySelector('.last_li');
const header = document.querySelector('header');
let headerTop = header.offsetTop;
document.addEventListener('scroll',()=>{
    if(window.pageYOffset > headerTop){
        last_li.style.display = 'block';
    }else{
        last_li.style.display = 'none';
    }
})
// 下载app显示隐藏
const down = document.getElementById('down');
const box = document.getElementById('box');
down.addEventListener('mousemove',()=>{
    box.style.display = 'block';
});
down.addEventListener('mouseout',()=>{
    box.style.display = 'none';
});
// 轮播图
const bg = document.querySelector('.bg');
const ul = bg.children[0];
const li = ul.children[0];
const bgwindth = bg.offsetWidth;
// 显示隐藏左右按钮
const you = document.querySelector('.you1');
const zuo = document.querySelector('.zuo1');
bg.addEventListener('mousemove',()=>{
    you.style.display = 'block';
    zuo.style.display = 'block';
    clearInterval(timer);
    timer = null;
});
bg.addEventListener('mouseout',()=>{
    you.style.display = 'none';
    zuo.style.display = 'none';
    // 自动播放轮播图
    timer = setInterval(() => {
    // 手动调用点击事件
      zuo.click();
   }, 3000);

});
//动态生成轮播图小圆圈
const ol = bg.children[3];
for(let i=0;i<ul.children.length;i++){
    // 创建li元素
    const li = document.createElement('li');
    // 添加子节点
    ol.appendChild(li);
    li.setAttribute('data-index',i);
    // 排他思想 干掉所有人留下我自己
    li.addEventListener('click',()=>{
        for(let i=0;i<ol.children.length;i++){
            ol.children[i].className = '';
        }
        li.className='creen';
        // 点击小圆圈动画效果
        let index = li.getAttribute('data-index');
         cont =  index;
         circle = index;
        animate(ul,-index * bgwindth);
        
   }) 
}
ol.children[0].className = 'creen';
// 左右侧按钮实现轮播图切换
const first = ul.children[0].cloneNode(true);
ul.appendChild(first);
let cont = 0;
let circle = 0;
let flag = true;//节流阀防止连续点击造成过快切图
zuo.addEventListener('click',()=>{
   if(flag){
       flag = false;
       if(cont === ul.children.length-1){
        ul.style.left = 0;
        cont = 0;
    }
    cont++;
    animate(ul,-cont * bgwindth,function(){
        flag = true;
    });
    // 小圆圈跟随图片
    circle++;
    if(circle === ul.children.length-1){
        circle = 0 ;
    }
    for(let i = 0; i<ol.children.length;i++){
            ol.children[i].className = '';
    }
    ol.children[circle].className = 'creen';
   }
})
you.addEventListener('click',()=>{
    if(cont === 0){
        cont = ul.children.length -1;
        ul.style.left = -cont * bgwindth + 'px';
       
    }
    cont--;
    animate(ul,-cont * bgwindth);
    // 小圆圈跟随图片
    circle--;
    if(circle < 0){
        circle = ol.children.length -1;
    }
    for(let i = 0; i<ol.children.length;i++){
            ol.children[i].className = '';
    }
    ol.children[circle].className = 'creen';
})
// 自动播放轮播图
let timer = setInterval(() => {
    // 手动调用点击事件
    zuo.click();
}, 3000);
