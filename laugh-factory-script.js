// FUNCTIONS

var allJokes = [
                    "Why did the teacher wear sunglasses?", "Because his class was so bright!",
                    "What is a snake\’s favorite subject?", "Hiss-tory!",
                    "What is the world\’s tallest building?", "The library. Because it has the most stories.",
                    "What school supply is always tired?", "A knapsack.",
                    "How do bees get to school?", "On the school buzz.",
                    "Why did the music teacher need a ladder?", "To reach the high notes.",
                    "What school do you go to if you\’re a giant?", "High school.",
                    "What did one calculator say to the other?", "You can always count on me.",
                    "Who is the king of all school supplies?", "The ruler.",
                    "When is a blue school book not blue?", "When it is read.",
                    "What did one pencil say to the other?", "You look sharp!",
                    "What\’s the smartest insect around?", "The spelling bee.",
                    "What do you get when you cross a pair of pants with a dictionary?", "Smarty pants.",
                    "What\’s a pirate\’s favorite subject?", "Arrrrrrrrrrrrrrt.",
                    "Why did the girl wear glasses during math class?", "Because they<br>improve di-vision!",
                    "Where did the pencil go on vacation?", "To Pennsylvania.",
                    "Why is 1+1=3 like your left foot?", "It's not right.",
                    "Why are fish so smart?", "Because they are always in a school.",
                    "What\’s a spider\’s favorite thing to do on a computer?", "Make websites.",
                    "What did the students do when their shoelaces got tangled together?", "They went on a class trip.",
                    "Why was the math book unhappy?", "Because it had lots of problems.",
                    "What\’s the longest word in the dictionary?", "Smiles. Because there\’s a mile between the first and last letters.",
                    "Why was the broom late for school?", "Because he overswept.",
                    "Why did the chicken cross the playground at recess?", "To get to the other slide.",
                    "What flies around the school at night?", "The alpha-bat.",
                    "Why did the teacher write the math problem on the window?", "She wanted it to be very clear.",
                    "Why is glue bad at math?", "It always gets stuck on the problems.",
                    "What did the paper say to the pencil?", "Write on!"
]

var orangeFruitFact = "Not all oranges are orange";

var appleFruitFact = "Apples float in water because they are 25% air.";

var strawBanFruitFact = "A bunch of bananas is called a \"hand,\" and one banana is called a \"finger\".";

var dragonFruitFact = "Dragonfruit blooms overnight—it starts at dusk and is in full bloom around midnight.";

var sampleArray = ['b', 'b', 'c'];

function checkIfDuplicates(a) {
    for(var i = 0; i <= a.length; i++) {
        for(var j = i; j <= a.length; j++) {
            if(i != j && a[i] == a[j]) {
                return true;
            }
        }
    }
    return false;
}


function randomJokes(amount) {

    var fiveJokesContainer = [];

    for (var i = 0; i < amount; i++) {

        do {
            var generateRandomNumber = Math.floor(Math.random() * (allJokes.length - 1));

            fiveJokesContainer[i] = generateRandomNumber;

            var duplicateFound = checkIfDuplicates(fiveJokesContainer);
        }
         while ( ((generateRandomNumber % 2) != 0) || (duplicateFound == true));

            
    }
    return fiveJokesContainer;
}


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
        $(".joke").html(allJokes[jokesList[0]]);
        $('.game-spin-restart-buttons-container').show();
        $('.game-spin-restart-buttons-container').css("margin-top", "-20px");
    });   
    $(".answerBtn").click(function() {
        $(".answerBtn").html(allJokes[jokesList[count] + 1]);
    });  

}



function nextJoke(color, fruitFact, bgImage, jokesList) {
    $(".next").click(function(){

        if (count < (jokesList.length - 2) ) {

            count += 2;
            $(".joke").html(allJokes[jokesList[count]]);

            $(".answerBtn").click(function() {
                $(".answerBtn").html(allJokes[jokesList[count] + 1]);
            });

        }else {

            currentSlide(3);
            $("#fruitFactTitle").addClass(color);
            $("#fruityFact").html(fruitFact);
            $(".mySlides").addClass(bgImage);
            $('.game-spin-restart-buttons-container').hide();

        }
    });

}

function prevJoke(jokesList) {
    $(".prev").click(function(){
        if (count > 1) {
            
            count -= 2;
            $(".joke").html(allJokes[jokesList[count]]);
        }
    });
}

function resetJokes(removeClass, jokesList) {
    $("#jokesAgainBtn").click(function(){
    
        count = 0;
        
        $("#fruitFactTitle").removeClass();
        $("#fruityFact").html();
        $(".mySlides").removeClass(removeClass);
        $(".joke").html(allJokes[jokesList[count]]);
        $('.game-spin-restart-buttons-container').show();

    });
}



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

var randomJokesGenerated = randomJokes(10); 
console.log(randomJokesGenerated);



// Dragonfruit Section
if (play == 'dragonFruit') {

    startJokes("appleBg", randomJokesGenerated);

    nextJoke("purple", dragonFruitFact, "dragonFruitImg", randomJokesGenerated);

    prevJoke(randomJokesGenerated);

    resetJokes("dragonFruitImg", randomJokesGenerated);


}

// STRAWBERRY BANANA
if (play == 'strawberryBanana') {

    startJokes("strawBanBg", randomJokesGenerated);

    nextJoke("yellow", strawBanFruitFact, "strawBanImg", randomJokesGenerated);

    prevJoke(randomJokesGenerated);

    resetJokes("strawBanImg", randomJokesGenerated);

    $("#fruityFact").addClass("strawBan-text-wrap");



}


