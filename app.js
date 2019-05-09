window.onbeforeunload = function () {
    window.scrollTo(0, 0);
}

//Schroll Isuue
var btn = document.getElementById('btn0').addEventListener('click', () => {window.scrollTo(0, 0);});
var btn = document.getElementById('btn1').addEventListener('click', () => {window.scrollTo(0, 0);});
var btn = document.getElementById('btn2').addEventListener('click', () => {window.scrollTo(0, 0);});
var btn = document.getElementById('btn3').addEventListener('click', () => {window.scrollTo(0, 0);});
// Get Elements
let startBtn = document.getElementById('startBtn');
let display0 = document.getElementById('display0');
let display1 = document.getElementById('display1');
let nav = document.getElementById('newColor');
let musicIcon = document.getElementById('musicIcon');
let footer = document.getElementById('footer');
let container = document.getElementById('quizContainer');
let navP = document.getElementById('navP');

//Functions
startBtn.addEventListener('click', () => {
    display0.style.display = "none";
	display1.style.display = "block";
    nav.style.borderColor = "#461834";
    musicIcon.style.color = "rgb(184, 166, 12)";
    navP.style.color = "rgb(79, 69, 88)"
    footer.style.background = "rgb(184, 166, 12)";
    footer.style.color = "#461834"
    container.style.borderColor ="#461834";
    window.scrollTo(0, 0);
});

// startBtn.addEventListerner('click', () => {

// })

function populate() {
    if(quiz.isEnded()) {
        showScores();
    }
    else {
        // show question
        var element = document.getElementById("question");
        element.innerHTML = quiz.getQuestionIndex().text;

        // show options
        var choices = quiz.getQuestionIndex().choices;
        for(var i = 0; i < choices.length; i++) {
            var element = document.getElementById("choice" + i);
            element.innerHTML = choices[i];
            guess("btn" + i, choices[i]);
        }

        showProgress();
    }
};

function guess(id, guess){
    let button = document.getElementById(id);
    button.onclick = function(){
        quiz.guess(guess);
        populate();
    }
}

function showProgress() {
    var currentQuestionNumber = quiz.questionIndex + 1;
    var element = document.getElementById("progress");
    element.innerHTML = "Question " + currentQuestionNumber + " of " + quiz.questions.length;
};


function showScores() {
    var gameOverHTML = `<div class='result'>
                            <h2 id='score'> Your score: <span> ${quiz.score} </span> </h2>
                            <img src='img/bday.gif' class='gif'/>
                        </div>`                        
    var element = document.getElementById("quizContainer");
    element.innerHTML = gameOverHTML;
};

// Creating questions
let questions = [
    new Question("<img src='img/jigsaw.jpg'/>", ["Lou Reed: Walk on the Wild Side", "Siouxie And The Banshees: Jigsaw Feeling", "John Lennon: Mother", "Bob Dylan: Blowin' In The Wind"], "Siouxie And The Banshees: Jigsaw Feeling"),
    new Question("<img src='img/callme.jpg'/>", ["The Doors: Strange Days", "The Clash: London Calling", "Yoko Ono: Mrs Lennon", "Blondie: Call Me"], "Blondie: Call Me"),
    new Question("<img src='img/mass.jpg'/>", ["Iggy Pop: Mass Production", "The Velvet Underground: Heroin", "Public Image Ltd: Albatross", "Visage: The Damned Don't Cry"], "Iggy Pop: Mass Production"),
    new Question("<img src='img/mirror.jpg'/>", ["New Order - Bizarre Love Triangle", "John Cale: Fear Is A Mans Best Friend", "Velvet Underground: Candy Says", "Kraftwerk: Hall Of Mirrors"], "Kraftwerk: Hall Of Mirrors"),
    new Question("<img src='img/bored.jpg'/>", ["Black Sabbath: Killing Yourself To Live", "The Stooges: No Fun", "Kate Bush: Hounds Of Love", "Echo And The Bunnymen: Angels And Devils"], "The Stooges: No Fun"),
    new Question("<img src='img/water.jpg'/>", ["Blondie: I Didn't Have The Nerve To Say No", "Joy Divison: Disorder", "The Cure: Same Deep Water As You", "The Slits: Improperly Dressed"], "The Cure: Same Deep Water As You"),
    new Question("<img src='img/shadow.jpg'/>", ["Joy Division: Shadowplay", "The Beatles: Free As A Bird", "Velvet David Bowie: Lady Grinning Soul", "Viv Albertine: Confessions Of A Milf"], "Joy Division: Shadowplay"),
    new Question("<img src='img/strange.jpg'/>", ["The Beatles: Day In The Life", "The Doors: People Are Strange", "Siouxie And The Banshees : Night Shift", "Public Image Ltd: Rise"], "The Doors: People Are Strange"),
    new Question("<img src='img/disco2.jpg'/>", ["King Tubby: African Roots", "Bauhaus: In The Flat Field", "Public Image Limited: Death Disco", "Depeche Mode: Condemnation"], "Public Image Limited: Death Disco"),
    new Question("<img src='img/room.jpg'/>", ["Gary Numan: This Wreckage", "Iggy Pop: Dum Dum Boys", "Garbage: Fix Me Now", "Depeche Mode: In Your Room"], "Depeche Mode: In Your Room"),
    new Question("<img src='img/tick.jpg'/>", ["The Doors: You're Lost Little Girl", "David Bowie: Right", "Public Image Ltd: This Is Not A Love Song", "The Velvet Underground: Femme Fatale"], "David Bowie: Right"),
    new Question("<img src='img/invasion1.jpg'/>", ["King Tubby: Invasion", "The Doors: Love Me Two Times", "Bob Dylan: Mr. Tambourine Man", "The Beatles: Eleanor Rigby"], "King Tubby: Invasion"),
    new Question("<img src='img/party.jpg'/>", ["Velvet Underground: All Tomorrows Parties", "Christian Death: The Drowning", "Ninja Sex Party: Danny Don't You Know", "Lou Reed: Perfect Day"], "Velvet Underground: All Tomorrows Parties"),
    new Question("<img src='img/light.jpg'/>", ["John Lennon: Mind Game", "Siouxie And The Banshees: Into The Light", "The Psychedelic Furs: Sister Europe", "Múm - The Ballad of the Broken Birdie Records"], "Siouxie And The Banshees: Into The Light"),
    new Question("<img src='img/eagle2.jpg'/>", ["The Slits: Earthbeat", "Visage - Look What They've Done", "Songs For Drella: Open House", "Viv Albertine: Peace Of Work"], "The Slits: Earthbeat"),
    new Question("<img src='img/period.png'/>", ["The Doors: The End", "Siouxie And The Banshees: Love In A Void", "The Stooges: I Wanna Be Your Dog", "The Slits: Be It"], "The Doors: The End"),
    new Question("<img src='img/cruxify.jpg'/>", ["David Bowie: D.J", "The Beatles: The Ballad Of John and Yoko", "King Tubby: Sensation", "The Cure: Seventeen Seconds"], "The Beatles: The Ballad Of John and Yoko"),
    new Question("<img src='img/firecross.jpg'/>", ["Ulver: Darling didn't we kill you?", "The Sisters Of Mercy: Marian", "Nico: Evening Of Light", "Joy Division: Atmosphere"], "Nico: Evening Of Light"),
    new Question("<img src='img/eyes-closed.jpg'/>", ["Gary Numan: Telekon", "The Glove: Blues In A Drag", "The Beatles: Strawberry Fields Forever", "Sex Pistols: Anarchy In The UK"], "The Beatles: Strawberry Fields Forever"),
    new Question("<img src='img/thunder.jpg'/>", ["Echo and The Bunnymen: Bedbugs and Ballyhoo", "Nico: Facing The Wind", "Bauhaus: The Three Shadows", "John Cale: Barracuda"], "Echo and The Bunnymen: Bedbugs and Ballyhoo"),
 
];

//Sending the Questions
let quiz = new Quiz(questions)

populate();

