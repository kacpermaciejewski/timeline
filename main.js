


const slider = document.querySelector(".slider");
const arrowBack = document.querySelector(".slidecontainer__back");
const arrowForward = document.querySelector(".slidecontainer__forward")




function checkPosition(){
    if(parseInt(timeLineWrapper.style.left)> -sectionWidth){
        headerUnderscore.style.left = 5 + "px";
        console.log("mniejsze")
    }
    else if(parseInt(timeLineWrapper.style.left) < -sectionWidth && parseInt(timeLineWrapper.style.left) > -sectionWidth*2){
        headerUnderscore.style.left = "calc(5px + 20%)";
        console.log("wieksze")
    }
    else if(parseInt(timeLineWrapper.style.left) < -sectionWidth*2 && parseInt(timeLineWrapper.style.left) > -sectionWidth*3 ){
        headerUnderscore.style.left = "calc(5px + 40%)";
        console.log("xd")
    }
    else if(parseInt(timeLineWrapper.style.left) < -sectionWidth*3 && parseInt(timeLineWrapper.style.left) > -sectionWidth*4){
        headerUnderscore.style.left = "calc(5px + 60%)";
        console.log("wieksze")
    }
    else if(parseInt(timeLineWrapper.style.left) < -sectionWidth*4 && parseInt(timeLineWrapper.style.left) > -sectionWidth*5){
        headerUnderscore.style.left = "calc(5px + 80%)";
        console.log("wieksze")
    }
}

arrowBack.addEventListener("click", () =>{
    slider.value = parseInt(slider.value) - 1
    timeLineWrapper.style.left = parseInt(slider.value) * value + "px";
    checkPosition();
})

arrowForward.addEventListener("click", () =>{
    slider.value = parseInt(slider.value) + 1
    timeLineWrapper.style.left = parseInt(slider.value) * value + "px";
    checkPosition();
})


const timeLineWrapper = document.querySelector('.timeline__wrapper');
const section = document.querySelector('.timeline__section');
let sectionWidth = section.offsetWidth;

 let value ='';

if(window.innerWidth<400){
    value = ((-sectionWidth *5)-440)/100;
}
else if(window.innerWidth<700){
    value = ((-sectionWidth *5)-400)/100;
}
else if(window.innerWidth<1200){
    value = ((-sectionWidth *5))/100;
}
else if(window.innerWidth<2000) {
    value = ((-sectionWidth *4.5))/100;
}
else {
    value = ((-sectionWidth *4))/100; 
}




slider.addEventListener("input", ()=>{
    timeLineWrapper.style.left = parseInt(slider.value) * value + "px";
    checkPosition();
})

const headerUnderscore = document.querySelector(".header__active");


//Modal
const modal = document.querySelector(".modal");
const cover = document.querySelector(".cover");
const items = document.querySelectorAll(".timeline__item")
const closeModal = document.querySelector(".modal__close")


items.forEach(item =>{
item.addEventListener("click", ()=>{
    modal.classList.add("active")
    cover.classList.add("active")
})

})

closeModal.addEventListener("click", () =>{
    modal.classList.remove("active")
    cover.classList.remove("active") 
})

var swiper = new Swipe(document.querySelector('.timeline'));
swiper.onLeft(()=>{
    slider.value = parseInt(slider.value) + 2
    timeLineWrapper.style.left = parseInt(slider.value) * value + "px";
    checkPosition();
})

swiper.onRight(()=>{
    slider.value = parseInt(slider.value) - 2
    timeLineWrapper.style.left = parseInt(slider.value) * value + "px";
    checkPosition();
})
swiper.run();