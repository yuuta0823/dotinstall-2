'use strict';
{
   const btn = document.getElementById('btn');

   btn.addEventListener('click', () => {
      const n = Math.random();
      if(n < 0.05) {
        btn.texContent = '大吉';
      }else if (n < 0.2){
        btn.texContent = '中吉';
      }else{
        btn.texContent = '凶'
      }
       });





   btn.addEventListener('mousedown', ()=>{
     btn.classList.add('pressed')
   });
   btn.addEventListener('mouseup', ()=>{
     btn.classList.remove('pressed')
   });

}
