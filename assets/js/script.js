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
  if (Object.keys(countryList).length === 0) {
    ansInput.value ='';
    ansInput.value ='All Done :)';
    countryQ.innerHTML= 'Finished';
    ansInput.setAttribute('disabled', 'true');
    ansSubmit.setAttribute('disabled', 'true');
    nextButton.setAttribute('disabled', 'true');
    ansInput.style.color = '#000000';
    ansInput.style.backgroundColor = '#FF66D9';
    countryQ.style.backgroundColor = '#FF66D9';
    ansFeedback.style.border = '1px solid #000000';
    ansFeedback.innerHTML = 'Finito.<br>Thanks for playing :)';
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
    ansFeedback.style.border = '1px solid #000000';
    ansFeedback.innerHTML = '<p>Sorry, not a valid option.<br>Answer must match an option from the dropdown list.</p><p>Start typing your answer to see the dropdown list options.</p>';
    ansFeedback.style.backgroundColor = '#EADE06';
    ansInput.value ='';
  } else if (ansInput.value === Object.values(countryList)[num1] || (ansInput.value === 'Jersulem' && Object.keys(countryList)[num1] === 'Palestine')) {
    ansFeedback.style.border = '1px solid #000000';
    ansFeedback.innerHTML = 'Nice one. Correct!'
    ansInput.style.backgroundColor = '#44C167';
    ansInput.style.color = '#000000';
    ansSubmit.setAttribute('disabled', 'true');
    ansInput.setAttribute('disabled', 'true');

    score ++;
    scoreCounter.innerHTML = `Score ${score}`
  } else if (ansInput.value !== Object.values(countryList)[num1]) {
    ansFeedback.style.border = '1px solid #000000';
    ansFeedback.innerHTML = `Unlucky. The correct answer was ${Object.values(countryList)[num1]}`;
    ansInput.style.backgroundColor = '#FF7575';
    ansInput.style.color = '#000000';
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
  ansFeedback.style.border = 'none';
  ansFeedback.style.backgroundColor = '';

  if (Object.keys(countryList).length === 1) {
    delete countryList[Object.keys(countryList)[num1]];
    num1 = Math.floor(Math.random() * (Object.keys(countryList).length));
    ansFeedback.innerHTML ='';
    runGame(num1);
  } else {
    delete countryList[Object.keys(countryList)[num1]];
    num1 = Math.floor(Math.random() * (Object.keys(countryList).length));
    questionNumber++;
    questionsLeft.innerHTML = `Question ${questionNumber} / 50`;
    ansInput.style.backgroundColor = '';
    ansSubmit.removeAttribute('disabled');
    ansInput.removeAttribute('disabled');
    runGame(num1);
    ansFeedback.innerHTML ='';
  };;
};

//function to randomly generate a country
function generateCountry (num) { 
    countryQ.innerHTML= Object.keys(countryList)[num];
};



