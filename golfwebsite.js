var crsr = document.querySelector("#cursor");
var crsrb = document.querySelector("#cursorb");
document.addEventListener("mousemove", function(dets){
    crsr.style.left = dets.x+"px";
    crsr.style.top = dets.y+"px";
    crsrb.style.left = dets.x-250+"px";
    crsrb.style.top = dets.y-250+"px";
})

gsap.to("#nav",{
    height: "110px",
    backgroundColor: "#000",
    duration:0.5,
    scrollTrigger:{
        trigger:"#nav",
        scroller:"body",
        markers:true,
        start:"top -10%",
        end:"top -11%",
        scrub:1,
    }
})

gsap.to("#main",{
    backgroundColor:"#000",
    scrollTrigger:{
        scroller:"body",
        trigger:"#main",
        markers:true,
        start:"top -25%",
        end:"top -70%",
        scrub:1,
    }
})