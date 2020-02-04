function gameuhh() {
  var pseudo = document.getElementById("pseudo").value;
  if(pseudo.length > 0){
    sessionStorage.setItem("pseudo", pseudo);
    document.location.href = "map.html";
  }
  else{
    alert('Veuillez entrer un pseudonyme !');
  }

}
console.log(sessionStorage.getItem("pseudo"));
// document.getElementById("blockn").append(sessionStorage.getItem("pseudo"));

$('#blockn').append($('<div>', {text: 'Score: ' + localStorage.getItem("score")}));
$('#blockn').append($('<div>', {text: sessionStorage.getItem('pseudo')}));
$('#blockn').append($('<div>', {text: 'Temps restant: '}));
