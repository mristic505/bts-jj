<link rel="stylesheet" href="hidden_pictures_style.css?v=1.0">
<script
src="https://code.jquery.com/ui/1.12.1/jquery-ui.min.js"
integrity="sha256-VazP97ZCwtekAsvgPBSUwPFKdrwD3unUfSGVYrahUqU="
crossorigin="anonymous"></script> 
<link rel="stylesheet" href="hidden_pictures_style.css?v=1.0">
<script src="js/hidden-pictures-main.js"></script>
<script src="js/jquery.ui.touch-punch.min.js"></script>


<?php 
if(isset($_GET['play'])){
    if($_GET['play']=='mango'){
        $class = "mango";
        $fruit_type = "mango";
        $game_title = "<img class='you-did-it-title' src='assets/hidden_pictures/game_end/mango_title.png'>";
        $message_box_image = " <img class='game-end-image' src='assets/hidden_pictures/game_end/mango_bg.png'>";
        $message_box_message = "Orangutans love mangoes.";
    }else{
        $class = "berry";
        $fruit_type = "berry";
        $game_title ="<img class='you-did-it-title' src='assets/hidden_pictures/game_end/berry_title.png'>";
        $message_box_image = " <img class='game-end-image' src='assets/hidden_pictures/game_end/berry_bg.png'>";
        $message_box_message = "People have eaten raspberries since prehistoric times.";
    }
}else{
    $class = "berry";
    $fruit_type = "berry";
    $game_title ="<img class='you-did-it-title' src='assets/hidden_pictures/game_end/berry_title.png'>";
    $message_box_image = " <img class='game-end-image' src='assets/hidden_pictures/game_end/berry_bg.png'>";
    $message_box_message = "Raspberries are super seedy—an average raspberry has 100 to 120 seeds.";
}
?>

<div class="main-wrapper hidden-pictures clearfix <?=$class?>">
    <div class="game-container">
        <!-- game start -->
        <div class="how-to-play-wrapper">
            <div class="how-to-play-container">
                <img class="how-to-play-title" src="assets/hidden_pictures/game_start/game_title.png">
                <h2 class="how-to-play-subtitle">HOW TO PLAY</h2>
                <p>Can you find the 6 fruits hiding in the picture? When you spot one, click it.</p>
                <button class="start-game-button">PLAY</button>
            </div>
        </div>

        <!-- game main -->
        <div class="puzzle-background clearfix <?=$class?>">
            <div class="fruit-container fruit-hidden <?=$class?> <?=$class?>-1-position" fruit-id="1"><div class="<?=$class?>-1"></div></div>
            <div class="fruit-container fruit-hidden <?=$class?> <?=$class?>-2-position" fruit-id="2"><div class="<?=$class?>-2"></div></div>
            <div class="fruit-container fruit-hidden <?=$class?> <?=$class?>-3-position" fruit-id="3"><div class="<?=$class?>-3"></div></div>
            <div class="fruit-container fruit-hidden <?=$class?> <?=$class?>-4-position" fruit-id="4"><div class="<?=$class?>-4"></div></div>
            <div class="fruit-container fruit-hidden <?=$class?> <?=$class?>-5-position" fruit-id="5"><div class="<?=$class?>-5"></div></div>
            <div class="fruit-container fruit-hidden <?=$class?> <?=$class?>-6-position" fruit-id="6"><div class="<?=$class?>-6"></div></div>
        </div>

        <!-- game end -->
        <div class="game-end-wrapper">
            <img class="you-did-it-title" src="assets/hidden_pictures/game_end/you_are_a_super_finder.png">
            <h2 class="you-did-it-subtitle">You’ve discovered all of the hidden fruits.</h2>
            <div class="game-end-message-container">
                <div class="fun-fruity-fact-title">Fun Fruity Fact</div>
                <p><?=$message_box_message?></p>
            </div>
            <?=$message_box_image?>
            <!-- <div class="bottom-cta-container">
                    <a href="" class="play-again cta">PLAY AGAIN <img src="assets/hidden_pictures/game_end/arrow.png"></a>
                    <a class="cta" href="?page=spin">SPIN <img src="assets/hidden_pictures/game_end/arrow.png"></a>
                    <a href="?page=coupon" class="get-coupon-button">GET COUPON</a>
            </div> -->
            <!-- <div class="end_ctas">
                <a class="play_again" href="">PLAY AGAIN <span class="glyphicon glyphicon-play" aria-hidden="true"></span></a>
                <a class="spin_again" href="?page=spin">SPIN <span class="glyphicon glyphicon-play" aria-hidden="true"></span></a><br>
                <a class="get_coupon_btn" target="_blank" href="?page=coupon">GET COUPON</a>
            </div> -->
            <div class="end_ctas"><a class="play_again" href="javascript:void(0);" onclick="window.location.reload()">PLAY AGAIN <span class="glyphicon glyphicon-play" aria-hidden="true"></span></a><a class="spin_again" href="?page=spin">SPIN <span class="glyphicon glyphicon-play" aria-hidden="true"></span></a><br><a class="get_coupon_btn" target="_blank" href="?page=coupon">GET COUPON</a></div>            
        </div>
        

    </div>   
</div>