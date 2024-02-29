const form = document.querySelector("form");
const btnNext = document.querySelector("#next");
const btnPrev = document.querySelector("#prev");
const resultScreen=document.querySelector(".result");
resultScreen.classList.add("deactive")
let randomQues=[]
let marks = 0;
const quiz = [
    {
        "question": "Which HTML element is used to define an unordered list?",
        "options": {
            "i": "<ul>",
            "ii": "<ol>",
            "iii": "<li>",
            "iv": "<list>"
        },
        "ans": "i"
    },
    {
        "question": "Which CSS property is used to control the spacing between lines of text?",
        "options": {
            "i": "line-height",
            "ii": "text-spacing",
            "iii": "letter-spacing",
            "iv": "word-spacing"
        },
        "ans": "i"
    },
    {
        "question": "What is the correct syntax for commenting in JavaScript?",
        "options": {
            "i": "// This is a comment",
            "ii": "<!-- This is a comment -->",
            "iii": "' This is a comment",
            "iv": "# This is a comment"
        },
        "ans": "i"
    },
    {
        "question": "Which of the following is a correct way to create a function in JavaScript?",
        "options": {
            "i": "function = myFunction() {}",
            "ii": "function myFunction() {}",
            "iii": "def myFunction() {}",
            "iv": "myFunction = function() {}"
        },
        "ans": "ii"
    },
    {
        "question": "Which CSS property is used to make text bold?",
        "options": {
            "i": "font-weight",
            "ii": "text-style",
            "iii": "font-bold",
            "iv": "text-weight"
        },
        "ans": "i"
    },
    {
        "question": "What is the correct way to include an external JavaScript file named 'script.js'?",
        "options": {
            "i": "<script name='script.js'></script>",
            "ii": "<script src='script.js'></script>",
            "iii": "<script href='script.js'></script>",
            "iv": "<script file='script.js'></script>"
        },
        "ans": "ii"
    },
    {
        "question": "What does the '=== operator do in JavaScript?",
        "options": {
            "i": "Compares two variables for equality, testing both the value and the type",
            "ii": "Assigns a value to a variable",
            "iii": "Checks if one variable is greater than or equal to another",
            "iv": "Performs a logical OR operation"
        },
        "ans": "i"
    },
    {
        "question": "Which HTML attribute specifies an alternate text for an image, if the image cannot be displayed?",
        "options": {
            "i": "title",
            "ii": "alt",
            "iii": "src",
            "iv": "href"
        },
        "ans": "ii"
    },
    {
        "question": "In CSS, which property is used to control the size of text?",
        "options": {
            "i": "font-size",
            "ii": "text-size",
            "iii": "size",
            "iv": "text-scale"
        },
        "ans": "i"
    },
    {
        "question": "What is the correct syntax for a for loop in JavaScript?",
        "options": {
            "i": "for (var i = 0; i < 10; i++) {}",
            "ii": "for (i = 0; i < 10; i++) {}",
            "iii": "loop (i = 0; i < 10; i++) {}",
            "iv": "for (i = 0; i <= 10; i++) {}"
        },
        "ans": "i"
    }
];

let QuesNum=0;
let selectedOptions = {}; 

function RandomQues(){
    for(let i=0;i<5;i++){
    let randomNum=Math.floor(0+Math.random()*quiz.length);
    randomQues.push(randomNum)
    for(let j=0;j<i;j++){
        if(randomQues[j] == randomQues[i]){
            randomQues.pop()
            i--;
        }
    }
    }
    renderData(randomQues)
    renderResult(randomQues)
console.log(randomQues)
}

function renderData(randomQues) {

    try {
        if(QuesNum<0 || QuesNum >= randomQues.length){
            throw new Error("NO QUESTION AVAILABLE")
        }
        form.innerHTML =
            `<h3 data-ques></h3>
            <label for="option1">
                <input type="radio" id="option1" name="option" value="i">
                <span data-option1></span>
            </label><br>
            <label for="option2">
                <input type="radio" id="option2" name="option" value="ii">
                <span data-option2></span>
            </label><br>
            <label for="option3">
                <input type="radio" id="option3" name="option" value="iii">
                <span data-option3></span>
            </label><br>
            <label for="option4">
                <input type="radio" id="option4" name="option" value="iv">
                <span data-option4></span>
            </label><br>
            <button type="button" id="prev" onclick="prevQues()">Previous</button>
            <button type="button" id="next" onclick="nextQues()">Next</button>
            
        `;

        // let question = quiz[randomQues[QuesNum]]?.question;
        const ques = document.querySelector("[data-ques]");
        const option1 = document.querySelector("[data-option1]");
        const option2 = document.querySelector("[data-option2]");
        const option3 = document.querySelector("[data-option3]");
        const option4 = document.querySelector("[data-option4]");

        ques.innerText = quiz[randomQues[QuesNum]]?.question;
        option1.innerText = quiz[randomQues[QuesNum]]?.options?.i;
        option2.innerText = quiz[randomQues[QuesNum]]?.options?.ii;
        option3.innerText = quiz[randomQues[QuesNum]]?.options?.iii;
        option4.innerText = quiz[randomQues[QuesNum]]?.options?.iv;

        const selectedOption = selectedOptions[randomQues[QuesNum]]; // Changed to object access
        if (selectedOption) {
            form.querySelector(`input[value="${selectedOption}"]`).checked = true;
        }
        btnPrev.disabled = QuesNum === 0;
        btnNext.disabled = QuesNum === randomQues.length - 1;
    
    } catch (error) {
        console.log(error.message)
    }

}

function nextQues() {
    storeSelectedOption();
    if (QuesNum >= 0 && QuesNum < randomQues.length - 1) {
        QuesNum += 1;
        renderData(randomQues);
    }
    console.log(QuesNum);
}

function prevQues() {
    storeSelectedOption();
    if (QuesNum > 0 && QuesNum < randomQues.length) {
        QuesNum -= 1;
        renderData(randomQues);
    }
    console.log(QuesNum);
}
let totalMarks=()=>{
    for(let i=0; i<quiz.length ; i++){
        let correctAns=quiz?.[i]?.ans;
        let selectedOption=selectedOptions[i]
        console.log(selectedOption)
        if(selectedOption !== undefined && correctAns === selectedOption){
            marks+=1
        }
    }
    console.log("marks",marks)
    let para=document.querySelector(".para")
    para.innerText=`Your have scored ${marks} marks`
    renderResult(randomQues)
}

function storeSelectedOption() {
    const selectedOption = document.querySelector('input[name="option"]:checked');
    console.log(selectedOptions)
    if (selectedOption) {
        selectedOptions[randomQues[QuesNum]] = selectedOption.value; // Store selected option in object
    }
}
let submitQuiz=()=>{
    storeSelectedOption()
    form.classList.add('deactive')
    let submitbtn=document.querySelector("[data-submitbtn]")
    resultScreen.classList.remove('deactive')
    submitbtn.classList.add("deactive")
    totalMarks()
}

function renderResult(randomQues) {
    resultScreen.innerHTML = ""; // Clear previous content

    // Loop through each random question index
    for (let i = 0; i < randomQues.length; i++) {
        // Create elements for question and options
        const resultQues = document.createElement('h3');
        const resultList = document.createElement('ol');

        // Get question and options data from quiz
        const question = quiz[randomQues[i]];
        const options = question.options;

        // Set text content for question
        resultQues.textContent = question.question;

        // Loop through each option
        for (let optionKey in options) {
            const resultOption = document.createElement('li');
            resultOption.textContent = options[optionKey]; // Display option text

            // Check if the option is the correct answer
            if (optionKey === question.ans) {
                resultOption.style.color = 'green'; // Set color to green for correct answer
            }

            // Check if the option matches the selected answer
            const selectedOption = selectedOptions[randomQues[i]];
            if (selectedOption && selectedOption === optionKey) {
                // Highlight selected option
                if(selectedOption !== question.ans){
                    resultOption.style.backgroundColor = 'red'; // Highlight incorrect option
                } else {
                    resultOption.style.backgroundColor = 'lightgreen'; // Highlight correct option
                }
            }
            
            // Append option to the result list
            resultList.appendChild(resultOption);
        }

        // Append question and result list to the result screen
        resultScreen.appendChild(resultQues);
        resultScreen.appendChild(resultList);
    }
}


RandomQues()
// renderData(randomQues);
