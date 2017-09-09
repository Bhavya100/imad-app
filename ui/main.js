console.log('Loaded!');

//Change the text of the main-text div
var element= document.getElementById('main-text');

element.innerHtml = 'New value';

// Move the image
var img = document.getElementById('img');
img.onclick = function () {
  img.style.marginleft = '100px';  
};