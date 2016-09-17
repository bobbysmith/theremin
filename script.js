var container = document.querySelector('.container');
var stop = document.querySelector('.stop');
var start = document.querySelector('.start');
var freq = document.querySelector('.freq');
var vol = document.querySelector('.volume');
var height = container.scrollHeight;
var width = container.scrollWidth;
var volumeStep = height / 100;
var freqStep = width / 2000;
var x, y;

var context = new AudioContext();
// oscillator.start();

container.addEventListener('resize', function() {
  height = container.scrollHeight;
  width = container.scrollWidth;
  volumeStep = height / 100;
  freqStep = width / 4980;
});

container.addEventListener('mousedown', function(e) {
  x = e.clientX;
  y = e.clientY;
  if (x > 0) {
    oscillator.frequency.value = (x / freqStep).toFixed(0);
    freq.innerHTML = (x / freqStep).toFixed(0) + 'Hz';
  }
  gainNode.gain.value = Math.round(y / volumeStep) / 100;
  vol.innerHTML = Math.round(y / volumeStep) + '%';
});

start.addEventListener('click', function() {
  oscillator = context.createOscillator();
  gainNode = context.createGain();
  oscillator.connect(gainNode);
  gainNode.connect(context.destination);
  oscillator.start();
});


stop.addEventListener('click', function() {
  oscillator.stop();
});
