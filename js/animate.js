// 封装一个动画函数
function animate(obj,target,callback){
      clearInterval(obj.timer);
      obj.timer = setInterval(() => {
         let step = (target - obj.offsetLeft) /10;
         step =  step > 0 ?Math.ceil(step) : Math.floor(step);
         if(obj.offsetLeft === target){
             clearInterval(obj.timer);
            callback && callback();
         }
         obj.style.left = obj.offsetLeft + step+ 'px';
     }, 15);
}
// 匀速动画 就是盒子当前位置 + 固定的值
// 缓存动画 盒子当前的位置 + 变化的值（目标值 - 盒子现在位置）/10