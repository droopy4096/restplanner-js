function myMortgageInfo() {
  var x = document.getElementById("mortgage");
  var fieldset = 'fieldset';
  if ((x.style.display === "none") || (x.style.display === "")) {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}