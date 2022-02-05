$('.owl-carousel').owlCarousel({
    center: true,
    items:2,
    loop:true,
    margin:10,
    responsive:{
        0:{
            items:1
        },

        300:{
            items:2
        },

        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})