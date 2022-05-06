/* 
  See Smashing Magazine Tutorial:
  https://www.smashingmagazine.com/2021/11/dyslexia-friendly-mode-website/
*/

const dyslexiaMode = () => {
  if (document.querySelector('.container') !== null) {
    document.querySelector('.container').className = "dyslexia-mode";
  }
  else if (document.querySelector('.dyslexia-mode') !== null) {
    document.querySelector('.dyslexia-mode').className = "container";
  }
}

document.querySelector('#dyslexia-toggle').addEventListener('click', dyslexiaMode);
