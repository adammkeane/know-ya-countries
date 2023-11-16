let capitalArray = [...new Set(Object.values(countryList))];
let questionNumber = 1;
let score = 0;

//create random numbers between 0 and number of country key indexes
let index1 = Math.floor(Math.random() * (Object.keys(countryList).length));

function randomIndex() {
    return Math.floor(Math.random() * (Object.keys(countryList).length));
}

// One page load, runs the game and listens for button clicks
document.addEventListener("DOMContentLoaded", function () {
    //check users answer
    ansSubmit.addEventListener('click', checkAns);
    nextButton.addEventListener('click', next);
    runGame(index1);
});

// reference
const ansInput = document.querySelector('#answer');
const ansSubmit = document.querySelector('#submit-button');
const countryQ = document.querySelector('#country');
const ansFeedback = document.querySelector('#ans-feedback');
const nextButton = document.querySelector('#next-button');
const scoreCounter = document.querySelector('#score');
const questionsLeft = document.querySelector('#questions-left');
const allAsiaCaps = document.querySelector('#all-asia-caps');
const counters = document.querySelector('#counters');

// function for opening dropdown list
function dropdownList(e) {
    e.preventDefault();
    ansFeedback.innerHTML = '';
    ansFeedback.style.border = 'none';
    ansFeedback.style.backgroundColor = '';
    ansSubmit.setAttribute('disabled', 'true');
    if ((document.querySelectorAll('.options-list-items').length) > 0 && ansInput.value.length === 0) {
        removeElements();
        allAsiaCaps.innerHTML = '<i class="fa-solid fa-caret-down"></i>';
    } else {
        allAsiaCaps.innerHTML = '<i class="fa-solid fa-caret-up"></i>';
        removeElements();
        ansInput.value = '';
        //loop through above array
        let sortCapsArray = capitalArray.sort();
        for (let i in sortCapsArray) {
            //create li element
            let listItem = document.createElement('li');
            //One common class name
            listItem.classList.add('options-list-items');
            listItem.style.cursor = 'pointer';
            listItem.setAttribute('onclick', 'displayNames("' + sortCapsArray[i] + '"), ansSubmit.focus()', allAsiaCaps.innerHTML = '<i class="fa-solid fa-caret-up"></i>');
            //Display matched part in bold
            let word = sortCapsArray[i];
            //display the value in array
            listItem.innerHTML = word;
            document.querySelector('.options-list').append(listItem);
        }
    }
}

// make ansInput untypable. when clicked, it just brings up the options list
ansInput.addEventListener('click', dropdownList);
// when the dropdown button is clicked, all the potential options appear
allAsiaCaps.addEventListener('click', dropdownList);

// Enter key will activate the check answer function
ansInput.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        checkAns();
    }
});

/** Function that puts option selected from dropdown list into the answer field*/
function displayNames(value) {
    allAsiaCaps.innerHTML = '<i class="fa-solid fa-caret-down"></i>';
    ansInput.value = value;
    ansSubmit.removeAttribute('disabled');
    nextButton.setAttribute('disabled', 'true');
    removeElements();
}

/** Function to remove the dropdown list from screen */
function removeElements() {
    //clear all the item
    let items = document.querySelectorAll('.options-list-items');
    items.forEach((item) => {
        item.remove();
    });
}

/** Function that calls the generate country function and sets out when should happen at the end of the quiz */
function runGame(number) {
    ansSubmit.setAttribute('disabled', 'true');
    if (capitalArray.includes("Jerusalem")) {
        questionsLeft.innerHTML = `Question ${questionNumber} / ${capitalArray.length + 1}`;
    } else {
        questionsLeft.innerHTML = `Question ${questionNumber} / ${capitalArray.length}`;
    }
    if (Object.keys(countryList).length === 0) {
        ansInput.value = '';
        if (capital == true) {
            ansInput.value = 'All-Donez Ville';
            countryQ.innerHTML = 'Finishedland';
        } else {
            ansInput.value = end1;
            countryQ.innerHTML = end2;
        }
        ansInput.setAttribute('disabled', 'true');
        ansSubmit.style.display = 'none';
        nextButton.style.display = 'none';
        counters.style.display = 'none';
        allAsiaCaps.setAttribute('disabled', 'true');
        allAsiaCaps.style.cursor = 'default';
        ansInput.style.color = '#000000';
        ansInput.style.backgroundColor = '#FF85E0';
        countryQ.style.backgroundColor = '#FF85E0';
        ansFeedback.style.border = '1px solid #000000';
        ansFeedback.innerHTML = `<p>Score: <b>${score}/${capitalArray.length}</b>
                                    </p><p>Thanks for playing :)</p>`;
        ansFeedback.style.backgroundColor = '#FF85E0';
        // add replay button at end of the quiz
        let replayButton = document.createElement('input');
        replayButton.classList.add('btn');
        replayButton.classList.add('btn-outline-dark');
        replayButton.classList.add('mx-2');
        replayButton.classList.add('mb-4');
        replayButton.classList.add('p-3');
        replayButton.type = 'submit';
        replayButton.id = 'replay-btn';
        replayButton.value = 'Replay';
        document.querySelector('.end-quiz-btns').append(replayButton);
        document.querySelector('#replay-btn').addEventListener('click', function (event) {
            event.preventDefault();
            location.reload();
        });
    } else {
        allAsiaCaps.focus();
        ansInput.value = '';
        generateCountry(number);
    }
}

//function to check users answers
function checkAns(event) {
    //remove default submit button functionality
    event.preventDefault();
    ansFeedback.style.backgroundColor = '';
    //only allow real capital cities from the object as options and check if answer correct.
    if (!(Object.values(capitalArray).includes(ansInput.value))) {
        removeElements();
        ansFeedback.style.border = '1px solid #000000';
        ansFeedback.innerHTML = `
    <p>Sorry, not a valid guess.</p>
    <p>Guess must match an option from the dropdown list.</p>
    <p>If you type the first letter of your guess, the dropdown list will automatically show all the options that start with that letter.</p>
    <p>Alternatively, if you want to see all options (every capital city in the region of the quiz), click the dropdown arrow to the right of the <b>What Do You Think</b> box.</p>
    `;
        ansFeedback.style.backgroundColor = '#EADE06';
        ansInput.value = '';
        ansSubmit.setAttribute('disabled', 'true');
        nextButton.removeAttribute('disabled');
    } else if (ansInput.value === Object.values(countryList)[index1] || (ansInput.value === 'Jersulem' && Object.keys(countryList)[index1] === 'Palestine')) {
        ansFeedback.style.border = '1px solid #000000';
        ansFeedback.innerHTML = '<p>Nice one. Correct!</p>';
        ansInput.style.backgroundColor = '#44C167';
        ansFeedback.style.backgroundColor = '#44C167';
        ansInput.style.color = '#000000';
        ansSubmit.setAttribute('disabled', 'true');
        ansInput.setAttribute('disabled', 'true');
        allAsiaCaps.setAttribute('disabled', 'true');
        allAsiaCaps.style.cursor = 'default';
        score++;
        scoreCounter.innerHTML = `Score ${score}`;
        nextButton.removeAttribute('disabled');
        nextButton.focus();
    } else if (ansInput.value !== Object.values(countryList)[index1]) {
        ansFeedback.style.border = '1px solid #000000';
        ansFeedback.innerHTML = `<p>Unlucky.</p><p>The correct answer was:<br><b>${Object.values(countryList)[index1]}</b></p>`;
        ansInput.style.backgroundColor = '#FF7575';
        ansFeedback.style.backgroundColor = '#FF7575';
        ansInput.style.color = '#000000';
        nextButton.focus();
        ansSubmit.setAttribute('disabled', 'true');
        ansInput.setAttribute('disabled', 'true');
        allAsiaCaps.setAttribute('disabled', 'true');
        allAsiaCaps.style.cursor = 'default';
        nextButton.removeAttribute('disabled');
        nextButton.focus();
    }
}

/**function for next button in the quiz
 * It clears all the content.
 * if we get to the last question, it will delete the last index and run them game function.
 * Otherwise, it will also add to the question numbers and undisable all the buttons/fields.
 */
function next(event) {
    //remove default submit button functionality
    event.preventDefault();
    removeElements();
    ansFeedback.style.border = 'none';
    ansFeedback.style.backgroundColor = '';
    ansFeedback.innerHTML = '';
    allAsiaCaps.innerHTML = '<i class="fa-solid fa-caret-down"></i>';
    if (Object.keys(countryList).length === 1) {
        delete countryList[Object.keys(countryList)[index1]];
        index1 = Math.floor(Math.random() * (Object.keys(countryList).length));
        runGame(index1);
    } else {
        delete countryList[Object.keys(countryList)[index1]];
        index1 = Math.floor(Math.random() * (Object.keys(countryList).length));
        questionNumber++;
        questionsLeft.innerHTML = `Question ${questionNumber} / ${capitalArray.length}`;
        ansInput.style.backgroundColor = '';
        ansSubmit.removeAttribute('disabled');
        ansInput.removeAttribute('disabled');
        allAsiaCaps.removeAttribute('disabled');
        allAsiaCaps.style.cursor = 'pointer';
        runGame(index1);
    }
}

//function to randomly generate a country
function generateCountry(num) {
    countryQ.innerHTML = Object.keys(countryList)[num];
}