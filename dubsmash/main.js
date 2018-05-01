const ia = document.querySelector('#audio');
const iv = document.querySelector('#video');
const pv = document.querySelector('video');
const player = document.querySelector('audio');
const reproduzir = document.querySelector('#reproduzir');
const pause = document.querySelector('#pause');
const body = document.querySelector('body');
const DCC = 255;
const vinte = 20;
let red = DCC;
let blue = DCC;
let green = DCC;
ia.addEventListener('change', function() {
    const reader = new FileReader();
    reader.addEventListener('load', function(e) {
        player.src = reader.result;
    });
    reader.readAsDataURL(ia.files[0]);
});
iv.addEventListener('change', function() {
    const reader = new FileReader();
    reader.addEventListener('load', function(e) {
        pv.src = reader.result;
        pv.hidden = false;
    });
    reader.readAsDataURL(iv.files[0]);
});
reproduzir.addEventListener('click', function() {
    pv.play();
    player.play();
});
pause.addEventListener('click', function() {
    pv.pause();
    player.pause();
});
pv.addEventListener('ended', function() {
    player.pause();
    player.currentTime = 0;
    pv.currentTime = 0;
});
pv.addEventListener('timeupdate', function() {
    body.style.backgroundColor = `rgb(${red},${green},${blue})`;
    console.log(red);
    if (red > 0) {
        red--;
    } else if (green > 0) {
        green--;
    } else {
        blue--;
    }
    if (red === vinte && green === vinte && blue === vinte) {
        red = DCC;
        green = DCC;
        blue = DCC;
    }
});
