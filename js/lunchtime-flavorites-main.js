var solved_fruits = [1,0,0,0,0,0,0];
var active_step = 1;
$( document ).ready(function() {
    $('.ingredients-slider').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 4,
        dots: false,
        arrows: true,
        draggable: false,
        speed: 1300,
        prevArrow: '<div class="slick-prev">&#8249;</div>',
        nextArrow: '<div class="slick-next">&#8250;</div>'
    })
    $('*[draggable!=true]','.slick-track').unbind('dragstart');//remove draggable from slick
   
    //droppables
    $( "#stack-area-1" ).droppable({
        accept: ".stack-area-1-ingredient",
        drop: function( event, ui ) {
            var droppedOn = $(this);
            var dropped = ui.draggable;
            $(dropped).detach().removeClass("slick-slide").removeClass("slick-active").appendTo(droppedOn).addClass("stacked");
            $('.ingredients-slider').slick('setPosition'); 
        }
    });
    $( "#stack-area-2" ).droppable({
        accept: ".stack-area-2-ingredient",
        drop: function( event, ui ) {//should acccept only two children
            var droppedOn = $(this);
            var dropped = ui.draggable;
            $(dropped).detach().removeClass("slick-slide").removeClass("slick-active").appendTo(droppedOn).addClass("stacked");
            $('.ingredients-slider').slick('setPosition'); 
            
        }
    });
    $( "#stack-area-3" ).droppable({
        accept: ".stack-area-3-ingredient",
        drop: function( event, ui ) {
            var droppedOn = $(this);
            var dropped = ui.draggable;
            $(dropped).detach().removeClass("slick-slide").removeClass("slick-active").appendTo(droppedOn).addClass("stacked");
            dropped.find('img').attr('src',"assets/lunchtime_flavorites/juices/stacked/"+dropped.find('img').attr('fruit-filename'));
            $('.ingredients-slider').slick('setPosition'); 
        }
    });
    $( ".case-cover" ).droppable({
        accept: ".stack-area-5-ingredient",
        drop: function( event, ui ) {
            var droppedOn = $(this);
            var dropped = ui.draggable;
            $(dropped).detach().removeClass("slick-slide").removeClass("slick-active").appendTo(droppedOn).addClass("stacked");
            $('.ingredients-slider').slick('setPosition'); 
        }
    });
    $( ".step-1.ingredients-slider .slick-slide" ).droppable({
        accept: ".stack-area-1-ingredient.stacked",
        drop: function( event, ui ) {
            var droppedOn = $(this);
            var dropped = ui.draggable;
            $(dropped).detach().removeClass("stacked").addClass("slick-active").addClass("slick-slide").css("top",0).css("left",0).insertAfter(droppedOn);
            $('.ingredients-slider').slick('setPosition'); 
        }
    });
    
    $( ".step-2.ingredients-slider .slick-slide" ).droppable({
        accept: ".stack-area-2-ingredient.stacked",
        drop: function( event, ui ) {
            var droppedOn = $(this);
            var dropped = ui.draggable;
            $(dropped).detach().removeClass("stacked").addClass("slick-active").addClass("slick-slide").css("top",0).css("left",0).insertAfter(droppedOn);
            $('.ingredients-slider').slick('setPosition'); 
        }
    });
    $( ".step-3.ingredients-slider .slick-slide" ).droppable({
        accept: ".stack-area-3-ingredient.stacked",
        drop: function( event, ui ) {
            var droppedOn = $(this);
            var dropped = ui.draggable;
            dropped.find('img').attr('src',"assets/lunchtime_flavorites/juices/"+dropped.find('img').attr('fruit-filename'));
            $(dropped).detach().removeClass("stacked").addClass("slick-active").addClass("slick-slide").css("top",0).css("left",0).insertAfter(droppedOn);
            $('.ingredients-slider').slick('setPosition'); 
        }
    });
    $( ".step-5.ingredients-slider .slick-slide" ).droppable({
        accept: ".stack-area-5-ingredient.stacked",
        drop: function( event, ui ) {
            var droppedOn = $(this);
            var dropped = ui.draggable;
            $(dropped).detach().removeClass("stacked").addClass("slick-active").addClass("slick-slide").css("top",0).css("left",0).insertAfter(droppedOn);
            $('.ingredients-slider').slick('setPosition'); 
        }
    });
    // $( ".slick-slide" ).droppable({
    //     accept: ".stack-area-1-ingredient",
    //     drop: function( event, ui ) {
    //         var droppedOn = $(this);
    //         var dropped = ui.draggable;
    //         $(dropped).detach().removeClass("stacked").addClass("slick-active").removeClass("stacked");
    //         $('.ingredients-slider').slick('setPosition'); 
    //     }
    // });
     //draggables
     $( ".draggable" ).draggable({ 
        revert: "invalid",
        'cursorAt': {
            left : Math.floor( $( this ).width()/ 2 ),
            top : Math.floor( $( this ).width()/ 2 )
        },
        start: function(event, ui){
            $(".ingredients-slider").addClass("show-overlay");
            if($(this).hasClass('stacked')){
                $(".step-5.case-cover").css("z-index",9);
                $(".step-5.type-your-name").css("z-index",9);

            }
            $(this).draggable('instance').offset.click = {
                left: Math.floor(ui.helper.width() / 2),
                top: Math.floor(ui.helper.height() / 2)
            }; 
            if($( "#stack-area-2>div" ).length == 2){//disable any more childs
                $("#stack-area-2").droppable('option', 'accept', 'nothing');                
            }else{
                $("#stack-area-2").droppable('option', 'accept', '.stack-area-2-ingredient');            
            }
            if($( "#stack-area-3>div" ).length == 1){//disable any more childs
                $("#stack-area-3").droppable('option', 'accept', 'nothing');                
            }else{
                $("#stack-area-3").droppable('option', 'accept', '.stack-area-3-ingredient');            
            }
            if($( ".step-5.case-cover>div" ).length == 2){//disable any more childs
                $(".step-5.case-cover").droppable('option', 'accept', 'nothing');                
            }else{
                $(".step-5.case-cover").droppable('option', 'accept', '.stack-area-5-ingredient');            
            }
            console.log('ingredients added: '+$( "#stack-area-1>div" ).length);
            console.log('snacks added: '+$( "#stack-area-2>div" ).length);
            console.log('juices added: '+$( "#stack-area-3>div" ).length);
            console.log('stickers added: '+$( ".step-5.case-cover>div" ).length);
            console.log('-------------');
        },
        stop: function( event, ui ) {
            if(active_step == 1){
                if($( "#stack-area-1>div" ).length > 1){//disable any more childs
                    $('.next-button').fadeIn();
                }else{
                    $('.next-button').fadeOut();
                }
            }
            if(active_step == 2){
                if($( "#stack-area-2>div" ).length == 2){//disable any more childs
                    $('.next-button').fadeIn();
                }else{
                    $('.next-button').fadeOut();
                }
            }
            if(active_step == 3){
                if($( "#stack-area-3>div" ).length > 0){//disable any more childs
                    $('.next-button').fadeIn();
                }else{
                    $('.next-button').fadeOut();
                }
            }
            if(active_step == 5){
                console.log("checking");
                $(".step-5.case-cover").css("z-index",'s');
                $(".step-5.type-your-name").css("z-index",'s');
                if($( ".step-5.case-cover>div" ).length > 1 && $(".type-your-name").val().length > 0){//disable any more childs
                    console.log("show");
                    $('.done-button').fadeIn();
                }else{
                    console.log("hide");
                    $('.done-button').fadeOut();
                }
            }
            console.log('ingredients added: '+$( "#stack-area-1>div" ).length);
            console.log('snacks added: '+$( "#stack-area-2>div" ).length);
            console.log('juices added: '+$( "#stack-area-3>div" ).length);
            console.log('stickers added: '+$( ".step-5.case-cover>div" ).length);
            console.log('characters typed in name field: '+$(".type-your-name").val().length);
            console.log('-------------');
        }
    });
    

    $('.next-button,.done-button').click(function(){
            $(this).fadeOut();
            if(active_step == 1){
            $('.step-1').hide();
            $('.step-2').show();
            active_step = 2;
            $('.ingredients-slider').slick('setPosition'); 
            $('.bread').clone().appendTo( "#stack-area-1" ); 

        }
        else if(active_step == 2){
            $('.step-2').hide();
            $('.step-3').show();
            active_step = 3;
            $('.ingredients-slider').slick('setPosition');
        }
        else if(active_step == 3){
            $('.step-3.ingredients-slider').hide();            
            $(".slick-list").css("z-index", 99);
            $(".slick-arrow").css("z-index", 100);
            $('.ingredients-slider').slick('setPosition');
            $(".case-cover-container").show();
            $("#case-cover").flip({
                axis: 'x',
                speed: 2000,
                front: '.front-lf',
                back: '.back-lf'
            });
            setTimeout(function(){
                $("#case-cover").flip(true);
             }, 1000);

            setTimeout(function(){
                $(".slick-list").css("z-index", "initial");
                $(".slick-arrow").css("z-index", 1);
                $('.step-3').hide();
                $('.step-4').hide();
                $('.step-5').show();
                $(".case-cover-container").hide();

                active_step = 5;
                $('.ingredients-slider').slick('setPosition');
             }, 3300);
        }
        else if(active_step == 5){
            $('.step-5').hide();
            $(".game-end-wrapper").show();
            active_step = 6;
            $('.game-spin-restart-buttons-container').hide();
        }
    })
    $(".type-your-name").on('input',function(){
        if($( ".step-5.case-cover div" ).length > 0 && $(".type-your-name").val().length > 0){//disable any more childs
            $('.next-button').fadeIn();
        }else{
            $('.next-button').fadeOut();
        }
    });


    $('.start-game-button').click(function(){
        $('.how-to-play-wrapper').fadeOut(600, function() {
            $('.game-spin-restart-buttons-container').show();
         });
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
    // $( "#sortable1, #sortable2" ).sortable({
    //     connectWith: ".connectedSortable"
    //   }).disableSelection();
    $( "slick-track" ).sortable();

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