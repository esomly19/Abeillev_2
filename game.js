function gameuhh() {
  var pseudo = document.getElementById("pseudo").value;
  if(pseudo.length > 0){
    localStorage.setItem("pseudo", pseudo);
    document.location.href = "index.html";
  }
  else{
    alert('Veuillez entrer un pseudonyme !');
  }

}
console.log(localStorage.getItem("pseudo"));
// document.getElementById("blockn").append(localStorage.getItem("pseudo"));

$('#blockn').append($('<div>', {text: 'Score: ' + localStorage.getItem("score")}));
$('#blockn').append($('<div>', {text: localStorage.getItem('pseudo')}));
$('#blockn').append($('<div>', {text: 'Temps restant: '}));
