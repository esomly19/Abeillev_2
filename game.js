function gameuhh() {
  var pseudo = document.getElementById("pseudo").value;
  sessionStorage.setItem("pseudo", pseudo);
  document.location.href = "map.html";
}
console.log(sessionStorage.getItem("pseudo"));
// document.getElementById("blockn").append(sessionStorage.getItem("pseudo"));

$('#blockn').append($('<div>', {text: 'Score: ' + localStorage.getItem("score")}));
$('#blockn').append($('<div>', {text: sessionStorage.getItem('pseudo')}));
$('#blockn').append($('<div>', {text: 'Temps restant: '}));
