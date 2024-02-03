gsap.registerPlugin(ScrollTrigger,ScrollSmoother);

let smooth = ScrollSmoother.create({
 wrapper: "#smooth-wrapper",
 content: "#smooth-content",
 smooth: 2,
 smoothTouch:0.1,
 effects: true,
})
// smooth.effect(".box", {
//     speed: 0.5,
//     lag: (i) => i*1
// })
ScrollTrigger.create({
    pin:".one",
    start:"top center",
    end:"+=50px"
})