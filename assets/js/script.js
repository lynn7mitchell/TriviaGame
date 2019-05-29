var CountDown = 30;
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
        answer: ["$50", "$25", "$75", "$100"],
    }
};
var remainingQuestions = [];

for(var i in qAndA){
    remainingQuestions.push(qAndA[i]);
}

$("#start-game").on('click', function(){
    startQuestion();
})
function startQuestion(){
    var randomQuestion = remainingQuestions[Math.floor(Math.random()*remainingQuestions.length)];
    var currentQuestion = randomQuestion.question;
    // console.log(currentQuestion)
    remainingQuestions.splice(remainingQuestions.indexOf(randomQuestion))
    // console.log(remainingQuestions)
    randomNum = [Math.floor(Math.random() * 4 + 1)]
    for(var i = 0; i <= 4; i++){
        if($("div[attribue = ")
    }

    //get rid of currentQuestion in remainingQuestion
}