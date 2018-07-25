  <link rel="stylesheet" href="lunchtime-flavorites-style.css?v=1.1">
  <!-- <script
  src="https://code.jquery.com/jquery-3.2.1.min.js"
  integrity="sha256-hwg4gsxgFZhOsEEamdOYGBf13FyQuiTwlAQgxVSNgt4="
  crossorigin="anonymous"></script> -->
  <script
  src="https://code.jquery.com/ui/1.12.1/jquery-ui.min.js"
  integrity="sha256-VazP97ZCwtekAsvgPBSUwPFKdrwD3unUfSGVYrahUqU="
  crossorigin="anonymous"></script> 
  <script src="js/lunchtime-flavorites-main.js?v=4.1"></script>
  <script src="js/jquery.ui.touch-punch.min.js"></script>
  <link rel="stylesheet" type="text/css" href="//cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.css"/>
  <script type="text/javascript" src="//cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.min.js"></script>
				
    <?php 
    if(isset($_GET['play'])){
        if($_GET['play'] == 'apple'){
            $class = "apple";
            $fruit_type = "apple";
            $game_title = "<img class='you-did-it-title' src='assets/lunchtime_flavorites/game_end/apple_title.png'>";
            $game_subtitle = "You did a great job packing your lunch for school.";
            $message_box_image = " <img class='game-end-image' src='assets/lunchtime_flavorites/game_end/apple_bg.png'>";
            $message_box_message = "An apple tree can produce up to 400 apples a year.";
        }
        else if($_GET['play'] == 'orange'){
            $class = "orange";
            $fruit_type = "orange";
            $game_title ="<img class='you-did-it-title' src='assets/lunchtime_flavorites/game_end/orange_title.png'>";
            $game_subtitle = "Enjoy a fun and flavorful lunch.";
            $message_box_image = " <img class='game-end-image' src='assets/lunchtime_flavorites/game_end/orange_bg.png'>";
            $message_box_message = "An orange is a type of berry. Hesperidia to be exact!";
        }else{
            $class = "kiwi-strawberry";
            $fruit_type = "kiwi-strawberry";
            $game_title ="<img class='you-did-it-title' src='assets/lunchtime_flavorites/game_end/kiwi_strawberry_title.png'>";
            $game_subtitle = "Have fun when you open<br/>your lunch box!";
            $message_box_image = " <img class='game-end-image' src='assets/lunchtime_flavorites/game_end/kiwi_strawberry_bg.png'>";
            $message_box_message = "Kiwifruit was first discovered in China and was originally called “Chinese gooseberry.”.";               
        }
    }else{
        $class = "kiwi-strawberry";
        $fruit_type = "kiwi-strawberry";
        $game_title ="<img class='you-did-it-title' src='assets/lunchtime_flavorites/game_end/kiwi_strawberry_title.png'>";
        $game_subtitle = "Have fun when you open<br/>your lunch box!";
        $message_box_image = " <img class='game-end-image' src='assets/lunchtime_flavorites/game_end/kiwi_strawberry_bg.png'>";
        $message_box_message = "Kiwifruit was first discovered in China and was originally called “Chinese gooseberry.”.";
    }
    ?>

    <div class="main-wrapper clearfix <?=$class?>">
        <div class="game-container">
            <!-- game start -->
            <div class="how-to-play-wrapper">
                <div class="how-to-play-container">
                    <img  src="assets/lunchtime_flavorites/game_start/game_title.png">
                    <h2 class="how-to-play-title">HOW TO PLAY</h2>
                    <p>Drag your favorite scrumptious ingredients to fill your lunch box before decorating the outside!</p>
                    <button class="start-game-button">PLAY</button>
                </div>
            </div>

            <!-- game main -->
            <div class="puzzle-background clearfix <?=$class?>">
                <div class="step-1 step-title" >Stack Your Sandwich</div>
                <div class="step-2 step-title" style="display:none">Pick 2 Snacks</div>
                <div class="step-3 step-title" style="display:none">Choose Your Juicy Juice® Flavor</div>
                <div class="step-5 step-title" style="display:none">Decorate Your Lunch Box</div>
                <div class="stack-area" id="stack-area-1">
                    <div class="stacked bread"><img src="assets\lunchtime_flavorites\bread.png"></div>
                </div>
                <div class="stack-area" id="stack-area-2"></div>
                <div class="stack-area" id="stack-area-3"></div>
                <img src="assets/lunchtime_flavorites/case-cover.png" class="case-cover-img step-4" style="display:none">
                <div class="step-5 case-cover" style="display:none">
                 <input type="text" class="step-5 type-your-name" placeholder="TYPE YOUR NAME" style="display:none">

                </div>
                <div class="ingredients-slider-container">
                    <div class="step-1 ingredients-slider">
                        <?php foreach(array_diff(scandir (getcwd().'/assets/lunchtime_flavorites/ingredients'), array('..', '.')) as $value): ?>
                            <div class="draggable stack-area-1-ingredient <?=$value?>">
                                <img src="assets/lunchtime_flavorites/ingredients/<?=$value?>">
                                <div class="ingredient-title"><?=str_replace("-", " ", str_replace(".png", "", $value));?></div>                       
                            </div>
                        <?php endforeach; ?>
                    </div>
                    <div class="step-2 ingredients-slider" style="display:none">
                        <?php foreach(array_diff(scandir (getcwd().'/assets/lunchtime_flavorites/snacks'), array('..', '.')) as $value): ?>
                            <div class="draggable stack-area-2-ingredient <?=$value?>">
                                <img src="assets/lunchtime_flavorites/snacks/<?=$value?>">
                                <div class="ingredient-title"><?=str_replace("-", " ", str_replace(".png", "", $value));?></div>                       
                            </div>
                        <?php endforeach; ?>
                    </div>
                    <div class="step-3 ingredients-slider" style="display:none">
                        <?php foreach(array_diff(scandir (getcwd().'/assets/lunchtime_flavorites/juices'), array('..', '.','stacked')) as $value): ?>
                            <div class="draggable stack-area-3-ingredient <?=$value?>">
                                <img fruit-filename="<?=$value?>" src="assets/lunchtime_flavorites/juices/<?=$value?>">
                                <div class="ingredient-title"><?=str_replace("-", " ", str_replace(".png", "", $value));?></div>                       
                            </div>
                        <?php endforeach; ?>
                    </div>
                    <div class="step-5 ingredients-slider" style="display:none">
                        <?php foreach(array_diff(scandir (getcwd().'/assets/lunchtime_flavorites/stickers'), array('..', '.','stacked')) as $value): ?>
                            <div class="draggable stack-area-5-ingredient <?=$value?>"><img src="assets/lunchtime_flavorites/stickers/<?=$value?>"></div>
                        <?php endforeach; ?>
                    </div>
                    <div class="case-cover-container">
                        <div id="case-cover"> 
                            <div class="front-lf"></div> 
                            <div class="back-lf"></div> 
                        </div>
                    </div>
                </div>
                <div class="next-button" style="display: none">NEXT</div>
                <div class="done-button" style="display: none">DONE</div>
            </div>

            <!-- game end -->
            <!-- <div class="game-end-wrapper">
                <img class="you-did-it-title" src="assets/lunchtime_flavorites/game_end/you_are_a_super_finder.png">
                <h2 class="you-did-it-subtitle">You’ve discovered all of the hidden fruits.</h2>
                <div class="game-end-message-container">
                    <div class="fun-fruity-fact-title">Fun fruity fact</div>
                    <p><?=$message_box_message?></p>
                </div>
                <?=$message_box_image?>
                <div class="bottom-cta-container">
                        <a href="index.php" class="play-again cta">PLAY AGAIN <img src="assets/lunchtime_flavorites/game_end/arrow.png"></a>
                        <a class="spin cta" href="">SPIN <img src="assets/lunchtime_flavorites/game_end/arrow.png"></a>
                        <a href="" class="get-coupon-button">GET COUPON</a>
                </div>
            </div> -->
        <div class="game-end-wrapper">
            <!-- <img class="you-did-it-title" src="assets/lunchtime_flavorites/game_end/you_are_a_super_finder.png"> -->
            <?=$game_title?>
            <h2 class="you-did-it-subtitle"><?=$game_subtitle?></h2>
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
            <div class="end_ctas"><a class="play_again" href="javascript:void(0);" onclick="window.location.reload()">PLAY AGAIN <span class="glyphicon glyphicon-play" aria-hidden="true"></span></a><a class="spin_again" href="?page=spin">SPIN <span class="glyphicon glyphicon-play" aria-hidden="true"></span></a><br><a class="get_coupon_btn" target="_blank" href="?page=coupon">GET COUPON</a></div>
        </div>
        
            

        </div>   
    </div>