import QrScanner from "./qr-scanner.min.js";
if(localStorage.getItem("score")){
  var score = Number(localStorage.getItem("score"));
}
else {
  var score = 0;
}

QrScanner.WORKER_PATH = "./qr-scanner-worker.min.js";
// Set constraints for the video stream
const constraints = {
  video: {
    width: { max: 800 },
    height: { max: 380 },
    facingMode: "environment"
  },
  audio: false
}; // Define constants
const cameraView = document.querySelector("#camera--view"),
  cameraOutput = document.querySelector("#camera--output"),
  cameraSensor = document.querySelector("#camera--sensor"),
  cameraTrigger = document.querySelector("#camera--trigger"); // Access the device camera and stream to cameraView
function cameraStart() {
  navigator.mediaDevices
    .getUserMedia(constraints)
    .then(function(stream) {
      const track = stream.getTracks()[0];
      cameraView.srcObject = stream;
    })
    .catch(function(error) {
      console.error("Oops. Something is broken.", error);
    });
}
var myVar;

function myFunction() {
  myVar = setTimeout(showPage, 3000);
}

function showPage() {
  window.location.href = "./map.html";
}
window.addEventListener(
  "load",
  () => {
    cameraStart();

    const qrScanner = new QrScanner(
      document.getElementById("camera--view"),
      result => {
        qrScanner.destroy();
        fetch("http://localhost:19080/fleurs/" + result).then(result => {
          result.json().then(result => {
            console.log(result);
            score += result.nectar * result.pollen;
            localStorage.setItem('score', score);
            sessionStorage.setItem("score", score);
            var x = setTimeout(showPage, 5000);
            console.log(score);
          });
        });
      }
    );
    qrScanner.start();
  },
  false
);
