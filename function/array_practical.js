const quiz = [
    //[Question → index 0 | Option 1 → index 1 | Option 2 → index 2 | Option 3 → index 3 | Correct answer is index 2 (Tim Berners Lee) - index 4 ]
    ["Who Invented HTML?", "Bredan Eich", "Elon Musk", "Tim Berner-lee", 2],
    ["Select A procedural language in the list", "Objective C", "LUA", "Smalltalk", 1],
    ["Which language is closest to assembly language", "JAVA","C", "C++",1],
    ["Select a non framework in the list", "Ruby on Rails", "Go", "Symfony", 1]  //This is a 2D array.Each inner array is ONE question.
];

let current = 0;  //which question number you're on
let score = 0;    //number of correct answers the user has selected

function loadQuestion() {
    document.getElementById("questionText").innerText = quiz[current][0];

    let optionsHtml = ""; //Empty string where the option buttons will be stored.

    for(var i = 1; i <= 3; i++){  // i stands for options and options start form  1 and ends at 3.Why? Because options start at index 1 in each question array.
        optionsHtml += `<button onclick = "checkAnswer(${i-1})">${quiz[current][i]}</button>`; //this works for the options and Builds one button per option,These buttons are created for the answer options of the current question.
    }

    document.getElementById("optionsContainer").innerHTML = optionsHtml;
}

function checkAnswer(choice){
    //correct answer is stored at index no 4
    if(choice ===  quiz[current][4]){
        score++;
        document.getElementById("score").innerText = `Correct Answer:${score}`;
    }
    else{
        document.getElementById("score").innerText = `Wrong Answer: ${score}`;
    }
}

function nextQuestion(){
    current++;  //→ move to next question
    if(current < quiz.length){
        loadQuestion();
    }
    else{
        document.getElementById("questionText").innerText = "Question Finished";
        document.getElementById("optionsContainer").innerHTML = " ";
        document.getElementById("score").innerText = `Final score: ${score}/${quiz.length}`;
    }
}
loadQuestion();