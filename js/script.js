    $(document).ready(function(){
        $('.menu-icon').click(function(){
            this.classList.toggle("cross");
            $('.mob-menu').toggle('linear');
        });
    });

    
        // var slideIndex = 1;
        //     showSlide(slideIndex);
        
        // function plusSlides(n){
        //     shwSlide(slideIndex += n);
        // }
        
        // function currentSlide(n) {
        //     showSlide(slideIndex = n);
        // }
        
        // function showSlide(n){
        //     var i;
        //     var slides = document.getElementsByClassName("slider");
        //     var dots = document.getElementsByClassName("dots");
        //     if (n > slides.length) { 
        //         slideIndex = 1
        //     };
        //     if (n < 1) { 
        //         slideIndex = slides.length
        //     };
            
        //     for (i=0;i<slides.length;i++) {
        //     slides[i].style.display = "none";
        //     };
            
        //     for (i=0;i<dots.length;i++) {
        //     dots[i].className = dots[i].className.replace("active","");
        //     };
        //     slides[slideIndex-1].style.display = "block";
        //     dots[slideIndex-1].className += " active";
        //     }
    

        // $('.stat-num').each(function () {
        //     $(this).prop('Counter',0).animate({
        //         Counter: $(this).text()
        //     }, {
        //         duration: 4000,
        //         easing: 'swing',
        //         step: function (now) {
        //             $(this).text(Math.ceil(now));
        //         }
        //     });
        // });
    





