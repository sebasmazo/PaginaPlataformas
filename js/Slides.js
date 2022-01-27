var index = 1;
function showSlide(n) {
    index+=n;
    alert("entra");
    
    document.getElementsByClassName(slides);
    if(index>slides.length){
        index=0;
    }
    if(index<0){
        index=2;
    }

    slides[index].style.visibilty="hidden";
    
}