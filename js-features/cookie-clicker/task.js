
const count = document.getElementById('clicker__counter')

window.onload = function(){//Увеличение и уменьшение по клику картинки
    var i = 0;
    var image = document.getElementById('cookie');
     image.onclick = function(){
        count.innerHTML++;
      if (i==0){
      
      this.style.width= '250px';
      i = 1;
      }else if(i==1){
       
       this.style.width= '200px';
       i = 0;
       }
     }
   };




