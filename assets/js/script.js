let countryList = {
  Afghanistan : 'Kabul',
  Armenia : 'Yerevan',
  Azerbaijan : 'Baku',
  Bahrain : 'Manama',
  Bangladesh : 'Dhaka',
  Bhutan : 'Thimphu',
  Brunei : 'Bandar Seri Begawan',
  Cambodia : 'Phnom Penh',
  China : 'Beijing',
  Cyprus : 'Nicosia',
  Georgia : 'Tbilisi',
  India : 'New Dehli',
  Indonesia : 'Jakarta',
  Iran : 'Tehran',
  Iraq : 'Baghdad',
  Israel : 'Jerusalem',
  Japan : 'Toyko',
  Jordan : 'Amman',
  Kazakhstan : 'Astana',
  Kuwait : 'Kuwait City',
  Kyrgyzstan : 'Bishkek',
  Laos : 'Vietiane',
  Lebanon : 'Beirut',
  Malaysia : 'Kuala Lumpur',
  Maldives : 'Male',
  Mongolia : 'Ulaanbaatar',
  Myanmar : 'Naypyidaw',
  Nepal : 'Kathmandu',
  'North Korea' : 'Pyongyang',
  Oman : 'Muscat',
  Pakistan : 'Islamabad',
  Palestine : 'Jerusalem',
  Philippines : 'Manila',
  Qatar : 'Doha',
  Russia : 'Moscow',
  'Saudi Arabia' : 'Riyadh',
  Singapore : 'Singapore',
  'South Korea' : 'Seoul',
  'Sri Lanka' : 'Sri Jayawardenepura Kotte',
  Syria : 'Damascus',
  Taiwan : 'Taipei',
  Tajikistan : 'Dushanbe',
  Thailand : 'Bangkok',
  'Timor-Leste' : 'Dili',
  Turkey : 'Ankara',
  Turkmenistan : 'Ashgabat',
  'United Arab Emirates' : 'Abu Dhabi',
  Uzbekistan : 'Tashkent',
  Vietnam : 'Hanoi',
  Yemen : "Sana'a"
};

//create random numbers between 0 and number of country key indexes
let num1 = Math.floor(Math.random() * (Object.keys(countryList).length - 1));


document.addEventListener("DOMContentLoaded", function() {
  //check users answer
  ansSubmit.addEventListener('click', checkAns);
  runGame(num1);
});

// reference
let ansInput = document.getElementById('answer');
let ansSubmit = document.getElementById('submit-button');
let countryQ = document.getElementById('country');




ansInput.addEventListener('keyup', (e) => {
//Initially remove all elements ( so if user erases a letter or adds new letter then clean previous outputs)
removeElements();
//loop through above array
for (let i in countryList) {
  //convert input to lowercase and compare with each string
  if (
    countryList[i].toLowerCase().startsWith(ansInput.value.toLowerCase()) &&
    ansInput.value != ""
  ) {
    //create li element
    let listItem = document.createElement("li");
    //One common class name
    listItem.classList.add("options-list-items");
    listItem.style.cursor = "pointer";
    listItem.setAttribute("onclick", "displayNames('" + countryList[i] + "')");
    //Display matched part in bold
    let word = "<b>" + countryList[i].substr(0, ansInput.value.length) + "</b>";
    word += countryList[i].substr(ansInput.value.length);
    //display the value in array
    listItem.innerHTML = word;
    document.querySelector(".options-list").appendChild(listItem);
  }
}
});

function displayNames(value) {
  ansInput.value = value;
  removeElements();
}
function removeElements() {
  //clear all the item
  let items = document.querySelectorAll(".options-list-items");
  items.forEach((item) => {
  item.remove();
  });
}

//function to run the game
function runGame(number) {
  document.getElementById('answer').focus();
  ansInput.value ='';
  generateCountry (number);
}

//function to check users answers
function checkAns (event) {
  event.preventDefault();
  //only allow real capital cities from the object as options and check if answer correct.
  if (!(Object.values(countryList).includes(ansInput.value))) {
    alert('Sorry, not a valid option. Please section an answer from the dropdown list. Start typing your answer to bring up the dropdown menu.');
    ansInput.value ='';
    document.getElementById('answer').focus();
  } else if (ansInput.value === Object.values(countryList)[num1]) {
    alert('Well done. Correct.')
    num1 = Math.floor(Math.random() * (Object.keys(countryList).length - 1));
    runGame(num1);
  } else if (ansInput.value !== Object.values(countryList)[num1]) {
    alert(`Unlucky. The correct answer was ${Object.values(countryList)[num1]}`)
    num1 = Math.floor(Math.random() * (Object.keys(countryList).length - 1));
    runGame(num1);
  }
};



//function to randomly generate a country
function generateCountry (num) { 
  countryQ.innerHTML= Object.keys(countryList)[num];
};
