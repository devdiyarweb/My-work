let img1 = document.querySelector('.img1');
let img2 = document.querySelector('.img2');
window.addEventListener('scroll', function(){
    if (pageYOffset > 250 ) {
        img1.classList.add('active')
    if(pageYOffset > 650){
        img2.classList.add('active')
    }
}
})
console.log(pageYOffset);