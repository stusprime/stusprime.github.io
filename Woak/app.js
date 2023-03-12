const material = document.querySelectorAll('input[name="chair-material"]');
const chair = document.querySelector("#chair");

material.forEach( function(clr){
    clr.addEventListener('click', function(){
      
       
        chair.src = `${clr.value}.jpg`;
        chair.parentElement.classList.toggle("scale-in-center");
    
   
        
        })
});