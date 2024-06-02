const menuIcon = document.querySelector("#menu-icon");
const navlist = document.querySelector(".navlist");
const header = document.querySelector("header");
window.addEventListener("scroll",()=>{
    header.classList.toggle("sticky", window.scrollY > 80);

})
menuIcon.onclick=()=>{
    menuIcon.classList.toggle("bx-x");
    navlist.classList.toggle("open")
}

window.onscroll=()=>{
    menuIcon.classList.remove("bx-x");
    navlist.classList.remove("open")
}

const observer=new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        if(entry.isIntersecting){
            entry.target.classList.add("show-items");
        }else{
            entry.target.classList.remove("show-items");
        }
    })
})

const scrollLeft =  document.querySelectorAll(".scroll-left");
scrollLeft.forEach((el)=>observer.observe(el));

const scrollRight =  document.querySelectorAll(".scroll-right");
scrollRight.forEach((el)=>observer.observe(el));

const scrollTop =  document.querySelectorAll(".scroll-top");
scrollTop.forEach((el)=>observer.observe(el));

const scrollBottom =  document.querySelectorAll(".scroll-bottom");
scrollBottom.forEach((el)=>observer.observe(el));

const lilink =document.querySelectorAll("header ul li a");
const section =document.querySelectorAll("section");

function actionMenu(){
    let secLength = section.length;
    while(--secLength && window.scrollY + 500< section[secLength.offsetTop]){}
    lilink.forEach(sec=>sec.classList.remove("active"));
    lilink[secLength].classList.add("active");
}
actionMenu();
window.addEventListener("scroll",activeMenu);