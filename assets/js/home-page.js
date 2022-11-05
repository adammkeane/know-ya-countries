// Modal logic. Used code from https://www.w3schools.com/howto/howto_css_modals.asp
// Get the modal
let modal = document.getElementById("how-to-modal");

// Get the button that opens the modal
let btn = document.getElementById("modal-btn");
let btnNav = document.getElementById("modal-btn-nav");

// Get the <span> element that closes the modal
let span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "flex";
};

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

