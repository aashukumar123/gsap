// function breakTheText(){
// var h1 = document.querySelector("h1")
// var  h1Text = h1.textContent
// var splittedText = h1Text.split("")
// var clutter = ""
// splittedText.forEach(function(elem){
//    clutter += `<span>${elem}</span>`
// h1.innerHTML = clutter
// })
// }
// breakTheText()


function breakTheText(){
    var h1 = document.querySelector("h1")
    var  h1Text = h1.textContent
    var splittedText = h1Text.split("")
    var halfvalue = splittedText.length/2
    var clutter = ""
    
    splittedText.forEach(function(elem,index){
       if(index<halfvalue)
       {
         clutter += `<span class="a">${elem}</span>`
       }
       else{
        clutter += `<span class="b">${elem}</span>`
       }
   
    })
    h1.innerHTML = clutter
    }
    breakTheText()
var t1=gsap
// t1.from("h1 span",{
//     y:50,
//     opacity:0,
//     duration:0.8,
//     delay:0.5,
//      stagger:0.15   // if you gaving value minus then it give oppsite animition//
// })

t1.from("h1 .a",{
  y:70,
  duration:0.6,
  delay:0.5,
  stagger:0.15,
  opacity:0,
 

})
t1.from("h1 .b",{
    y:70,
    duration:0.6,
    delay:0.5,
    stagger:-0.15,
    opacity:0,
    
  
  })