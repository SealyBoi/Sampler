let sounds = new Tone.Players({
  "ow": "sounds/ow.mp3",
  "creeper": "sounds/creeper.mp3",
  "oof": "sounds/oof.mp3",
  "osrs": "sounds/osrs.mp3",
})

const delay = new Tone.FeedbackDelay("8n", 0.5);

let soundNames = ["ow", "creeper", "oof", "osrs"];
let buttons = [];

let dSlider;
let fSlider;

function setup() {
  createCanvas(600, 600);
  sounds.connect(delay);
  delay.toDestination();

  soundNames.forEach((word, index) => {
    buttons[index] = createButton(word);
    buttons[index].position(index, index*50);
    buttons[index].mousePressed( () => buttonSound(word))
  })

  dSlider = createSlider(0.0, 1.0, 0.5, 0.05);
  dSlider.mouseReleased( () => {
    delay.delayTime.value = dSlider.value();
  })

  fSlider = createSlider(0.0, 1.0, 0.5, 0.05);
  fSlider.mouseReleased( () => {
    delay.feedback.value = fSlider.value();
  })
}

function draw() {
  background(220);
  text("Press a button to play a sound", 0, 150);
}

function buttonSound(whichSound) {
  sounds.player(whichSound).start();
}