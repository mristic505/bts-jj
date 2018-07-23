// FUNCTIONS

//Query String CODE
function getParameterByName(name, url) {
        if (!url) url = window.location.href;
        name = name.replace(/[\[\]]/g, "\\$&");
        var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
            results = regex.exec(url);
        if (!results) return null;
        if (!results[2]) return '';
        return decodeURIComponent(results[2].replace(/\+/g, " "));
}


function startJokes(bgImage, jokesList) {

    $("#startJokesBtn").click(function(){
        $(".mySlides").addClass(bgImage);
        $(".joke").html(jokesList[0]);
    });   
}

function nextJoke(color, fruitFact, bgImage, jokesList) {
    $(".next").click(function(){
        
        if (count < (jokesList.length - 2) ) {

            count += 2;
            $(".joke").html(jokesList[count]);

        }else {

            currentSlide(3);
            $("#fruitFactTitle").addClass(color);
            $("#fruityFact").html(fruitFact);
            $(".mySlides").addClass(bgImage);
        }
    });
}

function prevJoke(jokesList) {
    $(".prev").click(function(){
        if (count > 1) {
            
            count -= 2;
            $(".joke").html(jokesList[count]);
        }
    });
}

function resetJokes(removeClass, jokesList) {
    $("#jokesAgainBtn").click(function(){
    
        count = 0;
        
        $("#fruitFactTitle").removeClass();
        $("#fruityFact").html();
        $(".mySlides").removeClass(removeClass);
        $(".joke").html(jokesList[count]);

    });
}

// Jokes are on the even indexes starting at zero
// Punchlines fall on the odd indexes


var orangeJokes = [

                    "Why did the orange stop in the middle of the road?", "Because it ran out of juice!",
                    "What school subject is the fruitiest?", "History because it's full of dates!",
                    "What is a vampire\'s favorite fruit?", "A neck-tarine!",
                    "When do you go on red and stop at green?", "When you\'re eating a watermelon",
                    "What do you call an orange that plays the trumpet?","A tooty fruity",
                    "What are twins\' favorite fruit?", "Pears.",
                    "Why do oranges wear suntan lotion?", "Because they peel.",
                    "What kind of fruit can fix your sink?", "A PLUM-ber"
]

var orangeFruitFact = "Not all oranges are orange";

var appleJokes = [

                    "What did the apple tree say to the hungry caterpillar?", "Leaf me alone.",
                    "What kind of apple isn\'t an apple?", "A pineapple!",
                    "What did the apple tree say to the farmer?", "Stop picking on me.",
                    "What can a whole apple do that half an apple can\'t do?", "It can look round!",
                    "What did the apple skin say to the apple?", "I\'ve got you covered!",
                    "What\'s red and goes up and down?", "An apple in an elevator!",
                    "Why did the apple go to the doctor?", "It felt rotten to the core.",
                    "Why was the apple alone with the orange?", "Because the banana split."
]

var appleFruitFact = "Apples float in water because they are 25% air.";

var strawberryBananaJokes = [

                    "Why did the banana go to the doctor?", "Because it wasn\'t peeling well.",
                    "What kind of shoes are made from banana peels?", "Slippers.",
                    "Why was the baby strawberry sad?", "Because its mom was in a jam.",
                    "What key opens a banana?", "A mon-key.",
                    "Why aren\'t bananas ever lonely?", "Because they come in bunches!",
                    "What do you call a sad strawberry?", "A blueberry.",
                    "What do you call a banana that likes to dance?", "A banana shake!",
                    "What is a ghost\'s favorite fruit?", "A Boo-nana."

]

var strawBanFruitFact = "A strawberry is not an actual berry, but a banana is.";

// SLIDE SHOW CODE
var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1} 
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none"; 
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block"; 
  dots[slideIndex-1].className += " active";
}

// END OF SLIDE SHOW CODE



var count = 0;
var play = getParameterByName('play');

$(".prev, .next").click(function(){
    $(".answerBtn").html("SEE ANSWER <img id='answerBtnArrow' src='img/seeAnswerBtn.png'/>");
});


// ORANGE SECTION
if (play == 'orange') {

    startJokes("orangeBg", orangeJokes);

    nextJoke("orange", orangeFruitFact, "orangeImg", orangeJokes);

    prevJoke(orangeJokes);

    resetJokes("orangeImg", orangeJokes);

    $(".answerBtn").click(function() {
        
        $(".answerBtn").html(orangeJokes[count + 1]);
    });
}

// APPLE SECTION
if (play == 'apple') {

    startJokes("appleBg", appleJokes);

    nextJoke("green", appleFruitFact, "appleImg", appleJokes);

    prevJoke(appleJokes);

    resetJokes("appleImg", appleJokes);

    $(".answerBtn").click(function() {
        
        $(".answerBtn").html(appleJokes[count + 1]);
    });
}

// STRAWBERRY BANANA
if (play == 'strawberryBanana') {

    startJokes("strawBanBg", strawberryBananaJokes);

    nextJoke("yellow", strawBanFruitFact, "strawBanImg", strawberryBananaJokes);

    resetJokes("strawBanImg", strawberryBananaJokes);

    $(".answerBtn").click(function() {
        
        $(".answerBtn").html(strawberryBananaJokes[count + 1]);
    });


}


