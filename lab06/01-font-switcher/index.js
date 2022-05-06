const makeBigger = () => {
   let content_font_size = window.getComputedStyle(document.querySelector('.content')).getPropertyValue('font-size');
   let heading_font_size = window.getComputedStyle(document.querySelector('.content')).getPropertyValue('font-size');
   document.querySelector('.content').style.fontSize = parseFloat(content_font_size) + 10 + 'px';
   document.querySelector('h1').style.fontSize = parseFloat(heading_font_size) + 10 + 'px';
};

const makeSmaller = () => {
   let content_font_size = window.getComputedStyle(document.querySelector('.content')).getPropertyValue('font-size');
   let heading_font_size = window.getComputedStyle(document.querySelector('.content')).getPropertyValue('font-size');
   document.querySelector('.content').style.fontSize = parseFloat(content_font_size) - 10 + 'px';
   document.querySelector('h1').style.fontSize = parseFloat(heading_font_size) - 10 + 'px';
};


document.querySelector('#a1').addEventListener('click', makeBigger);
document.querySelector('#a2').addEventListener('click', makeSmaller);

