console.log('Loaded!');

//Change the text of the main-text div
var element= document.getElementById('main-text');

element.innerHTML = 'New value';

// Move the image
var img = document.getElementById('madi');
var marginLeft = 0;
function moveRight() {
  marginLeft = Marginleft + 10;
  img.style.marginleft = marginLeft + 'px';
}
img.onClick = function () {
    var interval = setInterval(moveRight, 100);
};