audioObj1 = new Audio("audio/cyberpunk_darksynth.wav");
audioObj2 = new Audio("audio/cyberpunk_drums.wav");
audioObj3 = new Audio("audio/cyberpunk_melody.wav");
audioObj1.volume = 0.5;
audioObj2.volume = 0.5;
audioObj3.volume = 0.5;
audioObj1.loop = true;
audioObj2.loop = true;
audioObj3.loop = true;
var toggle1 = new Nexus.Toggle('#toggle1',{
    'size': [40,20],
    'state': false
});
var toggle2 = new Nexus.Toggle('#toggle2',{
    'size': [40,20],
    'state': false
});
var toggle3 = new Nexus.Toggle('#toggle3',{
    'size': [40,20],
    'state': false
});
toggle1.on('change',function(v) {
  // v is the value of the button
  console.log(v);
  if (v == true) {
    audioObj1.play();
  } else {
    audioObj1.pause();
  }
});
toggle2.on('change',function(v) {
  // v is the value of the button
  console.log(v);
  if (v == true) {
    audioObj2.play();
  } else {
    audioObj2.pause();
  }
});
toggle3.on('change',function(v) {
  // v is the value of the button
  console.log(v);
  if (v == true) {
    audioObj3.play();
  } else {
    audioObj3.pause();
  }
});
      
var slider1 = new Nexus.Slider('#slider1',{
    'size': [120,20],
    'mode': 'relative',  // 'relative' or 'absolute'
    'min': 0,
    'max': 1,
    'step': 0,
    'value': 0.5
});
var slider2 = new Nexus.Slider('#slider2',{
    'size': [120,20],
    'mode': 'relative',  // 'relative' or 'absolute'
    'min': 0,
    'max': 1,
    'step': 0,
    'value': 0.5
});
var slider3 = new Nexus.Slider('#slider3',{
    'size': [120,20],
    'mode': 'relative',  // 'relative' or 'absolute'
    'min': 0,
    'max': 1,
    'step': 0,
    'value': 0.5
});
slider1.on('change',function(v) {
  console.log(v);
  audioObj1.volume = v;
});
slider2.on('change',function(v) {
  console.log(v);
  audioObj2.volume = v;
});
slider3.on('change',function(v) {
  console.log(v);
  audioObj3.volume = v;
});