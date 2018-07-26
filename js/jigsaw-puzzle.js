// On game start, move_pieces_at_game_start is called,
// after that, it calls absolutely_position_piece, and after that is done, draggables are assigned

var solved_pieces = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
var shuffled_pieces = shuffleArray([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]);
var animation_timeout = 1000;

var window_width  = $(window).width();
var window_height = $(window).height();
var sidebar_breakpoint = 600;//resolutio at which sidebars are hidden and bottom bar is shown

var initial_positioning_done = false;
var sidebar_pieces_positioned_absolutely = false;
var bottom_bar_pieces_positioned_absolutely = false;

$( document ).ready(function() {
    window_width  = $(window).width();
    window_height = $(window).height();
    $('.start-game-button').click(function(){
        $('.how-to-play-wrapper').fadeOut(600, function() {
            move_pieces_at_game_start();
        })
    })
    
    $( ".puzzle-background" ).droppable({revert: "valid"});
});
$( window ).resize(function() {
    window_height = $(window).height();
    window_width  = $(window).width();
    if(initial_positioning_done){
        
        if(window_width > sidebar_breakpoint && !sidebar_pieces_positioned_absolutely){
            absolutely_position_piece();
        }
        else if(window_width <= sidebar_breakpoint && !bottom_bar_pieces_positioned_absolutely){
            absolutely_position_piece();
        }
    }
})

function move_pieces_at_game_start(){
    var counter = 0;//keep track on how much pieces is moved to sidebar
    $.each( shuffled_pieces, function(orig_key, orig_value ) {
        setTimeout( function(){
            key = orig_value;
            value = solved_pieces[orig_value];
            current_piece = ".piece-"+key;
            if(window_width > sidebar_breakpoint){
                $( current_piece ).clone().addClass('piece-bottom-bar').css('left', 0).css('top', 0).appendTo('.puzzle-bottom-bar');
            }
            if(counter < 8){
                counter++;                    
                if(window_width > sidebar_breakpoint){
                    animate_piece_movement_to_sidebar(current_piece, "left", counter);
                }else{
                    $( current_piece ).clone().css('left', 0).css('top', 0).appendTo('#puzzle-left-sidebar');
                }
            }else{
                counter++;                    
                if(window_width > sidebar_breakpoint){
                    animate_piece_movement_to_sidebar(current_piece, "right", counter);
                }else{
                    $( current_piece ).clone().css('left', 0).css('top', 0).appendTo('#puzzle-right-sidebar');
                }
            }
            if(window_width < sidebar_breakpoint){//animate movement to bottombar
                    animate_piece_movement_to_sidebar(current_piece, "bottom-bar", counter);
            }else{
                $( current_piece ).clone().css('left', 0).css('top', 0).appendTo('#puzzle-bottom-bar');
            }
        },200*orig_key);
    })
}
//move pieces to appropriate sidebars
function animate_piece_movement_to_sidebar(current_piece, sidebar, loop_num){
    $('.puzzle-bottom-bar').addClass('game-started');    
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
            if(loop_num == "16"){
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
            $(current_piece).css({"position" : "relative"}).detach().css('left', 0).css('top', 0).appendTo('.puzzle-bottom-bar');   
            if(loop_num == "16"){
                absolutely_position_piece();
            }
        });
    }
    return true;
}


function absolutely_position_piece(sidebar){
    console.log("positioning_pieces");
    initial_positioning_done = true;
        if(window_width > sidebar_breakpoint){
            console.log("positioning in sidebar");
            var pieces_top_sidebar = [];
            var positions_top_sidebar = [];
            $.each( solved_pieces, function( key, value ) {
                current_piece_top_sidebar = ".puzzle-sidebar .piece-"+key;
                current_piece_bottom_sidebar = ".puzzle-bottom-bar .piece-"+key;
                if(value == 0){
                    pieces_top_sidebar.push(current_piece_top_sidebar);
                    positions_top_sidebar.push($(current_piece_top_sidebar).position());
                }
            })   
            $.each( pieces_top_sidebar, function(key, value) {
                $(value).css({"position" : "absolute", "top" : positions_top_sidebar[key].top, "left" : positions_top_sidebar[key].left});
            });
            sidebar_pieces_positioned_absolutely = true;
        }else{
            console.log("positioning in bottom bar");
            var pieces_bottom_sidebar = [];
            var positions_bottom_sidebar = [];
            $.each( solved_pieces, function( key, value ) {
                current_piece_bottom_sidebar = ".puzzle-bottom-bar .piece-"+key;
                if(value == 0){
                    pieces_bottom_sidebar.push(current_piece_bottom_sidebar);
                    positions_bottom_sidebar.push($(current_piece_bottom_sidebar).position());
                }
            })    
            $.each( pieces_bottom_sidebar, function(key, value) {
                $(value).css({"position" : "absolute", "top" : positions_bottom_sidebar[key].top, "left" : positions_bottom_sidebar[key].left});
            });
            bottom_bar_pieces_positioned_absolutely = true;
        }
    assign_draggables();
}

function assign_draggables(){
    $.each( solved_pieces, function( key, value ) {
        if(value == 0){
            $( ".piece-"+key ).draggable({
                revert: "valid",
                containment: "html",
                scroll: true,
                // 'cursorAt': {
                //     left : Math.floor( $( ".puzzle-piece.piece-"+key ).width()/ 2 ),
                //     top  : Math.floor( $( ".puzzle-piece.piece-"+key ).width()/ 2 )
                // }
                });    
            //assign droppables
            $( ".piece-"+key+"-drop" ).droppable({
                greedy: true,
                accept: ".piece-"+key,
                drop: function( event, ui ) {
                    solved_pieces[$(this).attr( "piece-number" )] = 1;//update solved pieces (make function for this)
                    check_if_puzzle_completed();
                    var droppedOn = $(this);
                    var dropped = ui.draggable;
                    ui.draggable.draggable({revert: "invalid", disabled: true});
                    $(dropped).detach().css({"top":"50%","left":"50%","transform":"translate(-50%, -50%)"}).appendTo(droppedOn);
                    hide_solved_pieces($(this).attr("piece-number"));//hide solved piece in sidebar or bottom bar
                }
            });
        }
    });
}
//update cursor position for draggable
// function update_draggable_cursor_position(){
//     $.each( pieces, function( key, value ) {
//         $( "."+value ).draggable( "option", 'cursorAt',{
//             left : Math.floor( $( ".puzzle-piece."+value ).width()/ 2 ),
//             top : Math.floor( $( ".puzzle-piece."+value ).height()/ 2 )
//         });
//     })
// }
function hide_solved_pieces(piece_number){
    $(".puzzle-sidebar .piece-"+piece_number).hide();
    $(".puzzle-bottom-bar .piece-"+piece_number).hide();
}
function check_if_puzzle_completed(){
    if(solved_pieces.indexOf(0) == -1){
        
        setTimeout(function(){
            $('.puzzle-bottom-bar').removeClass('game-started');        
            $(".puzzle-bottom-bar").fadeOut();
            $(".game-end-wrapper").fadeIn();
        }, 2000);
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
// removed at clients request
// function generate_random_pieces_that_stay(generate_x_keys){
//     var random_keys_generated = 0;  
//     //generate currently solved puzzle pieces
//     while(random_keys_generated < generate_x_keys){
//         current_random_key = Math.floor((Math.random() * 14) + 1);
//         if(solved_pieces[current_random_key] != 1){
//             solved_pieces[current_random_key] = 1;
//             random_keys_generated++;
//         }
//     }
// }
