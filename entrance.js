class Quiz {
    constructor(questions, reward) {
        this.reward= reward;
        this.score = 0;
        this.questions = questions;
        this.questionIndex = 0;
    }

    getQuestionIndex() {
        return this.questions[this.questionIndex];
    }

    guess(answer) {
        if (this.getQuestionIndex().isCorrectAnswer(answer)) {
            this.score +=this.reward;
        }
        this.questionIndex++;
    }

    isEnded() {
        return this.questionIndex === this.questions.length;
    }
}

class Question {
    constructor(text, choices, answer) {
        this.text = text;
        this.choices = choices;
        this.answer = answer;
    }

    isCorrectAnswer(choice) {
        return this.answer === choice;
    }
}

var totalMarks = 0;
function displayQuestion(count, quizElement, hasNext, next) {
    QuizNumber(count);
    if (quizElement.isEnded()) {
        totalMarks += quizElement.score;
        if(hasNext){
            clearInterval(quizTimer1);
            countDown2(15);
            displayQuestion(2, quiz2, false, null);
        }
        else{
            clearInterval(quizTimer2);
            countDown3(8);
            displayLogoQuestion();
        }
    } else {
        let questionElement = document.getElementById("qn");
        questionElement.innerHTML = quizElement.getQuestionIndex().text;

        let choices = quizElement.getQuestionIndex().choices;
        for (let i = 0; i < choices.length; i++) {
            let choiceElement = document.getElementById("choice" + i);
            choiceElement.innerHTML = choices[i];
            guess("btn" + i, choices[i], count, quizElement, hasNext, next);
        }

        showProgress(quizElement);
    }
};

function displayLogoQuestion(){
    QuizNumber(3);
    if (quiz3.isEnded()) {
        totalMarks += quiz3.score;
        showScores();
    }else{
        let questionElement = document.getElementById("qn");
        questionElement.innerHTML = `<img src='${quiz3.getQuestionIndex().text}' style='width:30%; height:70%; display:flex; margin-left:auto; margin-right:auto'></img>`;

        let choices = quiz3.getQuestionIndex().choices;
        for (let i = 0; i < choices.length; i++) {
            let choiceElement = document.getElementById("choice" + i);
            choiceElement.innerHTML = choices[i];
            guess2("btn" + i, choices[i]);
        }
        showProgress(quiz3);
    }
}

function QuizNumber(Count){
    let quizNumber = document.getElementById("heading");
    quizNumber.innerHTML = `Round ${Count}`;
}

function guess(id, guess, count, quizElement, hasNext, next) {
    let button = document.getElementById(id);
    button.onclick = function() {
        quizElement.guess(guess);
        displayQuestion(count, quizElement, hasNext, next);
    }
};
function guess2(id, guess) {
    let button = document.getElementById(id);
    button.onclick = function() {
        quiz3.guess(guess);
        displayLogoQuestion();
    }
};

function showProgress(quizElement) {
    let currentQuestionNumber = quizElement.questionIndex + 1;
    let ProgressElement = document.getElementById("qnNum");
    ProgressElement.innerHTML =
        `Question ${currentQuestionNumber}`;
};

function showScores() {
    var passed="Your results ",result="";
    totalMarks = totalMarks/6;
    if(totalMarks > 9.5){
        result="Congratulations, You are eligible to get admission in Vellore Campus";
    }else if(totalMarks > 7.5){
        result="Congratulations, You are eligible to get admission in Chennai Campus";
    }else if(totalMarks > 6.5){
        result="Congratulations, You are eligible to get admission in Amravati Campus";
    }
    else{
        passed="Sorry for informing that you have not cleared the test. All the best for your future.";
    }
    let quizEndHTML =
        `
    <h3 class='message'>VIT ENTRANCE EXAM IS COMPLETED</h3>
    <h3 class='score'> ${totalMarks}</h3>
    <h3 class='score'> ${passed}</h3>
    <h3 class='score'> ${result}</h3>
    `;
    let quizElemnt = document.getElementById("quiz");
    quizElemnt.innerHTML = quizEndHTML;

    let quizElemnt2 = document.getElementById("quizHeading");
    quizElemnt2.innerHTML = "<br><br><br><br>";
};

let questions1 = [
    new Question(
        "Which is the longest bone in human body?", ["Sternum", "Coccyx", "Femur", "Patella"], "Femur"
    ),
    new Question(
        "What is the baseline temperature of Outer space as set by the background radiation from the Big Bang?", ["3.1K", "2.7K", "4.2K", "6.9K"], "2.7K"
    ),
    new Question(
        "Choose the number of classifications under kingdom Animalia?", ["3", "4", "5", "6"], "5"
    ),
    new Question(
        "Which is the power house of the cell?", ["Nucleus", "Mitochondria", "Ribosomes", "Vacuoles"], "Mitochondria"
    ),
    new Question(
        "What is the full form of DNA?", ["Deoxyribonucleic acid", "Deonucleic acid", "Dendronucleic acid", "Dedanucleic acid"], "Deoxyribonucleic acid"
    ),
    new Question(
        "Which is the strongest acid in the world?", ["Hydrochloric acid", "Sulphuric acid", "Fluoroantimonic acid", "Phosphorous acid"], "Fluoroantimonic acid"
    ),
    new Question(
        "What is the unit used to measure distance in space?", ["Light year", "Miles", "Astronomical UNit", "Both A and C"], "Both A and C"
    ),
    new Question(
        "Which metal has the highest tensile strength?", ["Chromium", "Tungsten", "Steel", "Carbon"], "Tungsten"
    ),
    new Question(
        "What is the process of converting solid to gas?", ["Condensation", "Sublimation", "Evaporation", "Precipitation"], "Sublimation"
    ),
    new Question(
        "How many groups are present in PLant kingdom?", ["4", "7", "5", "6"], "5"
    )
];

let questions2 = [
    new Question(
      "Which is the highest point in India?", ["Nandi Hills", "Kanchenjunga Peak", "Tiger Hills", "Kailash Parbat"], "Kanchenjunga Peak"  
    ),
    new Question(
      "Who is the current Chief justice of India?", ["Uday Umesh Lalit", "Sonia Gandhi", "Lal Bahadur Sastri", "Amit Shah"], "Uday Umesh Lalit"  
    ),
    new Question(
      "Who is the current Chief of Defense Staff of India?", ["General Bipin Rawat", "Lt. General Anil Chauhan", "Vice Admiral Seth Amoama", "Vallabhbhai Patel"], "Lt. General Anil Chauhan"  
    ),
    new Question(
      "What is the current value of rupee against dollar? 1 Rupee = ", ["0.014 Dollars", "0.012 Dollars", "0.016 Dollars", "0.013 Dollars"], "0.012 Dollars"  
    ),
    new Question(
      "Which is the leading tech company in th world?", ["IBM", "Microsoft", "Apple", "Samsung"], "Apple"  
    )
];

let questions3 = [
    new Question(
        "images/Tesla.jfif", ["Hammer", "Tesla", "Texas", "Pinnacle"], "Tesla"
    ),
    new Question(
        "images/iss.jfif", ["International Space Station", "Indian Security States", "Indian Security Soldiers", "International Space Support"], "International Space Station"
    ),
    new Question(
        "images/redCross.jfif", ["Hospital", "Cross", "Red Cross", "Plus"], "Red Cross"
    ),
    new Question(
        "images/warnerBros.jfif", ["Weeb Brothers", "Warner Bros", "Weeping Bros", "World Bee"], "Warner Bros"
    ),
    new Question(
        "images/jaguar.jfif", ["Puma", "Jaguar", "Tata", "Cheetah"], "Jaguar"
    )
];

let quiz1 = new Quiz(questions1, 2);
let quiz2 = new Quiz(questions2, 2);
let quiz3 = new Quiz(questions3, 4)

displayQuestion(1, quiz1, true, quiz2);

let counting = document.getElementById("timer");

var quizTimer1, quizTimer2, quizTimer3;

function countDown1(time) {
    let quizTimeInMinutes = time * 60 * 60;
    let quizTime = quizTimeInMinutes / 60;
    quizTimer1 = setInterval(function() {
        if (quizTime <= 0) {
            clearInterval(quizTimer1);
            showScores();
        } else {
            quizTime--;
            let sec = Math.floor(quizTime % 60);
            let min = Math.floor(quizTime / 60) % 60;
            counting.innerHTML = `Time left: ${min}:${sec}`;
        }
    }, 1000);
}
function countDown2(time) {
    let quizTimeInMinutes = time * 60 * 60;
    let quizTime = quizTimeInMinutes / 60;
    quizTimer2 = setInterval(function() {
        if (quizTime <= 0) {
            clearInterval(quizTimer2);
            showScores();
        } else {
            quizTime--;
            let sec = Math.floor(quizTime % 60);
            let min = Math.floor(quizTime / 60) % 60;
            counting.innerHTML = `Time left: ${min}:${sec}`;
        }
    }, 1000);
}
function countDown3(time) {
    let quizTimeInMinutes = time * 60 * 60;
    let quizTime = quizTimeInMinutes / 60;
    quizTimer3 = setInterval(function() {
        if (quizTime <= 0) {
            clearInterval(quizTimer3);
            showScores();
        } else {
            quizTime--;
            let sec = Math.floor(quizTime % 60);
            let min = Math.floor(quizTime / 60) % 60;
            counting.innerHTML = `Time left: ${min}:${sec}`;
        }
    }, 1000);
}
countDown1(15);