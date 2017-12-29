
//  $( ".info" ).html( "Next Step..." )



$(function(){
    $(window).scroll(function() {    
        var $myDiv = $('.tile');   
        var st = $(this).scrollTop();



		$( ".info" ).html( st );//значения скрола
			

            $myDiv.css("height", 600-st + "px");

       if (st>=620) {

       	
//работает ноглючно
       		$('.background').css("top", 600-st +"px"); 

         }

         else {
         	$('.background').css("top", "0px");


         };

          //  $(this).scrollTop(600-st);


    })
    .scroll();                    
                                   
});
