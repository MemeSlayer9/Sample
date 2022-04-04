$(document).ready(function(){
  
  
  //------------------------------------//
  //Navbar//
  //------------------------------------//
    	var menu = $(".navbar");
    	$(window).bind('scroll', function(e){
    		if($(window).scrollTop() > 140){
    			if(!menu.hasClass('secondary')){
    				menu.addClass('secondary');
    			}
    		}else{
    			if(menu.hasClass('secondary')){
    				menu.removeClass('secondary');
    			}
    		}
    	});
    	});	
 //------------------------------------//
  //Navbar//
  //------------------------------------//
$(document).ready(function() {

    "use strict";
    
    $(window).scroll(function() {

        "use strict";
        
        if ($(window).scrollTop() > 80) {
            $(".navbar").css({
                'margin-top': '0px',
                'opacity': '1',
                'transition' : 'all 0.4s ease'
            })
            $(".navbar-nav>li>a").css({
                'padding-top': '15px'
            });
            $(".navbar-brand img").css({
                'height': '35px'
            });
            $(".navbar-brand img").css({
                'padding-top': '0px'
            });
            
        } else {
            $(".navbar").css({
                'margin-top': '-100px',
                'opacity': '0'
            })
            $(".navbar-nav>li>a").css({
                'padding-top': '45px'
            });
            $(".navbar-brand img").css({
                'height': '45px'
            });
            $(".navbar-brand img").css({
                'padding-top': '20px'
            });
            
        }
    });
});

//OWL CAROSEL

$(document).ready(function() {

    "use strict";
    
    $("#owl-demo").owlCarousel({
        autoPlay: 3000,
        items: 4, //10 items above 1000px browser width
        itemsDesktop: [1370, 4], //5 items between 1000px and 901px
        itemsDesktopSmall: [900, 2], // betweem 900px and 601px
        itemsTablet: [600, 1], //2 items between 600 and 0
   		
    });


}); 



$(document).ready(function(){

  wow = new WOW(
       
      );
      wow.init();


    
});
//COUNTERUP

$(document).ready(function() {
  $('.counter_num').counterUp({
    delay: 10,
    time: 2000
    });
  });


