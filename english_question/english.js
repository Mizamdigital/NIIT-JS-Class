const english = [
    ["(1) Which of the following is a masculine noun?",
        "(A) Woman",
        "(B) Lioness",
        "(C) King",
        "(D) Actress",
         2
    ],

    ["(2) What type of noun is \"princess\"?",
      "(A) Masculine noun",
      "(B) Feminine noun",
      "(C) Common noun",
      "(D) Abstract noun",
        1
    ],
    
    ["(3) Identify the gender of noun \"nurse\".",
      "(A) Masculine",
      "(B) Feminine",
      "(C) Common",
      "(D) Neuter",
        1
    ],
    
    ["(4) Which of the following is a neuter noun?",
      "(A) Boy",
      "(B) Girl",
      "(C) Book",
      "(D) Car",
        2
    ],
    
    ["(5) What type of noun is \"empress\"?",
      "(A) Masculine noun",
      "(B) Feminine noun",
      "(C) Common noun",
      "(D) Collective noun",
        1
    ],
    
    ["(6) What is the plural form of the noun \"tooth\"?",
      "(A) Tooth",
      "(B) Teeths",
      "(C) Teeth",
      "(D) Tooths",
        2
    ], 

    ["(7) Which of the following nouns remains the same in both singular and plural forms?",
      "(A) Deer",
      "(B) Cat",
      "(C) Dog",
      "(D) Elephant",
        0
    ],
    
    ["(8) What is the plural form of the noun \"child\"?",
      "(A) Childrens",
      "(B) Childs",
      "(C) Children",
      "(D) Child",
        2
    ], 

    ["(9) The following are types of noun except",
      "(A) Possessive noun",
      "(B) Countable noun",
      "(C) Proper noun",
      "(D) Gross noun",
        3
    ],
    
    ["(10) _____ is the male sex of humans or animals.",
      "(A) Masculine gender",
      "(B) Male gender",
      "(C) Boy gender",
      "(D) Baby gender",
        0
    ] 
];

let current = 0;
let score = 0;

function loadQuestion(){
    document.getElementById("questionText").innerText = english[current][0];

    optionHtml = "";

    for(let i = 1; i <= 4; i++){
        optionHtml += `<button class="optionJs" onClick = "checkAnswer(${i-1})">${english[current][i]}`;
    }
    document.getElementById("bestOptions").innerHTML = optionHtml;
}

function checkAnswer(choice){
    if(choice === english[current][5]){
       score++;
       document.getElementById("score").innerText = `Correct Answer is: ${score}`;
        document.getElementById("score").style.color = "green";
    }
    else{
        document.getElementById("score").innerText = `Wrong Answer: ${score}`;
         document.getElementById("score").style.color = "red";
    }
       
}

function nextQuestion(){
    current++;
    if(current < english.length){
        loadQuestion();
    }

    else{
        document.getElementById("questionText").innerText = "No more Question.";
        document.getElementById("bestQuestion").innerHTML = "";
        document.getElementById("score").innerText = `Your final score is: ${score} / ${english.length}`;
    }
}
  loadQuestion();