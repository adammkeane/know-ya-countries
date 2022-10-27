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
let num1 = Math.floor(Math.random() * (Object.keys(countryList).length));

document.addEventListener("DOMContentLoaded", function() {
  //check users answer
  ansSubmit.addEventListener('click', checkAns);
  nextButton.addEventListener('click', next);
  runGame(num1);
});

// reference
const ansInput = document.getElementById('answer');
const ansSubmit = document.getElementById('submit-button');
const countryQ = document.getElementById('country');
const ansFeedback = document.getElementById('ans-feedback');
const nextButton = document.getElementById('next-button');
const scoreCounter = document.getElementById('score');
const questionsLeft = document.getElementById('questions-left');

ansInput.addEventListener('keyup', (e) => {
//Initially remove all elements ( so if user erases a letter or adds new letter then clean previous outputs)
removeElements();
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
    listItem.setAttribute('onclick', 'displayNames("' + capitalArray[i] + '"), ansInput.focus()');
    //Display matched part in bold
    let word = '<b>' + capitalArray[i].substr(0, ansInput.value.length) + '</b>';
    word += capitalArray[i].substr(ansInput.value.length);
    //display the value in array
    listItem.innerHTML = word;
    document.querySelector('.options-list').appendChild(listItem);
  }
}
});

function displayNames(value) {
  ansInput.value = value;
  removeElements();
}
function removeElements() {
  //clear all the item
  let items = document.querySelectorAll('.options-list-items');
  items.forEach((item) => {
  item.remove();
  });
}

//function to run the game
function runGame(number) {
  ansInput.focus();
  ansInput.value ='';
  generateCountry (number);
}

//function to check users answers
function checkAns (event) {
  //remove default submit button functionality
  event.preventDefault();
  //only allow real capital cities from the object as options and check if answer correct.
  if (!(Object.values(capitalArray).includes(ansInput.value))) {
    ansFeedback.innerHTML = 'Sorry, not a valid option. Please section an answer from the dropdown list. Start typing your answer to bring up the dropdown menu.';
    ansInput.value ='';
    document.getElementById('answer').focus();
  } else if (ansInput.value === Object.values(countryList)[num1] || (ansInput.value === 'Jersulem' && Object.keys(countryList)[num1] === 'Palestine')) {
    ansFeedback.innerHTML = 'Well done. Correct.'
    ansInput.style.backgroundColor = 'rgba(46,204,113,0.5)';
    ansSubmit.setAttribute('disabled', 'true');
    ansInput.setAttribute('disabled', 'true');

    score ++;
    scoreCounter.innerHTML = `Score: ${score}`
  } else if (ansInput.value !== Object.values(countryList)[num1]) {
    ansFeedback.innerHTML = `Unlucky. The correct answer was ${Object.values(countryList)[num1]}`;
    ansInput.style.backgroundColor = 'rgba(242,38,19,0.5)';
    nextButton.focus();

    ansSubmit.setAttribute('disabled', 'true');
    ansInput.setAttribute('disabled', 'true');
  }
};

//function for next button
function next (event) {
  //remove default submit button functionality
  event.preventDefault();
  removeElements();
  ansSubmit.removeAttribute('disabled');
  ansInput.removeAttribute('disabled');
  ansInput.style.backgroundColor = '';

  if (Object.keys(countryList).length === 0) {
    ansFeedback.innerHTML = 'All done. No more countries';
  } else if (Object.keys(countryList).length === 1) {
    delete countryList[Object.keys(countryList)[num1]];
    num1 = Math.floor(Math.random() * (Object.keys(countryList).length));
    runGame(num1);
    ansFeedback.innerHTML ='';
  } else {
    delete countryList[Object.keys(countryList)[num1]];
    num1 = Math.floor(Math.random() * (Object.keys(countryList).length));
    questionNumber++;
    questionsLeft.innerHTML = `Question ${questionNumber} / 50`;
    runGame(num1);
    ansFeedback.innerHTML ='';
  };;
};

//function to randomly generate a country
function generateCountry (num) { 
  if (Object.keys(countryList).length === 0) {
    countryQ.innerHTML= 'Finished';
    ansSubmit.setAttribute('disabled', 'true');
    ansInput.setAttribute('disabled', 'true');
    nextButton.setAttribute('disabled', 'true');
    ansInput.setAttribute('placeholder', 'All done:)')
  } else {
    countryQ.innerHTML= Object.keys(countryList)[num];
  }  
};



