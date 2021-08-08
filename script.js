const nextButton = document.getElementById('nextBtn')
const questionContainerElement=document.getElementById('question-container')
const questionElement=document.getElementById('question')
const answerButtonElement=document.getElementById('answer-buttons')

let currentQuestionIndex=0

nextButton.addEventListener('click',()=>{
    currentQuestionIndex++
    setNextQuestion()
})

function startGame() {
    console.log('working')
    nextButton.onclick=function(){
        nextButton.classList.add('hide')
        setNextQuestion()
    }    
}

function setNextQuestion() {
    resetState()
    showQuestion(Questions[currentQuestionIndex])
}

function showQuestion(question) {
    questionElement.innerText = question.question
    question.answers.forEach(answer => {
        const button = document.createElement('button')
        button.innerText=answer.text
        button.classList.add('btn')
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click',chooseAnswer)
        answerButtonElement.appendChild(button)
    });
     //console.log('did')

} 

function resetState(){
    clearStatusClass(document.body)
    nextButton.classList.add('hide')
    while (answerButtonElement.firstChild) {
        answerButtonElement.removeChild(answerButtonElement.firstChild)
    }
}

function chooseAnswer(e) {
    const selectedButton = e.target
    const correct = selectedButton.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(answerButtonElement.children).forEach(button => {
        setStatusClass( button, button.dataset.correct)
    })
    if (Questions.length >= currentQuestionIndex + 1){
        nextButton.classList.remove('hide')
        nextButton.innerText='NEXT'

    }else{
        nextButton.innerText= 'Submit'
    }
}


function setStatusClass(element, correct) {
    clearStatusClass(element)
    if (correct) {
        element.classList.add('correct')
    }else {
        element.classList.add('wrong')
    }
}

function clearStatusClass(element) {
    element.classList.remove('correct')
    element.classList.remove('wrong')

}

const Questions=[
    {
        question: 'How many hours is it okay for us to sit in a day?',
        answers:[
            {text: '3 hours or less', correct:true},
            {text: '3 to 5 hours',correct:false},
            {text: '5 to 7 hours', correct:false},
            {text: 'over 7 hours', correct:false}
        ] 
    },    
    {
        question: 'How many hours is it okay for us to sit in a day?',
        answers:[
            {text: '3 hours or less', correct:true},
            {text: '3 to 5 hours',correct:false},
            {text: '5 to 7 hours', correct:false},
            {text: 'over 7 hours', correct:false}
        ] 
    },

    {
        question: 'On average how many steps should we walk in a day?',
        answers:[
            {text: '500 or less steps', correct:false},
            {text: '500 to 1500 steps',correct:false},
            {text: 'Over 10000', correct:false},
            {text: '5000 to 7500', correct:true}
        ] 
    },

    {
        question: 'How many average number of calories should you burn on an daily basis?',
        answers:[
            {text: '50 or less calories', correct:false},
            {text: '50 to 100 calories',correct:false},
            {text: '100 to 500 calories', correct:true},
            {text: 'Over 500 calories', correct:false}
        ] 
    },


    {
        question: 'Which type of excersise is better for you to keep yourself more healthy(in all aspects)?',
        answers:[
            {text: 'Strength and Conditioning', correct:false},
            {text: 'Cardio',correct:true},
            {text: 'Belly Burn', correct:false},
            {text: 'Casual Stretches', correct:false}
        ] 
    },

    {
        question: "MAKE SURE YOU FOLLOW ALL THESE HEALTHY APPLICATIONS IN YOUR LIFE"
        
    }
]

