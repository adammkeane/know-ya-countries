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
    Myanmar : 'Naypyidaw'
 };





 // reference
 let ansInput = document.getElementById('answer');
 let ansSubmit = document.getElementById('submit-button');



 ansInput.addEventListener('keyup', (e) => {
   //loop through above array
  //Initially remove all elements ( so if user erases a letter or adds new letter then clean previous outputs)
  removeElements();
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

 
 //only allow real capital cities from the object as options
 function checkAns (event) {
   event.preventDefault();
   if (!(Object.values(countryList).includes(ansInput.value))) {
       alert('Not a valid option');
   }
 };

 //check users answer
 ansSubmit.addEventListener('click', checkAns);

 //randomly generate a country
 