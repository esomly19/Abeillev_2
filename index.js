if(localStorage.getItem("score") != null){
  var score = Number(localStorage.getItem("score"));
}
else {
  var score = 0;
  localStorage.setItem("score", score);
}
