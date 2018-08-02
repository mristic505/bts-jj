//seven active positions at the playing board
var active_positions = [0,0,0,0,0,0,0];
//how long have positions being active
var positions_timers = [0,0,0,0,0,0,0];
//countdown timer
var timer = 30;
//maximum positions active at the same time
var maximum_positions_active = 3;
//popped
var fruits_popped = 0;
//breakpoint at which we are moving to mobile version
var mobile_breakpoint = 600;

document.addEventListener("touchstart", function(){}, true);

function position_available(){
    if(numOccurences = $.grep(active_positions, function (elem) {
        return elem === 1;
    }).length == maximum_positions_active){
        return false;
    }else{
        return true;
    };
}
function generate_random_available_position(){
    var position_found = false;
    while(!position_found){
        rand = Math.floor(Math.random() * 7);
        if(active_positions[rand] == 0){
            position_found = true;
            return rand;
        }
    }
}

function show_positions(){
    if(position_available()){
        var available_position = generate_random_available_position();
        $(".fruit-"+available_position).addClass('show')
        .delay( 390 )
        .queue(function(next){
            $(this).addClass('fruit-on-top');
            next();
        });
        active_positions[available_position] = 1;
    }
}

function update_positions_times(){
    $.each( active_positions, function(key, value ) {
        if(value == 1){
            positions_timers[key]++;
        }
    });
    console.log(positions_timers);
}
function remove_expired_positions(){
    $.each( positions_timers, function(key, value ) {
        if(value >= 3){
            $(".fruit-"+key).removeClass('show');
            $(".fruit-"+key).removeClass('fruit-on-top');
            positions_timers[key] = 0;
            active_positions[key] = 0;//add delay
        }
    });
}
function remove_all_positions(){ 
    $(".fruit-container").removeClass('show');
    $(".fruit-container").removeClass('fruit-on-top');
}
$( document ).ready(function() {
    configure_responsive();
    $('#all-up').click(function(){
        $('.fruit-container').toggleClass("show");
    })
  //Game start    
    $('.start-game-button').click(function(){
        game_start();
    })
    // $('.fruit-container').click(function(){
    // $('.fruit-container').mousedown(function(){
    $('.fruit-container').on( "mousedown touchstart", function(e){
        $(this).removeClass('fruit-on-top');     
        $(this).addClass("popped")
        .delay( 300 )
        .queue(function(next){
            $(this).removeClass('show');
            next();
        })
        .delay( 300 )
        .queue(function(next){
            $(this).removeClass('popped');
            active_positions[$(this).attr('fruit-id')] = 0;
            next();
        });
        fruits_popped++;
        e.preventDefault();
        // console.log("test2");
    })
});


function game_start(){    
    $('.how-to-play-wrapper').fadeOut(600, function() {
    $('.game-spin-restart-buttons-container').show();

    //add new pieces interval
    var set_positions_interval = setInterval(function(){ show_positions();},500);

    //main countdown
    function countdown() {
        update_positions_times(); 
        if(timer != 0 ){
            remove_expired_positions();
            timer--;
        }
        var i = document.getElementById('game-counter');
        i.innerHTML = parseInt(i.innerHTML)-1;
        if (parseInt(i.innerHTML)==10) {
            $(i).addClass("hurry");
        }
        if (parseInt(i.innerHTML)==0) {
        clearInterval(set_positions_interval);
        clearInterval(countdownInterval);
        remove_all_positions();
        game_end();
        }
    }
    var countdownInterval = setInterval(function(){ countdown(); },1000);

    })
}


function game_end(){
    setTimeout(function(){
        $('.game-spin-restart-buttons-container').hide();
        if(fruits_popped == 0){
            $(".you-did-it-title").hide();            
            $(".popped-fruits").hide();            
        }else{
            $(".failed-to-pop-fruits-title").hide();
            $(".failed-to-pop-fruits").hide();
            // if($(window).width() < 601){
                // $("#popped-fruits").html(Math.ceil(fruits_popped/2));
            // }else{
                $("#popped-fruits").html(fruits_popped);                
            // }
        }
        $(".game-end-wrapper").show();
    }, 3000);
}

$( window ).resize(function() {
    configure_responsive();
});
function configure_responsive(){ //why js solution?? :(
    window_height = $(window).height();
    window_width  = $(window).width();    
    if(window_width < mobile_breakpoint){
        // console.log("test");
        $(".game-container").addClass("responsive");
    }else{
        // console.log("test2");
        $(".game-container").removeClass("responsive");
        
    }
};

/**
 * Randomize array element order in-place.
 * Using Durstenfeld shuffle algorithm.
 */
function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}