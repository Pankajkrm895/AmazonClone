
      /*slider image js Start*/ 
const imgs = document.querySelectorAll('.header-slider ul img');
const prev_btn=document.querySelector('.control-prev');
const next_btn = document.querySelector(".control-next");

let n=0;

function slideChange(){
    for(let i=0; i < imgs.length; i++){
       imgs[i].style.display= 'none';
    }
    imgs[n].style.display='block';
}

slideChange();


prev_btn.addEventListener('click',(e)=>{
 if(n > 0){
    n--;
 }else{
    n= imgs.length - 1;
 }
slideChange();

})

next_btn.addEventListener('click',(e)=>{
    if(n < imgs.length -1){
     n++;
    }
    else{
        n=0;
    }
    slideChange();
})
/* SLider image scroll End*/

/* Product Scroll Wheel Start */
const scrollContainer=document.querySelectorAll('.products');
for(const item of scrollContainer){
    item.addEventListener('wheel',(e)=>{
        e.preventDefault();
        item.scrollLeft += e.deltaY;
    });
}
/* Product Scroll Wheel End */

/* btnScrolltoTop-Start*/
const btnScrollToTop = document.querySelector(".back-to-top-btn");

console.log(btnScrollToTop);
btnScrollToTop.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
});

window.addEventListener('scroll', ()=>{
    if(window.scrollY > 350){
        btnScrollToTop.style.display="block";

    }
    else{
        btnScrollToTop.style.display="none";
    }
})

/* btnScrolltoTop-End*/


