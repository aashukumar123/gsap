const menu = document.querySelector(".full span")
const cross=document.querySelector("#nav p")
var t1=gsap.timeline()
t1.to(".full",{
    right:0,
    delay:0.3,
    duration:0.8,

})
t1.to(".full h1",{
    x:80,
    duration:0.8,
    delay:0.4,
    stagger:0.3,

})
t1.pause()

cross.addEventListener("click",()=>{
    t1.play()
})
menu.addEventListener("click",()=>{
    t1.reverse()
})