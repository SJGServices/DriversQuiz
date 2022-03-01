const questions = [
    {
        question: "In which of the following places are you NOT allowed to park your vehicle?",
        optionA: "On a sidewalk",
        optionB: "Within 20 feet of a crosswalk",
        optionC: "Within 15 feet of a fire hydrant",
        optionD: "All of the answers are correct",
        correctOption: "optionD"
    },
	{
        question: "Upon approaching an intersection, you see a pedestrian with a white cane crossing the street. You must stop",
        optionA: "10 feet away",
        optionB: "15 feet away",
        optionC: "5 feet away",
        optionD: "2 feet away",
        correctOption: "optionB"
    },
	{
        question: "In heavy rain, your tires can ride on a film of water and lose contact with the road. This hazard is known as",
        optionA: "Hydroplaning",
        optionB: "Rainplaning",
        optionC: "Waterplaning",
        optionD: "None of the answers are correct",
        correctOption: "optionA"
    },
	{
        question: "Don't try to pass another vehicle if you are within _______ of an obstructed view.",
        optionA: "100 feet",
        optionB: "75 feet",
        optionC: "50 feet",
        optionD: "25 feet",
        correctOption: "optionA"
    },
	{
        question: "If an emergency vehicle is approaching you with a siren and flashing lights on, you must",
        optionA: "Stop immediately wherever you are",
        optionB: "Continue at the same speed",
        optionC: "Pull over to the right edge of the road",
        optionD: "Increase your speed and clear the lane",
        correctOption: "optionC"
    },
	{
        question: "When you're driving in fog at night, you should use your",
        optionA: "Interior lights",
        optionB: "Emergency flashers",
        optionC: "High-beam headlights",
        optionD: "Low-beam headlights",
        correctOption: "optionD"
    },
	{
        question: "Under Oklahoma law, which occupants of a vehicle must wear seat belts or suitable child restraints?",
        optionA: "The driver and children under 13 years of age",
        optionB: "The driver and rear-seat passengers",
        optionC: "The driver and all passengers",
        optionD: "The driver, front-seat passengers, and children under 13 years of age",
        correctOption: "optionD"
    },
	{
        question: "At a railroad crossing, you must stop _________ from the nearest rail if a train is approaching.",
        optionA: "Between 10 and 200 feet",
        optionB: "Between 15 and 30 feet",
        optionC: "Between 15 and 50 feet",
        optionD: "Between 5 and 100 feet",
        correctOption: "optionC"
    },
	{
        question: "Under Oklahoma law, the maximum speed limit on four-lane divided highways and two-lane superhighways is _______ unless otherwise posted.",
        optionA: "65 mph",
        optionB: "75 mph",
        optionC: "45 mph",
        optionD: "70 mph",
        correctOption: "optionD"
    },
	{
        question: "Do not use the opposing lane to pass another vehicle unless you have at least _______ of clear roadway ahead of you.",
        optionA: "200 feet",
        optionB: "50 feet",
        optionC: "20 feet",
        optionD: "100 feet",
        correctOption: "optionA"
    },
	{
        question: "When you brake a vehicle without antilock brakes on ice, snow, sleet, gravel, sand, and other loose surfaces, you should tap your brakes slightly at _________ intervals to avoid a skid.",
        optionA: "Three-second",
        optionB: "One-second",
        optionC: "Five-second",
        optionD: "Four-second",
        correctOption: "optionB"
    },
	{
        question: "On a multilane road, if you see _________ next to your lane, you may pass when it is safe to do so.",
        optionA: "A solid yellow line",
        optionB: "A double solid yellow line",
        optionC: "A dashed white line",
        optionD: "A solid white line",
        correctOption: "optionC"
    }

]



let shuffledQuestions = [] //empty array to hold shuffled selected questions

function handleQuestions() { 
    //function to shuffle and push 10 questions to shuffledQuestions array
    while (shuffledQuestions.length <= 9) {
        const random = questions[Math.floor(Math.random() * questions.length)]
        if (!shuffledQuestions.includes(random)) {
            shuffledQuestions.push(random)
        }
    }
}


let questionNumber = 1
let playerScore = 0  
let wrongAttempt = 0 
let indexNumber = 0

let wrongAnswers = [] // empty array that wrong answers will be added to.
let wrongQuestions = [] // empty array that wrong questions will be added to. This is used for display at the end

// function for displaying next question in the array to dom
function NextQuestion(index) {
	document.getElementById("option-one-label").style.display='block';
	document.getElementById("option-two-label").style.display='block';
	document.getElementById("option-three-label").style.display='block';
	document.getElementById("option-four-label").style.display='block';
	
	
	document.getElementById('score-modal').style.display = "none"
	
    handleQuestions()
    const currentQuestion = shuffledQuestions[index]
    document.getElementById("question-number").innerHTML = questionNumber
    document.getElementById("player-score").innerHTML = playerScore
    document.getElementById("display-question").innerHTML = currentQuestion.question;
    document.getElementById("option-one-label").innerHTML = currentQuestion.optionA;
    document.getElementById("option-two-label").innerHTML = currentQuestion.optionB;
    document.getElementById("option-three-label").innerHTML = currentQuestion.optionC;
    document.getElementById("option-four-label").innerHTML = currentQuestion.optionD;


	if (document.getElementById("option-one-label").innerHTML === "zzzzzzzzz")
		document.getElementById("option-one-label").style.display='none';
	if (document.getElementById("option-two-label").innerHTML === "zzzzzzzzz")
		document.getElementById("option-two-label").style.display='none';
	if (document.getElementById("option-three-label").innerHTML === "zzzzzzzzz")
		document.getElementById("option-three-label").style.display='none';
	if (document.getElementById("option-four-label").innerHTML === "zzzzzzzzz")
		document.getElementById("option-four-label").style.display='none';
}


function checkForAnswer() {
    const currentQuestion = shuffledQuestions[indexNumber] //gets current Question 
    const currentQuestionAnswer = currentQuestion.correctOption //gets current Question's answer
    const options = document.getElementsByName("option"); //gets all elements in dom with name of 'option' (in this the radio inputs)
    let correctOption = null

    options.forEach((option) => {
        if (option.value === currentQuestionAnswer) {
            //get's correct's radio input with correct answer
            correctOption = option.labels[0].id
        }
    })
   
    //checking to make sure a radio input has been checked or an option being chosen
    if (options[0].checked === false && options[1].checked === false && options[2].checked === false && options[3].checked == false) {
        document.getElementById('option-modal').style.display = "flex"
    }

    //checking if checked radio button is same as answer
    options.forEach((option) => {

        if (option.checked === true && option.value === currentQuestionAnswer) {
            document.getElementById(correctOption).style.backgroundColor = "rgba(51, 222, 51, 0.5)"
            playerScore++
            indexNumber++
            //set to delay question number till when next question loads
            setTimeout(() => {
                questionNumber++
            }, 1000)
        }

        else if (option.checked && option.value !== currentQuestionAnswer) {
            const wrongLabelId = option.labels[0].id
            document.getElementById(correctOption).style.backgroundColor = "rgba(51, 222, 51, 0.5)"
            wrongAttempt++
            indexNumber++
			

			wrongQuestions.push(currentQuestion.question)
			
			if (currentQuestion.correctOption === "optionA")
				wrongAnswers.push(currentQuestion.optionA)
			else if (currentQuestion.correctOption === "optionB")
				wrongAnswers.push(currentQuestion.optionB)
			else if (currentQuestion.correctOption === "optionC")
				wrongAnswers.push(currentQuestion.optionC)
			else if (currentQuestion.correctOption === "optionD")
				wrongAnswers.push(currentQuestion.optionD)
			
			
            //set to delay question number till when next question loads
            setTimeout(() => {
                questionNumber++
            }, 1000)
        }
    })
}



//called when the next button is called
function handleNextQuestion() {
	
	
	
    checkForAnswer()
    unCheckRadioButtons()
    //delays next question displaying for a second
    setTimeout(() => {
        if (indexNumber <= 9) {
            NextQuestion(indexNumber)
        }
        else {
            handleEndGame()
        }
        resetOptionBackground()
		
    }, 1000);
	
	
}


// This first started out as just a lazy way to change the bg color. But I ran into this problem where 
// when trying to select a button, it wouldn't select while the mouse is moving. that's why I lazy
// added the checked=true to help out with drag clicks.
function changeLabelBG1() {
	document.getElementById("option-one-label").style.backgroundColor='rgba(255, 255, 255, 0.5)';
	document.getElementById("option-two-label").style.backgroundColor='rgba(255, 255, 255, 0.1)';
	document.getElementById("option-three-label").style.backgroundColor='rgba(255, 255, 255, 0.1)';
	document.getElementById("option-four-label").style.backgroundColor='rgba(255, 255, 255, 0.1)';
	document.getElementById("option-one").checked=true;
}
function changeLabelBG2() {
	document.getElementById("option-one-label").style.backgroundColor='rgba(255, 255, 255, 0.1)';
	document.getElementById("option-two-label").style.backgroundColor='rgba(255, 255, 255, 0.5)';
	document.getElementById("option-three-label").style.backgroundColor='rgba(255, 255, 255, 0.1)';
	document.getElementById("option-four-label").style.backgroundColor='rgba(255, 255, 255, 0.1)';
	document.getElementById("option-two").checked=true;
}
function changeLabelBG3() {
	document.getElementById("option-one-label").style.backgroundColor='rgba(255, 255, 255, 0.1)';
	document.getElementById("option-two-label").style.backgroundColor='rgba(255, 255, 255, 0.1)';
	document.getElementById("option-three-label").style.backgroundColor='rgba(255, 255, 255, 0.5)';
	document.getElementById("option-four-label").style.backgroundColor='rgba(255, 255, 255, 0.1)';
	document.getElementById("option-three").checked=true;
}
function changeLabelBG4() {
	document.getElementById("option-one-label").style.backgroundColor='rgba(255, 255, 255, 0.1)';
	document.getElementById("option-two-label").style.backgroundColor='rgba(255, 255, 255, 0.1)';
	document.getElementById("option-three-label").style.backgroundColor='rgba(255, 255, 255, 0.1)';
	document.getElementById("option-four-label").style.backgroundColor='rgba(255, 255, 255, 0.5)';
	document.getElementById("option-four").checked=true;
}

//sets options background back to null after display the right/wrong colors
function resetOptionBackground() {
    const options = document.getElementsByName("option");
    options.forEach((option) => {
        document.getElementById(option.labels[0].id).style.backgroundColor = ""
    })
}

// unchecking all radio buttons for next question(can be done with map or foreach loop also)
function unCheckRadioButtons() {
    const options = document.getElementsByName("option");
    for (let i = 0; i < options.length; i++) {
        options[i].checked = false;
    }
}

// function for when all questions being answered
function handleEndGame() {
    let remark = null
    let remarkColor = null

    // condition check for player remark and remark color
    if (playerScore <= 3) {
        remark = "<B>Bad, Keep Practicing.</B>"
        remarkColor = "#e98080"
    }
    else if (playerScore >= 4 && playerScore < 7) {
        remark = "<B>Average, You can do better.</B>"
        remarkColor = "#f2b681"
    }
    else if (playerScore >= 7) {
        remark = "<B>Excellent work!!</B>"
        remarkColor = "#81f281"
    }
    const playerGrade = (playerScore / 10) * 100

    //data to display to score board
    document.getElementById('remarks').innerHTML = remark
    document.getElementById('remarks').style.color = remarkColor
    document.getElementById('grade-percentage').innerHTML = playerGrade
    document.getElementById('wrong-answers').innerHTML = wrongAttempt
    document.getElementById('right-answers').innerHTML = playerScore
    document.getElementById('score-modal').style.display = "block"
	document.getElementById('mainQuiz').style.display = "none"
	
	document.getElementById('wrongQuestion').innerHTML = ""
	
	for (let i = 0; i < wrongQuestions.length; i++) {
		document.getElementById('wrongQuestion').innerHTML += wrongQuestions[i] + "<br />"
		document.getElementById('wrongQuestion').innerHTML += "<b>" + wrongAnswers[i] + "</b><br /><br />"
	}
	
	
	wrongQuestions[0]

}

//closes score modal and resets game
function closeScoreModal() {
    questionNumber = 1
    playerScore = 0
    wrongAttempt = 0
    indexNumber = 0
    shuffledQuestions = []
    NextQuestion(indexNumber)
    document.getElementById('score-modal').style.display = "none"
	document.getElementById('mainQuiz').style.display = "block"
	wrongQuestions = []
	wrongAnswers = []
	
	console.log(wrongAnswers.length)
}

//function to close warning modal
function closeOptionModal() {
    document.getElementById('option-modal').style.display = "none"
}