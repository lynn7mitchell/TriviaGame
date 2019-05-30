var countDownNum = 30;
var correct = 0;
var incorrect = 0;
var qAndA = {
    zero: {
        question: "Who said he did 3 amputations before his first breakfast",
        answers: ["Bj", "Hawkeye", "Frank", "Colonel Potter"]
    },
    one: {
        question: "Who told Hawkeye that Trapper had left for home",
        answers: ["Radar", "Spearchucker", "Colonel Potter", "Frank"]
    },
    two: {
        question: "How much money did the old korean villager who throws himself in front of vehicles want to be paid by the person who hit him?",
        answers: ["$50", "$25", "$75", "$100"],
    }
};
var remainingQuestions = [];
remainingQuestions.sort(() => Math.random() - 0.5)


// count down
function countDown (){
    console.log(countDownNum)
    $("#timer").html("Time Left: 30")
    counter = setInterval(decrement, 1000);
}
function decrement(){
    // console.log(countDownNum)
    countDownNum--;
    $("#timer").html("Time Left: " + countDownNum)
    if (countDownNum === 0){
        $("#answers").empty()
        $("#answers").append("<p> Time's Up </p>" )
        countDownNum = 30;
        incorrect--;
        counterStop()
    }
}
function counterStop(){
    // clears countDown function
    clearInterval(counter)
}

for (var i in qAndA) {
    remainingQuestions.push(qAndA[i]);
}
$(".game-container").append("<p id='correct'></p>")
$(".game-container").append("<p id='incorrect'></p>")

console.log(remainingQuestions)
$("#start-game").on('click', function () {
    startQuestion();
    $("#start-game").text("Next Question")
})

function startQuestion() {
    var randomQuestion = remainingQuestions[0];
    var currentQuestion = randomQuestion.question;
    remainingQuestions.shift();
    var newDivs = [];
    $("#question").empty();
    $("#answers").empty();
    $("#question").append("<p>" + currentQuestion + "</p>")
    countDown()
    for (var i = 0; i < 4; i++) {
        var newDiv = $("<div>")
        if (i === 0) {
            newDiv.attr("data-correct", "true").html(randomQuestion.answers[i]);
        } else {
            newDiv.attr("data-correct", "false").html(randomQuestion.answers[i]);
        }
        newDivs.push(newDiv);

        // add click events
        newDiv.on('click', function () {
            if ($(this).attr("data-correct") === "true") {                
                correct += 1;
                $("#correct").text('correct: ' +correct)
                $("#incorrect").text('inccorect: '+ incorrect)
                $("#question").empty();
                $("#answers").empty();
                $("#answers").append("<p> You got it right! </p>")
                counterStop()
            } else {
                incorrect += 1;
                $("#correct").text('correct: ' +correct)
                $("#incorrect").text('inccorect: '+ incorrect)
                $("#question").empty();
                $("#answers").empty();
                $("#answers").append("<p> You got it wrong! </p>")
                counterStop()
            }
        })

    }
    // var randomDivs = newDivs[Math.floor(Math.random()*newDivs.length)];
    newDivs.sort(() => Math.random() - 0.5)
    // Above sorts through array by a random number;
    for (var d = 0; d < 4; d++) {

        $("#answers").append(newDivs[d]);

    }

    if(remainingQuestions === 0 && correct > incorrect){
        $("#answers").empty();
        $("#answers").append("<p> You Win!</p>")
    }else if (remainingQuestions === 0 && correct < incorrect){
        $("#answers").empty();
        $("#answers").append("<p> You Lose!</p>")
    }
    //append you got it right as a p instead of a alert
    //next question button needs to clear the game-container
    //add the timer
}