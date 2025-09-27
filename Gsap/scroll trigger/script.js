// gsap.to("#box1 .box",{
//     scale:2,
//     rotate:360,
//     duration:3,
//     delay:0.9,
//     backgroundColor:"yellow"

// })
// gsap.to("#box2 .box",{
//     scale:2,
//     rotate:360,
//     duration:3,
//     delay:3,
//     backgroundColor:"pink"

// })
// gsap.to("#box3 .box",{
//     scale:2,
//     rotate:360,
//     duration:3,
//     delay:6,
//     backgroundColor:"black"

// })

// gsap.to("#box1 .box",{
//     scale:2,
//     rotate:360,
//     duration:3,
//     delay:0.9,
//     backgroundColor:"yellow"

// })
// gsap.to("#box2 .box",{
//     scale:2,
//     rotate:360,
//     duration:3,
//     backgroundColor:"pink",
//     scrollTrigger:{
//         trigger:"#box2 .box",
//         scroller:"body",
//         markers:true,
//         start:"top 60%",

//     }

// })

// gsap.to("#box1 .box",{
//     scale:2,
//     rotate:360,
//     duration:3,
//     delay:0.9,
//     backgroundColor:"yellow"

// })
// gsap.to("#box2 .box",{
//     scale:2,
//     rotate:360,
//     duration:3,
//     backgroundColor:"pink",
//     scrollTrigger:{
//         trigger:"#box2 .box",
//         scroller:"body",
//         markers:true,
//         start:"top 60%",
//         end:"top 30%",
//         scrub:"true"    //smooth animation on scrolling , if you giving the value 2,5,4,6 then it is more smooth campare to 1//
        

//     }

// })

gsap.to("#box1 .box",{
    scale:2,
    rotate:360,
    duration:3,
    delay:0.9,
    backgroundColor:"yellow"

})
gsap.to("#box2 h1",{
    transform:"translateX(-150%)",
  
    scrollTrigger:{
        
        trigger:"#box2",
        scroller:"body",
        markers:true,
        start:"top 30%",
        end:"top -100%",
        scrub:2 , //smooth animation on scrolling , if you giving the value 2,5,4,6 then it is more smooth campare to true//
        pin:true  //when scroll animation is happen poora tab wo scroll neeche hoga//
          
        

    }

})