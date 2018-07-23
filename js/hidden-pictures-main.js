var solved_fruits = [1,0,0,0,0,0,0];

$( document ).ready(function() {
    $('.start-game-button').click(function(){
        $('.how-to-play-wrapper').fadeOut(600, function() { });
    })
    $('.fruit-container').on( "mousedown touchstart", function(){
        $(this).addClass("clicked")
        .delay( 100 )
        .queue(function(next){
            $(this).addClass('found');
            next();
        })
        .delay( 500 )
        .queue(function(next){
            $(this).addClass('found-home-location');
            next();
        })
        .delay( 1000 )
        .queue(function(next){
            // update_solved_fruits(this.attr('fruit-id'));
            solved_fruits[$(this).attr('fruit-id')] = 1;
            check_if_all_fruits_are_found();
            next();
        });
    })
});


function game_start(){    
  
}


function check_if_all_fruits_are_found(){
    if(solved_fruits.indexOf(0) == -1){
        $(".game-end-wrapper").show();
    }
}

// $( window ).resize(function() {
//     configure_responsive();
// });
// function configure_responsive(){ //why js solution?? :(
//     window_height = $(window).height();
//     window_width  = $(window).width();    
//     if(window_width < mobile_breakpoint){
//         // console.log("test");
//         $(".game-container").addClass("responsive");
//     }else{
//         // console.log("test2");
//         $(".game-container").removeClass("responsive");
        
//     }
// };