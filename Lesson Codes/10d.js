 function toggleBtn(selection){
     const x = document.querySelector(selection);
    
      turnOffPreviosBtn();
               
     if(!(x.classList.contains('is-toggled'))){
           console.log(x);
            x.classList.add('is-toggled');  
        }else {
            x.classList.remove('is-toggled');
             console.log(x);
              }
  }

 function turnOffPreviosBtn(){
       const  x = document.querySelector('.is-toggled');
        if(x){
            x.classList.remove('is-toggled');
        }
     }       
