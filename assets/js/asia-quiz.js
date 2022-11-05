let countryList = {
  'Afghanistan' : 'Kabul',
  'Armenia' : 'Yerevan',
  'Azerbaijan' : 'Baku',
  'Bahrain' : 'Manama',
  'Bangladesh' : 'Dhaka',
  'Bhutan' : 'Thimphu',
  'Brunei' : 'Bandar Seri Begawan',
  'Cambodia' : 'Phnom Penh',
  'China' : 'Beijing',
  'Cyprus' : 'Nicosia',
  'Georgia' : 'Tbilisi',
  'India' : 'New Dehli',
  'Indonesia' : 'Jakarta',
  'Iran' : 'Tehran',
  'Iraq' : 'Baghdad',
  'Israel' : 'Jerusalem',
  'Japan' : 'Toyko',
  'Jordan' : 'Amman',
  'Kazakhstan' : 'Astana',
  'Kuwait' : 'Kuwait City',
  'Kyrgyzstan' : 'Bishkek',
  'Laos' : 'Vietiane',
  'Lebanon' : 'Beirut',
  'Malaysia' : 'Kuala Lumpur',
  'Maldives' : 'Male',
  'Mongolia' : 'Ulaanbaatar',
  'Myanmar' : 'Naypyidaw',
  'Nepal' : 'Kathmandu',
  'North Korea' : 'Pyongyang',
  'Oman' : 'Muscat',
  'Pakistan' : 'Islamabad',
  'Palestine' : 'Jerusalem',
  'Philippines' : 'Manila',
  'Qatar' : 'Doha',
  'Russia' : 'Moscow',
  'Saudi Arabia' : 'Riyadh',
  'Singapore' : 'Singapore',
  'South Korea' : 'Seoul',
  'Sri Lanka' : 'Sri Jayawardenepura Kotte',
  'Syria' : 'Damascus',
  'Taiwan' : 'Taipei',
  'Tajikistan' : 'Dushanbe',
  'Thailand' : 'Bangkok',
  'Timor-Leste' : 'Dili',
  'Turkey' : 'Ankara',
  'Turkmenistan' : 'Ashgabat',
  'United Arab Emirates' : 'Abu Dhabi',
  'Uzbekistan' : 'Tashkent',
  'Vietnam' : 'Hanoi',
  'Yemen' : "Sana'a"
};

let capitalArray = [...new Set(Object.values(countryList))];
let questionNumber = 1;
let score = 0;

//create random numbers between 0 and number of country key indexes
let index1 = Math.floor(Math.random() * (Object.keys(countryList).length));

// One page load, runs the game and listens for button clicks
document.addEventListener("DOMContentLoaded", function() {
  //check users answer
  ansSubmit.addEventListener('click', checkAns);
  nextButton.addEventListener('click', next);
  runGame(index1);
});

// reference
const ansInput = document.getElementById('answer');
const ansSubmit = document.getElementById('submit-button');
const countryQ = document.getElementById('country');
const ansFeedback = document.getElementById('ans-feedback');
const nextButton = document.getElementById('next-button');
const scoreCounter = document.getElementById('score');
const questionsLeft = document.getElementById('questions-left');
const allAsiaCaps = document.getElementById('all-asia-caps');

// When focus is put on answer input field, answer feedback is removed and droplist disappears
ansInput.addEventListener('focus', function(){
  ansFeedback.innerHTML ='';
  ansFeedback.style.border = 'none';
  ansFeedback.style.backgroundColor = '';
  allAsiaCaps.innerHTML= '<i class="fa-solid fa-caret-down"></i>';
  removeElements();
});

// Enter key will activate the check answer function
ansInput.addEventListener('keypress', function(e) {
  if (e.key === 'Enter') {
    checkAns(event);
  }
});

// when the dropdown button is clicked, all the potential options appear
allAsiaCaps.addEventListener('click', function(event){
  event.preventDefault();
  ansFeedback.innerHTML ='';
  ansFeedback.style.border = 'none';
  ansFeedback.style.backgroundColor = '';
  ansSubmit.setAttribute('disabled', 'true');
  if ((document.getElementsByClassName('options-list-items').length) > 0 && ansInput.value.length === 0) {
    removeElements();
    allAsiaCaps.innerHTML= '<i class="fa-solid fa-caret-down"></i>';
  } else {
    allAsiaCaps.innerHTML= '<i class="fa-solid fa-caret-up"></i>';
    removeElements();
    ansInput.value ='';
    //loop through above array
    let sortCapsArray = capitalArray.sort();
    for (let i in sortCapsArray) {
        //create li element
        let listItem = document.createElement('li');
        //One common class name
        listItem.classList.add('options-list-items');
        listItem.style.cursor = 'pointer';
        listItem.setAttribute('onclick', 'displayNames("' + sortCapsArray[i] + '"), ansInput.focus()', allAsiaCaps.innerHTML= '<i class="fa-solid fa-caret-up"></i>');
        //Display matched part in bold
        let word =sortCapsArray[i];
        //display the value in array
        listItem.innerHTML = word;
        document.querySelector('.options-list').appendChild(listItem);
      }
  }
});

/** function for generation the autocomplete dropdown options for the guess input field.
 *  From here down to the the removeElements function, the code is taken and modified from the follwowing tutorial: https://codingartistweb.com/2021/12/autocomplete-suggestions-on-input-field-with-javascript/
 *  If the user deletes the values in the guess box, the check answer button will be disabled.
 *  It iterates through all the capital cities and compares them to when the user has typed.
 *  If the user has matched the first letters of any the cities in the array, those cities will be created as list items and appear to the user.
 *  The matching letters will also be mad bold.
 */
function populateList(e) {
    //Initially remove all elements ( so if user erases a letter or adds new letter then clean previous outputs)
  removeElements();
  ansSubmit.removeAttribute('disabled');
  if ((e.key === 'Backspace' || e.key === 'Delete') && ansInput.value.length === 0) {
    ansSubmit.setAttribute('disabled', 'true');
  }

  //loop through above array
  for (let i in capitalArray) {
    //convert input to lowercase and compare with each string
    if (
      capitalArray[i].toLowerCase().startsWith(ansInput.value.toLowerCase()) &&
      ansInput.value !== ''
    ) {
      //create li element
      let listItem = document.createElement('li');
      //One common class name
      listItem.classList.add('options-list-items');
      listItem.style.cursor = 'pointer';
      //when list item selected, it shows up in the What Do You Think box.
      listItem.setAttribute('onclick', 'displayNames("' + capitalArray[i] + '"), ansInput.focus()');
      //Display matched part in bold
      let word = '<b>' + capitalArray[i].substr(0, ansInput.value.length) + '</b>';
      word += capitalArray[i].substr(ansInput.value.length);
      //display the value in array
      listItem.innerHTML = word;
      document.querySelector('.options-list').appendChild(listItem);
    }
  }
}

// When user types into answer input field, populate list function will be called
ansInput.addEventListener('keyup', populateList);

/** Function that will put whatever the value argument is into the answer input field (called in the populate list function)*/
function displayNames(value) {
  ansInput.value = value;
  ansSubmit.removeAttribute('disabled');
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
  if (Object.keys(countryList).length === 0) {
    ansInput.value ='';
    ansInput.value ='All-Donez Ville';
    countryQ.innerHTML= 'Finishedland';
    ansInput.setAttribute('disabled', 'true');
    ansSubmit.setAttribute('disabled', 'true');
    nextButton.setAttribute('disabled', 'true');
    allAsiaCaps.setAttribute('disabled', 'true');
    allAsiaCaps.style.cursor = 'default';
    ansInput.style.color = '#000000';
    ansInput.style.backgroundColor = '#FF85E0';
    countryQ.style.backgroundColor = '#FF85E0';
    ansFeedback.style.border = '1px solid #000000';
    ansFeedback.innerHTML = '<p>Finito.<br>Thanks for playing :)</p>';
    ansFeedback.style.backgroundColor = '#FF85E0';
    // add replay button at end of the quiz
    let replayButton = document.createElement('input');
    replayButton.classList.add('submit-button');
    replayButton.type = 'submit';
    replayButton.id = 'replay-btn';
    replayButton.value = 'Replay';
    document.querySelector('.submit-buttons').appendChild(replayButton);
    document.getElementById('replay-btn').addEventListener('click', function(event) {
      event.preventDefault();
      location.reload();
    });
  } else {
    ansInput.focus();
    ansInput.value ='';
    generateCountry (number);
  }
}

//function to check users answers
function checkAns (event) {
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
    ansInput.value ='';
    ansSubmit.setAttribute('disabled','true');
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
    score ++;
    scoreCounter.innerHTML = `Score ${score}`;
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
  }
}

/**function for next button in the quiz
 * It clears all the content.
 * if we get to the last question, it will delete the last index and run them game function.
 * Otherwise, it will also add to the question numbers and undisable all the buttons/fields.
 */
function next (event) {
  //remove default submit button functionality
  event.preventDefault();
  removeElements();
  ansFeedback.style.border = 'none';
  ansFeedback.style.backgroundColor = '';
  ansFeedback.innerHTML ='';
  allAsiaCaps.innerHTML= '<i class="fa-solid fa-caret-down"></i>';
  if (Object.keys(countryList).length === 1) {
    delete countryList[Object.keys(countryList)[index1]];
    index1 = Math.floor(Math.random() * (Object.keys(countryList).length));
    runGame(index1);
  } else {
    delete countryList[Object.keys(countryList)[index1]];
    index1 = Math.floor(Math.random() * (Object.keys(countryList).length));
    questionNumber++;
    questionsLeft.innerHTML = `Question ${questionNumber} / 50`;
    ansInput.style.backgroundColor = '';
    ansSubmit.removeAttribute('disabled');
    ansInput.removeAttribute('disabled');
    allAsiaCaps.removeAttribute('disabled');
    allAsiaCaps.style.cursor = 'pointer';
    runGame(index1);
  }
}

//function to randomly generate a country
function generateCountry (num) { 
    countryQ.innerHTML= Object.keys(countryList)[num];
}

// Modal logic. Used code from https://www.w3schools.com/howto/howto_css_modals.asp
// Get the modal
let modal = document.getElementById("how-to-modal");

// Get the button that opens the modal
let btnNav = document.getElementById("modal-btn-nav");

// Get the <span> element that closes the modal
let span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btnNav.onclick = function() {
  modal.style.display = "flex";
};

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};