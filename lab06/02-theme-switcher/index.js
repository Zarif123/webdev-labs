/*
    Hints: 
    1. Attach click event handlers to all four of the 
       buttons (#default, #ocean, #desert, and #high-contrast).
    2. Modify the className property of the body tag 
       based on the button that was clicked.
*/

const defaultTheme = () => {
   document.querySelector('section').className = "container";
}

const desert = () => {
   document.querySelector('section').className = "desert";
}

const ocean = () => {
   document.querySelector('section').className = "ocean";
}

const highContrast = () => {
   document.querySelector('section').className = "high-contrast";
}

document.querySelector('#default').addEventListener('click', defaultTheme);
document.querySelector('#desert').addEventListener('click', desert);
document.querySelector('#ocean').addEventListener('click', ocean);
document.querySelector('#high-contrast').addEventListener('click', highContrast);