// navbar

function openNav() {
  document.getElementById("sidebar").style.width = "17em";
  document.body.style.backgroundColor = "#7D7D7D";
}
function closeNav() {
  document.getElementById("sidebar").style.width = "0";
  document.body.style.backgroundColor = "white";
}
$(function() {
  $('[data-toggle="tooltip"]').tooltip();
});