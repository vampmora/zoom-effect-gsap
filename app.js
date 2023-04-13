gsap.from('.zoomOut h2', {
    scrollTrigger: {
        trigger: '.zoomOut',
        pin: true,
        scrub: 1
    },
    duration:2,
    stagger:2,
    scale:30
})


gsap.from('.zoomIn h2', {
    scrollTrigger: {
        trigger: '.zoomIn',
        pin: true,
        scrub: 1
    },
    duration:2,
    stagger:2,
    scale:20
})

