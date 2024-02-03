
gsap.registerPlugin(ScrollTrigger) ;

document.addEventListener("DOMContentLoaded", function(){
    const contentHolderHeight = document.querySelector(".content__holder").offsetHeight;
    const imgHolderHeight = window.innerHeight;
    const additionalHeight = window.innerHeight;

    const totalBodyHeight = contentHolderHeight + imgHolderHeight + additionalHeight ;
    document.body.style.height= `${totalBodyHeight}px`;
});


ScrollTrigger.create({
    trigger:".website__content",
    start:"-0.1% top",
    end:"bottom bottom",
    onEnter: () => {
        gsap.set(".website__content", { position:"absolute", top: "195%" });
    },
    onLeaveBack: () =>{
        gsap.set(".website__content", { position:"fixed", top: "0" });
    }
})

gsap.to(".header .letters:first-child",{
    x: () => -innerWidth * 3,
    seale: 10,
    ease:"power2.inOut",
    ScrollTrigger: {
       start:"top top",
       end:`+=200%`,
       scrub: 1
    }
})

gsap.to(".header .letters:last-child",{
    x: () => innerWidth * 3,
    seale: 10,
    ease:"power2.inOut",
    ScrollTrigger: {
       start:"top top",
       end:`+=200%`,
       scrub: 1
    }
})
gsap.to(".img__holder",{
   rotation:0,
   clipPath:' polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
   ease:"power2.inOut",
   ScrollTrigger: {
    start:"top top",
    end:`+=200%`,
    scrub: 1
 }
})
gsap.to(".img__holder img",{
    seale: 1,
   ease:"power2.inOut",
   ScrollTrigger: {
    start:"top top",
    end:`+=200%`,
    scrub: 1
 }
})