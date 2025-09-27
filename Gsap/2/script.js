var t1= gsap.timeline()

t1.to("#box1",{
    x:1500,
    rotate:360,
    duration:1.5,
    delay:1
})
t1.to("#box2",{
    x:1500,
    rotate:360,
    duration:1.5,
    backgroundColor:"white",
    borderRadius:"50%"
   
})
t1.from("#box3",{
    x:1500,
    rotate:360,
    duration:1.5,
    scale:1.4,
    backgroundColor:"blue",
   
})