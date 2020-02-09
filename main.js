// const r = document.querySelector('.x')
// const x = document.querySelector('.timeline__wrapper')
// const sec = document.querySelector('.timeline__section')
// let width = sec.offsetWidth;


// r.addEventListener('input', () =>{
//     let v = ((-width*5))/100 ;
//     x.style.left = parseInt(r.value) * v + "px";
//     // let b = parseInt(r.value)
//     // console.log(typeof(b))
    
// })


const slider = document.querySelector(".slider");
const arrowBack = document.querySelector(".slidecontainer__back");
const arrowForward = document.querySelector(".slidecontainer__forward")

arrowBack.addEventListener("click", () =>{
    slider.value = parseInt(slider.value) - 1
    timeLineWrapper.style.left = parseInt(slider.value) * value + "px";
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
    console.log(slider.value)
})

arrowForward.addEventListener("click", () =>{
    slider.value = parseInt(slider.value) + 1
    timeLineWrapper.style.left = parseInt(slider.value) * value + "px";
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
    console.log(slider.value)
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
})

const headerUnderscore = document.querySelector(".header__active");


console.log(sectionWidth)