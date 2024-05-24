const statusMessage = document.getElementById("status");
if (statusMessage) {
  statusMessage.innerText =
    "Loaded TensorFlow.js - version: " + tf.version.tfjs;
}

const video = document.getElementById("webcam");
const liveView = document.getElementById("liveView");
const demosSection = document.getElementById("demos");
const enableWebcamButton = document.getElementById("webcamButton");
