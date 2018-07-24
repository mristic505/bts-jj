  <link rel="stylesheet" href="pop-a-fruit-style.css?v=4.0">
  <script
  src="https://code.jquery.com/ui/1.12.1/jquery-ui.min.js"
  integrity="sha256-VazP97ZCwtekAsvgPBSUwPFKdrwD3unUfSGVYrahUqU="
  crossorigin="anonymous"></script> 
  <script src="js/pop-a-fruit-main.js?v=4.0"></script>
  <script src="js/jquery.ui.touch-punch.min.js"></script>

    <?php 
    if(isset($_GET['play'])){
        if($_GET['play']=='apple_raspberry') {
            $class = "apple-raspberry";
            $fruit_type = "apple";
        }elseif($_GET['play'] == 'straw_watermelon'){
            $class = "watermelon";
            $fruit_type = "watermelon";
        }else{
            $class = "grape";
            $fruit_type = "grape";
        }
    }else{
        $class = "grape";
        $fruit_type = "grape";
    }
    ?>

    <div class="main-wrapper pop-a-fruit clearfix <?=$class?>">
        <div class="game-container">
            <div class="puzzle-background clearfix">
                <div id="game-counter">30</div>    
                <div class="section-1 sections">
                    <div class="hole-container two-holes-first <?=$fruit_type?>">
                        <div class="fruit-container fruit-0 <?=$fruit_type?>" fruit-id="0" draggable="false"></div>
                    </div>
                    <div class="hole-container two-holes-second <?=$fruit_type?>">
                        <div class="fruit-container fruit-1 <?=$fruit_type?>" fruit-id="1" draggable="false"></div>
                    </div>
                </div>
                <div class="section-2 sections">
                    <div class="hole-container three-holes-first <?=$fruit_type?>">
                        <div class="fruit-container fruit-2 <?=$fruit_type?>" fruit-id="2" ></div>
                    </div>
                    <div class="hole-container three-holes-second <?=$fruit_type?>">
                        <div class="fruit-container fruit-3 <?=$fruit_type?>" fruit-id="3" ></div>
                    </div>
                    <div class="hole-container three-holes-third <?=$fruit_type?>">
                        <div class="fruit-container fruit-4 <?=$fruit_type?>" fruit-id="4" ></div>
                    </div>
                </div>
                <div class="section-3 sections">
                    <div class="hole-container two-holes-first <?=$fruit_type?>">
                        <div class="fruit-container fruit-5 <?=$fruit_type?>" fruit-id="5" draggable="false"></div>
                    </div>
                    <div class="hole-container two-holes-second <?=$fruit_type?>">
                        <div class="fruit-container fruit-6  <?=$fruit_type?>" fruit-id="6" draggable="false"></div>
                    </div>
                </div>
                <div class="section-4 sections"></div>
            </div>
            
            <div class="how-to-play-wrapper">
                <div class="how-to-play-container">
                    <img class="how-to-play-title" src="assets/pop-a-fruit/game_start/game_title.png">
                    <h2 class="how-to-play-subtitle">HOW TO PLAY</h2>
                    <p>Click on the fruit before<br/> it disappears. How many can<br/>you pop in 30 seconds?</p>
                    <button class="start-game-button">PLAY</button>
                </div>
            </div>
            
            <?php
            if(isset($_GET['play'])){
                if($_GET['play'] == 'apple_raspberry'){
                    $game_title = "<img src='assets/pop-a-fruit/game_end/apple_raspberry_title.png'>";
                    $message_box_image = " <img class='game-end-image' src='assets/pop-a-fruit/game_end/apple_raspberry_bg.png'>";
                    $message_box_message = "There are more than 7,000 different kinds of apples grown all over the world.";
                }elseif($_GET['play'] == 'straw_watermelon'){
                    $game_title ="<img src='assets/pop-a-fruit/game_end/straw_watermelon_title.png'>";
                    $message_box_image = " <img class='game-end-image' src='assets/pop-a-fruit/game_end/straw_watermelon_bg.png'>";
                    $message_box_message = "The watermelon is the<br/> official state vegetable of Oklahoma.";
                }else{
                    $game_title ="<img src='assets/pop-a-fruit/game_end/grape_title.png'>";
                    $message_box_image = " <img class='game-end-image' src='assets/pop-a-fruit/game_end/grape_bg.png'>";
                    $message_box_message = "Grapes come in many colors, including green, red, black, yellow, pink and purple.";
                }
            }else{
                $game_title ="<img src='assets/pop-a-fruit/game_end/grape_title.png'>";
                $message_box_image = " <img class='game-end-image' src='assets/pop-a-fruit/game_end/grape_bg.png'>";
                $message_box_message = "Grapes come in many <br/>colors, including green, red, black, yellow, pink and purple.";
            }

            ?>      

            <div class="game-end-wrapper">
                <img class="you-did-it-title" src="assets/pop-a-fruit/game_end/great_job.png">
                <img class="failed-to-pop-fruits-title" src="assets/pop-a-fruit/game_end/oops.png">
                <h2 class="popped-fruits">You popped <span id="popped-fruits"></span> fruits. That’s super juicy!</h2>
                <h2 class="failed-to-pop-fruits">You popped <span>0</span> fruits.</h2>
                <div class="game-end-message-container">
                    <?=$game_title?>
                    <p class="fruit-fact-info"><?=$message_box_message?></p>
                </div>
                <?=$message_box_image?>
                <!-- <div class="bottom-cta-container">
                        <a href="" class="play-again cta">PLAY AGAIN <img src="assets/pop-a-fruit/arrow.png"></a>
                        <a class="cta" href="?page=spin">SPIN <img src="assets/pop-a-fruit/arrow.png"></a>
                        <a href="?page=coupon" class="get_coupon_btn">GET COUPON</a>
                </div> -->
                <div class="end_ctas">
                    <a class="play_again" href="">PLAY AGAIN <span class="glyphicon glyphicon-play" aria-hidden="true"></span></a>
                    <a class="spin_again" href="?page=spin">SPIN <span class="glyphicon glyphicon-play" aria-hidden="true"></span></a><br>
                    <a class="get_coupon_btn" target="_blank" href="?page=coupon">GET COUPON</a></div>
            </div>
                

        </div>   
    </div>