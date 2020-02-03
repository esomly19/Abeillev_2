function gameuhh() {
  var pseudo = document.getElementById("pseudo").value;
  sessionStorage.setItem("pseudo", pseudo);
  document.location.href = "map.html";
}
console.log(sessionStorage.getItem("pseudo"));
document.getElementById("blockn").append(sessionStorage.getItem("pseudo"));
