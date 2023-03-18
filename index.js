const menuBtn = document.querySelector(".menu-btn")
const menu = document.querySelector(".side-bar")
const closeBtn = document.querySelector(".close")

menuBtn.addEventListener("click",function(){
    menu.classList.add("active");
})

closeBtn.addEventListener("click",function(){
    menu.classList.remove("active");
})


const links = document.querySelectorAll(".links")

links.forEach(element => {
    element.addEventListener("click",function(){
        for (let i = 0; i < links.length; i++) {
            links[i].classList.remove("active")
        }
        element.classList.add("active");
        menu.classList.remove("active");

    });
});

const selctionPositions = [];
const sections = document.querySelectorAll("section");
sections.forEach(element =>{
    selctionPositions.push(element.offsetTop);
});

window.addEventListener('scroll',(event) => {
    const currentPosition = window.scrollY;

    selctionPositions.forEach((position,i)=>{
        if(currentPosition >= position && currentPosition < selctionPositions[i + 1]-100){
            links.forEach(element =>{
                element.classList.remove("active");
            })
            links[i].classList.add("active");
        }
    })
});