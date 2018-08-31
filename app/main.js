const keys = {};
const audioClips = {
  "65": new Audio("sounds/clap.wav"),
  "83": new Audio("sounds/hihat.wav"),
  "68": new Audio("sounds/kick.wav"),
  "70": new Audio("sounds/openhat.wav"),
  "71": new Audio("sounds/boom.wav"),
  "72": new Audio("sounds/ride.wav"),
  "74": new Audio("sounds/snare.wav"),
  "75": new Audio("sounds/tom.wav"),
  "76": new Audio("sounds/tink.wav")
};

function onKeyDown(event) {
  if (!keys[event.keyCode]) return;

  toggleKeyEffect(event.keyCode.toString());
  playAudio(event.keyCode.toString());
}

function toggleKeyEffect(keyCode) {
  if (keys[keyCode].attributes["data-key"].nodeValue === keyCode) {
    keys[keyCode].classList.add("pressed");
  }
}

function playAudio(keyCode) {
  audioClips[keyCode].currentTime = 0;
  audioClips[keyCode].play();
}

function removeTransitionEffect(event) {
  if (event.propertyName !== 'transform') return;
  this.classList.remove('pressed');
}

document.addEventListener("keydown", onKeyDown);
document.querySelectorAll(".key").forEach(key => {
  key.addEventListener('transitionend', removeTransitionEffect);
  keys[key.attributes['data-key'].nodeValue] = key;
});