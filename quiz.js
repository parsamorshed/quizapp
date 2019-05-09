// Quiz Constructor
function Quiz(questions) {
    this.score = 0;
    this.questions = questions;
    this.questionIndex = 0;
}
// Getting the question Index
Quiz.prototype.getQuestionIndex = function() {
    return this.questions[this.questionIndex];
}
// Increment Scores
Quiz.prototype.guess = function(answer) {
    if(this.getQuestionIndex().isCorrectAnswer(answer)) {
        this.score++;
    }

    this.questionIndex++;
}
// Identifying when quiz has ended
Quiz.prototype.isEnded = function() {
    return this.questionIndex === this.questions.length;
}





