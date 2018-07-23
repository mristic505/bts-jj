var solved_pieces = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
var shuffled_pieces = shuffleArray([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]);
var animation_timeout = 1000;

var window_height = $(window).height();
var window_width  = $(window).width();
var width_breakpoint = 566;
var sidebar_breakpoint = 1050;

$( document ).ready(function() {
    //Game start    
    $('.start-game-button').click(function(){
        $('.how-to-play-wrapper').fadeOut(600, function() {
            generate_random_pieces_that_stay(4);
            move_pieces_at_game_start();
            assign_draggables();
        })
    })
});

function generate_random_pieces_that_stay(generate_x_keys){
    var random_keys_generated = 0;  
    //generate currently solved puzzle pieces
    while(random_keys_generated < generate_x_keys){
        current_random_key = Math.floor((Math.random() * 14) + 1);
        if(solved_pieces[current_random_key] != 1){
            solved_pieces[current_random_key] = 1;
            random_keys_generated++;
        }
    }
}

function move_pieces_at_game_start(){
    var counter = 0;
    $.each( shuffled_pieces, function(orig_key, orig_value ) {
        setTimeout( function(){
            key = orig_value;
            value = solved_pieces[orig_value];
            current_piece = ".piece-"+key;
            if(window_width > sidebar_breakpoint){
                $( current_piece ).clone().addClass('piece-bottom-bar').css('left', 0).css('top', 0).appendTo('.puzzle-bottom-bar');
            }
            if(counter < 6){
                if(value == 0){
                    counter++;                    
                    if(window_width > sidebar_breakpoint){
                        animate_piece_movement_to_sidebar(current_piece, "left", counter);
                    }else{
                        $( current_piece ).clone().addClass('piece-sidebar').css('left', 0).css('top', 0).appendTo('#puzzle-left-sidebar');
                    }
                }
            }else{
                if(value == 0){
                    counter++;                    
                    if(window_width > sidebar_breakpoint){
                        animate_piece_movement_to_sidebar(current_piece, "right", counter);
                    }else{
                        $( current_piece ).clone().addClass('piece-sidebar').css('left', 0).css('top', 0).appendTo('#puzzle-right-sidebar');
                    }
                }
            }
            if(window_width < sidebar_breakpoint){//animate movement to bottombar
                if(value == 0){//check if piece is not solved
                    animate_piece_movement_to_sidebar(current_piece, "bottom-bar", counter);
                }
            }else{
                $( current_piece ).clone().addClass('piece-botom-bar').css('left', 0).css('top', 0).appendTo('#puzzle-bottom-bar');
            }
        },200*orig_key);
    })
}
function animate_piece_movement_to_sidebar(current_piece, sidebar, loop_num){
    current_piece_original = current_piece;
    current_piece =".puzzle-container "+current_piece
    if(sidebar == "left"){
        sidebarLoc =$("#puzzle-left-sidebar").offset();
        pieceLoc = $(current_piece).offset();
        $(current_piece).css({"position" : "fixed", "top" : pieceLoc.top+45, "left" : pieceLoc.left+45})
        .animate({
            top : sidebarLoc.top + 60,
            left: sidebarLoc.left + 60
        },1100,function() {
            $(current_piece).css({"position" : "relative"}).detach().css('left', 0).css('top', 0).appendTo('#puzzle-left-sidebar');
            if(loop_num == "12"){
                absolutely_position_piece();
            }
        });
    }else if (sidebar == "right"){
        sidebarLoc =$("#puzzle-right-sidebar").offset();
        pieceLoc = $(current_piece).offset();
        $(current_piece).css({"position" : "fixed", "top" : pieceLoc.top+45, "left" : pieceLoc.left+45})
        .animate({
            top : sidebarLoc.top+60,
            left: sidebarLoc.left+60
        },1100,function() {
            $(current_piece).css({"position" : "relative"}).detach().css('left', 0).css('top', 0).appendTo('#puzzle-right-sidebar');   
            if(loop_num == "12"){
                absolutely_position_piece();
            }
        });
    }else if (sidebar == "bottom-bar"){
        pieceLoc = $(current_piece).offset();
        $(current_piece).css({"position" : "fixed", "top" : pieceLoc.top+45, "left" : pieceLoc.left+45,"z-index":11})
        .animate({
            top: "100%",
            left: "50%"
        },1100,function() {
            $(current_piece).css({"position" : "relative"}).detach().css('left', 0).css('top', 0).appendTo('.puzzle-bottom-bar').addClass('piece-bottom-bar');   
        });
    }

    // if(last_loop){
        // console.log(loop_num);
    //     alert();
    // }
    return true;
}


function absolutely_position_piece(){
    var pieces = [];
    var positions = [];
    $.each( solved_pieces, function( key, value ) {
        current_piece = ".piece-"+key;
        if(value == 0){
            pieces.push(current_piece);
            positions.push($(current_piece).position());
            // $(current_piece).css({"position" : "absolute", "top" : piece_position.top, "left" : piece_position.left});
        }
    })
    // console.log(pieces.length);
    $.each( pieces, function(key, value) {
        console.log(value);
        // console.log("test");
        // current_piece = ".piece-"+key;
        // if(value == 0){
            $(value).css({"position" : "absolute", "top" : positions[key].top, "left" : positions[key].left});
        // }
    });
}

function assign_draggables(){
    $.each( solved_pieces, function( key, value ) {
        // console.log(solved_pieces);
        //check if piece is already solved
        // console.log($( ".puzzle-piece.piece-"+key ).width());
        if(value == 0){
            // console.log(".piece-"+key);
            //assign draggables
            $( ".piece-"+key ).draggable({
                start: function( event, ui ) {
                    // $(this).css({"transform":"rotate(0)"});
                },
                // stack: "div",
                containment: "html",
                scroll: true,
                // 'helper':'clone',
                // revert: "invalid",
                'cursorAt': {
                    // left : Math.floor( $( ".puzzle-piece.piece-"+key ).width()/ 2 ),
                    // top : Math.floor( $( ".puzzle-piece.piece-"+key ).width()/ 2 )
                    left : 75,
                    top : 75
                }
                });    
            //assign droppables
            $( ".piece-"+key+"-drop" ).droppable({
                accept: ".piece-"+key,
                drop: function( event, ui ) {
                    solved_pieces[$(this).attr( "piece-number" )] = 1;//update solved pieces (make function for this)
                    check_if_puzzle_completed();
                    $(this).addClass("reveal-piece");
                    var droppedOn = $(this);
                    var dropped = ui.draggable;
                    // droppedOn.addClass("ui-state-highlight");
                    $(dropped).detach().css({"top":"50%","left":"50%","transform":"translate(-50%, -50%)"}).appendTo(droppedOn);
                    ui.draggable.draggable({disabled: true});
                    hide_solved_pieces($(this).attr("piece-number"));
                }
            });
        }
    });
}
//update cursor position for draggable
function update_draggable_cursor_position(){
    $.each( pieces, function( key, value ) {
        $( "."+value ).draggable( "option", 'cursorAt',{
            left : Math.floor( $( ".puzzle-piece."+value ).width()/ 2 ),
            top : Math.floor( $( ".puzzle-piece."+value ).height()/ 2 )
        });
    })
}
function hide_solved_pieces(piece_number){
    $(".puzzle-sidebar .piece-"+piece_number).hide();
    $(".puzzle-bottom-bar .piece-"+piece_number).hide();
}

////////////////////
//Responsive part of website
////////////////////
$( document ).ready(function() {
    window_height = $(window).height();
    window_width  = $(window).width();
    configure_responsive();
})

$( window ).resize(function() {
    configure_responsive();
})

function configure_responsive(){
    
    //check if we are basing dimension on height or width and if height is less than responsive breakpoint
    // if(window_height > window_width && (window_height < 600 || window_width < width_breakpoint)){
    if(window_width < width_breakpoint){
        log("responsive by window width",true);
        var calculated_puzzle_dimension = window_width/1.834437086092715;
        log(calculated_puzzle_dimension);
        $(".puzzle-container").css({"width" : window_width, "height" : window_width})
        $(".puzzle-piece-image").css({"width" : calculated_puzzle_dimension, "height" : calculated_puzzle_dimension})
    }else if(window_width > window_height && (window_height < 600 || window_width < 800)){
        log("responsive by window height",true);        
    }else{
        log("no responsive");
    }
    if(window_width < sidebar_breakpoint){
        log("sidebar_responsive");
    }
}

function log(msg, cls){
    if(cls){
        $(".debug-window").empty();
    }
    $(".debug-window").append( "<div>"+msg+"</div>" );
}

function check_if_puzzle_completed(){
    if(solved_pieces.indexOf(0) == -1){
        // alert("win");
        $(".game-end-wrapper").show();
        log("puzzle_completed");
    }else{
        // console.log("puzzle not completed")
    }
}




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