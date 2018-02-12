//variables
var questionBank = [{
    "question": "Which lobe of the brain is responsible for visual information?",
    "options": ["frontal", "temporal", "parietal", "occipital"],
    "answer": "occipital"
}, {
    "question": "Which lobe of the brain is repsonsible for making decisions?",
    "options": ["frontal", "temporal", "parietal", "occipital"],
    "answer": "frontal"
}, {
    "question": "At what age is the brain fully developed?",
    "options": ["18", "21", "25", "For men, never."],
    "answer": "25"
}, {
    "question": "Which brain region is repsonsible for spatial memeory?",
    "options": ["amygdala", "pre-frontal cortex", "hippocampus", "locus coeruleus"],
    "answer": "hippocampus"
}, {
    "question": "Loss of cells in this region results in Parkinson's disease.",
    "options": ["hippocampus", "amygdala",  "substantia nigra", "pre-fontal cortex"],
    "answer": "substantia nigra"
}, {
    "question": "Lesions of this area result in Urbach-Wiethe (fearless) disease.",
    "options": ["amygdala", "pre-frontal cortex",  "hippocampus", "ventral tegmental area"],
    "answer": "amygdala"
}, {
    "question": "Which is the last lobe to develop?",
    "options": ["frontal", "temporal", "parietal", "occipital"],
    "answer": "frontal"
}, {
    "question": "This brain region is the major relay station for all sensory except smell.",
    "options": ["hypothalamus", "thalamus", "ventral tegmental area", "orbital frontal cortex"],
    "answer": "thalamus"
}, {
    "question": "If you suffered a concussion and experience disorganized thoughts and problems with vision, which two lobes were impacted during the injury?",
    "options": ["occipital and temporal lobes", "parietal and frontal lobes", "frontal and temporal lobes", "occipital and frontal lobes"],
    "answer": "occipital and frontal lobes"
}, {
    "question": "This brain region is responisble for internal regulation--temperature change, eating, and sleeping.",
    "options": ["hypothalamus", "thalamus", "basolateral amygdala", "septum"],
    "answer": "hypothalamus"
}];

var correctCounter = 0;
var wrongCounter = 0;
var unansweredCounter = 0;
var intervalId;
var userClick;
var time = 20;
var question;
var answerOptions;


// window.onload = function() {
//     $("#start").on("click", timer.start);
// }


//Need to do
    //create for loop to loop through the questions and display corresponding answer choices
    //create buttons for each answer choice
        // $("__________").on("click", function(userClick) {
        //     if(userClick==answer){
        //         //move onto next question, restart timer, add to right results 
        //     }else if(timer == 0){
        //         //move onto next question, restart timer, add to unanswered results 
        //     }else {
        //         //move onto next question, restart timer, add to unanswered results 
        //     }
        // });
    //once all questions have gone through, dispay game stats with a restart button    





function startGame(){

}

function question1 (){
    intervalId = setInterval(timer, 1000);

    var newDiv = $("<div>");
    newDiv.html(questionBank[0].question);

    $("#question").append(newDiv);
}

function answer1 (){
    for (var i = 0; i < questionBank[0].options.length; i++){
    var answerDiv = $("<div>");
    
    answerDiv.html(questionBank[0].options[i]);

    $("#answerChoices").append(answerDiv);
    }
}  
   

function gamePlay(){
    $(".startBtn").on("click", function(){
        $("button").remove(".startBtn");
        question1();
        answer1();
    });
}

gamePlay();

function timer(){
    time --;

    if(time === 0){
        clearInterval(intervalId);
    }
    $("#timeRemaining").html(time + " seconds");
}



// var timer = {

//     time: 20,
  
//     reset: function() {
  
//       timer.time = 20;
     
//     }
// }

function timeConverter(t) {

    var minutes = Math.floor(t / 60);
    var seconds = t - (minutes * 60);

    if (seconds < 10) {
      seconds = "0" + seconds;
    }

    if (minutes === 0) {
      minutes = "00";
    }
    else if (minutes < 10) {
      minutes = "0" + minutes;
    }

    return minutes + ":" + seconds;
  };


//start button to start game

//timer for each question

//grab question with corresponding answer choices

//click answer
    //if user is correct, show picture, add to correct score, go to next question
    //if user is wrong, show picture and correct answer, add to wrong score, go to next question
    //if time runs out, show picture and correct answer, add to unanswered counter, go to next question
    //restart timer


//end of questions, display game data
    //have button to try again and reset the game




// ATTEMPT TO CREATE A FOR LOOP TO RUN THROUGH QUESTIONS
    // function displayQuestion(){
    //     var questionDiv = $("#question");
    
    //     for (var i = 0; i < questionBank.length; i++){
    //         var answerDiv = $("<div>" + questionBank[i] + "</div>");
    //         questionDiv.append(answerDiv);
            
    //     }
    // }



//ALL FOUR ANSWER CHOICES ARE SEPARATED 

    // $("#opt2").on("click", function(userClick) {
    //     if(userClick==answer){
    //         //move onto next question, restart timer, add to right results 
    //     }else if(timer == 0){
    //         //move onto next question, restart timer, add to unanswered results 
    //     }else {
    //         //move onto next question, restart timer, add to unanswered results 
    //     }
    // });

    // $("#opt3").on("click", function(userClick) {
    //     if(userClick==answer){
    //         //move onto next question, restart timer, add to right results 
    //     }else if(timer == 0){
    //         //move onto next question, restart timer, add to unanswered results 
    //     }else {
    //         //move onto next question, restart timer, add to unanswered results 
    //     }
    // });

    // $("#opt4").on("click", function(userClick) {
    //     if(userClick==answer){
    //         //move onto next question, restart timer, add to right results 
    //     }else if(timer == 0){
    //         //move onto next question, restart timer, add to unanswered results 
    //     }else {
    //         //move onto next question, restart timer, add to unanswered results 
    //     }
    // });



