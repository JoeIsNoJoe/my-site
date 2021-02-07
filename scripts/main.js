const taijiSlide = document.querySelector('.taiji-slide');
const taijiImages = document.querySelectorAll('.taiji-slide img');

// Button
const prevBtn = document.querySelector('#prevBtn');
const nextBtn = document.querySelector('#nextBtn');

// Counter
let counter = 1;
const size = taijiImages[0].clientWidth;

taijiSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';

nextBtn.addEventListener('click',()=>{
    if (counter >= taijiImages.length - 1) return;  
    taijiSlide.style.transition = "transform 0.4s ease-in-out";
    counter++;
    taijiSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
});

prevBtn.addEventListener('click',()=>{
    if (counter <= 0) return;  
    taijiSlide.style.transition = "transform 0.4s ease-in-out";
    counter--;
    taijiSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
});

taijiSlide.addEventListener('transitionend', () => {
    if (taijiImages[counter].id === 'last-clone') {
        taijiSlide.style.transition = "none";
        counter = taijiImages.length - 2;
        taijiSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    }  
    if (taijiImages[counter].id === 'first-clone') {
        taijiSlide.style.transition = "none";
        counter = taijiImages.length - counter;
        taijiSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    }   
}); 
