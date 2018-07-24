
    <link rel="stylesheet" type="text/css" href="laugh-factory-style.css">
    <!-- <meta name="viewport" content="width=device-width, initial-scale=0.6"> -->

    <script type="text/javascript" src="https://code.jquery.com/jquery-3.2.1.min.js"></script>
<body>
    <!-- Slide show container -->
<div class="slideshow-container">

  <!-- Full-width images with number and caption text -->
  <div class="mySlides slidefade slide1">
    <div class="slide1TextContainer">
	<h1 id="introParagraph">Experience lots of laughs as you click through<br>this fruity fun.</h1>
    	<button id="startJokesBtn" onclick="plusSlides(1)">GET STARTED</button>
    </div>
  </div>

  <div class="mySlides slidefade">
    <div class="slide2TextContainer">
	    <h1 class="joke"></h1>
	    <h2 class="answerBtn">SEE ANSWER <img id="answerBtnArrow" src="img/seeAnswerBtn.png"/></h2>
    </div>
    <a class="prev"><img src="img/left-arrow.png"></a>
    <a class="next"><img src="img/right-arrow.png"></a>
  </div>

  <div class="mySlides slidefade slide3">
    <div class="slide3TextContainer">
<h1 id="lastSlideText">Share these jokes with your friends and family</h1>
    <h2 id="fruitFactTitle">Fun Fruity Fact</h2>
    <p id="fruityFact"></p>
</div>
    <div id="slide3-BtnGroup">
      <button id="jokesAgainBtn" onclick="plusSlides(-1)">PLAY AGAIN</button>
      <button id="spinBtn" onclick="location.href='?page=spin'; ">SPIN</button>
      <button id="getCoupBtn" onclick=" window.open('?page=coupon', '_blank')">GET COUPON</button>
    </div>  
  </div>
  

  <!-- Next and previous buttons -->
</div>
<br>

<!-- The dots/circles -->
<div style="text-align: center;">
  <span style="display: none;" class="dot" onclick="currentSlide(1)"></span> 
  <span style="display: none;" class="dot" onclick="currentSlide(2)"></span> 
  <span style="display: none;" class="dot" onclick="currentSlide(3)"></span> 
</div>

  <script type="text/javascript" src="laugh-factory-script.js"></script>
</body>
