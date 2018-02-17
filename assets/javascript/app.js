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
    option: [18, 21, 25, "For me, never."],
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
var time = 10;
var currentQuestion = 0;
var answerOptions;
var clockRunning = false;
var picTimer;

function displayQuestion(currentQuestion){

    intervalId = setInterval(timer, 1000);

    console.log(currentQuestion);

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
            console.log("correctCounter" + correctCounter);
            displayCorrectPic();
            // loadQuestion();
        } else{
            wrongCounter++;
            console.log("wrongCounter" + wrongCounter);
            displayWrongPic();
            // loadQuestion();
        }
    });
}

function loadQuestion (){
    time = 10;
    $("#question").empty();
    $(".options").empty();
    $("#timeRemaining").empty();
    clearInterval(intervalId);
    currentQuestion++;
    timer();
    displayQuestion(currentQuestion);
};

function gamePlay(){
    $(".startBtn").on("click", function(){
        $("button").remove(".startBtn");
        displayQuestion(currentQuestion);
        timer();  
    });
}

function displayCorrectPic(){
    $("#question").html("YOU ARE CORRECT!" + "<br>" + '<img src="assets/images/correct.gif">');
    picTimer = setTimeout(loadQuestion, 3000); 
}

function displayWrongPic(){
    $("#question").html("YOU ARE WRONG!" + "<br>" + '<img src="assets/images/wrong.gif">');
    picTimer = setTimeout(loadQuestion, 3000); 
}

function timer(){
    time --;

    if(time === 0){
        clearInterval(intervalId);
        unansweredCounter++;
        loadQuestion();
        console.log("unanswered" + unansweredCounter);
    }
    
    $("#timeRemaining").html(time + " seconds");
}

// function picTimer(){
//     var picTimer = 3;
//     picTimer--;
//     if(picTimer === 0){
//         $("#question").empty();
//         $(".options").empty();
//         $("#timeRemaining").empty();
//         clearInterval(intervalId);
//         currentQuestion++;
//         displayQuestion(currentQuestion);
//     }
// }

gamePlay();

}
