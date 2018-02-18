//variables
window.onload = function() {

var questionBank = [{
    question: "1) Which lobe of the brain is responsible for visual information?",
    option: ["frontal", "temporal", "parietal", "occipital"],
    answer: "occipital"
}, {
    question: "2) This brain region is responisble for internal regulation--temperature change, eating, and sleeping.",
    option: ["hypothalamus", "thalamus", "basolateral amygdala", "septum"],
    answer: "hypothalamus"
}, {
    question: "3) At what age is the brain fully developed?",
    option: [18, 21, 25, "For men, never."],
    answer: 25
}, {
    question: "4) Which brain region is repsonsible for spatial memeory?",
    option: ["amygdala", "pre-frontal cortex", "hippocampus", "locus coeruleus"],
    answer: "hippocampus"
}, {
    question: "5) Loss of cells in this region results in Parkinson's disease.",
    option: ["hippocampus", "amygdala",  "substantia nigra", "pre-fontal cortex"],
    answer: "substantia nigra"
}, {
    question: "6) Lesions of this area result in Urbach-Wiethe (fearless) disease.",
    option: ["amygdala", "pre-frontal cortex",  "hippocampus", "ventral tegmental area"],
    answer: "amygdala"
}, {
    question: "7) Which is the last lobe to develop?",
    option: ["frontal", "temporal", "parietal", "occipital"],
    answer: "frontal"
}, {
    question: "8) This brain region is the major relay station for all sensory except smell.",
    option: ["hypothalamus", "thalamus", "ventral tegmental area", "orbital frontal cortex"],
    answer: "thalamus"
}, {
    question: "9) Which lobe of the brain is repsonsible for making decisions?",
    option: ["frontal", "temporal", "parietal", "occipital"],
    answer: "frontal"
}, {
    question: "10) If you suffered a concussion and experience disorganized thoughts and problems with vision, which two lobes were impacted during the injury?",
    option: ["occipital and temporal lobes", "parietal and frontal lobes", "frontal and temporal lobes", "occipital and frontal lobes"],
    answer: "occipital and frontal lobes"
}];

var correctCounter = 0;
var wrongCounter = 0;
var unansweredCounter = 0;
var intervalId;
var userClick;
var time = 1;
var currentQuestion = 0;
var answerOptions;
var isQuestionDisplaying = true;
var picTimer;

function displayQuestion(currentQuestion){

    intervalId = setInterval(timer, 1000);

    $("#timeRemaining").html(time + " seconds");

    console.log("currentquestion " + currentQuestion);

    //loops through questionBank array, displays quesiton, creates div for and displays answers
    $("#question").text(questionBank[currentQuestion].question);
    
    for (var i = 0; i < questionBank[currentQuestion].option.length; i++){

        var newDiv = $("<div type = button>");
        newDiv.attr("data-value", questionBank[currentQuestion].option[i]);
        newDiv.attr("class", "options");
        newDiv.html(questionBank[currentQuestion].option[i]);
        $("#question").append(newDiv);
    }

    //on click event for answer choices
    $(".options").on("click", function(){
        console.log($(this).data('value') );
        //if answer choice equals correct answer...
        if($(this).data('value')===questionBank[currentQuestion].answer){
            correctCounter++;
            console.log("correctCounter " + correctCounter);
            displayCorrectPic();
        } else{
            wrongCounter++;
            console.log("wrongCounter " + wrongCounter);
            displayWrongPic();
        }
    });
}

function loadQuestion (){
    if (currentQuestion == 9){
        statsDisplay();
    }else{
    time = 1;
    $("#question").empty();
    $(".options").empty();
    $("#timeRemaining").empty();
    $("#timeRemaining").show();
    clearInterval(intervalId);
    currentQuestion++;
    displayQuestion(currentQuestion);
    }
};

function gamePlay(){
    $(".startBtn").on("click", function(){
        $("button").remove(".startBtn");
        displayQuestion(currentQuestion);
         
    });
}

function displayCorrectPic(){
    clearInterval(intervalId);
    $("#timeRemaining").hide();
    $("#question").html("YOU ARE CORRECT!" + "<br>" + '<img src="assets/images/correct.gif">');
    picTimer = setTimeout(loadQuestion, 3000); 
}

function displayWrongPic(){
    clearInterval(intervalId);
    $("#timeRemaining").hide();
    $("#question").html("YOU ARE WRONG!" + "<br>" + "Correct answer is " + questionBank[currentQuestion].answer
    + "<br>" + '<img src="assets/images/wrong.gif">');
    picTimer = setTimeout(loadQuestion, 3000); 
}

function timer(){
    time --;

    if(time === 0){
        clearInterval(intervalId);
        unansweredCounter++;
        loadQuestion();
        console.log("unanswered " + unansweredCounter);
    }

    $("#timeRemaining").html(time + " seconds");
}

function statsDisplay(){    
    $("#question").empty();
    $(".options").empty();
    $("#timeRemaining").remove();
    $("#question").html("Correct Answers: " + correctCounter + "<br>" + "Wrong Answers: " + wrongCounter + "<br>"
    + "Unanswered Questions: " + unansweredCounter);
    $("#question").append("<br>" + restart);
}
    

    var restart = $("<button>");
    restart.text("RESTART");
    restart.addClass("restartBtn");
    restart.attr("data-name", "restart")
   $(document).on("click", ".restartBtn", gamePlay);

   

gamePlay();

}
