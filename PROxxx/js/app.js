 $(document).ready(function(){
 
    $('#hero-slider').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        items:1,
        dots: false,
        smartSpeed: 3000,
        autoplay:true,
        autoplayTimeout:4000,
        autoplayHoverPause:false,
        navText : ['PREV', 'NEXT'],
        responsive:{
            0:{
                 nav: false,
            },
            768: {
                 nav: true,
                
            }
            
        }
    });
    
    $('#project-slider').owlCarousel({
        loop:true,
        margin:0,
        nav:true,
        dots: true,
        smartSpeed: 3000,
        autoplay:true,
        autoplayTimeout:4000,
        autoplayHoverPause:false,
        margin: 20,
        responsive:{
            0:{
                items: 1, 
                nav: false,
                margin: 0,
            },
            768: {
                items: 2,
            },
            1140: {
                items: 2,
                center:true,
            }
        }
    });
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        nav: true,
        dots: true,
        items: 1, 
        smartSpeed: 3000,
        autoplay:true,
        autoplayTimeout:4000,
        autoplayHoverPause:false,
       
    });
    // document.addEventListener("DOMContentLoaded", () => {
    //     function counter (id, start, end, duration){
    //         let obj = document.getElementById(id),
    //         current = start,
    //         range = end - start,
    //         increment = end > start ? 1 : -1,
    //         step = Math.abs(Math.floor(duration / range)),
    //         timer = setInterval(() => {
    //             current += increment;
    //             obj.textContent = current;
    //             if(current == end){
    //                 clearInterval(timer);
    //             }
    //         }, step);
    //     } 
    //     counter("count1", 0, 1287, 3000);
    //     counter("count2", 100, 5786, 2500);
    //     counter("count3", 0, 1440, 3000);
    //     counter("count4", 0, 7110, 3000);
    
    // });
    
 }); 