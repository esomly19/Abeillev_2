import QrScanner from "./qr-scanner.min.js";

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

function showPage() {
  window.location.href = "./index.html";
}

window.addEventListener(
  "load",
  () => {
    cameraStart();

    const qrScanner = new QrScanner(
      document.getElementById("camera--view"),
      result => {
        qrScanner.destroy();
        fetch("http://51.158.67.211:19080/fleurs/" + result).then(result => {
          result.json().then(result => {
            console.log(result);
            score += result.nectar * result.pollen;
            localStorage.setItem('score', score);
            // var x = setTimeout(showPage, 5000);
            $('body').append($('<div>', {class: 'flower'})
            .append($('<img>', {src: 'http://51.158.67.211:19080/fleurs/' + result.id + '/img'}))
            .append($('<h2>', {text: result.n_fr})))
            console.log(score);
          });
        });
      }
    );
    qrScanner.start();
  },
  false
);
