<link href="https://code.jquery.com/ui/1.10.4/themes/ui-lightness/jquery-ui.css" rel="stylesheet">
<script src="https://code.jquery.com/ui/1.10.4/jquery-ui.js"></script>
<script src="js/jquery.ui.touch-punch.min.js"></script>
<script>
    jQuery(document).ready(function($){

        // URL QUERY STRING
        function getParameterByName(name, url) {
            if (!url) url = window.location.href;
            name = name.replace(/[\[\]]/g, "\\$&");
            var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
                results = regex.exec(url);
            if (!results) return null;
            if (!results[2]) return '';
            return decodeURIComponent(results[2].replace(/\+/g, " "));
        }
        var play = getParameterByName('play');
        // if (play == 'passion-dragonfruit') {
        //     end_message = 'Dragon fruit grows on a cactus.';
        //     end_fruit = 'passion_fruit';
        // }
        if (play == 'fruit-punch') {
            end_message = 'There is a tree called the Fruit Salad Tree that sprouts 3-7 different fruits in the same tree.';
            end_fruit = 'fruit_punch';
        }

        // SHUFFLE ARRAY FUNCTION
        function shuffle(array) {
            var currentIndex = array.length,
                temporaryValue, randomIndex;
            // While there remain elements to shuffle...
            while (0 !== currentIndex) {
                // Pick a remaining element...
                randomIndex = Math.floor(Math.random() * currentIndex);
                currentIndex -= 1;
                // And swap it with the current element.
                temporaryValue = array[currentIndex];
                array[currentIndex] = array[randomIndex];
                array[randomIndex] = temporaryValue;
            }
            return array;
        }

        function end_action(end_message_holder, end_fruit_holder) {
            $('.memory_game_board').append($('<div class="completed_holder"> <img class="you_did_it" src="img/wow.png"> <div class="ctext">You’ve matched all of the numbers correctly.</div><div class="message_board"> <div class="holder"> <img class="fruit_fact_head" src="img/fruit_fact_head_'+end_fruit_holder+'.png"> <div class="fruit_fact_info">'+end_message_holder+'</div></div><div class="ghost"></div><img class="girl mn_boy" src="img/boy.png"> <img class="fruit_fact fruit_fact-'+end_fruit_holder+'" src="img/fruit_fact_'+end_fruit_holder+'.png"> </div><div class="end_ctas"><a class="play_again" href="">PLAY AGAIN <span class="glyphicon glyphicon-play" aria-hidden="true"></span></a><a class="spin_again" href="?page=spin">SPIN <span class="glyphicon glyphicon-play" aria-hidden="true"></span></a><br><a class="get_coupon_btn" target="blank" href="?page=coupon">GET COUPON</a></div></div>').hide().fadeIn(1000));
        }

        
        var optionsArr = [1, 2, 3, 4, 5, 6, 7, 8];
        optionsArr = shuffle(optionsArr);
        optionsArr = optionsArr.slice(0,4);  

        var solved = 0;          

        for (i = 0; i < optionsArr.length; i++) {

           $('.draggable_numbers').prepend('<div class="draggable_number_holder"><div id="draggable_number_'+optionsArr[i]+'" class="ui-widget-content"><p class="dn">'+optionsArr[i]+'</p></div></div>');                  
           $('.numbers').append('<div class="number_holder"><div class="fruit_number fruit_number_'+optionsArr[i]+'"></div><div id="number_'+optionsArr[i]+'" class="ui-widget-header"><p class="nhi" style="color:transparent;" class="">NUMBER '+optionsArr[i]+'</p></div></div>');

           function fireDroppable(number) {
             $('#number_' + number).droppable({
                 accept: '#draggable_number_' + number,
                 drop: function(event, ui) {                     
                     $(this).html(ui.draggable.remove().html());
                     $(this).droppable('destroy');
                     solved++;
                     if (solved == 4) {
                        setTimeout(function() {
                            $('.game-spin-restart-buttons-container').hide();
                            end_action(end_message, end_fruit);
                        }, 800);  
                     }
                 }
             });
           }
           

           $('#draggable_number_' + optionsArr[i]).draggable({revert: "invalid"});
           fireDroppable(optionsArr[i]);

        }

    });
</script>
<div class="memory_game_board mathching_numbers_board">
<div class="bg_holder"> 
    <div class="completed_holder">
            <div class="how_to_play mathching_numbers_htp">
                <div class="holder">
                    <img src="img/fruity_match_game_title.png">
                    <h3>HOW TO PLAY</h3>
                    <div class="instructions">
                        Drag the numbers to match with the items.
                    </div>
                    <button class="start-game-button">PLAY</button>
                </div>
                <div class="ghost"></div>
            </div>            
    </div>
    <div class="numbers clearfix"></div>
    <div style="position: relative;" class="clearfix lower_holder"><div class="draggable_numbers clearfix"></div><img class="mn_bottles" src="img/mn_bottles.png"></div>
</div>  
</div>